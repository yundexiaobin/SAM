export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "",
      prop: "name",
      minWidth: 100
    },
    {
      label: "",
      prop: "code",
      minWidth: 100
    },
    {
      label: "",
      prop: "order",
      minWidth: 100
    },
    {
      label: "",
      prop: "dataScope",
      minWidth: 100
    },
    {
      label: "",
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
      label: "",
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
