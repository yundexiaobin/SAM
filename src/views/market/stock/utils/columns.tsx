import dayjs from "dayjs";
import { deviceDetection } from "@pureadmin/utils";

export function useColumns() {
  const columns: TableColumnList = [
    {
      type: "selection",
      align: "left",
      hide: () => {
        const d = deviceDetection();
        return d;
      }
    },
    {
      label: "编号",
      prop: "id",
      hide: true
    },
    {
      label: "名称",
      prop: "name"
    },
    {
      label: "代码",
      prop: "tsCode"
    },
    {
      label: "操作",
      fixed: "right",
      width: 100,
      slot: "operation"
    }
  ];
  return {
    columns
  };
}
