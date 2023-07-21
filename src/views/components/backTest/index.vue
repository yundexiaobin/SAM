<script setup lang="ts">
import { formRules } from "@/views/market/stock/utils/rule";
import { useRoute } from "vue-router";
const route = useRoute();
import {
  TradyBackTestRequest,
  TradyBackTestResponse
} from "@/api-services/data-contracts";
import { http } from "@/utils/http";
import { useColumns } from "./utils/columns";
import { useResizeObserver } from "@vueuse/core";
import { deviceDetection, isEmpty, isString } from "@pureadmin/utils";
import KLineBar from "@/views/components/backTest/KLineBar.vue";
import { ref } from "vue";

defineOptions({
  name: "backTestForm"
});

interface FormProps {
  formInline: TradyBackTestRequest;
}

interface SelectOptions {
  label: string;
  value: string;
}

const responseRef = ref<TradyBackTestResponse>({
  bars: [[]]
});
const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({})
});

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);
const parameter = isEmpty(route.params) ? route.query : route.params;
Object.keys(parameter).forEach(param => {
  if (isString(parameter[param])) {
    if (param === "tsCode") {
      newFormInline.value.tsCode = parameter[param].toString();
      console.log(newFormInline.value);
    }
  }
});
const classRef = ref("text-green-500");
const { columns } = useColumns();
function submitForm() {
  const input = newFormInline.value;
  http.services.apiStockTradyBackTestPost(input).then(t => {
    responseRef.value = t.data;
    classRef.value =
      responseRef.value.totalCorrectedProfitLoss > 0
        ? "text-rose-500"
        : "text-green-500";
  });
}

const device = ref();
const loading = ref(false);
const stockRef = ref<SelectOptions[]>([]);
useResizeObserver(document.body, () => {
  device.value = deviceDetection();
});

const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true;
    setTimeout(() => {
      http.services
        .apiStockListGet({
          PageNumber: 0,
          PageSize: 0,
          Keywords: query
        })
        .then(t => {
          stockRef.value.length = 0;
          t.data.items.map(d =>
            stockRef.value.push({
              label: d.name + " (" + d.tsCode + ")",
              value: d.tsCode
            })
          );
          loading.value = false;
        });
    }, 200);
  } else {
    stockRef.value.length = 0;
  }
};
</script>

<template>
  <el-row :gutter="16">
    <el-col :xs="24" :sm="10">
      <el-form
        ref="ruleFormRef"
        :model="newFormInline"
        :rules="formRules"
        label-width="82px"
      >
        <el-form-item label="代碼" prop="code">
          <el-select
            class="!w-[200px]"
            v-model="newFormInline.tsCode"
            filterable
            remote
            placeholder="選擇回測的股票"
            size="large"
            :remote-method="remoteMethod"
            :loading="loading"
          >
            <el-option
              v-for="item in stockRef"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="开始" prop="begin" required>
          <el-date-picker
            type="date"
            v-model="newFormInline.begin"
            placeholder="选择一个日期"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            class="!w-[200px]"
          />
        </el-form-item>
        <el-form-item label="结束" prop="end">
          <el-date-picker
            type="date"
            v-model="newFormInline.end"
            placeholder="选择一个日期"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            class="!w-[200px]"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">开始</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="2" />
    <el-col :xs="24" :sm="10">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>{{ responseRef.name }} {{ responseRef.tsCode }}</span>
          </div>
        </template>
        <div class="text item">
          <span class="text-lg inline-flex w-24">交易次数</span
          ><span>{{ responseRef.totalTransactionCount }}</span>
        </div>
        <div class="text item">
          <span class="text-lg inline-flex w-24">本金</span
          ><span>{{ responseRef.totalPrincipal }}</span>
        </div>
        <div class="text item">
          <span class="text-lg inline-flex w-24">余额</span
          ><span>{{ responseRef.totalCorrectedBalance }}</span>
        </div>
        <div class="text item">
          <span class="text-lg inline-flex w-24">盈亏</span
          ><span :class="classRef">{{
            responseRef.totalCorrectedProfitLoss
          }}</span>
        </div>
        <div class="text item">
          <span class="text-lg inline-flex w-24">盈亏比</span
          ><span :class="classRef">{{
            responseRef.totalCorrectedProfitLossRatio
          }}</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="24" class="mt-2">
      <el-card v-if="!device">
        <template #header>
          <div class="card-header">
            <span>交易詳情</span>
          </div>
        </template>
        <pure-table
          :data="responseRef.transactions"
          :columns="columns"
          border
          align-whole="center"
          table-layout="auto"
          adaptive
        />
      </el-card>
      <el-row :gutter="16" v-if="device">
        <el-col
          class="mt-2"
          v-for="(res, index) in responseRef.transactions"
          :key="index"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
          :xl="4"
        >
          <el-card>
            <div class="text item">
              <span class="text-lg inline-flex w-24">交易时间</span
              ><span>{{ res.dateTime }}</span>
            </div>
            <div class="text item">
              <span class="text-lg inline-flex w-24">操作类型</span>
              <span v-if="res.type > 0" class="text-green-500">卖</span>
              <span v-if="res.type <= 0" class="text-rose-500">买</span>
            </div>
            <div class="text item">
              <span class="text-lg inline-flex w-24">数量</span
              ><span>{{ res.quantity }}</span>
            </div>
            <div class="text item">
              <span class="text-lg inline-flex w-24">价格</span
              ><span>{{ res.price }}</span>
            </div>
            <div class="text item">
              <span class="text-lg inline-flex w-24">操作費用</span
              ><span>{{ res.absoluteCashFlow }}</span>
            </div>
            <div class="text item">
              <span class="text-lg inline-flex w-24">手续费</span
              ><span>{{ res.cost }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="mt-2">
          <KLineBar :data="responseRef" />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
