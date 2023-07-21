<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions,
  UtilsEChartsOption
} from "@pureadmin/utils";

import {
  TradyBackTestResponse,
  TransactionDto
} from "@/api-services/data-contracts";
interface FormProps {
  data: TradyBackTestResponse;
}
const props = withDefaults(defineProps<FormProps>(), {
  data: () => ({
    bars: [[]]
  })
});

const upColor = "#ec0000";
const upBorderColor = "#8A0000";
const downColor = "#00da3c";
const downBorderColor = "#008F28";
const { isDark } = useDark();
const responseRef = ref(props.data);
const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});

function markData(d: TransactionDto[]) {
  const categoryData = [];
  d.forEach(t => {
    const value = t.type == 0 ? "B" : "S";
    categoryData.push({
      name: value,
      xAxis: t.dateTime,
      yAxis: t.price,
      value: t.price,
      itemStyle: {
        color: "rgb(41,60,85)"
      }
    });
  });
  return categoryData;
}

const dataRef = ref({
  categoryData: [],
  values: []
});
const nameRef = ref("K线");
function splitData(rawData: TradyBackTestResponse) {
  responseRef.value = rawData;
  const categoryData = [];
  const values = [];
  const bars = rawData.bars;
  for (let i = 0; i < bars.length; i++) {
    categoryData.push(bars[i].splice(0, 1)[0]);
    values.push(bars[i].splice(0));
  }
  dataRef.value.categoryData = categoryData;
  dataRef.value.values = values;
  nameRef.value = rawData.name + "(" + rawData.tsCode + ")";
}

function calculateMA(dayCount: number) {
  const result = [];
  for (let i = 0, len = dataRef.value.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push("-");
      continue;
    }
    let sum = 0;
    for (let j = 0; j < dayCount; j++) {
      sum += +dataRef.value.values[i - j][1];
    }
    result.push((sum / dayCount).toFixed(2));
  }
  return result;
}

const barChartRef = ref<HTMLDivElement | null>(null);

const { setOptions, resize } = useECharts(barChartRef as Ref<HTMLDivElement>, {
  theme
});
const createOptions = (): UtilsEChartsOption => {
  return {
    title: {
      show: false
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross"
      }
    },
    legend: {
      data: ["日K", "MA5", "MA10", "MA20", "MA30"]
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "15%"
    },
    xAxis: {
      type: "category",
      data: dataRef.value.categoryData,
      boundaryGap: false,
      axisLine: { onZero: false },
      splitLine: { show: false },
      min: "dataMin",
      max: "dataMax"
    },
    yAxis: {
      scale: true,
      splitArea: {
        show: true
      }
    },
    dataZoom: [
      {
        type: "inside",
        start: 50,
        end: 100
      },
      {
        show: true,
        type: "slider",
        top: "90%",
        start: 50,
        end: 100
      }
    ],
    series: [
      {
        name: "日K",
        type: "candlestick",
        data: dataRef.value.values,
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor
        },
        markPoint: {
          label: {
            formatter: function (param: any) {
              return param != null ? Math.round(param.value) + "" : "";
            }
          },
          data: markData(responseRef.value.transactions),
          tooltip: {
            formatter: function (param: any) {
              return param.name + "<br>" + (param.data.coord || "");
            }
          }
        }
      },
      {
        name: "MA5",
        type: "line",
        data: calculateMA(5),
        smooth: true,
        lineStyle: {
          opacity: 0.5
        }
      },
      {
        name: "MA10",
        type: "line",
        data: calculateMA(10),
        smooth: true,
        lineStyle: {
          opacity: 0.5
        }
      },
      {
        name: "MA20",
        type: "line",
        data: calculateMA(20),
        smooth: true,
        lineStyle: {
          opacity: 0.5
        }
      },
      {
        name: "MA30",
        type: "line",
        data: calculateMA(30),
        smooth: true,
        lineStyle: {
          opacity: 0.5
        }
      }
    ],
    addTooltip: true
  };
};
setOptions(createOptions(), {
  name: "click",
  callback: params => {
    console.log("click", params);
  }
});

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(600).then(() => resize());
  }
);

watch(
  () => props.data,
  () => {
    splitData(props.data);
    setOptions(createOptions(), {
      name: "click",
      callback: params => {
        console.log("click", params);
      }
    });
  }
);
</script>

<template>
  <div ref="barChartRef" style="width: 100%; height: 35vh" />
</template>
