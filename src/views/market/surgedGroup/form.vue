<script setup lang="ts">
import { ref } from "vue";
import { formRules } from "./utils/rule";
import { SurgedLimitGroupResponse } from "@/api-services/data-contracts";

interface FormProps {
  formInline: SurgedLimitGroupResponse;
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
    <el-form-item label="题材" prop="remark">
      <el-input v-model="newFormInline.remark" clearable />
    </el-form-item>
        
    <el-form-item label="大单数量" prop="largeOrderQuantity1">
      <el-input-number v-model="newFormInline.largeOrderQuantity1" :min="0" />
    </el-form-item>
          
    <el-form-item label="大单数量" prop="largeOrderQuantity2">
      <el-input-number v-model="newFormInline.largeOrderQuantity2" :min="0" />
    </el-form-item>
          
    <el-form-item label="大单数量" prop="largeOrderQuantity3">
      <el-input-number v-model="newFormInline.largeOrderQuantity3" :min="0" />
    </el-form-item>
          
    <el-form-item label="大单数量" prop="largeOrderQuantity4">
      <el-input-number v-model="newFormInline.largeOrderQuantity4" :min="0" />
    </el-form-item>
          
    <el-form-item label="大单数量" prop="largeOrderQuantity5">
      <el-input-number v-model="newFormInline.largeOrderQuantity5" :min="0" />
    </el-form-item>
      </el-form>
</template>
