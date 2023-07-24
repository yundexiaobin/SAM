<script setup lang="ts">
import { ref, computed, watch, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions,
  UtilsEChartsOption,
  isNumber
} from "@pureadmin/utils";

import {
  TradyBackTestResponse,
  TransactionDto
} from "@/api-services/data-contracts";
interface FormProps {
  data: TradyBackTestResponse;
}

interface CurrentData {
  date: string;
  open: number;
  close: number;
  high: number;
  low: number;
  ma5: number;
  ma10: number;
  ma20: number;
  vol: number;
}

const props = withDefaults(defineProps<FormProps>(), {
  data: () => ({
    bars: [[]]
  })
});
const upColor = "#ec0000";
const downColor = "#00da3c";
const { isDark } = useDark();
const currentRef = ref<CurrentData>();
const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});
const markDataRef = ref([]);
function markData(d: TransactionDto[]) {
  const categoryData = [];
  d.forEach(t => {
    const valueStr = t.type == 0 ? "B" : "S";
    const color = t.type == 0 ? "rgb(255,0,0)" : "rgb(127,255,0)";
    categoryData.push({
      name: valueStr,
      xAxis: t.dateTime,
      yAxis: t.price,
      value: t.price,
      itemStyle: {
        color: color
      }
    });
  });
  markDataRef.value = categoryData;
}

function calculateMA(dayCount: number, data: { values: number[][] }) {
  const result = [];
  for (let i = 0, len = data.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push("-");
      continue;
    }
    let sum = 0;
    for (let j = 0; j < dayCount; j++) {
      sum += data.values[i - j][1];
    }
    result.push(+(sum / dayCount).toFixed(3));
  }
  return result;
}

const barChartRef = ref<HTMLDivElement | null>(null);

const { setOptions, resize } = useECharts(barChartRef as Ref<HTMLDivElement>, {
  theme
});
const newDataRef = ref({
  categoryData: [],
  values: [],
  volumes: []
});
function splitData1(rawData: number[][]) {
  const categoryData = [];
  const values = [];
  const volumes = [];
  for (let i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    values.push(rawData[i]);
    volumes.push([i, rawData[i][4], rawData[i][0] > rawData[i][1] ? 1 : -1]);
  }
  newDataRef.value = {
    categoryData: categoryData,
    values: values,
    volumes: volumes
  };
}

const createO = (): UtilsEChartsOption => {
  return {
    animation: false,
    legend: {
      bottom: 10,
      left: "center",
      data: ["Dow-Jones index", "MA5", "MA10", "MA20"]
    },
    tooltip: {
      show: true,
      trigger: "axis",
      axisPointer: {
        type: "cross"
      },
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      textStyle: {
        color: "#000"
      },
      formatter: params => {
        const value = params[0] as any;
        currentRef.value = {
          date: value.axisValue,
          open: value.data[1],
          close: value.data[2],
          high: value.data[3],
          low: value.data[4],
          ma5: isNumber(params[1].data) ? params[1].data.toFixed(2) : 0,
          ma10: isNumber(params[2].data) ? params[2].data.toFixed(2) : 0,
          ma20: isNumber(params[3].data) ? params[3].data.toFixed(2) : 0,
          vol: params[4].data[1]
        };
      }
      // extraCssText: 'width: 170px'
    },
    axisPointer: {
      link: [
        {
          xAxisIndex: "all"
        }
      ],
      label: {
        backgroundColor: "#777"
      }
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false
        },
        brush: {
          type: ["lineX", "clear"]
        }
      }
    },
    brush: {
      xAxisIndex: "all",
      brushLink: "all",
      outOfBrush: {
        colorAlpha: 0.1
      }
    },
    visualMap: {
      show: false,
      seriesIndex: 5,
      dimension: 2,
      pieces: [
        {
          value: 1,
          color: downColor
        },
        {
          value: -1,
          color: upColor
        }
      ]
    },
    grid: [
      {
        left: "10%",
        right: "8%",
        height: "50%"
      },
      {
        left: "10%",
        right: "8%",
        top: "63%",
        height: "16%"
      }
    ],
    xAxis: [
      {
        type: "category",
        data: newDataRef.value.categoryData,
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
        min: "dataMin",
        max: "dataMax",
        axisPointer: {
          z: 100
        }
      },
      {
        type: "category",
        gridIndex: 1,
        data: newDataRef.value.categoryData,
        boundaryGap: false,
        axisLine: { onZero: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        min: "dataMin",
        max: "dataMax"
      }
    ],
    yAxis: [
      {
        scale: true,
        splitArea: {
          show: true
        }
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false }
      }
    ],
    dataZoom: [
      {
        type: "inside",
        xAxisIndex: [0, 1],
        start: 50,
        end: 100
      },
      {
        show: true,
        xAxisIndex: [0, 1],
        type: "slider",
        top: "85%",
        start: 50,
        end: 100
      }
    ],
    series: [
      {
        name: "Dow-Jones index",
        type: "candlestick",
        data: newDataRef.value.values,
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: undefined,
          borderColor0: undefined
        },
        markPoint: {
          label: {
            formatter: function (param: any) {
              return param.name;
            }
          },
          data: markDataRef.value
        }
      },
      {
        name: "MA5",
        type: "line",
        data: calculateMA(5, newDataRef.value),
        smooth: true,
        lineStyle: {
          opacity: 0.5
        }
      },
      {
        name: "MA10",
        type: "line",
        data: calculateMA(10, newDataRef.value),
        smooth: true,
        lineStyle: {
          opacity: 0.5
        }
      },
      {
        name: "MA20",
        type: "line",
        data: calculateMA(20, newDataRef.value),
        smooth: true,
        lineStyle: {
          opacity: 0.5
        }
      },
      {
        name: "Volume",
        type: "bar",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: newDataRef.value.volumes
      }
    ]
  };
};
setOptions(createO(), {
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
    splitData1(props.data.bars);
    markData(props.data.transactions);
    setOptions(createO(), {
      name: "click",
      callback: params => {
        console.log("click", params);
      }
    });
  }
);
</script>

<template>
  <div v-if="currentRef">
    <el-row>
      <el-col :span="8" class="text-xs">{{ currentRef.date }}</el-col>
      <el-col :span="2" class="text-xs">开</el-col>
      <el-col :span="6" class="text-xs">{{ currentRef.open }}</el-col>
      <el-col :span="2" class="text-xs">收</el-col>
      <el-col :span="6" class="text-xs">{{ currentRef.close }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="2" class="text-xs">量</el-col>
      <el-col :span="6" class="text-xs">{{ currentRef.vol }}</el-col>
      <el-col :span="2" class="text-xs">高</el-col>
      <el-col :span="6" class="text-xs">{{ currentRef.high }}</el-col>
      <el-col :span="2" class="text-xs">低</el-col>
      <el-col :span="6" class="text-xs">{{ currentRef.low }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="2" class="text-xs">m5</el-col>
      <el-col :span="6" class="text-xs">{{ currentRef.ma5 }}</el-col>
      <el-col :span="2" class="text-xs">10</el-col>
      <el-col :span="6" class="text-xs">{{ currentRef.ma10 }}</el-col>
      <el-col :span="2" class="text-xs">20</el-col>
      <el-col :span="6" class="text-xs">{{ currentRef.ma20 }}</el-col>
    </el-row>
  </div>
  <div ref="barChartRef" style="width: 100%; height: 50vh" />
</template>
