<script setup lang="ts">
import { http } from "@/utils/http";
import { onMounted, ref } from "vue";
import { MenuResponse, SysMenuResponse } from "@/api-services/data-contracts";
import { MenuTreeProps } from "@/views/system/role/utils/types";
const treeSelectProps = {
  children: "children",
  label: "name",
  value: "id"
};
const formData = ref<MenuResponse[]>([]);
const props = withDefaults(defineProps<MenuTreeProps>(), {
  formInline: () => []
});

const checkKeys = ref<number[]>(props.formInline);
onMounted(() => {
  http.services.apiSysMenuTreeGet().then(t => {
    formData.value = t.data;
    setTimeout(() => {}, 500);
  });
});

const handleCheckChange = (data: SysMenuResponse, checked: boolean) => {
  const newData = [];
  checkKeys.value.forEach(t => {
    if (t === data.id && checked === false) {
      return;
    }
    newData.push(t);
  });
  if (checked) {
    if (!newData.includes(data.id)) {
      newData.push(data.id);
    }
  }
  checkKeys.value.length = 0;
  newData.forEach(t => {
    checkKeys.value.push(t);
  });
  console.log(checkKeys.value);
};
</script>

<template>
  <el-tree
    node-key="id"
    :props="treeSelectProps"
    :data="formData"
    :default-checked-keys="checkKeys"
    show-checkbox
    default-expand-all
    @check-change="handleCheckChange"
  />
</template>

<style scoped lang="scss"></style>
