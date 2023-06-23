import { ref, onMounted } from "vue";
import { SysMenuResponse } from "@/api-services/data-contracts";
import { http } from "@/utils/http";
import { message } from "@/utils/message";

export function useMenu() {
  const formData = ref<SysMenuResponse>({
    isHide: false,
    isIframe: false,
    status: 1
  });
  const dataList = ref([]);
  const loading = ref(true);
  async function handleNodeClick(n) {
    loading.value = true;
    const { data } = await http.services.apiSysMenuGet(n.id);
    formData.value = data;
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }

  async function onSearch() {
    loading.value = true;
    const { data } = await http.services.apiSysMenuListGet({});
    dataList.value = data.items;
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }

  async function onSubmit(data: SysMenuResponse) {
    loading.value = true;
    const value = data;
    if (value.parentName === "") {
      value.parentId = null;
    }
    const isUpdated = value.id > 0;
    if (isUpdated) {
      await http.services.apiSysMenuPut(value.id, value);
    } else {
      await http.services.apiSysMenuPost(value);
    }
    setTimeout(() => {
      loading.value = false;
    }, 500);
    const messageStr = isUpdated ? "修改成功" : "新建成功";
    message(messageStr, { type: "success" });
    await onSearch();
  }

  async function onDelete(id: number) {
    await http.services.apiSysMenuDelete(id);
    await onSearch();
  }

  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };

  onMounted(() => {
    onSearch();
  });

  return {
    formData,
    loading,
    dataList,
    handleNodeClick,
    onSearch,
    resetForm,
    onSubmit,
    onDelete
  };
}
