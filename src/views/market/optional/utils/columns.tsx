export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "股票號碼",
      prop: "tsCode",
      minWidth: 100
    },
  {
      label: "加入原因",
      prop: "reason",
      minWidth: 100
    },
  {
      label: "加入時間",
      prop: "joinDate",
      minWidth: 100
    },
  {
      label: "是否移除",
      prop: "removed",
      minWidth: 100
    },
  {
      label: "Id",
      prop: "id",
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
