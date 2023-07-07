<script setup lang="ts">
import { AddSurgedLimitGroupRequest } from "@/api-services/data-contracts";
import { ref } from "vue";

interface FormProps {
  formInline: AddSurgedLimitGroupRequest;
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
  <div class="text-center">
    <el-date-picker
      v-model="newFormInline.tradeDay"
      type="date"
      placeholder="选择一个日期"
      format="YYYY-MM-DD"
      value-format="YYYY-MM-DD"
    />
  </div>
</template>

<style scoped lang="scss"></style>
