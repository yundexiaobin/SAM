<script setup lang="ts">
import { http } from "@/utils/http";
import { ref, onMounted } from "vue";
import { useColumns } from "./columns";

defineOptions({
  name: "Strategy"
});
const { columns } = useColumns();

const dataLoading = ref(true);

const tableData = ref([]);

const initTableData = async () => {
  try {
    const { data } = await http.services.apiStrategyStrategyListGet({});
    if (data.code === 200) {
      tableData.value = data.result;
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
    <pure-table v-loading="dataLoading" :data="tableData" :columns="columns" />
  </div>
</template>
<style></style>
