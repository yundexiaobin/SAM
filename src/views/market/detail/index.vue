<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const loading = ref(true);
const { t } = useI18n();
const currentRoute = useRoute();
const code = currentRoute.query.code;
const src = "https://xueqiu.com/S/" + code;
const src1 = "https://gu.qq.com/" + code.toString().toLowerCase() + "/gp";
</script>

<template>
  <div
    class="frame"
    v-loading="loading"
    :element-loading-text="t('status.hsLoad')"
  >
    <iframe :src="src1" class="frame-iframe" ref="frameRef" sandbox="allow-scripts allow-same-origin allow-forms"/>
  </div>
</template>

<style lang="scss" scoped>
.frame {
  z-index: 998;
  height: calc(100vh - 88px);

  .frame-iframe {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 0;
  }
}

.main-content {
  margin: 2px 0 0 !important;
}
</style>
