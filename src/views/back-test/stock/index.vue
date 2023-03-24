<script setup lang="ts">
import { http } from "@/utils/http";
import { ref, onMounted } from "vue";
import { useColumns } from "./columns";

defineOptions({
  name: "Stock"
});
const {
  loading,
  columns,
  dataList,
  tableSize,
  pagination,
  loadingConfig,
  // onChange,
  onSizeChange,
  onCurrentChange
} = useColumns();

const dataLoading = ref(true);

const tableData = ref([]);

const initTableData = async () => {
  try {
    const { data } = await http.api.apiStockListGet({});
    if (data.code === 200) {
      tableData.value = data.result.items;
    }
  } catch (e) {
    console.error(e);
  } finally {
    setTimeout(() => {
      dataLoading.value = false;
    }, 500);
  }
};
onMounted(() => {
  initTableData();
});
</script>

<template>
  <div style="min-height: 324px">
    <pure-table
      border
      row-key="id"
      alignWhole="center"
      showOverflowTooltip
      :size="tableSize"
      :loading="loading"
      :loading-config="loadingConfig"
      :height="600"
      :data="
        dataList.slice(
          (pagination.currentPage - 1) * pagination.pageSize,
          pagination.currentPage * pagination.pageSize
        )
      "
      :columns="columns"
      :pagination="pagination"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
    />
  </div>
</template>
<style></style>
