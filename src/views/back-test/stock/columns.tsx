import { ref, onMounted, reactive, watchEffect } from "vue";
import type { PaginationProps, LoadingConfig, Align } from "@pureadmin/table";
import { http } from "@/utils/http";

export function useColumns() {
  const height = ref(600);
  const dataList = ref([]);
  const loading = ref(true);
  const hideVal = ref("nohide");
  const tableSize = ref("default");
  const paginationSmall = ref(false);
  const paginationAlign = ref("right");
  const columns: TableColumnList = [
    {
      label: "代码",
      prop: "tsCode"
    },
    {
      label: "名称",
      prop: "name"
    },
    {
      label: "开盘",
      prop: "todayDaily.open"
    },
    {
      label: "收盘",
      prop: "todayDaily.close"
    },
    {
      label: "最高",
      prop: "todayDaily.high"
    },
    {
      label: "最低",
      prop: "todayDaily.low"
    },
    {
      label: "涨幅",
      prop: "todayDaily.pctChg"
    }
  ];

  /** 分页配置 */
  const pagination = reactive<PaginationProps>({
    pageSize: 10,
    currentPage: 1,
    pageSizes: [10, 15, 20],
    total: 0,
    align: "right",
    background: true,
    small: false
  });

  /** 加载动画配置 */
  const loadingConfig = reactive<LoadingConfig>({
    text: "正在加载第一页...",
    viewBox: "-10, -10, 50, 50",
    spinner: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
    // svg: "",
    // background: rgba()
  });

  function onChange(val) {
    pagination.small = val;
  }

  function onSizeChange(val) {
    console.log("onSizeChange", val);
    pagination.pageSize = val;
    loading.value = true;
    const newList = [];
    http.services
      .apiStockListGet({
        PageNumber: pagination.currentPage,
        PageSize: pagination.pageSize
      })
      .then(r => {
        r.data.items.map(t => {
          newList.push(t);
        });
        dataList.value = newList;
        pagination.total = r.data.itemCount;
        pagination.pageCount = Math.ceil(
          pagination.total / pagination.pageSize
        );
        loading.value = false;
      });
  }

  function onCurrentChange(val) {
    loadingConfig.text = `正在加载第${val}页...`;
    pagination.currentPage = val;
    loading.value = true;
    http.services
      .apiStockListGet({
        PageNumber: pagination.currentPage,
        PageSize: pagination.pageSize
      })
      .then(r => {
        const newList = [];
        r.data.items.map(t => {
          newList.push(t);
        });
        dataList.value = newList;
        pagination.total = r.data.itemCount;
        loading.value = false;
      });
  }

  watchEffect(() => {
    pagination.align = paginationAlign.value as Align;
  });

  onMounted(() => {
    http.services
      .apiStockListGet({
        PageNumber: pagination.currentPage,
        PageSize: pagination.pageSize
      })
      .then(r => {
        const newList = [];
        r.data.items.map(t => {
          newList.push(t);
        });
        dataList.value = newList;
        pagination.total = r.data.itemCount;
        loading.value = false;
      });
  });

  return {
    loading,
    columns,
    dataList,
    hideVal,
    tableSize,
    pagination,
    loadingConfig,
    paginationAlign,
    paginationSmall,
    height,
    onChange,
    onSizeChange,
    onCurrentChange
  };
}
