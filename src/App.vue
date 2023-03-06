<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import { removeToken } from "@/utils/auth";
export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  methods: {
    // 关闭窗口之前执行
    beforeunloadHandler() {
      this.beforeUnload_time = new Date().getTime();
    },
    unloadHandler() {
      this.gap_time = new Date().getTime() - this.beforeUnload_time;
      //判断是窗口关闭还是刷新 毫秒数判断 网上大部分写的是5
      if (this.gap_time <= 10) {
        removeToken();
      }
    }
  },
  unmounted() {
    // 移除监听
    window.removeEventListener("beforeunload", () =>
      this.beforeunloadHandler()
    );
    window.removeEventListener("unload", () => this.unloadHandler());
  },

  mounted() {
    // 监听浏览器关闭
    window.addEventListener("beforeunload", () => this.beforeunloadHandler());
    window.addEventListener("unload", () => this.unloadHandler());
  },
  computed: {
    currentLocale() {
      return this.$storage.locale?.locale === "zh" ? zhCn : en;
    }
  }
});
</script>
