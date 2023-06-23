import { http } from "@/utils/http";
export const getAsyncRoutes = () => {
  // const result = apiSysMenuTreeGet;
  const result = http.services.apiSysMenuTreeGet();
  return result;
};
