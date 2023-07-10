<script setup lang="ts">
import MdEditor from "md-editor-v3";
import Pie from "./components/Pie.vue";
import TypeIt from "@/components/ReTypeit";
import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";
import SurgedLimitLine from "@/views/welcome/components/SurgedLimitLine.vue";
import { useHook } from "./utils/hook";

defineOptions({
  name: "Welcome"
});

const titleClass = computed(() => {
  return ["text-base", "font-medium"];
});
const { perceptionData, loading } = useHook();
const { height } = useWindowSize();
</script>

<template>
  <div>
    <el-row :gutter="24">
      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        <el-card shadow="never">
          <template #header>
            <a
              :class="titleClass"
              href="https://github.com/pure-admin/vue-pure-admin"
              target="_black"
            >
              <TypeIt
                :className="'type-it4'"
                :values="['涨停折线图信息']"
                :cursor="false"
                :speed="120"
              />
            </a>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <SurgedLimitLine />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="12"
        :lg="12"
        :xl="12"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        <el-card shadow="never">
          <template #header>
            <a
              :class="titleClass"
              href="https://github.com/pure-admin/vue-pure-admin"
              target="_black"
            >
              <TypeIt
                :className="'type-it3'"
                :values="['热门板块分布']"
                :cursor="false"
                :speed="120"
              />
            </a>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <Pie />
            </template>
          </el-skeleton>
        </el-card>
      </el-col>
      <!--      <el-col-->
      <!--        :xs="24"-->
      <!--        :sm="24"-->
      <!--        :md="12"-->
      <!--        :lg="12"-->
      <!--        :xl="12"-->
      <!--        class="mb-[18px]"-->
      <!--        v-motion-->
      <!--        :initial="{-->
      <!--          opacity: 0,-->
      <!--          y: 100-->
      <!--        }"-->
      <!--        :enter="{-->
      <!--          opacity: 1,-->
      <!--          y: 0,-->
      <!--          transition: {-->
      <!--            delay: 400-->
      <!--          }-->
      <!--        }"-->
      <!--      >-->
      <!--        <el-card shadow="never">-->
      <!--          <template #header>-->
      <!--            <a-->
      <!--              :class="titleClass"-->
      <!--              href="https://github.com/pure-admin/vue-pure-admin"-->
      <!--              target="_black"-->
      <!--            >-->
      <!--              <TypeIt-->
      <!--                :className="'type-it5'"-->
      <!--                :values="['关注股收益变化']"-->
      <!--                :cursor="false"-->
      <!--                :speed="120"-->
      <!--              />-->
      <!--            </a>-->
      <!--          </template>-->
      <!--          <el-skeleton animated :rows="7" :loading="loading">-->
      <!--            <template #default>-->
      <!--              <Bar />-->
      <!--            </template>-->
      <!--          </el-skeleton>-->
      <!--        </el-card>-->
      <!--      </el-col>-->

      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200
          }
        }"
      />

      <el-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        class="mb-[18px]"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 200
          }
        }"
      >
        <el-card
          shadow="never"
        >
          <template #header>
            <a :class="titleClass" href="#" target="_black">
              <TypeIt
                :className="'type-it2'"
                :values="['交易心得']"
                :cursor="false"
                :speed="60"
              />
            </a>
          </template>
          <el-skeleton animated :rows="7" :loading="loading">
            <template #default>
              <el-scrollbar style="min-height: 300px">
                <el-timeline v-show="perceptionData?.length > 0">
                  <el-timeline-item
                    v-for="(item, index) in perceptionData"
                    :key="index"
                    :icon="item.icon"
                    :timestamp="item.timestamp"
                  >
                    <md-editor v-model="item.content" preview-only />
                  </el-timeline-item>
                </el-timeline>
                <el-empty v-show="perceptionData?.length === 0" />
              </el-scrollbar>
            </template>
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-timeline-item) {
  margin: 6px 0 0 6px;
}

.main-content {
  margin: 20px 20px 0 !important;
}
</style>
