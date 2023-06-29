/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  AddStockOptionalRequest,
  AddSysMenuRequest,
  AddSysRoleRequest,
  AddSysUserRequest,
  AdminResultBoolean,
  AdminResultCaptchaDto,
  AdminResultFileResult,
  AdminResultICollectionMenuResponse,
  AdminResultICollectionSearchConfigResponse,
  AdminResultListSurgedDeclineInfoDto,
  AdminResultListTodayAttentionDto,
  AdminResultLoginOutput,
  AdminResultLoginUserOutput,
  AdminResultObject,
  AdminResultPageResultResponseStockDto,
  AdminResultPageResultResponseStockOptionalResponse,
  AdminResultPageResultResponseStockPerceptionDto,
  AdminResultPageResultResponseStockResponse,
  AdminResultPageResultResponseSysMenuResponse,
  AdminResultPageResultResponseSysRoleResponse,
  AdminResultPageResultResponseSysUserResponse,
  AdminResultStockOptionalResponse,
  AdminResultStockResponse,
  AdminResultString,
  AdminResultSysMenuResponse,
  AdminResultSysRoleResponse,
  AdminResultSysUserResponse,
  LoginInput,
  SearchRequest,
  StockPerceptionRequestDto,
  UpdateStockOptionalRequest,
  UpdateSysMenuRequest,
  UpdateSysRoleRequest,
  UpdateSysUserRequest,
  ValidateCaptchaInput
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 用户名/密码：superadmin/123456
   *
   * @tags sysAuth
   * @name ApiSysAuthLoginPost
   * @summary 登录系统
   * @request POST:/api/sysAuth/login
   * @secure
   * @response `200` `AdminResultLoginOutput` Success
   */
  apiSysAuthLoginPost = (data: LoginInput, params: RequestParams = {}) =>
    this.request<AdminResultLoginOutput, any>({
      path: `/api/sysAuth/login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysAuth
   * @name ApiSysAuthUserInfoGet
   * @summary 获取登录账号
   * @request GET:/api/sysAuth/userInfo
   * @secure
   * @response `200` `AdminResultLoginUserOutput` Success
   */
  apiSysAuthUserInfoGet = (params: RequestParams = {}) =>
    this.request<AdminResultLoginUserOutput, any>({
      path: `/api/sysAuth/userInfo`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysAuth
   * @name ApiSysAuthRefreshTokenGet
   * @summary 获取刷新Token
   * @request GET:/api/sysAuth/refreshToken/{accessToken}
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiSysAuthRefreshTokenGet = (accessToken: string, params: RequestParams = {}) =>
    this.request<AdminResultString, any>({
      path: `/api/sysAuth/refreshToken/${accessToken}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysAuth
   * @name ApiSysAuthLogoutPost
   * @summary 退出系统
   * @request POST:/api/sysAuth/logout
   * @secure
   * @response `200` `void` Success
   */
  apiSysAuthLogoutPost = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysAuth/logout`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags sysAuth
   * @name ApiSysAuthLoginConfigGet
   * @summary 获取登录配置
   * @request GET:/api/sysAuth/loginConfig
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysAuthLoginConfigGet = (params: RequestParams = {}) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysAuth/loginConfig`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysAuth
   * @name ApiSysAuthCaptchaGet
   * @summary 获取验证码
   * @request GET:/api/sysAuth/captcha
   * @secure
   * @response `200` `AdminResultCaptchaDto` Success
   */
  apiSysAuthCaptchaGet = (params: RequestParams = {}) =>
    this.request<AdminResultCaptchaDto, any>({
      path: `/api/sysAuth/captcha`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysAuth
   * @name ApiSysAuthValidateCaptchaPost
   * @summary 驗證驗證碼
   * @request POST:/api/sysAuth/validateCaptcha
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysAuthValidateCaptchaPost = (data: ValidateCaptchaInput, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysAuth/validateCaptcha`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysAuth
   * @name ApiSysAuthSwaggerCheckUrlPost
   * @summary swagger登录检查
   * @request POST:/api/swagger/checkUrl
   * @secure
   * @response `200` `number` Success
   */
  apiSysAuthSwaggerCheckUrlPost = (params: RequestParams = {}) =>
    this.request<number, any>({
      path: `/api/swagger/checkUrl`,
      method: "POST",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysAuth
   * @name ApiSysAuthSwaggerSubmitUrlPost
   * @summary swagger登录提交
   * @request POST:/api/swagger/submitUrl
   * @secure
   * @response `200` `number` Success
   */
  apiSysAuthSwaggerSubmitUrlPost = (
    data: {
      UserName?: string;
      Password?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<number, any>({
      path: `/api/swagger/submitUrl`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserPost
   * @request POST:/api/sysUser
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysUserPost = (data: AddSysUserRequest, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysUser`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserPut
   * @summary 修改
   * @request PUT:/api/sysUser/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysUserPut = (id: number, data: UpdateSysUserRequest, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysUser/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserDelete
   * @summary 删除
   * @request DELETE:/api/sysUser/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysUserDelete = (id: number, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysUser/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserGet
   * @summary 數據詳情
   * @request GET:/api/sysUser/{id}
   * @secure
   * @response `200` `AdminResultSysUserResponse` Success
   */
  apiSysUserGet = (id: number, params: RequestParams = {}) =>
    this.request<AdminResultSysUserResponse, any>({
      path: `/api/sysUser/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserSearchConfigGet
   * @summary 获取搜索查询配置
   * @request GET:/api/sysUser/searchConfig
   * @secure
   * @response `200` `AdminResultICollectionSearchConfigResponse` Success
   */
  apiSysUserSearchConfigGet = (params: RequestParams = {}) =>
    this.request<AdminResultICollectionSearchConfigResponse, any>({
      path: `/api/sysUser/searchConfig`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserSearchPost
   * @summary 搜索
   * @request POST:/api/sysUser/search
   * @secure
   * @response `200` `AdminResultPageResultResponseSysUserResponse` Success
   */
  apiSysUserSearchPost = (data: SearchRequest, params: RequestParams = {}) =>
    this.request<AdminResultPageResultResponseSysUserResponse, any>({
      path: `/api/sysUser/search`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserListGet
   * @summary 數據列表
   * @request GET:/api/sysUser/list
   * @secure
   * @response `200` `AdminResultPageResultResponseSysUserResponse` Success
   */
  apiSysUserListGet = (
    query?: {
      /**
       * 页码
       * @format int32
       */
      PageNumber?: number;
      /**
       * 页面大小
       * @format int32
       */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultPageResultResponseSysUserResponse, any>({
      path: `/api/sysUser/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRolePost
   * @summary 创建
   * @request POST:/api/sysRole
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysRolePost = (data: AddSysRoleRequest, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysRole`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRolePut
   * @summary 修改
   * @request PUT:/api/sysRole/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysRolePut = (id: number, data: UpdateSysRoleRequest, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysRole/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRoleDelete
   * @summary 删除
   * @request DELETE:/api/sysRole/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysRoleDelete = (id: number, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysRole/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRoleGet
   * @summary 數據詳情
   * @request GET:/api/sysRole/{id}
   * @secure
   * @response `200` `AdminResultSysRoleResponse` Success
   */
  apiSysRoleGet = (id: number, params: RequestParams = {}) =>
    this.request<AdminResultSysRoleResponse, any>({
      path: `/api/sysRole/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRoleSearchConfigGet
   * @summary 获取搜索查询配置
   * @request GET:/api/sysRole/searchConfig
   * @secure
   * @response `200` `AdminResultICollectionSearchConfigResponse` Success
   */
  apiSysRoleSearchConfigGet = (params: RequestParams = {}) =>
    this.request<AdminResultICollectionSearchConfigResponse, any>({
      path: `/api/sysRole/searchConfig`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRoleSearchPost
   * @summary 搜索
   * @request POST:/api/sysRole/search
   * @secure
   * @response `200` `AdminResultPageResultResponseSysRoleResponse` Success
   */
  apiSysRoleSearchPost = (data: SearchRequest, params: RequestParams = {}) =>
    this.request<AdminResultPageResultResponseSysRoleResponse, any>({
      path: `/api/sysRole/search`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRoleListGet
   * @summary 數據列表
   * @request GET:/api/sysRole/list
   * @secure
   * @response `200` `AdminResultPageResultResponseSysRoleResponse` Success
   */
  apiSysRoleListGet = (
    query?: {
      /**
       * 页码
       * @format int32
       */
      PageNumber?: number;
      /**
       * 页面大小
       * @format int32
       */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultPageResultResponseSysRoleResponse, any>({
      path: `/api/sysRole/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuTreeGet
   * @summary 获取菜单树
   * @request GET:/api/sysMenu/tree
   * @secure
   * @response `200` `AdminResultICollectionMenuResponse` Success
   */
  apiSysMenuTreeGet = (params: RequestParams = {}) =>
    this.request<AdminResultICollectionMenuResponse, any>({
      path: `/api/sysMenu/tree`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuPost
   * @summary 创建
   * @request POST:/api/sysMenu
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysMenuPost = (data: AddSysMenuRequest, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysMenu`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuPut
   * @summary 修改
   * @request PUT:/api/sysMenu/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysMenuPut = (id: number, data: UpdateSysMenuRequest, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysMenu/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuDelete
   * @summary 删除
   * @request DELETE:/api/sysMenu/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysMenuDelete = (id: number, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysMenu/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuGet
   * @summary 數據詳情
   * @request GET:/api/sysMenu/{id}
   * @secure
   * @response `200` `AdminResultSysMenuResponse` Success
   */
  apiSysMenuGet = (id: number, params: RequestParams = {}) =>
    this.request<AdminResultSysMenuResponse, any>({
      path: `/api/sysMenu/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuSearchConfigGet
   * @summary 获取搜索查询配置
   * @request GET:/api/sysMenu/searchConfig
   * @secure
   * @response `200` `AdminResultICollectionSearchConfigResponse` Success
   */
  apiSysMenuSearchConfigGet = (params: RequestParams = {}) =>
    this.request<AdminResultICollectionSearchConfigResponse, any>({
      path: `/api/sysMenu/searchConfig`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuSearchPost
   * @summary 搜索
   * @request POST:/api/sysMenu/search
   * @secure
   * @response `200` `AdminResultPageResultResponseSysMenuResponse` Success
   */
  apiSysMenuSearchPost = (data: SearchRequest, params: RequestParams = {}) =>
    this.request<AdminResultPageResultResponseSysMenuResponse, any>({
      path: `/api/sysMenu/search`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuListGet
   * @summary 數據列表
   * @request GET:/api/sysMenu/list
   * @secure
   * @response `200` `AdminResultPageResultResponseSysMenuResponse` Success
   */
  apiSysMenuListGet = (
    query?: {
      /**
       * 页码
       * @format int32
       */
      PageNumber?: number;
      /**
       * 页面大小
       * @format int32
       */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultPageResultResponseSysMenuResponse, any>({
      path: `/api/sysMenu/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags backgroundJob
   * @name ApiBackgroundJobExecuteStockStopDownJobPost
   * @request POST:/api/backgroundJob/executeStockStopDownJob
   * @secure
   * @response `200` `void` Success
   */
  apiBackgroundJobExecuteStockStopDownJobPost = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/backgroundJob/executeStockStopDownJob`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags backgroundJob
   * @name ApiBackgroundJobExecuteStockAvg20JobPost
   * @request POST:/api/backgroundJob/executeStockAvg20Job
   * @secure
   * @response `200` `void` Success
   */
  apiBackgroundJobExecuteStockAvg20JobPost = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/backgroundJob/executeStockAvg20Job`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags backgroundJob
   * @name ApiBackgroundJobExecuteStockHotJobPost
   * @request POST:/api/backgroundJob/executeStockHotJob
   * @secure
   * @response `200` `void` Success
   */
  apiBackgroundJobExecuteStockHotJobPost = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/backgroundJob/executeStockHotJob`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags quant
   * @name ApiQuantTradyTestPost
   * @request POST:/api/quant/tradyTest/{symbol}/{begin}
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiQuantTradyTestPost = (symbol: string, begin: string, params: RequestParams = {}) =>
    this.request<AdminResultString, any>({
      path: `/api/quant/tradyTest/${symbol}/${begin}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stockOptional
   * @name ApiStockOptionalPost
   * @summary 创建
   * @request POST:/api/stockOptional
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiStockOptionalPost = (data: AddStockOptionalRequest, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/stockOptional`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stockOptional
   * @name ApiStockOptionalPut
   * @summary 修改
   * @request PUT:/api/stockOptional/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiStockOptionalPut = (id: number, data: UpdateStockOptionalRequest, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/stockOptional/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stockOptional
   * @name ApiStockOptionalDelete
   * @summary 删除
   * @request DELETE:/api/stockOptional/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiStockOptionalDelete = (id: number, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/stockOptional/${id}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stockOptional
   * @name ApiStockOptionalGet
   * @summary 數據詳情
   * @request GET:/api/stockOptional/{id}
   * @secure
   * @response `200` `AdminResultStockOptionalResponse` Success
   */
  apiStockOptionalGet = (id: number, params: RequestParams = {}) =>
    this.request<AdminResultStockOptionalResponse, any>({
      path: `/api/stockOptional/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stockOptional
   * @name ApiStockOptionalSearchConfigGet
   * @summary 获取搜索查询配置
   * @request GET:/api/stockOptional/searchConfig
   * @secure
   * @response `200` `AdminResultICollectionSearchConfigResponse` Success
   */
  apiStockOptionalSearchConfigGet = (params: RequestParams = {}) =>
    this.request<AdminResultICollectionSearchConfigResponse, any>({
      path: `/api/stockOptional/searchConfig`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stockOptional
   * @name ApiStockOptionalSearchPost
   * @summary 搜索
   * @request POST:/api/stockOptional/search
   * @secure
   * @response `200` `AdminResultPageResultResponseStockOptionalResponse` Success
   */
  apiStockOptionalSearchPost = (data: SearchRequest, params: RequestParams = {}) =>
    this.request<AdminResultPageResultResponseStockOptionalResponse, any>({
      path: `/api/stockOptional/search`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stockOptional
   * @name ApiStockOptionalListGet
   * @summary 數據列表
   * @request GET:/api/stockOptional/list
   * @secure
   * @response `200` `AdminResultPageResultResponseStockOptionalResponse` Success
   */
  apiStockOptionalListGet = (
    query?: {
      /**
       * 页码
       * @format int32
       */
      PageNumber?: number;
      /**
       * 页面大小
       * @format int32
       */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultPageResultResponseStockOptionalResponse, any>({
      path: `/api/stockOptional/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stock
   * @name ApiStockSearchConfigGet
   * @request GET:/api/stock/searchConfig
   * @secure
   * @response `200` `AdminResultICollectionSearchConfigResponse` Success
   */
  apiStockSearchConfigGet = (params: RequestParams = {}) =>
    this.request<AdminResultICollectionSearchConfigResponse, any>({
      path: `/api/stock/searchConfig`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stock
   * @name ApiStockSurgedLimitStockGet
   * @summary 查询指定日期涨停数据
   * @request GET:/api/stock/surgedLimitStock
   * @secure
   * @response `200` `AdminResultPageResultResponseStockDto` Success
   */
  apiStockSurgedLimitStockGet = (
    query?: {
      /**
       * 指定日期涨停
       * @format date-time
       * @example "Datetime.Today"
       */
      TradeDay?: string;
      /**
       * 历史涨停
       * @format int32
       */
      HistoryDay?: number;
      /**
       * 页码
       * @format int32
       */
      PageNumber?: number;
      /**
       * 页面大小
       * @format int32
       */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultPageResultResponseStockDto, any>({
      path: `/api/stock/surgedLimitStock`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stock
   * @name ApiStockSurgedDeclineInfoGet
   * @summary 获取涨停统计信息
   * @request GET:/api/stock/surgedDeclineInfo
   * @secure
   * @response `200` `AdminResultListSurgedDeclineInfoDto` Success
   */
  apiStockSurgedDeclineInfoGet = (params: RequestParams = {}) =>
    this.request<AdminResultListSurgedDeclineInfoDto, any>({
      path: `/api/stock/surgedDeclineInfo`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stock
   * @name ApiStockWritePerceptionPost
   * @summary 寫交易心得
   * @request POST:/api/stock/writePerception
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiStockWritePerceptionPost = (data: StockPerceptionRequestDto, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/stock/writePerception`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stock
   * @name ApiStockPerceptionGet
   * @summary 獲取交易心得
   * @request GET:/api/stock/perception
   * @secure
   * @response `200` `AdminResultPageResultResponseStockPerceptionDto` Success
   */
  apiStockPerceptionGet = (
    query?: {
      /**
       * 页码
       * @format int32
       */
      PageNumber?: number;
      /**
       * 页面大小
       * @format int32
       */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultPageResultResponseStockPerceptionDto, any>({
      path: `/api/stock/perception`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stock
   * @name ApiStockTodayHotStockGet
   * @summary 查询当天的热门股
   * @request GET:/api/stock/todayHotStock
   * @secure
   * @response `200` `AdminResultListTodayAttentionDto` Success
   */
  apiStockTodayHotStockGet = (params: RequestParams = {}) =>
    this.request<AdminResultListTodayAttentionDto, any>({
      path: `/api/stock/todayHotStock`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stock
   * @name ApiStockSearchPost
   * @summary 搜索
   * @request POST:/api/stock/search
   * @secure
   * @response `200` `AdminResultPageResultResponseStockResponse` Success
   */
  apiStockSearchPost = (data: SearchRequest, params: RequestParams = {}) =>
    this.request<AdminResultPageResultResponseStockResponse, any>({
      path: `/api/stock/search`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stock
   * @name ApiStockListGet
   * @summary 數據列表
   * @request GET:/api/stock/list
   * @secure
   * @response `200` `AdminResultPageResultResponseStockResponse` Success
   */
  apiStockListGet = (
    query?: {
      /**
       * 页码
       * @format int32
       */
      PageNumber?: number;
      /**
       * 页面大小
       * @format int32
       */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultPageResultResponseStockResponse, any>({
      path: `/api/stock/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags stock
   * @name ApiStockGet
   * @summary 數據詳情
   * @request GET:/api/stock/{id}
   * @secure
   * @response `200` `AdminResultStockResponse` Success
   */
  apiStockGet = (id: number, params: RequestParams = {}) =>
    this.request<AdminResultStockResponse, any>({
      path: `/api/stock/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags public
   * @name ApiPublicWallpaperGet
   * @request GET:/api/public/wallpaper
   * @secure
   * @response `200` `void` Success
   */
  apiPublicWallpaperGet = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/public/wallpaper`,
      method: "GET",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags sync
   * @name ApiSyncSyncStructurePost
   * @request POST:/api/sync/syncStructure
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiSyncSyncStructurePost = (params: RequestParams = {}) =>
    this.request<AdminResultString, any>({
      path: `/api/sync/syncStructure`,
      method: "POST",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sync
   * @name ApiSyncSyncTradeDayPost
   * @request POST:/api/sync/syncTradeDay
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiSyncSyncTradeDayPost = (params: RequestParams = {}) =>
    this.request<AdminResultString, any>({
      path: `/api/sync/syncTradeDay`,
      method: "POST",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sync
   * @name ApiSyncSyncStockItemPost
   * @request POST:/api/sync/syncStockItem
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiSyncSyncStockItemPost = (params: RequestParams = {}) =>
    this.request<AdminResultString, any>({
      path: `/api/sync/syncStockItem`,
      method: "POST",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sync
   * @name ApiSyncSyncStockDailyPost
   * @request POST:/api/sync/syncStockDaily
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiSyncSyncStockDailyPost = (
    query?: {
      /** @format date-time */
      startDate?: string;
      /** @format date-time */
      endDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultString, any>({
      path: `/api/sync/syncStockDaily`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sync
   * @name ApiSyncSyncStockHistoryDailyPost
   * @request POST:/api/sync/syncStockHistoryDaily
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiSyncSyncStockHistoryDailyPost = (
    query?: {
      /** @format date-time */
      startDate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultString, any>({
      path: `/api/sync/syncStockHistoryDaily`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sync
   * @name ApiSyncStockOptionalPost
   * @request POST:/api/sync/stockOptional
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiSyncStockOptionalPost = (params: RequestParams = {}) =>
    this.request<AdminResultString, any>({
      path: `/api/sync/stockOptional`,
      method: "POST",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sync
   * @name ApiSyncFileGet
   * @request GET:/api/sync/file
   * @secure
   * @response `200` `AdminResultFileResult` Success
   */
  apiSyncFileGet = (params: RequestParams = {}) =>
    this.request<AdminResultFileResult, any>({
      path: `/api/sync/file`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
}
