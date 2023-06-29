<script setup lang="ts">
import { ref } from "vue";
import { formRules } from "./utils/rule";
import { SysRoleResponse } from "@/api-services/data-contracts";

interface FormProps {
  formInline: SysRoleResponse;
}

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({})
});

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

function getRef() {
  return ruleFormRef.value;
}

defineExpose({ getRef });
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="newFormInline"
    :rules="formRules"
    label-width="82px"
  >
    <el-form-item label="" prop="name">
      <el-input v-model="newFormInline.name" clearable />
    </el-form-item>

    <el-form-item label="" prop="code">
      <el-input v-model="newFormInline.code" clearable />
    </el-form-item>

    <el-form-item label="" prop="order">
      <el-input-number v-model="newFormInline.order" :min="0" />
    </el-form-item>

    <el-form-item label="" prop="remark">
      <el-input v-model="newFormInline.remark" clearable />
    </el-form-item>

    <el-form-item label="" prop="id">
      <el-input-number v-model="newFormInline.id" :min="0" />
    </el-form-item>
  </el-form>
</template>
