import { http } from "@/utils/http";
import { formatToken } from "@/utils/auth";
import { ApiResponse } from "@/utils/apiresponse";

export type UserResult = {
  /** 用户名 */
  username: string;
  /** 当前登陆用户的角色 */
  roles: Array<string>;
  /** `token` */
  accessToken: string;
  /** 用于调用刷新`accessToken`的接口时所需的`token` */
  refreshToken: string;
  /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
  expires: Date;
};

export type ProfileResult = {
  /** 用户名 */
  userName: string;
  /** 当前登陆用户的角色 */
  extraProperties: {
    Roles: Array<string>;
  };
};

export type RefreshTokenResult = {
  /** `token` */
  accessToken: string;
  /** 用于调用刷新`accessToken`的接口时所需的`token` */
  refreshToken: string;
  /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
  expires: Date;
};

/** 登录 */
export const getLogin = (data?: object) => {
  const a = import.meta.env.VITE_API_BASE_URL;
  const resp = http.request<ApiResponse<UserResult>>(
    "post",
    a + "/api/identity/authorize",
    {
      data
    }
  );
  return resp;
};

/** 获取资料 */
export const getProfile = (data: ApiResponse<UserResult>) => {
  const a = import.meta.env.VITE_API_BASE_URL;
  return http.request<ApiResponse<ProfileResult>>(
    "get",
    a + "/api/account/my-profile",
    {
      data: data,
      headers: {
        Authorization: formatToken(data.data.accessToken)
      }
    }
  );
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<ApiResponse<RefreshTokenResult>>(
    "post",
    import.meta.env.VITE_API_BASE_URL + "/api/identity/refreshToken",
    { data }
  );
};
