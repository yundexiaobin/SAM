<script setup lang="tsx">
import { ref, computed, watch, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";

import { TradyBackTestResponse } from "@/api-services/data-contracts";
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

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "light";
});

const dataRef = ref({
  categoryData: [],
  values: []
});

function splitData(rawData: any) {
  const categoryData = [];
  const values = [];
  const bars = rawData.bars;
  for (let i = 0; i < bars.length; i++) {
    categoryData.push(bars[i].splice(0, 1)[0]);
    values.push(bars[i].splice(0));
  }
  dataRef.value.categoryData = categoryData;
  dataRef.value.values = values;
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
const createOptions = () => {
  return {
    title: {
      text: "K线",
      left: 0
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
          data: [
            {
              name: "Mark",
              coord: ["2013/5/31", 2300],
              value: 2300,
              itemStyle: {
                color: "rgb(41,60,85)"
              }
            },
            {
              name: "highest value",
              type: "max",
              valueDim: "highest"
            },
            {
              name: "lowest value",
              type: "min",
              valueDim: "lowest"
            },
            {
              name: "average value on close",
              type: "average",
              valueDim: "close"
            }
          ],
          tooltip: {
            formatter: function (param: any) {
              return param.name + "<br>" + (param.data.coord || "");
            }
          }
        },
        markLine: {
          symbol: ["none", "none"],
          data: [
            [
              {
                name: "from lowest to highest",
                type: "min",
                valueDim: "lowest",
                symbol: "circle",
                symbolSize: 10,
                label: {
                  show: false
                },
                emphasis: {
                  label: {
                    show: false
                  }
                }
              },
              {
                type: "max",
                valueDim: "highest",
                symbol: "circle",
                symbolSize: 10,
                label: {
                  show: false
                },
                emphasis: {
                  label: {
                    show: false
                  }
                }
              }
            ],
            {
              name: "min line on close",
              type: "min",
              valueDim: "close"
            },
            {
              name: "max line on close",
              type: "max",
              valueDim: "close"
            }
          ]
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
