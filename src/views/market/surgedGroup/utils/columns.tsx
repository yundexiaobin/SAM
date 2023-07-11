import dayjs from "dayjs";

export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "Id",
      prop: "id",
      hide: true
    },
    {
      label: "代码",
      prop: "tsCode",
      minWidth: 120
    },
    {
      label: "名称",
      prop: "name",
      minWidth: 120
    },
    {
      label: "漲幅",
      prop: "currentPctChg",
      cellRenderer: ({ row }) => {
        if (row.currentPctChg > 0) {
          return <span class="text-rose-500">{row.currentPctChg}</span>;
        } else {
          return <span class="text-green-500">{row.currentPctChg}</span>;
        }
      }
    },
    {
      label: "交易日",
      prop: "tradeDay",
      minWidth: 120,
      formatter: ({ tradeDay }) => dayjs(tradeDay).format("YYYY-MM-DD")
    },
    {
      label: "题材",
      width: 100,
      prop: "remark"
    },
    {
      label: "涨幅1",
      prop: "pctChg1",
      cellRenderer: ({ row }) => {
        if (row.pctChg1 > 0) {
          return <span class="text-rose-500">{row.pctChg1}</span>;
        } else {
          return <span class="text-green-500">{row.pctChg1}</span>;
        }
      }
    },
    {
      label: "大单数量1",
      prop: "largeOrderQuantity1"
    },
    {
      label: "封单额1",
      prop: "amount1"
    },
    {
      label: "涨幅2",
      prop: "pctChg2",
      cellRenderer: ({ row }) => {
        if (row.pctChg2 > 0) {
          return <span class="text-rose-500">{row.pctChg2}</span>;
        } else {
          return <span class="text-green-500">{row.pctChg2}</span>;
        }
      }
    },
    {
      label: "大单数量2",
      prop: "largeOrderQuantity2"
    },
    {
      label: "封单额2",
      prop: "amount2"
    },
    {
      label: "涨幅3",
      prop: "pctChg3",
      cellRenderer: ({ row }) => {
        if (row.pctChg3 > 0) {
          return <span class="text-rose-500">{row.pctChg3}</span>;
        } else {
          return <span class="text-green-500">{row.pctChg3}</span>;
        }
      }
    },
    {
      label: "大单数量3",
      prop: "largeOrderQuantity3"
    },
    {
      label: "封单额3",
      prop: "amount3"
    },
    {
      label: "涨幅4",
      prop: "pctChg4",
      cellRenderer: ({ row }) => {
        if (row.pctChg4 > 0) {
          return <span class="text-rose-500">{row.pctChg4}</span>;
        } else {
          return <span class="text-green-500">{row.pctChg4}</span>;
        }
      }
    },
    {
      label: "大单数量4",
      prop: "largeOrderQuantity4"
    },
    {
      label: "封单额4",
      prop: "amount4"
    },
    {
      label: "涨幅5",
      prop: "pctChg5",
      cellRenderer: ({ row }) => {
        if (row.pctChg5 > 0) {
          return <span class="text-rose-500">{row.pctChg5}</span>;
        } else {
          return <span class="text-green-500">{row.pctChg5}</span>;
        }
      }
    },
    {
      label: "大单数量5",
      prop: "largeOrderQuantity5"
    },
    {
      label: "封单额5",
      prop: "amount5"
    },
    {
      label: "总涨幅",
      prop: "pctChg",
      cellRenderer: ({ row }) => {
        if (row.pctChg > 0) {
          return <span class="text-rose-500">{row.pctChg}</span>;
        } else {
          return <span class="text-green-500">{row.pctChg}</span>;
        }
      }
    },
    {
      label: "操作",
      fixed: "right",
      width: 80,
      slot: "operation"
    }
  ];
  return {
    columns
  };
}
