<script setup lang="ts">
import { ref } from "vue";
import { formRules } from "./utils/rule";
import { StockResponse } from "@/api-services/data-contracts";

interface FormProps {
  formInline: StockResponse;
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
    <el-form-item label="名称" prop="name">
      <el-input v-model="newFormInline.name" clearable readonly />
    </el-form-item>

    <el-form-item label="代碼" prop="code">
      <el-input v-model="newFormInline.tsCode" readonly clearable />
    </el-form-item>
  </el-form>
</template>
