<script setup lang="ts">
import { ref } from "vue";
import { formRules } from "./utils/rule";
import { StockOptionalResponse } from "@/api-services/data-contracts";

interface FormProps {
  formInline: StockOptionalResponse;
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
    <el-form-item label="股票號碼" prop="tsCode">
      <el-input v-model="newFormInline.tsCode" clearable />
    </el-form-item>
    <el-form-item label="加入原因" prop="reason">
      <el-input v-model="newFormInline.reason" clearable />
    </el-form-item>
  </el-form>
</template>
