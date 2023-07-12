import dayjs from "dayjs";

export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "日期",
      prop: "dateTime",
      formatter: ({ tradeDay }) => dayjs(tradeDay).format("YYYY-MM-DD")
    },
    {
      label: "操作",
      prop: "type",
      cellRenderer: ({ row }) => {
        if (row.type > 0) {
          return <span class="text-rose-500">卖</span>;
        } else {
          return <span class="text-green-500">买</span>;
        }
      }
    },
    {
      label: "數量",
      prop: "quantity"
    },
    {
      label: "价格",
      prop: "price"
    },
    {
      label: "手續費",
      prop: "cost"
    },
    {
      label: "操作費用",
      prop: "absoluteCashFlow"
    }
  ];
  return {
    columns
  };
}
