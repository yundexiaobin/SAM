export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "名称",
      prop: "name",
      minWidth: 100
    },
    {
      label: "编码",
      prop: "code",
      minWidth: 100
    },
    {
      label: "排序",
      prop: "order",
      minWidth: 100
    },
    {
      label: "",
      prop: "dataScope",
      minWidth: 100
    },
    {
      label: "备注",
      prop: "remark",
      minWidth: 100
    },
    {
      label: "",
      prop: "status",
      minWidth: 100
    },
    {
      label: "",
      prop: "id",
      minWidth: 100
    },
    {
      label: "菜單id",
      prop: "menus",
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
