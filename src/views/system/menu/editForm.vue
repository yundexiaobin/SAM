<script setup lang="ts">
import { ref, watch } from "vue";
import { SysMenuResponse } from "@/api-services/data-contracts";
import IconSelect from "@/components/ReIcon/src/Select.vue";
defineOptions({
  name: "editForm"
});
const treeSelectProps = {
  children: "children",
  label: "name",
  value: "id"
};

interface FormProps {
  form: SysMenuResponse;
  data: [];
}
const props = withDefaults(defineProps<FormProps>(), {
  form: {
    type: 1,
    isHide: false,
    isIframe: false,
    status: 1,
    order: 1
  }
});
const formData = ref(props.form);
const menuData = ref(props.data);
const handleTreeSelectNodeClick = n => {
  formData.value.parentId = n.id;
  formData.value.parentName = n.name;
};

watch(
  () => props.form,
  newValue => {
    formData.value = newValue;
  }
);
watch(
  () => props.data,
  newValue => {
    menuData.value = newValue;
  }
);
</script>
<template>
  <el-form
    ref="formRef"
    label-width="120px"
    :inline="false"
    class="bg-bg_color w-[99/100] pl-8 pt-4"
  >
    <el-form-item label="父菜單：">
      <el-tree-select
        clearable
        v-model="formData.parentName"
        :data="menuData"
        :props="treeSelectProps"
        @node-click="handleTreeSelectNodeClick"
        class="mr-4 w-[100%]"
      />
    </el-form-item>
    <el-form-item label="图标">
      <IconSelect v-model="formData.icon" class="mr-4 w-[100%]" />
    </el-form-item>
    <el-form-item label="標識">
      <el-input v-model="formData.slug" type="text" class="mr-4" />
    </el-form-item>
    <el-form-item label="名称">
      <el-input v-model="formData.name" type="text" class="mr-4" />
    </el-form-item>
    <el-form-item label="路由地址">
      <el-input
        v-model="formData.path"
        type="text"
        maxlength="200px"
        class="mr-4"
      />
    </el-form-item>
    <el-form-item label="组件">
      <el-input v-model="formData.component" type="text" class="mr-4" />
    </el-form-item>
    <el-form-item label="外链链接">
      <el-input v-model="formData.outLink" type="text" class="mr-4" />
    </el-form-item>
    <el-form-item label="排序位置">
      <el-input-number v-model="formData.order" :min="0" />
    </el-form-item>
    <el-form-item label="是否内嵌">
      <el-radio-group v-model="formData.isIframe">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否隐藏">
      <el-radio-group v-model="formData.isHide">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="状态">
      <el-radio-group v-model="formData.status">
        <el-radio :label="1">啓用</el-radio>
        <el-radio :label="2">停用</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
