export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "Id",
      prop: "id",
      minWidth: 100
    },
  {
      label: "代码",
      prop: "tsCode",
      minWidth: 100
    },
  {
      label: "名称",
      prop: "name",
      minWidth: 100
    },
  {
      label: "交易日",
      prop: "tradeDay",
      minWidth: 100
    },
  {
      label: "最高价",
      prop: "high",
      minWidth: 100
    },
  {
      label: "最低价",
      prop: "low",
      minWidth: 100
    },
  {
      label: "题材",
      prop: "remark",
      minWidth: 100
    },
  {
      label: "涨幅1",
      prop: "pctChg1",
      minWidth: 100
    },
  {
      label: "大单数量1",
      prop: "largeOrderQuantity1",
      minWidth: 100
    },
  {
      label: "封单额1",
      prop: "amount1",
      minWidth: 100
    },
  {
      label: "涨幅2",
      prop: "pctChg2",
      minWidth: 100
    },
  {
      label: "大单数量2",
      prop: "largeOrderQuantity2",
      minWidth: 100
    },
  {
      label: "封单额2",
      prop: "amount2",
      minWidth: 100
    },
  {
      label: "涨幅3",
      prop: "pctChg3",
      minWidth: 100
    },
  {
      label: "大单数量3",
      prop: "largeOrderQuantity3",
      minWidth: 100
    },
  {
      label: "封单额3",
      prop: "amount3",
      minWidth: 100
    },
  {
      label: "涨幅4",
      prop: "pctChg4",
      minWidth: 100
    },
  {
      label: "大单数量4",
      prop: "largeOrderQuantity4",
      minWidth: 100
    },
  {
      label: "封单额4",
      prop: "amount4",
      minWidth: 100
    },
  {
      label: "涨幅5",
      prop: "pctChg5",
      minWidth: 100
    },
  {
      label: "大单数量5",
      prop: "largeOrderQuantity5",
      minWidth: 100
    },
  {
      label: "封单额5",
      prop: "amount5",
      minWidth: 100
    },
  {
      label: "总涨幅",
      prop: "pctChg",
      minWidth: 100
    },
    {
      label: "操作",
      fixed: "right",
      width: 240,
      slot: "operation"
    }
  ];
  return {
    columns
  };
}
