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
  AdminResultPageResultDtoStockDto,
  AdminResultPageResultDtoStockOptionalDto,
  AdminResultPageResultDtoStockPerceptionDto,
  AdminResultPageResultResponseStockResponse,
  AdminResultPageResultResponseSysMenuResponse,
  AdminResultPageResultResponseSysRoleResponse,
  AdminResultPageResultResponseSysUserResponse,
  AdminResultStockResponse,
  AdminResultString,
  AdminResultSysMenuResponse,
  AdminResultSysRoleResponse,
  AdminResultSysUserResponse,
  LoginInput,
  SearchRequest,
  StockPerceptionRequestDto,
  UpdateSysMenuRequest,
  UpdateSysRoleRequest,
  UpdateSysUserRequest,
  ValidateCaptchaInput
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags sysAuth
   * @name ApiSysAuthLoginPost
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
   * @request GET:/api/sysAuth/refreshToken/{accessToken}
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiSysAuthRefreshTokenGet = (
    accessToken: string,
    params: RequestParams = {}
  ) =>
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
   * @request POST:/api/sysAuth/validateCaptcha
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysAuthValidateCaptchaPost = (
    data: ValidateCaptchaInput,
    params: RequestParams = {}
  ) =>
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
   * @request PUT:/api/sysUser/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysUserPut = (
    id: number,
    data: UpdateSysUserRequest,
    params: RequestParams = {}
  ) =>
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
   * @request GET:/api/sysUser/list
   * @secure
   * @response `200` `AdminResultPageResultResponseSysUserResponse` Success
   */
  apiSysUserListGet = (
    query?: {
      /** @format int32 */
      PageNumber?: number;
      /** @format int32 */
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
   * @request PUT:/api/sysRole/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysRolePut = (
    id: number,
    data: UpdateSysRoleRequest,
    params: RequestParams = {}
  ) =>
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
   * @request GET:/api/sysRole/list
   * @secure
   * @response `200` `AdminResultPageResultResponseSysRoleResponse` Success
   */
  apiSysRoleListGet = (
    query?: {
      /** @format int32 */
      PageNumber?: number;
      /** @format int32 */
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
   * @request PUT:/api/sysMenu/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysMenuPut = (
    id: number,
    data: UpdateSysMenuRequest,
    params: RequestParams = {}
  ) =>
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
   * @request GET:/api/sysMenu/list
   * @secure
   * @response `200` `AdminResultPageResultResponseSysMenuResponse` Success
   */
  apiSysMenuListGet = (
    query?: {
      /** @format int32 */
      PageNumber?: number;
      /** @format int32 */
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
  apiQuantTradyTestPost = (
    symbol: string,
    begin: string,
    params: RequestParams = {}
  ) =>
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
   * @response `200` `AdminResultPageResultDtoStockDto` Success
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
      /** @format int32 */
      PageNumber?: number;
      /** @format int32 */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultPageResultDtoStockDto, any>({
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
   * @name ApiStockOptionalGet
   * @summary 查詢自選股
   * @request GET:/api/stock/optional
   * @secure
   * @response `200` `AdminResultPageResultDtoStockOptionalDto` Success
   */
  apiStockOptionalGet = (
    query?: {
      /** @format int32 */
      PageNumber?: number;
      /** @format int32 */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultPageResultDtoStockOptionalDto, any>({
      path: `/api/stock/optional`,
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
   * @name ApiStockWritePerceptionPost
   * @summary 寫交易心得
   * @request POST:/api/stock/writePerception
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiStockWritePerceptionPost = (
    data: StockPerceptionRequestDto,
    params: RequestParams = {}
  ) =>
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
   * @response `200` `AdminResultPageResultDtoStockPerceptionDto` Success
   */
  apiStockPerceptionGet = (
    query?: {
      /** @format int32 */
      PageNumber?: number;
      /** @format int32 */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultPageResultDtoStockPerceptionDto, any>({
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
   * @name ApiStockTodayAttentionGet
   * @summary 获取今天的推荐
   * @request GET:/api/stock/todayAttention
   * @secure
   * @response `200` `AdminResultListTodayAttentionDto` Success
   */
  apiStockTodayAttentionGet = (
    query?: {
      /** @format int32 */
      PageNumber?: number;
      /** @format int32 */
      PageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListTodayAttentionDto, any>({
      path: `/api/stock/todayAttention`,
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
   * @request GET:/api/stock/list
   * @secure
   * @response `200` `AdminResultPageResultResponseStockResponse` Success
   */
  apiStockListGet = (
    query?: {
      /** @format int32 */
      PageNumber?: number;
      /** @format int32 */
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
