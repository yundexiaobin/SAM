import { defineStore } from "pinia";
import { store } from "@/store";
import { userType } from "./types";
import { routerArrays } from "@/layout/types";
import { router, resetRouter } from "@/router";
import { storageSession } from "@pureadmin/utils";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import {
  type TokenInfo,
  setToken,
  removeToken,
  sessionKey
} from "@/utils/auth";
import { http } from "@/utils/http";
import { LoginOutput } from "@/api-services/data-contracts";

export const useUserStore = defineStore({
  id: "pure-user",
  state: (): userType => ({
    // 用户名
    username: storageSession().getItem<TokenInfo>(sessionKey)?.username ?? "",
    // 页面级别权限
    roles: storageSession().getItem<TokenInfo>(sessionKey)?.roles ?? [],
    // 前端生成的验证码（按实际需求替换）
    verifyCode: "",
    // 判断登录页面显示哪个组件（0：登录（默认）、1：手机登录、2：二维码登录、3：注册、4：忘记密码）
    currentPage: 0
  }),
  actions: {
    /** 存储用户名 */
    SET_USERNAME(username: string) {
      this.username = username;
    },
    /** 存储角色 */
    SET_ROLES(roles: Array<string>) {
      this.roles = roles;
    },
    /** 存储前端生成的验证码 */
    SET_VERIFYCODE(verifyCode: string) {
      this.verifyCode = verifyCode;
    },
    /** 存储登录页面显示哪个组件 */
    SET_CURRENTPAGE(value: number) {
      this.currentPage = value;
    },
    /** 登入 */
    async loginByUsername(data) {
      return new Promise<LoginOutput>((resolve, reject) => {
        http.api
          .apiSysAuthLoginPost({
            account: data.username,
            password: data.password
          })
          .then(rs => {
            if (rs.status === 200 && rs.data.code === 200) {
              const outputDto = rs.data.result;
              setToken({
                accessToken: outputDto.accessToken,
                refreshToken: outputDto.refreshToken,
                username: outputDto.username,
                roles: outputDto.roles
              });
              resolve(outputDto);
            } else {
              reject(rs.data.message);
            }
          })
          .catch(reason => {
            reject(reason);
          });
      });
    },
    /** 前端登出（不调用接口） */
    logOut() {
      this.username = "";
      this.roles = [];
      removeToken();
      useMultiTagsStoreHook().handleTags("equal", [...routerArrays]);
      resetRouter();
      router.push("/login");
    },
    /** 刷新`token` */
    async handRefreshToken(data) {
      let token = "";
      await http.api
        .apiSysAuthRefreshAccessTokenPost({
          refreshToken: data.refreshToken
        })
        .then(result => {
          if (result.status === 200 && result.data.code === 200) {
            const outputDto = result.data.result;
            setToken({
              accessToken: outputDto.accessToken,
              refreshToken: outputDto.refreshToken,
              username: null,
              roles: null
            });
            token = outputDto.accessToken;
          }
        });
      return token;
    }
  }
});

export function useUserStoreHook() {
  return useUserStore(store);
}
