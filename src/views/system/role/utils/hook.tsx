import dayjs from "dayjs";
import editForm from "../form.vue";
import { message } from "@/utils/message";
import { ElMessageBox } from "element-plus";
import { usePublicHooks } from "../../hooks";
import { addDialog } from "@/components/ReDialog";
import { type FormItemProps } from "../utils/types";
import { type PaginationProps } from "@pureadmin/table";
import { reactive, ref, onMounted, h } from "vue";
import { http } from "@/utils/http";
import { SysRoleResponse } from "@/api-services/data-contracts";
import menuTree from "../menuTree.vue";

export function useRole() {
  const form = reactive<SysRoleResponse>({
    name: "",
    code: "",
    status: 1
  });
  const formRef = ref();
  const dataList = ref([]);
  const loading = ref(true);
  const switchLoadMap = ref({});
  const { switchStyle } = usePublicHooks();
  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const columns: TableColumnList = [
    {
      label: "角色编号",
      prop: "id",
      minWidth: 100
    },
    {
      label: "角色名称",
      prop: "name",
      minWidth: 120
    },
    {
      label: "角色标识",
      prop: "code",
      minWidth: 150
    },
    {
      label: "状态",
      minWidth: 130,
      cellRenderer: scope => (
        <el-switch
          size={scope.props.size === "small" ? "small" : "default"}
          loading={switchLoadMap.value[scope.index]?.loading}
          v-model={scope.row.status}
          active-value={1}
          inactive-value={0}
          active-text="已启用"
          inactive-text="已停用"
          inline-prompt
          style={switchStyle.value}
          onChange={() => onChange(scope as any)}
        />
      )
    },
    {
      label: "备注",
      prop: "remark",
      minWidth: 150
    },
    {
      label: "排序位置",
      prop: "order",
      minWidth: 50
    },
    {
      label: "创建时间",
      minWidth: 180,
      prop: "createTime",
      formatter: ({ createTime }) =>
        dayjs(createTime).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "操作",
      fixed: "right",
      width: 240,
      slot: "operation"
    }
  ];
  // const buttonClass = computed(() => {
  //   return [
  //     "!h-[20px]",
  //     "reset-margin",
  //     "!text-gray-500",
  //     "dark:!text-white",
  //     "dark:hover:!text-primary"
  //   ];
  // });

  async function changeStatus(value: SysRoleResponse) {
    const isUpdated = value.id != null && parseInt(value.id) > 0;
    if (isUpdated) {
      await http.services.apiSysRolePut(parseInt(value.id), value);
    }
  }

  function onChange({ row, index }) {
    ElMessageBox.confirm(
      `确认要<strong>${
        row.status === 0 ? "停用" : "启用"
      }</strong><strong style='color:var(--el-color-primary)'>${
        row.name
      }</strong>吗?`,
      "系统提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true,
        draggable: true
      }
    )
      .then(() => {
        switchLoadMap.value[index] = Object.assign(
          {},
          switchLoadMap.value[index],
          {
            loading: true
          }
        );
        changeStatus(row).then(() => {
          setTimeout(() => {
            switchLoadMap.value[index] = Object.assign(
              {},
              switchLoadMap.value[index],
              {
                loading: false
              }
            );
            message(`已${row.status === 0 ? "停用" : "启用"}${row.name}`, {
              type: "success"
            });
          }, 300);
        });
      })
      .catch(() => {
        row.status === 0 ? (row.status = 1) : (row.status = 0);
      });
  }

  function handleDelete(row) {
    http.services.apiSysRoleDelete(row.id).then(() => {
      setTimeout(() => {
        message(`您删除了角色名称为${row.name}的这条数据`, { type: "success" });
        onSearch();
      }, 300);
    });
  }

  function handleSizeChange(val: number) {
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    console.log(`current page: ${val}`);
  }

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
  }

  function onSearch() {
    loading.value = true;
    http.services
      .apiSysRoleListGet({
        PageNumber: pagination.currentPage,
        PageSize: pagination.pageSize
      })
      .then(({ data }) => {
        dataList.value = data.items;
        pagination.total = data.total;
        pagination.currentPage = data.pageNumber;
        setTimeout(() => {
          loading.value = false;
        }, 500);
      });
  }

  function onSubmit(data: SysRoleResponse) {
    loading.value = true;
    const value = data;
    const isUpdated = value.id != null && parseInt(value.id) > 0;
    setTimeout(async () => {
      if (isUpdated) {
        await http.services.apiSysRolePut(parseInt(value.id), value);
      } else {
        await http.services.apiSysRolePost(value);
      }
      const messageStr = isUpdated ? "修改成功" : "新建成功";
      message(messageStr, { type: "success" });
      await onSearch();
      loading.value = false;
    }, 500);
  }

  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };

  function openDialog(title = "新增", row?: FormItemProps) {
    addDialog({
      title: `${title}角色`,
      props: {
        formInline: {
          id: row?.id ?? "0",
          name: row?.name ?? "",
          code: row?.code ?? "",
          remark: row?.remark ?? "",
          order: row?.order ?? 0,
          status: row?.status ?? 1
        }
      },
      width: "40%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef }),
      beforeSure: (done, { options }) => {
        const FormRef = formRef.value.getRef();
        console.log(options.props);
        const curData = options.props.formInline as FormItemProps;
        FormRef.validate(valid => {
          if (valid) {
            onSubmit(curData);
          }
        });
        done(); // 关闭弹框
      }
    });
  }

  /** 菜单权限 */
  function handleMenu(id: number) {
    setTimeout(async () => {
      const data = await http.services.apiSysRoleGet(id);
      addDialog({
        title: `菜單權限`,
        props: {
          formInline: data.data.menus
        },
        width: "40%",
        closeOnClickModal: false,
        contentRenderer: () => h(menuTree),
        beforeSure: (done, { options }) => {
          console.log(options.props);
          const menus = options.props.formInline as number[];
          data.data.menus = menus;
          onSubmit(data.data);
          done(); // 关闭弹框
        }
      });
    }, 500);
  }

  /** 数据权限 可自行开发 */
  // function handleDatabase() {}

  onMounted(() => {
    onSearch();
  });

  return {
    form,
    loading,
    columns,
    dataList,
    pagination,
    onSearch,
    resetForm,
    openDialog,
    handleMenu,
    handleDelete,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  };
}
