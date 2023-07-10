export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "Id",
      prop: "id",
      hide: true
    },
    {
      label: "代码",
      prop: "tsCode"
    },
    {
      label: "名称",
      prop: "name"
    },
    {
      label: "交易日",
      prop: "tradeDay"
    },
    {
      label: "最高价",
      prop: "high"
    },
    {
      label: "最低价",
      prop: "low"
    },
    {
      label: "题材",
      width: 100,
      prop: "remark"
    },
    {
      label: "涨幅1",
      prop: "pctChg1"
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
      prop: "pctChg2"
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
      prop: "pctChg3"
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
      prop: "pctChg4"
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
      prop: "pctChg5"
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
      prop: "pctChg"
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
