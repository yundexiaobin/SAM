import { message } from "@/utils/message";
import {reactive, ref, onMounted, h, computed} from "vue";
import { http } from "@/utils/http";
import { PaginationProps } from "@pureadmin/table";
import { addDialog } from "@/components/ReDialog/index";
import editForm from "../form.vue";
import { cloneDeep } from "@pureadmin/utils";

const dataList = ref([]);
const loading = ref(true);
const pagination = reactive<PaginationProps>({
  total: 0,
  pageSize: 10,
  currentPage: 1,
  background: true
});

export function useHook() {
  const searchConfigs = ref<any[]>([]);
  const formRef = ref();

  function initSearchConfig() {
    setTimeout(async () => {
      const response = await http.services.apiStockSearchConfigGet({});
      const data = response.data;
      searchConfigs.value = data;
    }, 500);
  }

  function onSearch() {
    loading.value = true;
    setTimeout(async () => {
      const response = await http.services.apiStockSearchPost({
        pageNumber: pagination.currentPage,
        pageSize: pagination.pageSize,
        filter: searchConfigs.value
      });
      const data = response.data;
      dataList.value = data.items;
      console.log(data);
      pagination.total = data.total;
      pagination.currentPage = data.pageNumber;
      loading.value = false;
    }, 500);
  }

  function resetSearch() {
    if (!searchConfigs.value) return;
    searchConfigs.value.forEach(t => {
      t.value = null;
    });
    onSearch();
  }

  function handleDelete(row) {
    setTimeout(() => {
      message(`您删除了角色名称为${row.name}的这条数据`, { type: "success" });
      onSearch();
    }, 300);
  }

  function handleSizeChange(val: number) {
    pagination.pageSize = val;
    onSearch();
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    pagination.currentPage = val;
    onSearch();
    console.log(`current page: ${val}`);
  }

  function onSubmit(data: any) {
    loading.value = true;
    const value = data;
    const isUpdated = value.id != null && parseInt(value.id) > 0;
    setTimeout(async () => {
      if (isUpdated) {
        await http.services.apiSysRolePut(parseInt(value.id), value);
      } else {
        await http.services.apiSysRolePost(value);
      }
      const messageStr = isUpdated ? "修改成功" : "新建成功";
      message(messageStr, { type: "success" });
      await onSearch();
      loading.value = false;
    }, 500);
  }

  const buttonClass = computed(() => {
    return [
      "!h-[20px]",
      "reset-margin",
      "!text-gray-500",
      "dark:!text-white",
      "dark:hover:!text-primary"
    ];
  });

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
  }
  function openDialog(title: string, row?: any) {
    const data = cloneDeep(row);
    addDialog({
      title: `${title}`,
      props: {
        formInline: data
      },
      width: "40%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef }),
      beforeSure: (done, { options }) => {
        const FormRef = formRef.value.getRef();
        console.log(options.props);
        const curData = options.props.formInline;
        FormRef.validate(valid => {
          if (valid) {
            onSubmit(curData);
          }
        });
        done(); // 关闭弹框
      }
    });
  }

  onMounted(() => {
    onSearch();
    initSearchConfig();
  });
  return {
    handleDelete,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange,
    searchConfigs,
    onSearch,
    resetSearch,
    loading,
    dataList,
    pagination,
    openDialog,
    buttonClass
  };
}
