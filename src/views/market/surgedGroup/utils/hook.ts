import { message } from "@/utils/message";
import { reactive, ref, onMounted, h } from "vue";
import { http } from "@/utils/http";
import { PaginationProps } from "@pureadmin/table";
import { addDialog } from "@/components/ReDialog/index";
import editForm from "../form.vue";

import dateForm from "../dateSync.vue";
import { deviceDetection } from "@pureadmin/utils";
import backTestForm from "../../../components/backTest/index.vue";


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
      const response = await http.services.apiSurgedLimitGroupSearchConfigGet(
        {}
      );
      const data = response.data;
      searchConfigs.value = data;
    }, 500);
  }

  function onSearch() {
    loading.value = true;
    setTimeout(async () => {
      const response = await http.services.apiSurgedLimitGroupSearchPost({
        pageNumber: pagination.currentPage,
        pageSize: pagination.pageSize,
        filter: searchConfigs.value
      });
      const data = response.data;
      dataList.value = data.items;
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
    setTimeout(async () => {
      await http.services.apiSurgedLimitGroupDelete(row.id);
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
        await http.services.apiSurgedLimitGroupPut(parseInt(value.id), value);
      } else {
        await http.services.apiSurgedLimitGroupPost(value);
      }
      const messageStr = isUpdated ? "修改成功" : "新建成功";
      message(messageStr, { type: "success" });
      await onSearch();
      loading.value = false;
    }, 500);
  }

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
  }

  async function getDetailAsync(val?: number) {
    return await http.services.apiSurgedLimitGroupGet(val);
  }

  function openDialog(title: string, row?: any) {
    const d = deviceDetection;
    const width = d ? "100%" : "40%";
    addDialog({
      title: `${title}`,
      props: {
        formInline: row
      },
      width: width,
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef }),
      beforeSure: (done, { options }) => {
        const FormRef = formRef.value.getRef();
        const curData = options.props.formInline;
        FormRef.validate(valid => {
          if (valid) {
            onSubmit(curData);
            done(); // 关闭弹框
          }
        });
      }
    });
  }

  function openBackTestDialog(tsCode: string) {
    const d = deviceDetection;
    const width = d ? "90%" : "60%";
    addDialog({
      title: `回测`,
      props: {
        formInline: {
          tsCode: tsCode
        }
      },
      width: width,
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(backTestForm, { ref: formRef })
    });
  }

  function openForm(title: string, row?: any) {
    if (row != null) {
      getDetailAsync(row.id).then(t => {
        openDialog(title, t.data);
      });
    } else {
      openDialog(title, {});
    }
  }

  function openDate() {
    const d = deviceDetection;
    const width = d ? "100%" : "40%";
    addDialog({
      title: `同步涨停数据`,
      props: {
        formInline: {
          tradeDay: ""
        }
      },
      width: width,
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(dateForm, {}),
      beforeSure: (done, { options }) => {
        const curData = options.props.formInline;
        setTimeout(async () => {
          await http.services.apiSurgedLimitGroupPost(curData);
          message("新建成功", { type: "success" });
        }, 500);
        done();
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
    openForm,
    openDate,
    openBackTestDialog
  };
}
