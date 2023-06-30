import { markRaw, onMounted, ref } from "vue";
import { http } from "@/utils/http";
import dayjs from "dayjs";
import { useRenderFlicker } from "@/components/ReFlicker";
import {randomColor} from "@pureadmin/utils";

export function useHook() {
  const perceptionData = ref();
  const loading = ref(true);

  function initStockPerception() {
    loading.value = true;
    setTimeout(async () => {
      const response = await http.services.apiStockPerceptionSearchPost({});
      const data = response.data;
      perceptionData.value = data.items.map(v => {
        return {
          content: v.content,
          timestamp: dayjs(v.inputDate).format("YYYY/MM/DD HH:mm:ss"),
          icon: markRaw(
            useRenderFlicker({
              background: randomColor({ type: "hex" }) as string
            })
          )
        };
      });
      loading.value = false;
    }, 500);
  }

  onMounted(() => {
    initStockPerception();
  });

  return { perceptionData, loading };
}
