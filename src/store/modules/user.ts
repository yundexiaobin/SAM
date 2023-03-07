import { defineStore } from "pinia";
import { store } from "@/store";
import { userType } from "./types";
import { routerArrays } from "@/layout/types";
import { router, resetRouter } from "@/router";
import { storageLocal } from "@pureadmin/utils";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import { type TokenInfo, setToken, removeToken, TokenKey } from "@/utils/auth";
import { http } from "@/utils/http";
import { LoginOutput } from "@/api-services/data-contracts";

export const useUserStore = defineStore({
  id: "pure-user",
  state: (): userType => ({
    // 用户名
    username: storageLocal().getItem<TokenInfo>(TokenKey)?.username ?? "",
    // 页面级别权限
    roles: storageLocal().getItem<TokenInfo>(TokenKey)?.roles ?? [],
    // 前端生成的验证码（按实际需求替换）
    verifyCode: "0",
    // 判断登录页面显示哪个组件（0：登录（默认）、1：手机登录、2：二维码登录、3：注册、4：忘记密码）
    currentPage: 0,
    fresh: false
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
    REFRESH_VERIFY(fresh: boolean) {
      this.fresh = fresh;
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
            password: data.password,
            codeId: data.codeId,
            code: data.code
          })
          .then(rs => {
            if (rs.data.code === 200) {
              const outputDto = rs.data.result;
              setToken({
                accessToken: outputDto.accessToken,
                refreshToken: outputDto.refreshToken,
                username: outputDto.username,
                roles: outputDto.roles
              });
              resolve(outputDto);
            } else {
              reject(rs.data);
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
    }
  }
});

export function useUserStoreHook() {
  return useUserStore(store);
}
