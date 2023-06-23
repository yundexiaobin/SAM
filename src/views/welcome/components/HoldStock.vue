<script setup lang="ts">
import { http } from "@/utils/http";
import { ref, onMounted } from "vue";

const dataLoading = ref(true);

const tableData = ref([]);

const initTableData = async () => {
  try {
    const { data } = await http.services.apiStockTodayAttentionGet({
      PageNumber: 0,
      PageSize: 20
    });
    if (data.code === 200) {
      tableData.value = data.result;
    }
  } catch (e) {
    console.log(e);
  } finally {
    setTimeout(() => {
      dataLoading.value = false;
    }, 500);
  }
};
onMounted(() => {
  initTableData();
});

const columns: TableColumnList = [
  {
    label: "名称",
    prop: "name"
  },
  {
    label: "代码",
    prop: "tsCode"
  },
  {
    label: "开盘价",
    prop: "close"
  },
  {
    label: "当前价",
    prop: "close"
  },
  {
    label: "最低价",
    prop: "low"
  },
  {
    label: "最高价",
    prop: "high"
  },
  {
    label: "涨幅",
    prop: "pctChg"
  },
  {
    label: "分数",
    prop: "mark"
  },
  {
    label: "行业",
    prop: "industry"
  },
  {
    label: "概念",
    prop: "concept"
  },
  {
    label: "箱体最低价",
    prop: "boxLow"
  },
  {
    label: "箱体最高价",
    prop: "boxHigh"
  }
];
</script>

<template>
  <div style="min-height: 324px">
    <pure-table v-loading="dataLoading" :data="tableData" :columns="columns" />
  </div>
</template>
