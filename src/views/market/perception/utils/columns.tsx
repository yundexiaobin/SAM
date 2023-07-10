export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "文本內容",
      prop: "content",
      minWidth: 100
    },
    {
      label: "输入时间",
      prop: "inputDate",
      minWidth: 100
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
