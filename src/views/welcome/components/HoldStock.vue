<script setup lang="ts">
import { tableData } from "./data";

const columns: TableColumnList = [
  {
    label: "名称",
    prop: "name"
  },
  {
    label: "当前价",
    prop: "close"
  },
  {
    label: "涨幅",
    prop: "change"
  },
  {
    label: "收益",
    prop: "earnings"
  }
];
</script>

<template>
  <pure-table :data="tableData" :columns="columns" />
</template>
