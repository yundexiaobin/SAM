import { http } from "@/utils/http";

type Result = {
  success: boolean;
  data: Array<any>;
};

export const getAsyncRoutes = () => {
  const result = http.request<Result>("get", "/getAsyncRoutes");
  return result;
};
