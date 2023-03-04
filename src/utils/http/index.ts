import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CustomParamsSerializer
} from "axios";
import {
  PureHttpError,
  RequestMethods,
  PureHttpResponse,
  PureHttpRequestConfig
} from "./types.d";
import { stringify } from "qs";
import NProgress from "../progress";
import { getToken, formatToken, setToken } from "@/utils/auth";
import { Api } from "@/api-services/Api";

// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
  // 请求超时时间
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  // 数组格式参数序列化（https://github.com/axios/axios/issues/5142）
  paramsSerializer: {
    serialize: stringify as unknown as CustomParamsSerializer
  }
};

const apiAxiosConfig: AxiosRequestConfig = {
  // 请求超时时间
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // 数组格式参数序列化（https://github.com/axios/axios/issues/5142）
  paramsSerializer: {
    serialize: stringify as unknown as CustomParamsSerializer
  }
};

class PureHttp {
  constructor() {
    this.httpInterceptorsRequest(PureHttp.axiosInstance);
    this.httpInterceptorsResponse(PureHttp.axiosInstance);

    this.AxiosInterceptorsRequest(this.api.instance);
    this.AxiosInterceptorsResponse(this.api.instance);
  }

  /** token过期后，暂存待执行的请求 */
  private static requests = [];

  /** 初始化配置对象 */
  private static initConfig: PureHttpRequestConfig = {};

  /** 保存当前Axios实例对象 */
  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);

  public api: Api = new Api({
    ...apiAxiosConfig
  });

  /** 请求拦截 */
  private AxiosInterceptorsRequest(instance: AxiosInstance): void {
    instance.interceptors.request.use(async (config: PureHttpRequestConfig) => {
      // 开启进度条动画
      NProgress.start();
      // 优先判断post/get等方法是否传入回掉，否则执行初始化设置等回掉
      if (typeof config.beforeRequestCallback === "function") {
        config.beforeRequestCallback(config);
        return config;
      }

      if (PureHttp.initConfig.beforeRequestCallback) {
        PureHttp.initConfig.beforeRequestCallback(config);
        return config;
      }

      /** 请求白名单，放置一些不需要token的接口（通过设置请求白名单，防止token过期后再请求造成的死循环问题） */
      const whiteList = ["/login"];
      if (whiteList.some(v => config.url.indexOf(v) > -1)) {
        return config;
      }
      const data = getToken();
      if (data) {
        config.headers["Authorization"] = formatToken(data.accessToken);
        config.headers["X-Authorization"] = formatToken(data.refreshToken);
      }
      return config;
    });
  }

  private AxiosInterceptorsResponse(instance: AxiosInstance): void {
    instance.interceptors.response.use((response: PureHttpResponse) => {
      const $config = response.config;
      // 关闭进度条动画
      NProgress.done();
      // 优先判断post/get等方法是否传入回掉，否则执行初始化设置等回掉
      if (typeof $config.beforeResponseCallback === "function") {
        $config.beforeResponseCallback(response);
        return response;
      }
      if (PureHttp.initConfig.beforeResponseCallback) {
        PureHttp.initConfig.beforeResponseCallback(response);
        return response;
      }
      const newToken = response.headers["Authorization"];
      const newRefreshToken = response.headers["X-Authorization"];
      if (newToken && newRefreshToken) {
        setToken({ accessToken: newToken, refreshToken: newRefreshToken });
      }
      return response;
    });
  }

  /** 请求拦截 */
  private httpInterceptorsRequest(instance: AxiosInstance): void {
    instance.interceptors.request.use(
      async (config: PureHttpRequestConfig) => {
        // 开启进度条动画
        NProgress.start();
        // 优先判断post/get等方法是否传入回掉，否则执行初始化设置等回掉
        if (typeof config.beforeRequestCallback === "function") {
          config.beforeRequestCallback(config);
          return config;
        }
        if (PureHttp.initConfig.beforeRequestCallback) {
          PureHttp.initConfig.beforeRequestCallback(config);
          return config;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  /** 响应拦截 */
  private httpInterceptorsResponse(instance: AxiosInstance): void {
    instance.interceptors.response.use(
      (response: PureHttpResponse) => {
        const $config = response.config;
        // 关闭进度条动画
        NProgress.done();
        // 优先判断post/get等方法是否传入回掉，否则执行初始化设置等回掉
        if (typeof $config.beforeResponseCallback === "function") {
          $config.beforeResponseCallback(response);
          return response.data;
        }
        if (PureHttp.initConfig.beforeResponseCallback) {
          PureHttp.initConfig.beforeResponseCallback(response);
          return response.data;
        }
        return response.data;
      },
      (error: PureHttpError) => {
        const $error = error;
        $error.isCancelRequest = Axios.isCancel($error);
        // 关闭进度条动画
        NProgress.done();
        // 所有的响应异常 区分来源为取消请求/非取消请求
        return Promise.reject($error);
      }
    );
  }

  /** 通用请求工具函数 */
  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: PureHttpRequestConfig
  ): Promise<T> {
    const config = {
      method,
      url,
      ...param,
      ...axiosConfig
    } as PureHttpRequestConfig;

    // 单独处理自定义请求/响应回掉
    return new Promise((resolve, reject) => {
      PureHttp.axiosInstance
        .request(config)
        .then((response: undefined) => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /** 单独抽离的post工具函数 */
  public post<T, P>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: PureHttpRequestConfig
  ): Promise<P> {
    return this.request<P>("post", url, params, config);
  }

  /** 单独抽离的get工具函数 */
  public get<T, P>(
    url: string,
    params?: AxiosRequestConfig<T>,
    config?: PureHttpRequestConfig
  ): Promise<P> {
    return this.request<P>("get", url, params, config);
  }
}

export const http = new PureHttp();
