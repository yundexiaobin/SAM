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

/**
 * <br />&nbsp;其他 None = 0<br />&nbsp;普通账号 User = 1<br />&nbsp;系统管理员 Admin = 4<br />&nbsp;超级管理员 SuperAdmin = 999<br />
 * @format int32
 */
export type AccountTypeEnum = 0 | 1 | 4 | 999;

export interface AddStockItemRequest {
  /** 股票代码，不带交易所号码 */
  symbol?: string | null;
  /** 股票代码，带交易所 */
  tsCode?: string | null;
  /** 股票名称 */
  name?: string | null;
  /** <br />&nbsp;其他 Other = 0<br />&nbsp;主板 MainBoard = 1<br />&nbsp;中小板 SmeBoard = 2<br /> */
  market?: StockMarket;
  /** 是否是指数 */
  isExponent?: boolean;
}

export interface AddStockOptionalRequest {
  /**
   * 股票號碼
   * @minLength 1
   */
  tsCode: string;
  /**
   * 加入原因
   * @minLength 1
   */
  reason: string;
  /**
   * 加入時間
   * @format date-time
   */
  joinDate?: string;
  /** 是否移除 */
  removed?: boolean;
}

export interface AddStockPerceptionRequest {
  /**
   * 文本內容
   * @minLength 1
   * @maxLength 2000
   */
  content: string;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 输入时间
   * @format date-time
   */
  inputDate?: string | null;
}

export interface AddSysMenuRequest {
  /** @format int64 */
  parentId?: number | null;
  /** <br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br /> */
  type?: MenuTypeEnum;
  /** 标识 */
  slug?: string | null;
  /** 名称 */
  name?: string | null;
  /** 路由地址 */
  path?: string | null;
  /** 组件路径 */
  component?: string | null;
  /** 权限标识 */
  permission?: string | null;
  /** 图标 */
  icon?: string | null;
  /** 是否内嵌 */
  isIframe?: boolean;
  /** 外链链接 */
  outLink?: string | null;
  /** 是否隐藏 */
  isHide?: boolean;
  /**
   * 排序位置
   * @format int32
   */
  order?: number;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface AddSysRoleRequest {
  /** 名称 */
  name?: string | null;
  /** 编码 */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  order?: number;
  /** <br />&nbsp;全部数据 All = 1<br />&nbsp;本部门及以下数据 DeptChild = 2<br />&nbsp;本部门数据 Dept = 3<br />&nbsp;仅本人数据 Self = 4<br />&nbsp;自定义数据 Define = 5<br /> */
  dataScope?: DataScopeEnum;
  /** 备注 */
  remark?: string | null;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface AddSysUserRequest {
  /** 账号 */
  account?: string | null;
  /** 密码 */
  password?: string | null;
}

/** 全局返回结果 */
export interface AdminResultBoolean {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  data?: boolean;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultCaptchaDto {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: CaptchaDto;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultFileResult {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /**
   * 数据
   * @format binary
   */
  data?: File | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultICollectionMenuResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  data?: MenuResponse[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultICollectionSearchConfigResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  data?: SearchConfigResponse[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSurgedDeclineInfoDto {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  data?: SurgedDeclineInfoDto[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListTodayAttentionDto {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  data?: TodayAttentionDto[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultLoginOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 用户登录结果 */
  data?: LoginOutput;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultLoginUserOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 用户登录信息 */
  data?: LoginUserOutput;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultObject {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  data?: any;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultPageResultResponseStockDto {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: PageResultResponseStockDto;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultPageResultResponseStockOptionalResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: PageResultResponseStockOptionalResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultPageResultResponseStockPerceptionResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: PageResultResponseStockPerceptionResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultPageResultResponseStockResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: PageResultResponseStockResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultPageResultResponseSysMenuResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: PageResultResponseSysMenuResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultPageResultResponseSysRoleResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: PageResultResponseSysRoleResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultPageResultResponseSysUserResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: PageResultResponseSysUserResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultStockOptionalResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: StockOptionalResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultStockPerceptionResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: StockPerceptionResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultStockResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: StockResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultString {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  data?: string | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSysMenuResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: SysMenuResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSysRoleResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: SysRoleResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSysUserResponse {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 是否成功 */
  success?: boolean;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  data?: SysUserResponse;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/**
 * <br />&nbsp; Gregorian = 1<br />&nbsp; Lunar = 2<br />
 * @format int32
 */
export type BirthdayTypeEnum = 1 | 2;

export interface CaptchaDto {
  /** @format int64 */
  id?: number;
  img?: string | null;
}

export interface DailyDto {
  /**
   * 开盘价
   * @format double
   */
  open?: number;
  /**
   * 最高价
   * @format double
   */
  high?: number;
  /**
   * 最低价
   * @format double
   */
  low?: number;
  /**
   * 收盘价
   * @format double
   */
  close?: number;
  /**
   * 昨天收盘价
   * @format double
   */
  yesterdayClose?: number;
  /**
   * 涨停
   * @format double
   */
  surgedLimit?: number;
  /**
   * 跌停
   * @format double
   */
  declineLimit?: number;
  /**
   * 涨跌额
   * @format double
   */
  change?: number;
  /**
   * 涨跌幅
   * @format double
   */
  pctChg?: number;
  /**
   * 成交量 （手）
   * @format double
   */
  vol?: number;
  /**
   * 成交额 （元）
   * @format double
   */
  amount?: number;
}

/**
 * <br />&nbsp;全部数据 All = 1<br />&nbsp;本部门及以下数据 DeptChild = 2<br />&nbsp;本部门数据 Dept = 3<br />&nbsp;仅本人数据 Self = 4<br />&nbsp;自定义数据 Define = 5<br />
 * @format int32
 */
export type DataScopeEnum = 1 | 2 | 3 | 4 | 5;

/**
 * <br />&nbsp;男 Male = 1<br />&nbsp;女 Female = 2<br />
 * @format int32
 */
export type GenderEnum = 1 | 2;

/** 用户登录参数 */
export interface LoginInput {
  /**
   * 账号
   * @minLength 3
   * @example "admin"
   */
  account: string;
  /**
   * 密码
   * @minLength 3
   * @example "123456"
   */
  password: string;
  /**
   * 验证码Id
   * @example null
   */
  codeId?: string | null;
  /**
   * 验证码
   * @example null
   */
  code?: string | null;
}

/** 用户登录结果 */
export interface LoginOutput {
  /** 令牌Token */
  accessToken?: string | null;
  /** 刷新Token */
  refreshToken?: string | null;
  username?: string | null;
  roles?: string[] | null;
}

/** 用户登录信息 */
export interface LoginUserOutput {
  /** 账号名称 */
  account?: string | null;
  /** 真实姓名 */
  realName?: string | null;
  /** 头像 */
  avatar?: string | null;
  /** 个人简介 */
  introduction?: string | null;
  /** 地址 */
  address?: string | null;
  /**
   * 机构Id
   * @format int64
   */
  orgId?: number;
  /** 机构名称 */
  orgName?: string | null;
  /** 职位名称 */
  posName?: string | null;
  /** 按钮权限集合 */
  buttons?: string[] | null;
}

export interface MenuMetaDto {
  icon?: string | null;
  /**
   * 菜单名称
   * @minLength 1
   */
  title: string;
  /** @format int32 */
  rank?: number;
  /** 内嵌的`iframe`链接 `可选` */
  frameSrc?: string | null;
  /** 是否在菜单中显示 */
  showLink?: boolean;
  /** 页面级别权限设置 `可选` */
  roles?: string[] | null;
  /** 按钮级别权限设置 `可选` */
  auths?: string[] | null;
  /** 路由缓存 */
  keepAlive?: boolean;
  activePath?: string | null;
}

export interface MenuResponse {
  /** @format int64 */
  id: number;
  /** 路由名字（保持唯一）`可选` */
  name?: string | null;
  /**
   * 路由地址
   * @minLength 1
   */
  path: string;
  /** Layout`组件 */
  component?: string | null;
  /** 路由重定向 `可选` */
  redirect?: string | null;
  meta?: MenuMetaDto;
  children?: MenuResponse[] | null;
}

/**
 * <br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br />
 * @format int32
 */
export type MenuTypeEnum = 1 | 2 | 3;

export interface PageResultResponseStockDto {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageTotal?: number;
  items?: StockDto[] | null;
}

export interface PageResultResponseStockOptionalResponse {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageTotal?: number;
  items?: StockOptionalResponse[] | null;
}

export interface PageResultResponseStockPerceptionResponse {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageTotal?: number;
  items?: StockPerceptionResponse[] | null;
}

export interface PageResultResponseStockResponse {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageTotal?: number;
  items?: StockResponse[] | null;
}

export interface PageResultResponseSysMenuResponse {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageTotal?: number;
  items?: SysMenuResponse[] | null;
}

export interface PageResultResponseSysRoleResponse {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageTotal?: number;
  items?: SysRoleResponse[] | null;
}

export interface PageResultResponseSysUserResponse {
  /** @format int64 */
  total?: number;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageTotal?: number;
  items?: SysUserResponse[] | null;
}

export interface SearchConfigModel {
  field?: string | null;
  /** <br />&nbsp; Text = 0<br />&nbsp; Radio = 1<br />&nbsp; Select = 2<br />&nbsp; Date = 3<br />&nbsp; DateTime = 4<br />&nbsp; CheckBox = 5<br /> */
  type: SearchConfigType;
  value?: string | null;
}

export interface SearchConfigResponse {
  field?: string | null;
  value?: string | null;
  /** @minLength 1 */
  label: string;
  /** <br />&nbsp; Text = 0<br />&nbsp; Radio = 1<br />&nbsp; Select = 2<br />&nbsp; Date = 3<br />&nbsp; DateTime = 4<br />&nbsp; CheckBox = 5<br /> */
  type: SearchConfigType;
}

/**
 * <br />&nbsp; Text = 0<br />&nbsp; Radio = 1<br />&nbsp; Select = 2<br />&nbsp; Date = 3<br />&nbsp; DateTime = 4<br />&nbsp; CheckBox = 5<br />
 * @format int32
 */
export type SearchConfigType = 0 | 1 | 2 | 3 | 4 | 5;

export interface SearchRequest {
  /**
   * 页码
   * @format int32
   */
  pageNumber?: number;
  /**
   * 页面大小
   * @format int32
   */
  pageSize?: number;
  /** 全局条件 */
  global?: SearchConfigModel[] | null;
  /** 具体条件 */
  filter?: SearchConfigModel[] | null;
}

/**
 * <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br />
 * @format int32
 */
export type StatusEnum = 1 | 2;

export interface StockDto {
  /** 股票代码，带交易所 */
  tsCode?: string | null;
  /** 股票名称 */
  name?: string | null;
  todayDaily?: DailyDto;
}

/**
 * <br />&nbsp;其他 Other = 0<br />&nbsp;主板 MainBoard = 1<br />&nbsp;中小板 SmeBoard = 2<br />
 * @format int32
 */
export type StockMarket = 0 | 1 | 2;

export interface StockOptionalResponse {
  /**
   * 股票號碼
   * @minLength 1
   */
  tsCode: string;
  /**
   * 加入原因
   * @minLength 1
   */
  reason: string;
  /**
   * 加入時間
   * @format date-time
   */
  joinDate?: string;
  /** 是否移除 */
  removed?: boolean;
  /**
   * Id
   * @format int64
   */
  id: number;
}

export interface StockPerceptionRequestDto {
  /** @minLength 1 */
  content: string;
}

export interface StockPerceptionResponse {
  /**
   * 文本內容
   * @minLength 1
   * @maxLength 2000
   */
  content: string;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 输入时间
   * @format date-time
   */
  inputDate?: string | null;
  /**
   * Id
   * @format int32
   */
  id?: number;
}

export interface StockResponse {
  /** 股票代码，不带交易所号码 */
  symbol?: string | null;
  /** 股票代码，带交易所 */
  tsCode?: string | null;
  /** 股票名称 */
  name?: string | null;
  /** <br />&nbsp;其他 Other = 0<br />&nbsp;主板 MainBoard = 1<br />&nbsp;中小板 SmeBoard = 2<br /> */
  market?: StockMarket;
  /** <br />&nbsp;上市 L = 0<br />&nbsp;退市 D = 1<br />&nbsp;暂停上市 P = 2<br /> */
  status?: StockStatus;
  /** 交易所代码 */
  exchange?: string | null;
  /**
   * 上市日期
   * @format date-time
   */
  listDate?: string;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 是否已加入自選 */
  isJoinOptional?: boolean;
}

/**
 * <br />&nbsp;上市 L = 0<br />&nbsp;退市 D = 1<br />&nbsp;暂停上市 P = 2<br />
 * @format int32
 */
export type StockStatus = 0 | 1 | 2;

export interface SurgedDeclineInfoDto {
  day?: string | null;
  /** @format int32 */
  surgedCount?: number;
  /** @format int32 */
  declineCount?: number;
}

export interface SyncDailyRequest {
  ids?: number[] | null;
}

export interface SysMenuResponse {
  /** @format int64 */
  parentId?: number | null;
  /** <br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br /> */
  type?: MenuTypeEnum;
  /** 标识 */
  slug?: string | null;
  /** 名称 */
  name?: string | null;
  /** 路由地址 */
  path?: string | null;
  /** 组件路径 */
  component?: string | null;
  /** 权限标识 */
  permission?: string | null;
  /** 图标 */
  icon?: string | null;
  /** 是否内嵌 */
  isIframe?: boolean;
  /** 外链链接 */
  outLink?: string | null;
  /** 是否隐藏 */
  isHide?: boolean;
  /**
   * 排序位置
   * @format int32
   */
  order?: number;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** @format int64 */
  id?: number | null;
  parentName?: string | null;
  /** 菜单子项 */
  children?: SysMenuResponse[] | null;
}

export interface SysRoleResponse {
  /** 名称 */
  name?: string | null;
  /** 编码 */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  order?: number;
  /** <br />&nbsp;全部数据 All = 1<br />&nbsp;本部门及以下数据 DeptChild = 2<br />&nbsp;本部门数据 Dept = 3<br />&nbsp;仅本人数据 Self = 4<br />&nbsp;自定义数据 Define = 5<br /> */
  dataScope?: DataScopeEnum;
  /** 备注 */
  remark?: string | null;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 菜單id */
  menus?: number[] | null;
}

export interface SysUserResponse {
  /** 账号 */
  account?: string | null;
  /** 真实姓名 */
  realName?: string | null;
  /** 昵称 */
  nickName?: string | null;
  /** 头像 */
  avatar?: string | null;
  /** <br />&nbsp;男 Male = 1<br />&nbsp;女 Female = 2<br /> */
  sex?: GenderEnum;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: string | null;
  /** <br />&nbsp; Gregorian = 1<br />&nbsp; Lunar = 2<br /> */
  birthdayType?: BirthdayTypeEnum;
  /** 民族 */
  nation?: string | null;
  /** 手机号码 */
  phone?: string | null;
  /** 邮箱 */
  email?: string | null;
  /** 地址 */
  address?: string | null;
  /** 办公电话 */
  officePhone?: string | null;
  /** 个人简介 */
  introduction?: string | null;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** 备注 */
  remark?: string | null;
  /** <br />&nbsp;其他 None = 0<br />&nbsp;普通账号 User = 1<br />&nbsp;系统管理员 Admin = 4<br />&nbsp;超级管理员 SuperAdmin = 999<br /> */
  accountType?: AccountTypeEnum;
  /**
   * 机构Id
   * @format int64
   */
  organizationId?: number | null;
  /**
   * 职位Id
   * @format int64
   */
  positionId?: number;
  /** 工号 */
  jobNum?: string | null;
  /**
   * 职级
   * @maxLength 32
   */
  positionLevel?: string | null;
  /**
   * 入职日期
   * @format date-time
   */
  joinDate?: string | null;
}

export interface TodayAttentionDto {
  name?: string | null;
  tsCode?: string | null;
  /**
   * 开盘价
   * @format double
   */
  open?: number;
  /**
   * 最高价
   * @format double
   */
  high?: number;
  /**
   * 最低价
   * @format double
   */
  low?: number;
  /**
   * 收盘价
   * @format double
   */
  close?: number;
  /**
   * 涨跌幅
   * @format double
   */
  pctChg?: number;
  /** @format int32 */
  mark?: number;
  /** 行业 */
  industry?: string | null;
  /** 概念 */
  concept?: string | null;
  /**
   * 箱体最低
   * @format double
   */
  boxLow?: number;
  /**
   * 箱体最高
   * @format double
   */
  boxHigh?: number;
}

export interface UpdateStockItemRequest {
  /** 股票代码，不带交易所号码 */
  symbol?: string | null;
  /** 股票代码，带交易所 */
  tsCode?: string | null;
  /** 股票名称 */
  name?: string | null;
  /** <br />&nbsp;其他 Other = 0<br />&nbsp;主板 MainBoard = 1<br />&nbsp;中小板 SmeBoard = 2<br /> */
  market?: StockMarket;
  /** 是否是指数 */
  isExponent?: boolean;
}

export interface UpdateStockOptionalRequest {
  /**
   * 股票號碼
   * @minLength 1
   */
  tsCode: string;
  /**
   * 加入原因
   * @minLength 1
   */
  reason: string;
  /**
   * 加入時間
   * @format date-time
   */
  joinDate?: string;
  /** 是否移除 */
  removed?: boolean;
}

export interface UpdateStockPerceptionRequest {
  /**
   * 文本內容
   * @minLength 1
   * @maxLength 2000
   */
  content: string;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 输入时间
   * @format date-time
   */
  inputDate?: string | null;
}

export interface UpdateSysMenuRequest {
  /** @format int64 */
  parentId?: number | null;
  /** <br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br /> */
  type?: MenuTypeEnum;
  /** 标识 */
  slug?: string | null;
  /** 名称 */
  name?: string | null;
  /** 路由地址 */
  path?: string | null;
  /** 组件路径 */
  component?: string | null;
  /** 权限标识 */
  permission?: string | null;
  /** 图标 */
  icon?: string | null;
  /** 是否内嵌 */
  isIframe?: boolean;
  /** 外链链接 */
  outLink?: string | null;
  /** 是否隐藏 */
  isHide?: boolean;
  /**
   * 排序位置
   * @format int32
   */
  order?: number;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface UpdateSysRoleRequest {
  /** 名称 */
  name?: string | null;
  /** 编码 */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  order?: number;
  /** <br />&nbsp;全部数据 All = 1<br />&nbsp;本部门及以下数据 DeptChild = 2<br />&nbsp;本部门数据 Dept = 3<br />&nbsp;仅本人数据 Self = 4<br />&nbsp;自定义数据 Define = 5<br /> */
  dataScope?: DataScopeEnum;
  /** 备注 */
  remark?: string | null;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** 菜單id */
  menus?: number[] | null;
}

export type UpdateSysUserRequest = object;

export interface ValidateCaptchaInput {
  /** 验证码Id */
  codeId?: string | null;
  /** 验证码 */
  code?: string | null;
}
