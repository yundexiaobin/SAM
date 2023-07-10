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
      <el-input v-model="newFormInline.remark" clearable type="textarea" />
    </el-form-item>

    <el-form-item label="大单数量1" prop="largeOrderQuantity1">
      <el-input-number
        v-model="newFormInline.largeOrderQuantity1"
        :precision="3"
        :min="0"
        size="large"
      />
    </el-form-item>

    <el-form-item label="大单数量2" prop="largeOrderQuantity2">
      <el-input-number
        v-model="newFormInline.largeOrderQuantity2"
        :precision="3"
        :min="0"
        size="large"
      />
    </el-form-item>

    <el-form-item label="大单数量3" prop="largeOrderQuantity3">
      <el-input-number
        v-model="newFormInline.largeOrderQuantity3"
        :precision="3"
        :min="0"
        size="large"
      />
    </el-form-item>

    <el-form-item label="大单数量4" prop="largeOrderQuantity4">
      <el-input-number
        v-model="newFormInline.largeOrderQuantity4"
        :precision="3"
        :min="0"
        size="large"
      />
    </el-form-item>

    <el-form-item label="大单数量5" prop="largeOrderQuantity5">
      <el-input-number
        v-model="newFormInline.largeOrderQuantity5"
        :precision="3"
        :min="0"
        size="large"
      />
    </el-form-item>
  </el-form>
</template>
