<style>
.imageVerify {
  width: 120px;
  height: 40px;
}
</style>
<script setup lang="ts">
import { watch } from "vue";
import { useImageVerify } from "./hooks";

defineOptions({
  name: "ReImageVerify"
});

interface Props {
  code?: string;
}

interface Emits {
  (e: "update:code", code: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  code: ""
});

const emit = defineEmits<Emits>();

const { base64Ref, codeId, setImgCode, getImgCode } = useImageVerify();

watch(
  () => props.code,
  newValue => {
    setImgCode(newValue);
  }
);
watch(codeId, newValue => {
  emit("update:code", newValue.toString());
});

defineExpose({ getImgCode });
</script>

<template>
  <!--  <canvas-->
  <!--    ref="domRef"-->
  <!--    width="120"-->
  <!--    height="40"-->
  <!--    class="cursor-pointer"-->
  <!--    @click="getImgCode"-->
  <!--  />-->
  <el-image
    :src="base64Ref"
    class="cursor-pointer imageVerify"
    @click="getImgCode"
  />
</template>
