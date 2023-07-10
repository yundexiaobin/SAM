export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "股票號碼",
      prop: "tsCode"
    },
    {
      label: "加入原因",
      prop: "reason",
      minWidth: 100
    },
    {
      label: "加入時間",
      prop: "joinDate"
    },
    {
      label: "是否移除",
      prop: "removed"
    },
    {
      label: "Id",
      prop: "id",
      hide: true
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
