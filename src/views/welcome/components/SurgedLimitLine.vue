<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";
import { ref, computed, watch, type Ref } from "vue";
import { useAppStoreHook } from "@/store/modules/app";
import {
  delay,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";
import { http } from "@/utils/http";

const { isDark } = useDark();

const theme: EchartOptions["theme"] = computed(() => {
  return isDark.value ? "dark" : "default";
});

export type SurgedDeclineInfoDto = {
  surgedCount: number;
  declineCount: number;
  day: string;
};

const surgedData: number[] = [];
const declineData: number[] = [];
const dayData: string[] = [];

const lineChartRef = ref<HTMLDivElement | null>(null);
const { setOptions, getInstance, resize } = useECharts(
  lineChartRef as Ref<HTMLDivElement>,
  { theme }
);

http.api.apiStockSurgedDeclineInfoGet().then(res => {
  if (res.status === 200 && res.data.code === 200) {
    const items = res.data.result;
    items.map(v => {
      surgedData.push(v.surgedCount);
      declineData.push(v.declineCount);
      dayData.push(v.day);
      setOptions(
        {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          grid: {
            bottom: "20px",
            right: "10px"
          },
          legend: {
            //@ts-expect-error
            right: true,
            data: ["涨停", "跌停"]
          },
          calculable: true,
          xAxis: [
            {
              triggerEvent: true,
              type: "category",
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              data: dayData
            }
          ],
          yAxis: [
            {
              triggerEvent: true,
              type: "value",
              splitLine: {
                show: false
              },
              axisLine: {
                show: true
              }
            }
          ],
          dataZoom: [
            {
              type: "slider",
              show: false,
              realtime: true,
              startValue: 0,
              endValue: 24
            }
          ],
          series: [
            {
              name: "涨停",
              type: "line",
              symbolSize: 10,
              symbol: "circle",
              color: "#f10909",
              markPoint: {
                label: {
                  color: "#fff"
                },
                data: [
                  {
                    type: "max",
                    name: "最大值"
                  },
                  {
                    type: "min",
                    name: "最小值"
                  }
                ]
              },
              data: surgedData
            },
            {
              name: "跌停",
              type: "line",
              symbolSize: 10,
              symbol: "circle",
              color: "#06f35c",
              markPoint: {
                label: {
                  color: "#fff"
                },
                data: [
                  {
                    type: "max",
                    name: "最大值"
                  },
                  {
                    type: "min",
                    name: "最小值"
                  }
                ]
              },
              data: declineData
            }
          ],
          addTooltip: true
        },
        {
          name: "click",
          callback: params => {
            console.log("click", params);
          }
        },
        {
          name: "contextmenu",
          callback: params => {
            console.log("contextmenu", params);
          }
        },
        // 点击空白处
        {
          type: "zrender",
          name: "click",
          callback: params => {
            console.log("点击空白处", params);
          }
        }
      );
    });
  }
});

let a = 1;
useIntervalFn(() => {
  if (a == dayData.length - 24) {
    a = 0;
  }
  getInstance()!.dispatchAction({
    type: "dataZoom",
    startValue: a,
    endValue: a + 24
  });
  a++;
}, 2000);

watch(
  () => useAppStoreHook().getSidebarStatus,
  () => {
    delay(600).then(() => resize());
  }
);
</script>

<template>
  <div ref="lineChartRef" style="width: 100%; height: 35vh" />
</template>
