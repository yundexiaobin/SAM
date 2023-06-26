import { message } from "@/utils/message";
import { reactive, ref, onMounted } from "vue";
import { SearchConfigResponse } from "@/api-services/data-contracts";
import { http } from "@/utils/http";
import { PaginationProps } from "@pureadmin/table";

const dataList = ref([]);
const loading = ref(true);
const pagination = reactive<PaginationProps>({
  total: 0,
  pageSize: 10,
  currentPage: 1,
  background: true
});

export function useHook() {
  const searchConfigs = ref<SearchConfigResponse[]>([
    {
      label: "test1-label",
      field: "test1"
    },
    {
      label: "test2-label",
      field: "test2"
    }
  ]);

  function onSearch() {
    loading.value = true;
    setTimeout(async () => {
      const response = await http.services.apiStockSearchPost({
        PageNumber: pagination.currentPage,
        PageSize: pagination.pageSize,
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

  const resetSearch(){
    if (!searchConfigs) return;
    searchConfigs.forEach(t=>{
      t.value = null;
    });
    onSearch();
  };

  function handleDelete(row) {
    setTimeout(() => {
      message(`您删除了角色名称为${row.name}的这条数据`, { type: "success" });
      onSearch();
    }, 300);
  }

  function handleSizeChange(val: number) {
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    console.log(`current page: ${val}`);
  }

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
  }
  onMounted(() => {
    onSearch();
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
    pagination
  };
}
