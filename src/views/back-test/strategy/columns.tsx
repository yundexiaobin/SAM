import Action from "../components/StrategyAction.vue";

export function useColumns() {
  const columns: TableColumnList = [
    {
      label: "策略id",
      prop: "id",
      hide: () => true
    },
    {
      label: "名称",
      prop: "name",
      cellRenderer: ({ row }) => (
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          {{
            default: () => (
              <>
                <div>name: {row.name}</div>
                <div>address: {row.address}</div>
              </>
            ),
            reference: () => <el-tag>{row.name}</el-tag>
          }}
        </el-popover>
      )
    },
    {
      label: "交易账号id",
      prop: "accountId",
      hide: () => true
    },
    {
      label: "交易账号",
      prop: "userName"
    },
    {
      label: "状态",
      prop: "status"
    },
    {
      label: "操作",
      cellRenderer: ({ index, row }) => (
        <>
          <Action
            index={index}
            row={row}
            id={row.id}
            accountId={row.accountId}
          />
        </>
      )
    }
  ];

  return {
    columns
  };
}
