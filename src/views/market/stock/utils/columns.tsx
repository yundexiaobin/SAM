import dayjs from "dayjs";

export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "编号",
      prop: "id",
      minWidth: 100
    },
    {
      label: "名称",
      prop: "name",
      minWidth: 120
    },
    {
      label: "代码",
      prop: "tsCode",
      minWidth: 150
    },
    {
      label: "状态",
      minWidth: 130
    },
    {
      label: "上市时间",
      prop: "listDate",
      minWidth: 180,
      formatter: ({ listDate }) => dayjs(listDate).format("YYYY-MM-DD")
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
