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

export interface AddSysMenuRequest {
  /** @format int64 */
  parentId?: number | null;
  /** <br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br /> */
  type?: MenuTypeEnum;
  slug?: string | null;
  name?: string | null;
  path?: string | null;
  component?: string | null;
  permission?: string | null;
  icon?: string | null;
  isIframe?: boolean;
  outLink?: string | null;
  isHide?: boolean;
  /** @format int32 */
  order?: number;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface AddSysRoleRequest {
  name?: string | null;
  code?: string | null;
  /** @format int32 */
  order?: number;
  /** <br />&nbsp;全部数据 All = 1<br />&nbsp;本部门及以下数据 DeptChild = 2<br />&nbsp;本部门数据 Dept = 3<br />&nbsp;仅本人数据 Self = 4<br />&nbsp;自定义数据 Define = 5<br /> */
  dataScope?: DataScopeEnum;
  remark?: string | null;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface AddSysUserRequest {
  account?: string | null;
  password?: string | null;
}

export interface AdminResultBoolean {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: boolean;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultCaptchaDto {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: CaptchaDto;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultFileResult {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  /** @format binary */
  data?: File | null;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultICollectionMenuResponse {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: MenuResponse[] | null;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultICollectionSearchConfigResponse {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: SearchConfigResponse[] | null;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultListSurgedDeclineInfoDto {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: SurgedDeclineInfoDto[] | null;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultListTodayAttentionDto {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: TodayAttentionDto[] | null;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultLoginOutput {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: LoginOutput;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultLoginUserOutput {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: LoginUserOutput;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultObject {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: any;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultPageResultDtoStockDto {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: PageResultDtoStockDto;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultPageResultDtoStockOptionalDto {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: PageResultDtoStockOptionalDto;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultPageResultDtoStockPerceptionDto {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: PageResultDtoStockPerceptionDto;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultPageResultResponseStockResponse {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: PageResultResponseStockResponse;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultPageResultResponseSysMenuResponse {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: PageResultResponseSysMenuResponse;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultPageResultResponseSysRoleResponse {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: PageResultResponseSysRoleResponse;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultPageResultResponseSysUserResponse {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: PageResultResponseSysUserResponse;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultStockResponse {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: StockResponse;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultString {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: string | null;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultSysMenuResponse {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: SysMenuResponse;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultSysRoleResponse {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: SysRoleResponse;
  extras?: any;
  /** @format date-time */
  time?: string;
}

export interface AdminResultSysUserResponse {
  /** @format int32 */
  code?: number;
  success?: boolean;
  type?: string | null;
  message?: string | null;
  data?: SysUserResponse;
  extras?: any;
  /** @format date-time */
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

export interface LoginInput {
  /** @minLength 3 */
  account: string;
  /** @minLength 3 */
  password: string;
  codeId?: string | null;
  code?: string | null;
}

export interface LoginOutput {
  accessToken?: string | null;
  refreshToken?: string | null;
  username?: string | null;
  roles?: string[] | null;
}

export interface LoginUserOutput {
  account?: string | null;
  realName?: string | null;
  avatar?: string | null;
  introduction?: string | null;
  address?: string | null;
  /** @format int64 */
  orgId?: number;
  orgName?: string | null;
  posName?: string | null;
  buttons?: string[] | null;
}

export interface MenuMetaDto {
  icon?: string | null;
  title?: string | null;
  /** @format int32 */
  rank?: number;
  frameSrc?: string | null;
  showLink?: boolean;
  roles?: string[] | null;
  auths?: string[] | null;
  keepAlive?: boolean;
  activePath?: string | null;
}

export interface MenuResponse {
  /** @format int64 */
  id: number;
  name?: string | null;
  path?: string | null;
  component?: string | null;
  redirect?: string | null;
  meta?: MenuMetaDto;
  children?: MenuResponse[] | null;
}

/**
 * <br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br />
 * @format int32
 */
export type MenuTypeEnum = 1 | 2 | 3;

export interface PageResultDtoStockDto {
  items?: StockDto[] | null;
  /** @format int64 */
  itemCount?: number;
}

export interface PageResultDtoStockOptionalDto {
  items?: StockOptionalDto[] | null;
  /** @format int64 */
  itemCount?: number;
}

export interface PageResultDtoStockPerceptionDto {
  items?: StockPerceptionDto[] | null;
  /** @format int64 */
  itemCount?: number;
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
  value?: string | null;
}

export interface SearchConfigResponse {
  field?: string | null;
  value?: string | null;
  /** @minLength 1 */
  label: string;
  /** <br />&nbsp; Text = 0<br />&nbsp; Radio = 1<br />&nbsp; Select = 2<br />&nbsp; Date = 3<br />&nbsp; DateTime = 4<br /> */
  type: SearchConfigType;
}

/**
 * <br />&nbsp; Text = 0<br />&nbsp; Radio = 1<br />&nbsp; Select = 2<br />&nbsp; Date = 3<br />&nbsp; DateTime = 4<br />
 * @format int32
 */
export type SearchConfigType = 0 | 1 | 2 | 3 | 4;

export interface SearchRequest {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  global?: SearchConfigModel[] | null;
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

export interface StockOptionalDto {
  /** 股票代码，带交易所 */
  tsCode?: string | null;
  /** 股票名称 */
  name?: string | null;
  todayDaily?: DailyDto;
  /** @format int32 */
  mark?: number;
  logs?: StockOptionalLogDto[] | null;
}

export interface StockOptionalLogDto {
  /**
   * 交易日
   * @format date-time
   */
  tradeDay?: string;
  /** 選中類型 */
  type?: string | null;
  /**
   * 分數
   * @format int32
   */
  mark?: number;
}

export interface StockPerceptionDto {
  content?: string | null;
  /** @format date-time */
  writeTime?: string;
}

export interface StockPerceptionRequestDto {
  /** @minLength 1 */
  content: string;
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
  /** @format int64 */
  id?: number;
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

export interface SysMenuResponse {
  /** @format int64 */
  parentId?: number | null;
  /** <br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br /> */
  type?: MenuTypeEnum;
  slug?: string | null;
  name?: string | null;
  path?: string | null;
  component?: string | null;
  permission?: string | null;
  icon?: string | null;
  isIframe?: boolean;
  outLink?: string | null;
  isHide?: boolean;
  /** @format int32 */
  order?: number;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** @format int64 */
  id?: number | null;
  parentName?: string | null;
  children?: SysMenuResponse[] | null;
}

export interface SysRoleResponse {
  name?: string | null;
  code?: string | null;
  /** @format int32 */
  order?: number;
  /** <br />&nbsp;全部数据 All = 1<br />&nbsp;本部门及以下数据 DeptChild = 2<br />&nbsp;本部门数据 Dept = 3<br />&nbsp;仅本人数据 Self = 4<br />&nbsp;自定义数据 Define = 5<br /> */
  dataScope?: DataScopeEnum;
  remark?: string | null;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** @format int64 */
  id?: number;
  menus?: number[] | null;
}

export interface SysUserResponse {
  account?: string | null;
  realName?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  /** <br />&nbsp;男 Male = 1<br />&nbsp;女 Female = 2<br /> */
  sex?: GenderEnum;
  /** @format date-time */
  birthday?: string | null;
  /** <br />&nbsp; Gregorian = 1<br />&nbsp; Lunar = 2<br /> */
  birthdayType?: BirthdayTypeEnum;
  nation?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  officePhone?: string | null;
  introduction?: string | null;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  remark?: string | null;
  /** <br />&nbsp;其他 None = 0<br />&nbsp;普通账号 User = 1<br />&nbsp;系统管理员 Admin = 4<br />&nbsp;超级管理员 SuperAdmin = 999<br /> */
  accountType?: AccountTypeEnum;
  /** @format int64 */
  organizationId?: number | null;
  /** @format int64 */
  positionId?: number;
  jobNum?: string | null;
  /** @maxLength 32 */
  positionLevel?: string | null;
  /** @format date-time */
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

export interface UpdateSysMenuRequest {
  /** @format int64 */
  parentId?: number | null;
  /** <br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br /> */
  type?: MenuTypeEnum;
  slug?: string | null;
  name?: string | null;
  path?: string | null;
  component?: string | null;
  permission?: string | null;
  icon?: string | null;
  isIframe?: boolean;
  outLink?: string | null;
  isHide?: boolean;
  /** @format int32 */
  order?: number;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface UpdateSysRoleRequest {
  name?: string | null;
  code?: string | null;
  /** @format int32 */
  order?: number;
  /** <br />&nbsp;全部数据 All = 1<br />&nbsp;本部门及以下数据 DeptChild = 2<br />&nbsp;本部门数据 Dept = 3<br />&nbsp;仅本人数据 Self = 4<br />&nbsp;自定义数据 Define = 5<br /> */
  dataScope?: DataScopeEnum;
  remark?: string | null;
  /** <br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  menus?: number[] | null;
}

export type UpdateSysUserRequest = object;

export interface ValidateCaptchaInput {
  codeId?: string | null;
  code?: string | null;
}
