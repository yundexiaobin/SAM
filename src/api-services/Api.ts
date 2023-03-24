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
  AddCodeGenInput,
  AddConfigInput,
  AddDictDataInput,
  AddDictTypeInput,
  AddJobDetailInput,
  AddJobTriggerInput,
  AddMenuInput,
  AddNoticeInput,
  AddOrgInput,
  AddPosInput,
  AddRegionInput,
  AddRoleInput,
  AddTenantInput,
  AddUserInput,
  AdminResultBoolean,
  AdminResultCaptchaDto,
  AdminResultFileOutput,
  AdminResultIActionResult,
  AdminResultInt32,
  AdminResultInt64,
  AdminResultJObject,
  AdminResultListCodeGenConfig,
  AdminResultListColumnOuput,
  AdminResultListConstOutput,
  AdminResultListDatabaseOutput,
  AdminResultListDbColumnOutput,
  AdminResultListDbTableInfo,
  AdminResultListFileOutput,
  AdminResultListInt64,
  AdminResultListMenuOutput,
  AdminResultListObject,
  AdminResultListRoleOutput,
  AdminResultListStockStrategyDto,
  AdminResultListStockTradingAccount,
  AdminResultListString,
  AdminResultListSurgedDeclineInfoDto,
  AdminResultListSysConfig,
  AdminResultListSysDictData,
  AdminResultListSysDictType,
  AdminResultListSysJobCluster,
  AdminResultListSysJobTrigger,
  AdminResultListSysMenu,
  AdminResultListSysNotice,
  AdminResultListSysOrg,
  AdminResultListSysPos,
  AdminResultListSysRegion,
  AdminResultListSysUserExtOrg,
  AdminResultListTableOutput,
  AdminResultListTodayAttentionDto,
  AdminResultLoginOutput,
  AdminResultLoginUserOutput,
  AdminResultObject,
  AdminResultPageResultDtoStockDto,
  AdminResultPageResultDtoStockOptionalDto,
  AdminResultPageResultDtoStockPerceptionDto,
  AdminResultSqlSugarPagedListJobOutput,
  AdminResultSqlSugarPagedListSysCodeGen,
  AdminResultSqlSugarPagedListSysConfig,
  AdminResultSqlSugarPagedListSysDictData,
  AdminResultSqlSugarPagedListSysDictType,
  AdminResultSqlSugarPagedListSysFile,
  AdminResultSqlSugarPagedListSysLogDiff,
  AdminResultSqlSugarPagedListSysLogOp,
  AdminResultSqlSugarPagedListSysLogVis,
  AdminResultSqlSugarPagedListSysNotice,
  AdminResultSqlSugarPagedListSysNoticeUser,
  AdminResultSqlSugarPagedListSysOnlineUser,
  AdminResultSqlSugarPagedListSysRegion,
  AdminResultSqlSugarPagedListSysRole,
  AdminResultSqlSugarPagedListSysUser,
  AdminResultSqlSugarPagedListSysWechatUser,
  AdminResultSqlSugarPagedListTenantOutput,
  AdminResultString,
  AdminResultSysCodeGen,
  AdminResultSysCodeGenConfig,
  AdminResultSysConfig,
  AdminResultSysDictData,
  AdminResultSysDictType,
  AdminResultSysUser,
  AdminResultSysWechatPay,
  AdminResultWechatPayOutput,
  ChangePwdInput,
  CodeGenConfig,
  CreateAccountRequestDto,
  CreateEntityInput,
  DbColumnInput,
  DbTableInput,
  DeleteCodeGenInput,
  DeleteConfigInput,
  DeleteDbColumnInput,
  DeleteDbTableInput,
  DeleteDictDataInput,
  DeleteDictTypeInput,
  DeleteFileInput,
  DeleteJobDetailInput,
  DeleteJobTriggerInput,
  DeleteMenuInput,
  DeleteNoticeInput,
  DeleteOrgInput,
  DeletePosInput,
  DeleteRegionInput,
  DeleteRoleInput,
  DeleteTenantInput,
  DeleteUserInput,
  DeleteWechatUserInput,
  DictDataInput,
  DictTypeInput,
  FileInput,
  GenAuthUrlInput,
  JobDetailInput,
  JobTriggerInput,
  JToken,
  LoginInput,
  LogInput,
  MenuTypeEnum,
  MessageInput,
  NoticeInput,
  NoticeTypeEnum,
  OptionalRequestDto,
  ResetPwdUserInput,
  RoleInput,
  RoleMenuInput,
  RoleOrgInput,
  RunRequestDto,
  SignatureInput,
  StatusEnum,
  StockPerceptionRequestDto,
  SysCodeGen,
  SysOnlineUser,
  SysUser,
  SysWechatUser,
  TenantInput,
  TenantUserInput,
  UpdateCodeGenInput,
  UpdateConfigInput,
  UpdateDbColumnInput,
  UpdateDbTableInput,
  UpdateDictDataInput,
  UpdateDictTypeInput,
  UpdateJobDetailInput,
  UpdateJobTriggerInput,
  UpdateMenuInput,
  UpdateNoticeInput,
  UpdateOrgInput,
  UpdatePosInput,
  UpdateRegionInput,
  UpdateRoleInput,
  UpdateTenantInput,
  UpdateUserInput,
  UserInput,
  UserRoleInput,
  ValidateCaptchaInput,
  WechatOAuth2Input,
  WechatPayParaInput,
  WechatPayTransactionInput,
  WechatUserLogin
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
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
   * @name ApiSysAuthRefreshTokenAccessTokenGet
   * @summary 获取刷新Token
   * @request GET:/api/sysAuth/refreshToken/{accessToken}
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiSysAuthRefreshTokenAccessTokenGet = (
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
   * @name ApiSwaggerCheckUrlPost
   * @summary swagger登录检查
   * @request POST:/api/swagger/checkUrl
   * @secure
   * @response `200` `number` Success
   */
  apiSwaggerCheckUrlPost = (params: RequestParams = {}) =>
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
   * @name ApiSwaggerSubmitUrlPost
   * @summary swagger登录提交
   * @request POST:/api/swagger/submitUrl
   * @secure
   * @response `200` `number` Success
   */
  apiSwaggerSubmitUrlPost = (
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
   * @name ApiSysUserPageGet
   * @summary 获取用户分页列表
   * @request GET:/api/sysUser/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysUser` Success
   */
  apiSysUserPageGet = (
    query?: {
      /** 账号 */
      Account?: string;
      /** 姓名 */
      RealName?: string;
      /** 手机号 */
      Phone?: string;
      /**
       * 查询时所选机构Id
       * @format int64
       */
      OrgId?: number;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysUser, any>({
      path: `/api/sysUser/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserBaseInfoGet
   * @summary 查看用户基本信息
   * @request GET:/api/sysUser/baseInfo
   * @secure
   * @response `200` `AdminResultSysUser` Success
   */
  apiSysUserBaseInfoGet = (params: RequestParams = {}) =>
    this.request<AdminResultSysUser, any>({
      path: `/api/sysUser/baseInfo`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserBaseInfoPost
   * @summary 更新用户基本信息
   * @request POST:/api/sysUser/baseInfo
   * @secure
   * @response `200` `AdminResultInt32` Success
   */
  apiSysUserBaseInfoPost = (data: SysUser, params: RequestParams = {}) =>
    this.request<AdminResultInt32, any>({
      path: `/api/sysUser/baseInfo`,
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
   * @name ApiSysUserSetStatusPost
   * @summary 设置用户状态
   * @request POST:/api/sysUser/setStatus
   * @secure
   * @response `200` `AdminResultInt32` Success
   */
  apiSysUserSetStatusPost = (data: UserInput, params: RequestParams = {}) =>
    this.request<AdminResultInt32, any>({
      path: `/api/sysUser/setStatus`,
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
   * @name ApiSysUserGrantRolePost
   * @summary 授权用户角色
   * @request POST:/api/sysUser/grantRole
   * @secure
   * @response `200` `void` Success
   */
  apiSysUserGrantRolePost = (data: UserRoleInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysUser/grantRole`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserChangePwdPost
   * @summary 修改用户密码
   * @request POST:/api/sysUser/changePwd
   * @secure
   * @response `200` `AdminResultInt32` Success
   */
  apiSysUserChangePwdPost = (
    data: ChangePwdInput,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultInt32, any>({
      path: `/api/sysUser/changePwd`,
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
   * @name ApiSysUserResetPwdPost
   * @summary 重置用户密码
   * @request POST:/api/sysUser/resetPwd
   * @secure
   * @response `200` `AdminResultInt32` Success
   */
  apiSysUserResetPwdPost = (
    data: ResetPwdUserInput,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultInt32, any>({
      path: `/api/sysUser/resetPwd`,
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
   * @name ApiSysUserOwnRoleListUserIdGet
   * @summary 获取用户拥有角色集合
   * @request GET:/api/sysUser/ownRoleList/{userId}
   * @secure
   * @response `200` `AdminResultListInt64` Success
   */
  apiSysUserOwnRoleListUserIdGet = (
    userId: number,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListInt64, any>({
      path: `/api/sysUser/ownRoleList/${userId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserOwnExtOrgListUserIdGet
   * @summary 获取用户扩展机构集合
   * @request GET:/api/sysUser/ownExtOrgList/{userId}
   * @secure
   * @response `200` `AdminResultListSysUserExtOrg` Success
   */
  apiSysUserOwnExtOrgListUserIdGet = (
    userId: number,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListSysUserExtOrg, any>({
      path: `/api/sysUser/ownExtOrgList/${userId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRolePageGet
   * @summary 获取角色分页列表
   * @request GET:/api/sysRole/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysRole` Success
   */
  apiSysRolePageGet = (
    query?: {
      /** 名称 */
      Name?: string;
      /** 编码 */
      Code?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysRole, any>({
      path: `/api/sysRole/page`,
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
   * @name ApiSysRoleListGet
   * @summary 获取角色列表
   * @request GET:/api/sysRole/list
   * @secure
   * @response `200` `AdminResultListRoleOutput` Success
   */
  apiSysRoleListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListRoleOutput, any>({
      path: `/api/sysRole/list`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRoleGrantMenuPost
   * @summary 授权角色菜单
   * @request POST:/api/sysRole/grantMenu
   * @secure
   * @response `200` `void` Success
   */
  apiSysRoleGrantMenuPost = (data: RoleMenuInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysRole/grantMenu`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRoleGrantDataScopePost
   * @summary 授权角色数据范围
   * @request POST:/api/sysRole/grantDataScope
   * @secure
   * @response `200` `void` Success
   */
  apiSysRoleGrantDataScopePost = (
    data: RoleOrgInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysRole/grantDataScope`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRoleOwnMenuListGet
   * @summary 根据角色Id获取菜单Id集合
   * @request GET:/api/sysRole/ownMenuList
   * @secure
   * @response `200` `AdminResultListInt64` Success
   */
  apiSysRoleOwnMenuListGet = (
    query: {
      /** 状态 */
      Status?: StatusEnum;
      /**
       * 主键Id
       * @format int64
       */
      Id: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListInt64, any>({
      path: `/api/sysRole/ownMenuList`,
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
   * @name ApiSysRoleOwnOrgListGet
   * @summary 根据角色Id获取机构Id集合
   * @request GET:/api/sysRole/ownOrgList
   * @secure
   * @response `200` `AdminResultListInt64` Success
   */
  apiSysRoleOwnOrgListGet = (
    query: {
      /** 状态 */
      Status?: StatusEnum;
      /**
       * 主键Id
       * @format int64
       */
      Id: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListInt64, any>({
      path: `/api/sysRole/ownOrgList`,
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
   * @name ApiSysRoleSetStatusPost
   * @summary 设置角色状态
   * @request POST:/api/sysRole/setStatus
   * @secure
   * @response `200` `AdminResultInt32` Success
   */
  apiSysRoleSetStatusPost = (data: RoleInput, params: RequestParams = {}) =>
    this.request<AdminResultInt32, any>({
      path: `/api/sysRole/setStatus`,
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
   * @tags sysOrg
   * @name ApiSysOrgListGet
   * @summary 获取机构列表
   * @request GET:/api/sysOrg/list
   * @secure
   * @response `200` `AdminResultListSysOrg` Success
   */
  apiSysOrgListGet = (
    query: {
      /** 名称 */
      Name?: string;
      /** 编码 */
      Code?: string;
      /**
       * 主键Id
       * @format int64
       */
      Id: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListSysOrg, any>({
      path: `/api/sysOrg/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysPos
   * @name ApiSysPosListGet
   * @summary 获取职位列表
   * @request GET:/api/sysPos/list
   * @secure
   * @response `200` `AdminResultListSysPos` Success
   */
  apiSysPosListGet = (
    query?: {
      /** 名称 */
      Name?: string;
      /** 编码 */
      Code?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListSysPos, any>({
      path: `/api/sysPos/list`,
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
   * @name ApiSysMenuLoginMenuTreeGet
   * @summary 获取登录菜单树
   * @request GET:/api/sysMenu/loginMenuTree
   * @secure
   * @response `200` `AdminResultListMenuOutput` Success
   */
  apiSysMenuLoginMenuTreeGet = (params: RequestParams = {}) =>
    this.request<AdminResultListMenuOutput, any>({
      path: `/api/sysMenu/loginMenuTree`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuListGet
   * @summary 获取菜单列表
   * @request GET:/api/sysMenu/list
   * @secure
   * @response `200` `AdminResultListSysMenu` Success
   */
  apiSysMenuListGet = (
    query?: {
      /** 标题 */
      Title?: string;
      /** 菜单类型（1目录 2菜单 3按钮） */
      Type?: MenuTypeEnum;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListSysMenu, any>({
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
   * @tags sysMenu
   * @name ApiSysMenuOwnBtnPermListGet
   * @summary 获取用户拥有按钮权限集合（缓存）
   * @request GET:/api/sysMenu/ownBtnPermList
   * @secure
   * @response `200` `AdminResultListString` Success
   */
  apiSysMenuOwnBtnPermListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListString, any>({
      path: `/api/sysMenu/ownBtnPermList`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysConfig
   * @name ApiSysConfigPageGet
   * @summary 获取参数配置分页列表
   * @request GET:/api/sysConfig/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysConfig` Success
   */
  apiSysConfigPageGet = (
    query?: {
      /** 名称 */
      Name?: string;
      /** 编码 */
      Code?: string;
      /** 分组编码 */
      GroupCode?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysConfig, any>({
      path: `/api/sysConfig/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysConfig
   * @name ApiSysConfigListGet
   * @summary 获取参数配置列表
   * @request GET:/api/sysConfig/list
   * @secure
   * @response `200` `AdminResultListSysConfig` Success
   */
  apiSysConfigListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListSysConfig, any>({
      path: `/api/sysConfig/list`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysConfig
   * @name ApiSysConfigDetailGet
   * @summary 获取参数配置详情
   * @request GET:/api/sysConfig/detail
   * @secure
   * @response `200` `AdminResultSysConfig` Success
   */
  apiSysConfigDetailGet = (
    query: {
      /**
       * 主键Id
       * @format int64
       */
      Id: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSysConfig, any>({
      path: `/api/sysConfig/detail`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictType
   * @name ApiSysDictTypePageGet
   * @summary 获取字典类型分页列表
   * @request GET:/api/sysDictType/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysDictType` Success
   */
  apiSysDictTypePageGet = (
    query?: {
      /** 名称 */
      Name?: string;
      /** 编码 */
      Code?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysDictType, any>({
      path: `/api/sysDictType/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictType
   * @name ApiSysDictTypeListGet
   * @summary 获取字典类型列表
   * @request GET:/api/sysDictType/list
   * @secure
   * @response `200` `AdminResultListSysDictType` Success
   */
  apiSysDictTypeListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListSysDictType, any>({
      path: `/api/sysDictType/list`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictType
   * @name ApiSysDictTypeDataListGet
   * @summary 获取字典类型-值列表
   * @request GET:/api/sysDictType/dataList
   * @secure
   * @response `200` `AdminResultListSysDictData` Success
   */
  apiSysDictTypeDataListGet = (
    query: {
      /** 编码 */
      Code: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListSysDictData, any>({
      path: `/api/sysDictType/dataList`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictType
   * @name ApiSysDictTypeDetailGet
   * @summary 获取字典类型详情
   * @request GET:/api/sysDictType/detail
   * @secure
   * @response `200` `AdminResultSysDictType` Success
   */
  apiSysDictTypeDetailGet = (
    query: {
      /** 状态 */
      Status?: StatusEnum;
      /**
       * 主键Id
       * @format int64
       */
      Id: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSysDictType, any>({
      path: `/api/sysDictType/detail`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictType
   * @name ApiSysDictTypeSetStatusPost
   * @summary 修改字典类型状态
   * @request POST:/api/sysDictType/setStatus
   * @secure
   * @response `200` `void` Success
   */
  apiSysDictTypeSetStatusPost = (
    data: DictTypeInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDictType/setStatus`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictData
   * @name ApiSysDictDataPageGet
   * @summary 获取字典值分页列表
   * @request GET:/api/sysDictData/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysDictData` Success
   */
  apiSysDictDataPageGet = (
    query?: {
      /**
       * 字典类型Id
       * @format int64
       */
      DictTypeId?: number;
      /** 值 */
      Value?: string;
      /** 编码 */
      Code?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysDictData, any>({
      path: `/api/sysDictData/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictData
   * @name ApiSysDictDataListGet
   * @summary 获取字典值列表
   * @request GET:/api/sysDictData/list
   * @secure
   * @response `200` `AdminResultListSysDictData` Success
   */
  apiSysDictDataListGet = (
    query: {
      /**
       * 字典类型Id
       * @format int64
       */
      DictTypeId: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListSysDictData, any>({
      path: `/api/sysDictData/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictData
   * @name ApiSysDictDataDetailGet
   * @summary 获取字典值详情
   * @request GET:/api/sysDictData/detail
   * @secure
   * @response `200` `AdminResultSysDictData` Success
   */
  apiSysDictDataDetailGet = (
    query: {
      /** 状态 */
      Status?: StatusEnum;
      /**
       * 主键Id
       * @format int64
       */
      Id: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSysDictData, any>({
      path: `/api/sysDictData/detail`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictData
   * @name ApiSysDictDataSetStatusPost
   * @summary 修改字典值状态
   * @request POST:/api/sysDictData/setStatus
   * @secure
   * @response `200` `void` Success
   */
  apiSysDictDataSetStatusPost = (
    data: DictDataInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDictData/setStatus`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictData
   * @name ApiSysDictDataDataListCodeGet
   * @summary 根据字典类型编码获取字典值集合
   * @request GET:/api/sysDictData/dataList/{code}
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysDictDataDataListCodeGet = (code: string, params: RequestParams = {}) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysDictData/dataList/${code}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictData
   * @name ApiSysDictDataDataListGet
   * @summary 根据查询条件获取字典值集合
   * @request GET:/api/sysDictData/dataList
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysDictDataDataListGet = (
    query: {
      /** 编码 */
      Code: string;
      /**
       * 状态
       * @format int32
       */
      Status?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysDictData/dataList`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysFile
   * @name ApiSysFilePageGet
   * @summary 获取文件分页列表
   * @request GET:/api/sysFile/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysFile` Success
   */
  apiSysFilePageGet = (
    query?: {
      /** 文件名称 */
      FileName?: string;
      /**
       * 开始时间
       * @format date-time
       */
      StartTime?: string;
      /**
       * 结束时间
       * @format date-time
       */
      EndTime?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysFile, any>({
      path: `/api/sysFile/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysFile
   * @name ApiSysFileUploadFilePost
   * @summary 上传文件
   * @request POST:/api/sysFile/uploadFile
   * @secure
   * @response `200` `AdminResultFileOutput` Success
   */
  apiSysFileUploadFilePost = (
    data: {
      /** @format binary */
      file: File;
    },
    query?: {
      path?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultFileOutput, any>({
      path: `/api/sysFile/uploadFile`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysFile
   * @name ApiSysFileUploadFilesPost
   * @summary 上传多文件
   * @request POST:/api/sysFile/uploadFiles
   * @secure
   * @response `200` `AdminResultListFileOutput` Success
   */
  apiSysFileUploadFilesPost = (
    data: {
      files: File[];
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListFileOutput, any>({
      path: `/api/sysFile/uploadFiles`,
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
   * @tags sysFile
   * @name ApiSysFileDownloadFilePost
   * @summary 下载文件(文件流)
   * @request POST:/api/sysFile/downloadFile
   * @secure
   * @response `200` `AdminResultIActionResult` Success
   */
  apiSysFileDownloadFilePost = (data: FileInput, params: RequestParams = {}) =>
    this.request<AdminResultIActionResult, any>({
      path: `/api/sysFile/downloadFile`,
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
   * @tags sysFile
   * @name ApiSysFileUploadAvatarPost
   * @summary 上传头像
   * @request POST:/api/sysFile/uploadAvatar
   * @secure
   * @response `200` `AdminResultFileOutput` Success
   */
  apiSysFileUploadAvatarPost = (
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultFileOutput, any>({
      path: `/api/sysFile/uploadAvatar`,
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
   * @tags sysFile
   * @name ApiSysFileUploadSignaturePost
   * @summary 上传电子签名
   * @request POST:/api/sysFile/uploadSignature
   * @secure
   * @response `200` `AdminResultFileOutput` Success
   */
  apiSysFileUploadSignaturePost = (
    data: {
      /** @format binary */
      file: File;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultFileOutput, any>({
      path: `/api/sysFile/uploadSignature`,
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
   * @tags sysCache
   * @name ApiSysCacheKeyListGet
   * @summary 获取缓存键名集合
   * @request GET:/api/sysCache/keyList
   * @secure
   * @response `200` `AdminResultListString` Success
   */
  apiSysCacheKeyListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListString, any>({
      path: `/api/sysCache/keyList`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysCache
   * @name ApiSysCacheValueKeyGet
   * @summary 获取缓存值
   * @request GET:/api/sysCache/value/{key}
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysCacheValueKeyGet = (key: string, params: RequestParams = {}) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysCache/value/${key}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysTenant
   * @name ApiSysTenantPageGet
   * @summary 获取租户分页列表
   * @request GET:/api/sysTenant/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListTenantOutput` Success
   */
  apiSysTenantPageGet = (
    query?: {
      /** 名称 */
      Name?: string;
      /** 电话 */
      Phone?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListTenantOutput, any>({
      path: `/api/sysTenant/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysTenant
   * @name ApiSysTenantSetStatusPost
   * @summary 设置租户状态
   * @request POST:/api/sysTenant/setStatus
   * @secure
   * @response `200` `AdminResultInt32` Success
   */
  apiSysTenantSetStatusPost = (data: TenantInput, params: RequestParams = {}) =>
    this.request<AdminResultInt32, any>({
      path: `/api/sysTenant/setStatus`,
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
   * @tags sysTenant
   * @name ApiSysTenantGrantMenuPost
   * @summary 授权租户管理员角色菜单
   * @request POST:/api/sysTenant/grantMenu
   * @secure
   * @response `200` `void` Success
   */
  apiSysTenantGrantMenuPost = (
    data: RoleMenuInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysTenant/grantMenu`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysTenant
   * @name ApiSysTenantOwnMenuListGet
   * @summary 获取租户管理员角色拥有菜单Id集合
   * @request GET:/api/sysTenant/ownMenuList
   * @secure
   * @response `200` `AdminResultListInt64` Success
   */
  apiSysTenantOwnMenuListGet = (
    query?: {
      /**
       * 用户Id
       * @format int64
       */
      UserId?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListInt64, any>({
      path: `/api/sysTenant/ownMenuList`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysTenant
   * @name ApiSysTenantResetPwdPost
   * @summary 重置租户管理员密码
   * @request POST:/api/sysTenant/resetPwd
   * @secure
   * @response `200` `void` Success
   */
  apiSysTenantResetPwdPost = (
    data: TenantUserInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysTenant/resetPwd`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysNotice
   * @name ApiSysNoticePageGet
   * @summary 获取通知公告分页列表
   * @request GET:/api/sysNotice/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysNotice` Success
   */
  apiSysNoticePageGet = (
    query?: {
      /** 标题 */
      Title?: string;
      /** 类型（1通知 2公告） */
      Type?: NoticeTypeEnum;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysNotice, any>({
      path: `/api/sysNotice/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysNotice
   * @name ApiSysNoticePublicPost
   * @summary 发布通知公告
   * @request POST:/api/sysNotice/public
   * @secure
   * @response `200` `void` Success
   */
  apiSysNoticePublicPost = (data: NoticeInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysNotice/public`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysNotice
   * @name ApiSysNoticeSetReadPost
   * @summary 设置通知公告已读状态
   * @request POST:/api/sysNotice/setRead
   * @secure
   * @response `200` `void` Success
   */
  apiSysNoticeSetReadPost = (data: NoticeInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysNotice/setRead`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysNotice
   * @name ApiSysNoticePageReceivedGet
   * @summary 获取接收的通知公告
   * @request GET:/api/sysNotice/pageReceived
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysNoticeUser` Success
   */
  apiSysNoticePageReceivedGet = (
    query?: {
      /** 标题 */
      Title?: string;
      /** 类型（1通知 2公告） */
      Type?: NoticeTypeEnum;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysNoticeUser, any>({
      path: `/api/sysNotice/pageReceived`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysNotice
   * @name ApiSysNoticeUnReadListGet
   * @summary 获取未读的通知公告
   * @request GET:/api/sysNotice/unReadList
   * @secure
   * @response `200` `AdminResultListSysNotice` Success
   */
  apiSysNoticeUnReadListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListSysNotice, any>({
      path: `/api/sysNotice/unReadList`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysMessage
   * @name ApiSysMessageSendAllUserPost
   * @summary 发送消息给所有人
   * @request POST:/api/sysMessage/sendAllUser
   * @secure
   * @response `200` `void` Success
   */
  apiSysMessageSendAllUserPost = (
    data: MessageInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysMessage/sendAllUser`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysMessage
   * @name ApiSysMessageSendOtherUserPost
   * @summary 发送消息给除了发送人的其他人
   * @request POST:/api/sysMessage/sendOtherUser
   * @secure
   * @response `200` `void` Success
   */
  apiSysMessageSendOtherUserPost = (
    data: MessageInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysMessage/sendOtherUser`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysMessage
   * @name ApiSysMessageSendUserPost
   * @summary 发送消息给某个人
   * @request POST:/api/sysMessage/sendUser
   * @secure
   * @response `200` `void` Success
   */
  apiSysMessageSendUserPost = (
    data: MessageInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysMessage/sendUser`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysMessage
   * @name ApiSysMessageSendUsersPost
   * @summary 发送消息给某些人
   * @request POST:/api/sysMessage/sendUsers
   * @secure
   * @response `200` `void` Success
   */
  apiSysMessageSendUsersPost = (
    data: MessageInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysMessage/sendUsers`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysMessage
   * @name ApiSysMessageSendEmailMessagePost
   * @summary 发送邮件
   * @request POST:/api/sysMessage/sendEmail/{message}
   * @secure
   * @response `200` `void` Success
   */
  apiSysMessageSendEmailMessagePost = (
    message: string,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysMessage/sendEmail/${message}`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags sysLogOp
   * @name ApiSysLogOpPageGet
   * @summary 获取操作日志分页列表
   * @request GET:/api/sysLogOp/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysLogOp` Success
   */
  apiSysLogOpPageGet = (
    query?: {
      /**
       * 开始时间
       * @format date-time
       */
      StartTime?: string;
      /**
       * 结束时间
       * @format date-time
       */
      EndTime?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysLogOp, any>({
      path: `/api/sysLogOp/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysLogVis
   * @name ApiSysLogVisPageGet
   * @summary 获取访问日志分页列表
   * @request GET:/api/sysLogVis/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysLogVis` Success
   */
  apiSysLogVisPageGet = (
    query?: {
      /**
       * 开始时间
       * @format date-time
       */
      StartTime?: string;
      /**
       * 结束时间
       * @format date-time
       */
      EndTime?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysLogVis, any>({
      path: `/api/sysLogVis/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysLogDiff
   * @name ApiSysLogDiffPageGet
   * @summary 获取差异日志分页列表
   * @request GET:/api/sysLogDiff/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysLogDiff` Success
   */
  apiSysLogDiffPageGet = (
    query?: {
      /**
       * 开始时间
       * @format date-time
       */
      StartTime?: string;
      /**
       * 结束时间
       * @format date-time
       */
      EndTime?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysLogDiff, any>({
      path: `/api/sysLogDiff/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobPageJobDetailGet
   * @summary 获取作业分页列表
   * @request GET:/api/sysJob/pageJobDetail
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListJobOutput` Success
   */
  apiSysJobPageJobDetailGet = (
    query?: {
      /** 作业Id */
      JobId?: string;
      /** 描述信息 */
      Description?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListJobOutput, any>({
      path: `/api/sysJob/pageJobDetail`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobJobTriggerListGet
   * @summary 获取触发器列表
   * @request GET:/api/sysJob/jobTriggerList
   * @secure
   * @response `200` `AdminResultListSysJobTrigger` Success
   */
  apiSysJobJobTriggerListGet = (
    query?: {
      /** 作业Id */
      JobId?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListSysJobTrigger, any>({
      path: `/api/sysJob/jobTriggerList`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobPauseAllJobPost
   * @summary 暂停所有作业
   * @request POST:/api/sysJob/pauseAllJob
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobPauseAllJobPost = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysJob/pauseAllJob`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobStartAllJobPost
   * @summary 启动所有作业
   * @request POST:/api/sysJob/startAllJob
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobStartAllJobPost = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysJob/startAllJob`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobPauseJobPost
   * @summary 暂停作业
   * @request POST:/api/sysJob/pauseJob
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobPauseJobPost = (data: JobDetailInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysJob/pauseJob`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobStartJobPost
   * @summary 启动作业
   * @request POST:/api/sysJob/startJob
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobStartJobPost = (data: JobDetailInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysJob/startJob`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobPauseTriggerPost
   * @summary 暂停触发器
   * @request POST:/api/sysJob/pauseTrigger
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobPauseTriggerPost = (
    data: JobTriggerInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysJob/pauseTrigger`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobStartTriggerPost
   * @summary 启动触发器
   * @request POST:/api/sysJob/startTrigger
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobStartTriggerPost = (
    data: JobTriggerInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysJob/startTrigger`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobCancelSleepPost
   * @summary 强制唤醒作业调度器
   * @request POST:/api/sysJob/cancelSleep
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobCancelSleepPost = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysJob/cancelSleep`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobPersistAllPost
   * @summary 强制触发所有作业持久化
   * @request POST:/api/sysJob/persistAll
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobPersistAllPost = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysJob/persistAll`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobJobClusterListGet
   * @summary 获取集群列表
   * @request GET:/api/sysJob/jobClusterList
   * @secure
   * @response `200` `AdminResultListSysJobCluster` Success
   */
  apiSysJobJobClusterListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListSysJobCluster, any>({
      path: `/api/sysJob/jobClusterList`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRegion
   * @name ApiSysRegionPageGet
   * @summary 获取行政区域分页列表
   * @request GET:/api/sysRegion/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysRegion` Success
   */
  apiSysRegionPageGet = (
    query?: {
      /**
       * 父节点Id
       * @format int64
       */
      Pid?: number;
      /** 名称 */
      Name?: string;
      /** 编码 */
      Code?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysRegion, any>({
      path: `/api/sysRegion/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRegion
   * @name ApiSysRegionListGet
   * @summary 获取行政区域列表
   * @request GET:/api/sysRegion/list
   * @secure
   * @response `200` `AdminResultListSysRegion` Success
   */
  apiSysRegionListGet = (
    query: {
      /**
       * 主键Id
       * @format int64
       */
      Id: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListSysRegion, any>({
      path: `/api/sysRegion/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysRegion
   * @name ApiSysRegionSyncPost
   * @summary 同步行政区域
   * @request POST:/api/sysRegion/sync
   * @secure
   * @response `200` `void` Success
   */
  apiSysRegionSyncPost = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysRegion/sync`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags sysOnlineUser
   * @name ApiSysOnlineUserPageGet
   * @summary 获取在线用户分页列表
   * @request GET:/api/sysOnlineUser/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysOnlineUser` Success
   */
  apiSysOnlineUserPageGet = (
    query?: {
      /** 账号名称 */
      UserName?: string;
      /** 真实姓名 */
      RealName?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysOnlineUser, any>({
      path: `/api/sysOnlineUser/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysOnlineUser
   * @name ApiSysOnlineUserForceOfflinePost
   * @summary 强制下线
   * @request POST:/api/sysOnlineUser/forceOffline
   * @secure
   * @response `200` `void` Success
   */
  apiSysOnlineUserForceOfflinePost = (
    data: SysOnlineUser,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysOnlineUser/forceOffline`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysServer
   * @name ApiSysServerServerBaseGet
   * @summary 获取服务器配置信息
   * @request GET:/api/sysServer/serverBase
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysServerServerBaseGet = (params: RequestParams = {}) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysServer/serverBase`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysServer
   * @name ApiSysServerServerUsedGet
   * @summary 获取服务器使用信息
   * @request GET:/api/sysServer/serverUsed
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysServerServerUsedGet = (params: RequestParams = {}) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysServer/serverUsed`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysServer
   * @name ApiSysServerServerDiskGet
   * @summary 获取服务器磁盘信息
   * @request GET:/api/sysServer/serverDisk
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysServerServerDiskGet = (params: RequestParams = {}) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysServer/serverDisk`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysServer
   * @name ApiSysServerAssemblyListGet
   * @summary 获取框架主要程序集
   * @request GET:/api/sysServer/assemblyList
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysServerAssemblyListGet = (params: RequestParams = {}) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysServer/assemblyList`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysConst
   * @name ApiSysConstListGet
   * @summary 获取所有常量列表
   * @request GET:/api/sysConst/list
   * @secure
   * @response `200` `AdminResultListConstOutput` Success
   */
  apiSysConstListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListConstOutput, any>({
      path: `/api/sysConst/list`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysConst
   * @name ApiSysConstDataTypeNameGet
   * @summary 根据类名获取常量数据
   * @request GET:/api/sysConst/data/{typeName}
   * @secure
   * @response `200` `AdminResultListConstOutput` Success
   */
  apiSysConstDataTypeNameGet = (typeName: string, params: RequestParams = {}) =>
    this.request<AdminResultListConstOutput, any>({
      path: `/api/sysConst/data/${typeName}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGen
   * @name ApiSysCodeGenPageGet
   * @summary 获取代码生成分页列表
   * @request GET:/api/sysCodeGen/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysCodeGen` Success
   */
  apiSysCodeGenPageGet = (
    query?: {
      /** 作者姓名 */
      AuthorName?: string;
      /** 类名 */
      ClassName?: string;
      /** 是否移除表前缀 */
      TablePrefix?: string;
      /** 库定位器名 */
      ConfigId?: string;
      /** 数据库名(保留字段) */
      DbName?: string;
      /** 数据库类型 */
      DbType?: string;
      /** 数据库链接 */
      ConnectionString?: string;
      /** 生成方式 */
      GenerateType?: string;
      /** 数据库表名 */
      TableName?: string;
      /** 命名空间 */
      NameSpace?: string;
      /** 业务名（业务代码包名称） */
      BusName?: string;
      /** 功能名（数据库表名称） */
      TableComment?: string;
      /** 菜单应用分类（应用编码） */
      MenuApplication?: string;
      /**
       * 菜单父级
       * @format int64
       */
      MenuPid?: number;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysCodeGen, any>({
      path: `/api/sysCodeGen/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGen
   * @name ApiSysCodeGenDetailGet
   * @summary 获取代码生成详情
   * @request GET:/api/sysCodeGen/detail
   * @secure
   * @response `200` `AdminResultSysCodeGen` Success
   */
  apiSysCodeGenDetailGet = (
    query: {
      /**
       * 代码生成器Id
       * @format int64
       */
      Id: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSysCodeGen, any>({
      path: `/api/sysCodeGen/detail`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGen
   * @name ApiSysCodeGenDatabaseListGet
   * @summary 获取数据库库集合
   * @request GET:/api/sysCodeGen/databaseList
   * @secure
   * @response `200` `AdminResultListDatabaseOutput` Success
   */
  apiSysCodeGenDatabaseListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListDatabaseOutput, any>({
      path: `/api/sysCodeGen/databaseList`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGen
   * @name ApiSysCodeGenTableListConfigIdGet
   * @summary 获取数据库表(实体)集合
   * @request GET:/api/sysCodeGen/tableList/{configId}
   * @secure
   * @response `200` `AdminResultListTableOutput` Success
   */
  apiSysCodeGenTableListConfigIdGet = (
    configId: string,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListTableOutput, any>({
      path: `/api/sysCodeGen/tableList/${configId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGen
   * @name ApiSysCodeGenColumnListByTableNameTableNameConfigIdGet
   * @summary 根据表名获取列集合
   * @request GET:/api/sysCodeGen/columnListByTableName/{tableName}/{configId}
   * @secure
   * @response `200` `AdminResultListColumnOuput` Success
   */
  apiSysCodeGenColumnListByTableNameTableNameConfigIdGet = (
    tableName: string,
    configId: string,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListColumnOuput, any>({
      path: `/api/sysCodeGen/columnListByTableName/${tableName}/${configId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGen
   * @name ApiSysCodeGenRunLocalPost
   * @summary 代码生成到本地
   * @request POST:/api/sysCodeGen/runLocal
   * @secure
   * @response `200` `void` Success
   */
  apiSysCodeGenRunLocalPost = (data: SysCodeGen, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysCodeGen/runLocal`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGenConfig
   * @name ApiSysCodeGenConfigListGet
   * @summary 获取代码生成配置列表
   * @request GET:/api/sysCodeGenConfig/list
   * @secure
   * @response `200` `AdminResultListCodeGenConfig` Success
   */
  apiSysCodeGenConfigListGet = (
    query?: {
      /**
       * 主键Id
       * @format int64
       */
      Id?: number;
      /**
       * 代码生成主表ID
       * @format int64
       */
      CodeGenId?: number;
      /** 数据库字段名 */
      ColumnName?: string;
      /** 数据库字段名(首字母小写) */
      LowerColumnName?: string;
      /** 字段描述 */
      ColumnComment?: string;
      /** .NET类型 */
      NetType?: string;
      /** 作用类型（字典） */
      EffectType?: string;
      /** 外键实体名称 */
      FkEntityName?: string;
      /** 外键表名称 */
      FkTableName?: string;
      /** 外键实体名称(首字母小写) */
      LowerFkEntityName?: string;
      /** 外键显示字段 */
      FkColumnName?: string;
      /** 外键显示字段(首字母小写) */
      LowerFkColumnName?: string;
      /** 外键显示字段.NET类型 */
      FkColumnNetType?: string;
      /** 字典code */
      DictTypeCode?: string;
      /** 列表是否缩进（字典） */
      WhetherRetract?: string;
      /** 是否必填（字典） */
      WhetherRequired?: string;
      /** 是否是查询条件 */
      QueryWhether?: string;
      /** 查询方式 */
      QueryType?: string;
      /** 列表显示 */
      WhetherTable?: string;
      /** 增改 */
      WhetherAddUpdate?: string;
      /** 主外键 */
      ColumnKey?: string;
      /** 数据库中类型（物理类型） */
      DataType?: string;
      /** 是否是通用字段 */
      WhetherCommon?: string;
      /** 表的别名 Table as XXX */
      TableNickName?: string;
      /** 显示文本字段 */
      DisplayColumn?: string;
      /** 选中值字段 */
      ValueColumn?: string;
      /** 父级字段 */
      PidColumn?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListCodeGenConfig, any>({
      path: `/api/sysCodeGenConfig/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGenConfig
   * @name ApiSysCodeGenConfigDetailGet
   * @summary 获取代码生成配置详情
   * @request GET:/api/sysCodeGenConfig/detail
   * @secure
   * @response `200` `AdminResultSysCodeGenConfig` Success
   */
  apiSysCodeGenConfigDetailGet = (
    query?: {
      /**
       * 主键Id
       * @format int64
       */
      Id?: number;
      /**
       * 代码生成主表ID
       * @format int64
       */
      CodeGenId?: number;
      /** 数据库字段名 */
      ColumnName?: string;
      /** 数据库字段名(首字母小写) */
      LowerColumnName?: string;
      /** 字段描述 */
      ColumnComment?: string;
      /** .NET类型 */
      NetType?: string;
      /** 作用类型（字典） */
      EffectType?: string;
      /** 外键实体名称 */
      FkEntityName?: string;
      /** 外键表名称 */
      FkTableName?: string;
      /** 外键实体名称(首字母小写) */
      LowerFkEntityName?: string;
      /** 外键显示字段 */
      FkColumnName?: string;
      /** 外键显示字段(首字母小写) */
      LowerFkColumnName?: string;
      /** 外键显示字段.NET类型 */
      FkColumnNetType?: string;
      /** 字典code */
      DictTypeCode?: string;
      /** 列表是否缩进（字典） */
      WhetherRetract?: string;
      /** 是否必填（字典） */
      WhetherRequired?: string;
      /** 是否是查询条件 */
      QueryWhether?: string;
      /** 查询方式 */
      QueryType?: string;
      /** 列表显示 */
      WhetherTable?: string;
      /** 增改 */
      WhetherAddUpdate?: string;
      /** 主外键 */
      ColumnKey?: string;
      /** 数据库中类型（物理类型） */
      DataType?: string;
      /** 是否是通用字段 */
      WhetherCommon?: string;
      /** 表的别名 Table as XXX */
      TableNickName?: string;
      /** 显示文本字段 */
      DisplayColumn?: string;
      /** 选中值字段 */
      ValueColumn?: string;
      /** 父级字段 */
      PidColumn?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSysCodeGenConfig, any>({
      path: `/api/sysCodeGenConfig/detail`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDatabase
   * @name ApiSysDatabaseListGet
   * @summary 获取库列表
   * @request GET:/api/sysDatabase/list
   * @secure
   * @response `200` `AdminResultListObject` Success
   */
  apiSysDatabaseListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListObject, any>({
      path: `/api/sysDatabase/list`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDatabase
   * @name ApiSysDatabaseColumnListTableNameConfigIdGet
   * @summary 获取字段列表
   * @request GET:/api/sysDatabase/columnList/{tableName}/{configId}
   * @secure
   * @response `200` `AdminResultListDbColumnOutput` Success
   */
  apiSysDatabaseColumnListTableNameConfigIdGet = (
    tableName: string,
    configId: string,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListDbColumnOutput, any>({
      path: `/api/sysDatabase/columnList/${tableName}/${configId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysDatabase
   * @name ApiSysDatabaseTableListConfigIdGet
   * @summary 获取表列表
   * @request GET:/api/sysDatabase/tableList/{configId}
   * @secure
   * @response `200` `AdminResultListDbTableInfo` Success
   */
  apiSysDatabaseTableListConfigIdGet = (
    configId: string,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultListDbTableInfo, any>({
      path: `/api/sysDatabase/tableList/${configId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysWechat
   * @name ApiSysWechatGenAuthUrlPost
   * @summary 生成网页授权Url
   * @request POST:/api/sysWechat/genAuthUrl
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiSysWechatGenAuthUrlPost = (
    data: GenAuthUrlInput,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultString, any>({
      path: `/api/sysWechat/genAuthUrl`,
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
   * @tags sysWechat
   * @name ApiSysWechatSnsOAuth2Post
   * @summary 授权登录(Code换取OpenId)
   * @request POST:/api/sysWechat/snsOAuth2
   * @secure
   * @response `200` `AdminResultString` Success
   */
  apiSysWechatSnsOAuth2Post = (
    data: WechatOAuth2Input,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultString, any>({
      path: `/api/sysWechat/snsOAuth2`,
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
   * @tags sysWechat
   * @name ApiSysWechatOpenIdLoginPost
   * @summary 微信用户登录
   * @request POST:/api/sysWechat/openIdLogin
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysWechatOpenIdLoginPost = (
    data: WechatUserLogin,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysWechat/openIdLogin`,
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
   * @tags sysWechat
   * @name ApiSysWechatGenConfigParaPost
   * @summary 获取配置签名参数(wx.config)
   * @request POST:/api/sysWechat/genConfigPara
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysWechatGenConfigParaPost = (
    data: SignatureInput,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysWechat/genConfigPara`,
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
   * @tags sysWechatUser
   * @name ApiSysWechatUserPageGet
   * @summary 获取微信用户列表
   * @request GET:/api/sysWechatUser/page
   * @secure
   * @response `200` `AdminResultSqlSugarPagedListSysWechatUser` Success
   */
  apiSysWechatUserPageGet = (
    query?: {
      /** 昵称 */
      NickName?: string;
      /** 手机号码 */
      Mobile?: string;
      /**
       * 当前页码
       * @format int32
       */
      Page?: number;
      /**
       * 页码容量
       * @format int32
       * @min 0
       * @max 100
       */
      PageSize?: number;
      /** 排序字段 */
      Field?: string;
      /** 排序方向 */
      Order?: string;
      /** 降序排序 */
      DescStr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSqlSugarPagedListSysWechatUser, any>({
      path: `/api/sysWechatUser/page`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysWechatPay
   * @name ApiSysWechatPayGenerateParametersForJsapiPayPost
   * @summary 生成JSAPI调起支付所需参数
   * @request POST:/api/sysWechatPay/generateParametersForJsapiPay
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysWechatPayGenerateParametersForJsapiPayPost = (
    data: WechatPayParaInput,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysWechatPay/generateParametersForJsapiPay`,
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
   * @tags sysWechatPay
   * @name ApiSysWechatPayPayTransactionPost
   * @summary 微信支付统一下单获取Id(商户直连)
   * @request POST:/api/sysWechatPay/payTransaction
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysWechatPayPayTransactionPost = (
    data: WechatPayTransactionInput,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysWechatPay/payTransaction`,
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
   * @tags sysWechatPay
   * @name ApiSysWechatPayPayPartnerTransactionPost
   * @summary 微信支付统一下单获取Id(服务商模式)
   * @request POST:/api/sysWechatPay/payPartnerTransaction
   * @secure
   * @response `200` `AdminResultObject` Success
   */
  apiSysWechatPayPayPartnerTransactionPost = (
    data: WechatPayTransactionInput,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultObject, any>({
      path: `/api/sysWechatPay/payPartnerTransaction`,
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
   * @tags sysWechatPay
   * @name ApiSysWechatPayPayInfoTradeIdGet
   * @summary 获取支付订单详情
   * @request GET:/api/sysWechatPay/payInfo/{tradeId}
   * @secure
   * @response `200` `AdminResultSysWechatPay` Success
   */
  apiSysWechatPayPayInfoTradeIdGet = (
    tradeId: string,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultSysWechatPay, any>({
      path: `/api/sysWechatPay/payInfo/${tradeId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysWechatPay
   * @name ApiSysWechatPayPayCallBackPost
   * @summary 微信支付成功回调(商户直连)
   * @request POST:/api/sysWechatPay/payCallBack
   * @secure
   * @response `200` `AdminResultWechatPayOutput` Success
   */
  apiSysWechatPayPayCallBackPost = (params: RequestParams = {}) =>
    this.request<AdminResultWechatPayOutput, any>({
      path: `/api/sysWechatPay/payCallBack`,
      method: "POST",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysWechatPay
   * @name ApiSysWechatPayPayPartnerCallBackPost
   * @summary 微信支付成功回调(服务商模式)
   * @request POST:/api/sysWechatPay/payPartnerCallBack
   * @secure
   * @response `200` `void` Success
   */
  apiSysWechatPayPayPartnerCallBackPost = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysWechatPay/payPartnerCallBack`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags aPIJSON
   * @name ApiAPijsonPost
   * @summary 统一入口
   * @request POST:/api/aPIJSON
   * @secure
   * @response `200` `AdminResultJObject` Success
   */
  apiAPijsonPost = (data: Record<string, JToken>, params: RequestParams = {}) =>
    this.request<AdminResultJObject, any>({
      path: `/api/aPIJSON`,
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
   * @tags sysCache
   * @name ApiSysCacheDeleteKeyPost
   * @summary 删除缓存
   * @request POST:/api/sysCache/delete/{key}
   * @secure
   * @response `200` `void` Success
   */
  apiSysCacheDeleteKeyPost = (key: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysCache/delete/${key}`,
      method: "POST",
      secure: true,
      ...params
    });
  /**
   * No description
   *
   * @tags sysCache
   * @name ApiSysCacheDeleteByPreKeyPrefixKeyPost
   * @summary 根据键名前缀删除缓存
   * @request POST:/api/sysCache/deleteByPreKey/{prefixKey}
   * @secure
   * @response `200` `AdminResultInt32` Success
   */
  apiSysCacheDeleteByPreKeyPrefixKeyPost = (
    prefixKey: string,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultInt32, any>({
      path: `/api/sysCache/deleteByPreKey/${prefixKey}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGenConfig
   * @name ApiSysCodeGenConfigUpdatePost
   * @summary 更新代码生成配置
   * @request POST:/api/sysCodeGenConfig/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysCodeGenConfigUpdatePost = (
    data: CodeGenConfig[],
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysCodeGenConfig/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGen
   * @name ApiSysCodeGenAddPost
   * @summary 增加代码生成
   * @request POST:/api/sysCodeGen/add
   * @secure
   * @response `200` `void` Success
   */
  apiSysCodeGenAddPost = (data: AddCodeGenInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysCodeGen/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGen
   * @name ApiSysCodeGenUpdatePost
   * @summary 更新代码生成
   * @request POST:/api/sysCodeGen/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysCodeGenUpdatePost = (
    data: UpdateCodeGenInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysCodeGen/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysCodeGen
   * @name ApiSysCodeGenDeletePost
   * @summary 删除代码生成
   * @request POST:/api/sysCodeGen/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysCodeGenDeletePost = (
    data: DeleteCodeGenInput[],
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysCodeGen/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysConfig
   * @name ApiSysConfigAddPost
   * @summary 增加参数配置
   * @request POST:/api/sysConfig/add
   * @secure
   * @response `200` `void` Success
   */
  apiSysConfigAddPost = (data: AddConfigInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysConfig/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysConfig
   * @name ApiSysConfigUpdatePost
   * @summary 更新参数配置
   * @request POST:/api/sysConfig/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysConfigUpdatePost = (
    data: UpdateConfigInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysConfig/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysConfig
   * @name ApiSysConfigDeletePost
   * @summary 删除参数配置
   * @request POST:/api/sysConfig/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysConfigDeletePost = (
    data: DeleteConfigInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysConfig/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDatabase
   * @name ApiSysDatabaseAddColumnPost
   * @summary 增加列
   * @request POST:/api/sysDatabase/addColumn
   * @secure
   * @response `200` `void` Success
   */
  apiSysDatabaseAddColumnPost = (
    data: DbColumnInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDatabase/addColumn`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDatabase
   * @name ApiSysDatabaseDeleteColumnPost
   * @summary 删除列
   * @request POST:/api/sysDatabase/deleteColumn
   * @secure
   * @response `200` `void` Success
   */
  apiSysDatabaseDeleteColumnPost = (
    data: DeleteDbColumnInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDatabase/deleteColumn`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDatabase
   * @name ApiSysDatabaseUpdateColumnPost
   * @summary 编辑列
   * @request POST:/api/sysDatabase/updateColumn
   * @secure
   * @response `200` `void` Success
   */
  apiSysDatabaseUpdateColumnPost = (
    data: UpdateDbColumnInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDatabase/updateColumn`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDatabase
   * @name ApiSysDatabaseAddTablePost
   * @summary 增加表
   * @request POST:/api/sysDatabase/addTable
   * @secure
   * @response `200` `void` Success
   */
  apiSysDatabaseAddTablePost = (
    data: DbTableInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDatabase/addTable`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDatabase
   * @name ApiSysDatabaseDeleteTablePost
   * @summary 删除表
   * @request POST:/api/sysDatabase/deleteTable
   * @secure
   * @response `200` `void` Success
   */
  apiSysDatabaseDeleteTablePost = (
    data: DeleteDbTableInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDatabase/deleteTable`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDatabase
   * @name ApiSysDatabaseUpdateTablePost
   * @summary 编辑表
   * @request POST:/api/sysDatabase/updateTable
   * @secure
   * @response `200` `void` Success
   */
  apiSysDatabaseUpdateTablePost = (
    data: UpdateDbTableInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDatabase/updateTable`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDatabase
   * @name ApiSysDatabaseCreateEntityPost
   * @summary 创建实体
   * @request POST:/api/sysDatabase/createEntity
   * @secure
   * @response `200` `void` Success
   */
  apiSysDatabaseCreateEntityPost = (
    data: CreateEntityInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDatabase/createEntity`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictData
   * @name ApiSysDictDataAddPost
   * @summary 增加字典值
   * @request POST:/api/sysDictData/add
   * @secure
   * @response `200` `void` Success
   */
  apiSysDictDataAddPost = (
    data: AddDictDataInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDictData/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictData
   * @name ApiSysDictDataUpdatePost
   * @summary 更新字典值
   * @request POST:/api/sysDictData/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysDictDataUpdatePost = (
    data: UpdateDictDataInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDictData/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictData
   * @name ApiSysDictDataDeletePost
   * @summary 删除字典值
   * @request POST:/api/sysDictData/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysDictDataDeletePost = (
    data: DeleteDictDataInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDictData/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictType
   * @name ApiSysDictTypeAddPost
   * @summary 添加字典类型
   * @request POST:/api/sysDictType/add
   * @secure
   * @response `200` `void` Success
   */
  apiSysDictTypeAddPost = (
    data: AddDictTypeInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDictType/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictType
   * @name ApiSysDictTypeUpdatePost
   * @summary 更新字典类型
   * @request POST:/api/sysDictType/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysDictTypeUpdatePost = (
    data: UpdateDictTypeInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDictType/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysDictType
   * @name ApiSysDictTypeDeletePost
   * @summary 删除字典类型
   * @request POST:/api/sysDictType/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysDictTypeDeletePost = (
    data: DeleteDictTypeInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysDictType/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysFile
   * @name ApiSysFileDeletePost
   * @summary 删除文件
   * @request POST:/api/sysFile/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysFileDeletePost = (data: DeleteFileInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysFile/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobAddJobDetailPost
   * @summary 添加作业
   * @request POST:/api/sysJob/addJobDetail
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobAddJobDetailPost = (
    data: AddJobDetailInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysJob/addJobDetail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobUpdateJobDetailPost
   * @summary 更新作业
   * @request POST:/api/sysJob/updateJobDetail
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobUpdateJobDetailPost = (
    data: UpdateJobDetailInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysJob/updateJobDetail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobDeleteJobDetailPost
   * @summary 删除作业
   * @request POST:/api/sysJob/deleteJobDetail
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobDeleteJobDetailPost = (
    data: DeleteJobDetailInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysJob/deleteJobDetail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobAddJobTriggerPost
   * @summary 添加触发器
   * @request POST:/api/sysJob/addJobTrigger
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobAddJobTriggerPost = (
    data: AddJobTriggerInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysJob/addJobTrigger`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobUpdateJobTriggerPost
   * @summary 更新触发器
   * @request POST:/api/sysJob/updateJobTrigger
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobUpdateJobTriggerPost = (
    data: UpdateJobTriggerInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysJob/updateJobTrigger`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysJob
   * @name ApiSysJobDeleteJobTriggerPost
   * @summary 删除触发器
   * @request POST:/api/sysJob/deleteJobTrigger
   * @secure
   * @response `200` `void` Success
   */
  apiSysJobDeleteJobTriggerPost = (
    data: DeleteJobTriggerInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysJob/deleteJobTrigger`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysLogDiff
   * @name ApiSysLogDiffClearPost
   * @summary 清空差异日志
   * @request POST:/api/sysLogDiff/clear
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysLogDiffClearPost = (params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysLogDiff/clear`,
      method: "POST",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysLogOp
   * @name ApiSysLogOpClearPost
   * @summary 清空操作日志
   * @request POST:/api/sysLogOp/clear
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysLogOpClearPost = (params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysLogOp/clear`,
      method: "POST",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysLogOp
   * @name ApiSysLogOpExportPost
   * @summary 导出操作日志
   * @request POST:/api/sysLogOp/export
   * @secure
   * @response `200` `void` Success
   */
  apiSysLogOpExportPost = (data: LogInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysLogOp/export`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysLogVis
   * @name ApiSysLogVisClearPost
   * @summary 清空访问日志
   * @request POST:/api/sysLogVis/clear
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiSysLogVisClearPost = (params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/sysLogVis/clear`,
      method: "POST",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuAddPost
   * @summary 增加菜单
   * @request POST:/api/sysMenu/add
   * @secure
   * @response `200` `void` Success
   */
  apiSysMenuAddPost = (data: AddMenuInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysMenu/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuUpdatePost
   * @summary 更新菜单
   * @request POST:/api/sysMenu/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysMenuUpdatePost = (data: UpdateMenuInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysMenu/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysMenu
   * @name ApiSysMenuDeletePost
   * @summary 删除菜单
   * @request POST:/api/sysMenu/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysMenuDeletePost = (data: DeleteMenuInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysMenu/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysNotice
   * @name ApiSysNoticeAddPost
   * @summary 增加通知公告
   * @request POST:/api/sysNotice/add
   * @secure
   * @response `200` `void` Success
   */
  apiSysNoticeAddPost = (data: AddNoticeInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysNotice/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysNotice
   * @name ApiSysNoticeUpdatePost
   * @summary 更新通知公告
   * @request POST:/api/sysNotice/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysNoticeUpdatePost = (
    data: UpdateNoticeInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysNotice/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysNotice
   * @name ApiSysNoticeDeletePost
   * @summary 删除通知公告
   * @request POST:/api/sysNotice/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysNoticeDeletePost = (
    data: DeleteNoticeInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysNotice/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysOrg
   * @name ApiSysOrgAddPost
   * @summary 增加机构
   * @request POST:/api/sysOrg/add
   * @secure
   * @response `200` `AdminResultInt64` Success
   */
  apiSysOrgAddPost = (data: AddOrgInput, params: RequestParams = {}) =>
    this.request<AdminResultInt64, any>({
      path: `/api/sysOrg/add`,
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
   * @tags sysOrg
   * @name ApiSysOrgUpdatePost
   * @summary 更新机构
   * @request POST:/api/sysOrg/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysOrgUpdatePost = (data: UpdateOrgInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysOrg/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysOrg
   * @name ApiSysOrgDeletePost
   * @summary 删除机构
   * @request POST:/api/sysOrg/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysOrgDeletePost = (data: DeleteOrgInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysOrg/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysPos
   * @name ApiSysPosAddPost
   * @summary 增加职位
   * @request POST:/api/sysPos/add
   * @secure
   * @response `200` `void` Success
   */
  apiSysPosAddPost = (data: AddPosInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysPos/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysPos
   * @name ApiSysPosUpdatePost
   * @summary 更新职位
   * @request POST:/api/sysPos/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysPosUpdatePost = (data: UpdatePosInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysPos/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysPos
   * @name ApiSysPosDeletePost
   * @summary 删除职位
   * @request POST:/api/sysPos/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysPosDeletePost = (data: DeletePosInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysPos/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysRegion
   * @name ApiSysRegionAddPost
   * @summary 增加行政区域
   * @request POST:/api/sysRegion/add
   * @secure
   * @response `200` `AdminResultInt64` Success
   */
  apiSysRegionAddPost = (data: AddRegionInput, params: RequestParams = {}) =>
    this.request<AdminResultInt64, any>({
      path: `/api/sysRegion/add`,
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
   * @tags sysRegion
   * @name ApiSysRegionUpdatePost
   * @summary 更新行政区域
   * @request POST:/api/sysRegion/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysRegionUpdatePost = (
    data: UpdateRegionInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysRegion/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysRegion
   * @name ApiSysRegionDeletePost
   * @summary 删除行政区域
   * @request POST:/api/sysRegion/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysRegionDeletePost = (
    data: DeleteRegionInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysRegion/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRoleAddPost
   * @summary 增加角色
   * @request POST:/api/sysRole/add
   * @secure
   * @response `200` `void` Success
   */
  apiSysRoleAddPost = (data: AddRoleInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysRole/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRoleUpdatePost
   * @summary 更新角色
   * @request POST:/api/sysRole/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysRoleUpdatePost = (data: UpdateRoleInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysRole/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysRole
   * @name ApiSysRoleDeletePost
   * @summary 删除角色
   * @request POST:/api/sysRole/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysRoleDeletePost = (data: DeleteRoleInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysRole/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysTenant
   * @name ApiSysTenantAddPost
   * @summary 增加租户
   * @request POST:/api/sysTenant/add
   * @secure
   * @response `200` `void` Success
   */
  apiSysTenantAddPost = (data: AddTenantInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysTenant/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysTenant
   * @name ApiSysTenantDeletePost
   * @summary 删除租户
   * @request POST:/api/sysTenant/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysTenantDeletePost = (
    data: DeleteTenantInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysTenant/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysTenant
   * @name ApiSysTenantUpdatePost
   * @summary 更新租户
   * @request POST:/api/sysTenant/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysTenantUpdatePost = (
    data: UpdateTenantInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysTenant/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysTenant
   * @name ApiSysTenantCreateDbPost
   * @summary 创建租户数据库
   * @request POST:/api/sysTenant/createDb
   * @secure
   * @response `200` `void` Success
   */
  apiSysTenantCreateDbPost = (data: TenantInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysTenant/createDb`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserAddPost
   * @summary 增加用户
   * @request POST:/api/sysUser/add
   * @secure
   * @response `200` `void` Success
   */
  apiSysUserAddPost = (data: AddUserInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysUser/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserUpdatePost
   * @summary 更新用户
   * @request POST:/api/sysUser/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysUserUpdatePost = (data: UpdateUserInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysUser/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysUser
   * @name ApiSysUserDeletePost
   * @summary 删除用户
   * @request POST:/api/sysUser/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysUserDeletePost = (data: DeleteUserInput, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysUser/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysWechatUser
   * @name ApiSysWechatUserAddPost
   * @summary 增加微信用户
   * @request POST:/api/sysWechatUser/add
   * @secure
   * @response `200` `void` Success
   */
  apiSysWechatUserAddPost = (data: SysWechatUser, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/sysWechatUser/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysWechatUser
   * @name ApiSysWechatUserUpdatePost
   * @summary 更新微信用户
   * @request POST:/api/sysWechatUser/update
   * @secure
   * @response `200` `void` Success
   */
  apiSysWechatUserUpdatePost = (
    data: SysWechatUser,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysWechatUser/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags sysWechatUser
   * @name ApiSysWechatUserDeletePost
   * @summary 删除微信用户
   * @request POST:/api/sysWechatUser/delete
   * @secure
   * @response `200` `void` Success
   */
  apiSysWechatUserDeletePost = (
    data: DeleteWechatUserInput,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/sysWechatUser/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
   * @name ApiQuantRunPost
   * @summary 运行
   * @request POST:/api/quant/run
   * @secure
   * @response `200` `void` Success
   */
  apiQuantRunPost = (data: RunRequestDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/quant/run`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * No description
   *
   * @tags quant
   * @name ApiQuantAccountPost
   * @summary 創建交易賬戶
   * @request POST:/api/quant/account
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiQuantAccountPost = (
    data: CreateAccountRequestDto,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/quant/account`,
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
   * @tags quant
   * @name ApiQuantAccountListGet
   * @summary 獲取交易賬戶列表
   * @request GET:/api/quant/accountList
   * @secure
   * @response `200` `AdminResultListStockTradingAccount` Success
   */
  apiQuantAccountListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListStockTradingAccount, any>({
      path: `/api/quant/accountList`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags strategy
   * @name ApiStrategyStartIdPut
   * @summary 启动策略
   * @request PUT:/api/strategy/start/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiStrategyStartIdPut = (id: number, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/strategy/start/${id}`,
      method: "PUT",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags strategy
   * @name ApiStrategyStopIdPut
   * @summary 停止策略
   * @request PUT:/api/strategy/stop/{id}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiStrategyStopIdPut = (id: number, params: RequestParams = {}) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/strategy/stop/${id}`,
      method: "PUT",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags strategy
   * @name ApiStrategySetNameIdNamePut
   * @summary 设置名称
   * @request PUT:/api/strategy/setName/{id}/{name}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiStrategySetNameIdNamePut = (
    id: number,
    name: string,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/strategy/setName/${id}/${name}`,
      method: "PUT",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags strategy
   * @name ApiStrategySetAccountIdAccountIdPut
   * @summary 设置交易賬戶
   * @request PUT:/api/strategy/setAccount/{id}/{accountId}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiStrategySetAccountIdAccountIdPut = (
    id: number,
    accountId: number,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/strategy/setAccount/${id}/${accountId}`,
      method: "PUT",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags strategy
   * @name ApiStrategyStrategyListGet
   * @summary 获取策略列表
   * @request GET:/api/strategy/strategyList
   * @secure
   * @response `200` `AdminResultListStockStrategyDto` Success
   */
  apiStrategyStrategyListGet = (params: RequestParams = {}) =>
    this.request<AdminResultListStockStrategyDto, any>({
      path: `/api/strategy/strategyList`,
      method: "GET",
      secure: true,
      format: "json",
      ...params
    });
  /**
   * No description
   *
   * @tags strategy
   * @name ApiStrategySubscribeStockIdSymbolPut
   * @summary 订阅股票
   * @request PUT:/api/strategy/subscribeStock/{id}/{symbol}
   * @secure
   * @response `200` `AdminResultBoolean` Success
   */
  apiStrategySubscribeStockIdSymbolPut = (
    id: number,
    symbol: string,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultBoolean, any>({
      path: `/api/strategy/subscribeStock/${id}/${symbol}`,
      method: "PUT",
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
    data: OptionalRequestDto,
    params: RequestParams = {}
  ) =>
    this.request<AdminResultPageResultDtoStockOptionalDto, any>({
      path: `/api/stock/optional`,
      method: "GET",
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
   * @name ApiStockListGet
   * @request GET:/api/stock/list
   * @secure
   * @response `200` `AdminResultPageResultDtoStockDto` Success
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
    this.request<AdminResultPageResultDtoStockDto, any>({
      path: `/api/stock/list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params
    });
}
