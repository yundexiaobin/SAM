<script setup lang="ts">
import { ref } from "vue";
import { formRules } from "./utils/rule";
import { StockPerceptionResponse } from "@/api-services/data-contracts";

interface FormProps {
  formInline: StockPerceptionResponse;
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
    <el-form-item label="文本內容" prop="content">
      <el-input v-model="newFormInline.content" clearable />
    </el-form-item>
        <el-form-item label="输入时间" prop="inputDate">
      <el-input v-model="newFormInline.inputDate" clearable />
    </el-form-item>
    </el-form>
</template>
