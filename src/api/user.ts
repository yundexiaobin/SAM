import { http } from "@/utils/http";
import { formatToken } from "@/utils/auth";

export type UserResult = {
  success: boolean;
  data: {
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
};

export type ProfileResult = {
  success: boolean;
  data: {
    /** 用户名 */
    userName: string;
    /** 当前登陆用户的角色 */
    extraProperties: {
      Roles: Array<string>;
    };
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  const a = import.meta.env.VITE_AUTH_SERVER;
  const resp = http.request<UserResult>("post", a + "/api/identity/authorize", {
    data
  });
  return resp;
};

/** 获取资料 */
export const getProfile = (data: UserResult) => {
  const a = import.meta.env.VITE_AUTH_SERVER;
  return http.request<ProfileResult>("get", a + "/api/account/my-profile", {
    data: data,
    headers: {
      Authorization: formatToken(data.data.accessToken)
    }
  });
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>(
    "post",
    import.meta.env.VITE_AUTH_SERVER + "/api/identity/refreshToken",
    { data }
  );
};
