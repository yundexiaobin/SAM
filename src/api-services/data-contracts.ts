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
 * 账号类型枚举<br />&nbsp;其他 None = 0<br />&nbsp;普通账号 User = 1<br />&nbsp;系统管理员 Admin = 4<br />&nbsp;超级管理员 SuperAdmin = 999<br />
 * @format int32
 */
export enum AccountTypeEnum {
  Value0 = 0,
  Value1 = 1,
  Value4 = 4,
  Value999 = 999
}

export interface AddCodeGenInput {
  /**
   * 当前页码
   * @format int32
   */
  page?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 排序字段 */
  field?: string | null;
  /** 排序方向 */
  order?: string | null;
  /** 降序排序 */
  descStr?: string | null;
  /** 类名 */
  className?: string | null;
  /** 是否移除表前缀 */
  tablePrefix?: string | null;
  /** 库定位器名 */
  configId?: string | null;
  /** 数据库名(保留字段) */
  dbName?: string | null;
  /** 数据库类型 */
  dbType?: string | null;
  /** 数据库链接 */
  connectionString?: string | null;
  /** 功能名（数据库表名称） */
  tableComment?: string | null;
  /** 菜单应用分类（应用编码） */
  menuApplication?: string | null;
  /**
   * 数据库表名
   * @minLength 1
   */
  tableName: string;
  /**
   * 业务名（业务代码包名称）
   * @minLength 1
   */
  busName: string;
  /**
   * 命名空间
   * @minLength 1
   */
  nameSpace: string;
  /**
   * 作者姓名
   * @minLength 1
   */
  authorName: string;
  /**
   * 生成方式
   * @minLength 1
   */
  generateType: string;
  /**
   * 菜单父级
   * @format int64
   */
  menuPid: number;
}

export interface AddConfigInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 名称
   * @minLength 1
   * @maxLength 64
   */
  name: string;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 属性值
   * @maxLength 64
   */
  value?: string | null;
  /** 是否枚举<br />&nbsp;是 Y = 1<br />&nbsp;否 N = 2<br /> */
  sysFlag?: YesNoEnum;
  /**
   * 分组编码
   * @maxLength 64
   */
  groupCode?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 256
   */
  remark?: string | null;
}

export interface AddDictDataInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 字典类型Id
   * @format int64
   */
  dictTypeId?: number;
  /** 系统字典类型表 */
  dictType?: SysDictType;
  /**
   * 值
   * @minLength 1
   * @maxLength 128
   */
  value: string;
  /**
   * 编码
   * @minLength 1
   * @maxLength 64
   */
  code: string;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface AddDictTypeInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 名称
   * @minLength 1
   * @maxLength 64
   */
  name: string;
  /**
   * 编码
   * @minLength 1
   * @maxLength 64
   */
  code: string;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 256
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface AddJobDetailInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 组名称
   * @maxLength 128
   */
  groupName?: string | null;
  /**
   * 作业类型FullName
   * @maxLength 128
   */
  jobType?: string | null;
  /**
   * 程序集Name
   * @maxLength 128
   */
  assemblyName?: string | null;
  /**
   * 描述信息
   * @maxLength 128
   */
  description?: string | null;
  /** 是否并行执行 */
  concurrent?: boolean;
  /** 是否扫描特性触发器 */
  includeAnnotations?: boolean;
  /** 额外数据 */
  properties?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string | null;
  /** 是否为脚本创建的作业 */
  createFromScript?: boolean;
  /** 脚本代码 */
  scriptCode?: string | null;
  /**
   * 作业Id
   * @minLength 2
   */
  jobId: string;
}

export interface AddJobTriggerInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 触发器类型FullName
   * @maxLength 128
   */
  triggerType?: string | null;
  /**
   * 程序集Name
   * @maxLength 128
   */
  assemblyName?: string | null;
  /**
   * 参数
   * @maxLength 128
   */
  args?: string | null;
  /**
   * 描述信息
   * @maxLength 128
   */
  description?: string | null;
  /** <br />&nbsp; Backlog = 0<br />&nbsp; Ready = 1<br />&nbsp; Running = 2<br />&nbsp; Pause = 3<br />&nbsp; Blocked = 4<br />&nbsp; ErrorToReady = 5<br />&nbsp; Archived = 6<br />&nbsp; Panic = 7<br />&nbsp; Overrun = 8<br />&nbsp; Unoccupied = 9<br />&nbsp; NotStart = 10<br />&nbsp; Unknown = 11<br />&nbsp; Unhandled = 12<br /> */
  status?: TriggerStatus;
  /**
   * 起始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 最近运行时间
   * @format date-time
   */
  lastRunTime?: string | null;
  /**
   * 下一次运行时间
   * @format date-time
   */
  nextRunTime?: string | null;
  /**
   * 触发次数
   * @format int64
   */
  numberOfRuns?: number;
  /**
   * 最大触发次数（0:不限制，n:N次）
   * @format int64
   */
  maxNumberOfRuns?: number;
  /**
   * 出错次数
   * @format int64
   */
  numberOfErrors?: number;
  /**
   * 最大出错次数（0:不限制，n:N次）
   * @format int64
   */
  maxNumberOfErrors?: number;
  /**
   * 重试次数
   * @format int32
   */
  numRetries?: number;
  /**
   * 重试间隔时间（ms）
   * @format int32
   */
  retryTimeout?: number;
  /** 是否立即启动 */
  startNow?: boolean;
  /** 是否启动时执行一次 */
  runOnStart?: boolean;
  /** 是否在启动时重置最大触发次数等于一次的作业 */
  resetOnlyOnce?: boolean;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string | null;
  /**
   * 作业Id
   * @minLength 2
   */
  jobId: string;
  /**
   * 触发器Id
   * @minLength 2
   */
  triggerId: string;
}

export interface AddMenuInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 父Id
   * @format int64
   */
  pid?: number;
  /** 系统菜单类型枚举<br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br /> */
  type?: MenuTypeEnum;
  /**
   * 名称
   * @maxLength 64
   */
  name?: string | null;
  /**
   * 路由地址
   * @maxLength 128
   */
  path?: string | null;
  /**
   * 组件路径
   * @maxLength 128
   */
  component?: string | null;
  /**
   * 重定向
   * @maxLength 128
   */
  redirect?: string | null;
  /**
   * 权限标识
   * @maxLength 128
   */
  permission?: string | null;
  /**
   * 图标
   * @maxLength 128
   */
  icon?: string | null;
  /** 是否内嵌 */
  isIframe?: boolean;
  /**
   * 外链链接
   * @maxLength 256
   */
  outLink?: string | null;
  /** 是否隐藏 */
  isHide?: boolean;
  /** 是否缓存 */
  isKeepAlive?: boolean;
  /** 是否固定 */
  isAffix?: boolean;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 备注
   * @maxLength 256
   */
  remark?: string | null;
  /** 菜单子项 */
  children?: SysMenu[] | null;
  /**
   * 名称
   * @minLength 1
   */
  title: string;
}

export interface AddNoticeInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 标题
   * @minLength 1
   * @maxLength 32
   */
  title: string;
  /**
   * 内容
   * @minLength 1
   */
  content: string;
  /** 通知公告状类型枚举<br />&nbsp;通知 NOTICE = 1<br />&nbsp;公告 ANNOUNCEMENT = 2<br /> */
  type?: NoticeTypeEnum;
  /**
   * 发布人Id
   * @format int64
   */
  publicUserId?: number;
  /**
   * 发布人姓名
   * @maxLength 32
   */
  publicUserName?: string | null;
  /**
   * 发布机构Id
   * @format int64
   */
  publicOrgId?: number;
  /**
   * 发布机构名称
   * @maxLength 64
   */
  publicOrgName?: string | null;
  /**
   * 发布时间
   * @format date-time
   */
  publicTime?: string | null;
  /**
   * 撤回时间
   * @format date-time
   */
  cancelTime?: string | null;
  /** 通知公告状态枚举<br />&nbsp;草稿 DRAFT = 0<br />&nbsp;发布 PUBLIC = 1<br />&nbsp;撤回 CANCEL = 2<br />&nbsp;删除 DELETED = 3<br /> */
  status?: NoticeStatusEnum;
}

export interface AddOrgInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 父Id
   * @format int64
   */
  pid?: number;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** 机构子项 */
  children?: SysOrg[] | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
}

export interface AddPosInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
}

export interface AddRegionInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 父Id
   * @format int64
   */
  pid?: number;
  /**
   * 简称
   * @maxLength 32
   */
  shortName?: string | null;
  /**
   * 组合名
   * @maxLength 64
   */
  mergerName?: string | null;
  /**
   * 行政代码
   * @maxLength 32
   */
  code?: string | null;
  /**
   * 邮政编码
   * @maxLength 6
   */
  zipCode?: string | null;
  /**
   * 区号
   * @maxLength 6
   */
  cityCode?: string | null;
  /**
   * 层级
   * @format int32
   */
  level?: number;
  /**
   * 拼音
   * @maxLength 128
   */
  pinYin?: string | null;
  /**
   * 经度
   * @format float
   */
  lng?: number;
  /**
   * 维度
   * @format float
   */
  lat?: number;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 机构子项 */
  children?: SysRegion[] | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
}

export interface AddRoleInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /** 角色数据范围枚举<br />&nbsp;全部数据 All = 1<br />&nbsp;本部门及以下数据 DeptChild = 2<br />&nbsp;本部门数据 Dept = 3<br />&nbsp;仅本人数据 Self = 4<br />&nbsp;自定义数据 Define = 5<br /> */
  dataScope?: DataScopeEnum;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 菜单Id集合 */
  menuIdList?: number[] | null;
}

export interface AddTenantInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 用户Id
   * @format int64
   */
  userId?: number;
  /**
   * 机构Id
   * @format int64
   */
  orgId?: number;
  /**
   * 主机
   * @maxLength 128
   */
  host?: string | null;
  /** 租户类型枚举<br />&nbsp;Id隔离 Id = 0<br />&nbsp;库隔离 Db = 1<br /> */
  tenantType?: TenantTypeEnum;
  dbType?: DbType;
  /**
   * 数据库连接
   * @maxLength 256
   */
  connection?: string | null;
  /**
   * 数据库标识
   * @maxLength 64
   */
  configId?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** 电子邮箱 */
  email?: string | null;
  /** 电话 */
  phone?: string | null;
  /**
   * 租户名称
   * @minLength 2
   */
  name: string;
  /**
   * 管理员名称
   * @minLength 3
   */
  adminName: string;
}

export interface AddUserInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 昵称
   * @maxLength 32
   */
  nickName?: string | null;
  /**
   * 头像
   * @maxLength 512
   */
  avatar?: string | null;
  /** 性别枚举<br />&nbsp;男 Male = 1<br />&nbsp;女 Female = 2<br /> */
  sex?: GenderEnum;
  /**
   * 年龄
   * @format int32
   */
  age?: number;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: string | null;
  /**
   * 民族
   * @maxLength 32
   */
  nation?: string | null;
  /**
   * 手机号码
   * @maxLength 16
   */
  phone?: string | null;
  /** 证件类型枚举<br />&nbsp;身份证 IdCard = 0<br />&nbsp;护照 PassportCard = 1<br />&nbsp;出生证 BirthCard = 2<br />&nbsp;港澳台通行证 GatCard = 3<br />&nbsp;外国人居留证 ForeignCard = 4<br /> */
  cardType?: CardTypeEnum;
  /**
   * 身份证号
   * @maxLength 32
   */
  idCardNum?: string | null;
  /**
   * 邮箱
   * @maxLength 64
   */
  email?: string | null;
  /**
   * 地址
   * @maxLength 256
   */
  address?: string | null;
  /** 文化程度枚举<br />&nbsp;小学 Level1 = 0<br />&nbsp;初中 Level2 = 1<br />&nbsp;高中 Level3 = 2<br />&nbsp;中专 Level4 = 3<br />&nbsp;大专 Level5 = 4<br />&nbsp;本科 Level6 = 5<br />&nbsp;硕士研究生 Level7 = 6<br />&nbsp;博士研究生 Level8 = 7<br /> */
  cultureLevel?: CultureLevelEnum;
  /**
   * 政治面貌
   * @maxLength 16
   */
  politicalOutlook?: string | null;
  /**
   * 毕业院校
   * @maxLength 128
   */
  college?: string | null;
  /**
   * 办公电话
   * @maxLength 16
   */
  officePhone?: string | null;
  /**
   * 紧急联系人
   * @maxLength 32
   */
  emergencyContact?: string | null;
  /**
   * 紧急联系人电话
   * @maxLength 16
   */
  emergencyPhone?: string | null;
  /**
   * 紧急联系人地址
   * @maxLength 256
   */
  emergencyAddress?: string | null;
  /**
   * 个人简介
   * @maxLength 512
   */
  introduction?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 账号类型枚举<br />&nbsp;其他 None = 0<br />&nbsp;普通账号 User = 1<br />&nbsp;系统管理员 Admin = 4<br />&nbsp;超级管理员 SuperAdmin = 999<br /> */
  accountType?: AccountTypeEnum;
  /**
   * 机构Id
   * @format int64
   */
  orgId?: number;
  /** 系统机构表 */
  sysOrg?: SysOrg;
  /**
   * 职位Id
   * @format int64
   */
  posId?: number;
  /** 系统职位表 */
  sysPos?: SysPos;
  /**
   * 工号
   * @maxLength 32
   */
  jobNum?: string | null;
  /**
   * 职级
   * @maxLength 32
   */
  posLevel?: string | null;
  /**
   * 入职日期
   * @format date-time
   */
  joinDate?: string | null;
  /**
   * 最新登录Ip
   * @maxLength 256
   */
  lastLoginIp?: string | null;
  /**
   * 最新登录地点
   * @maxLength 128
   */
  lastLoginAddress?: string | null;
  /**
   * 最新登录时间
   * @format date-time
   */
  lastLoginTime?: string | null;
  /**
   * 最新登录设备
   * @maxLength 128
   */
  lastLoginDevice?: string | null;
  /**
   * 电子签名
   * @maxLength 512
   */
  signature?: string | null;
  /**
   * 账号
   * @minLength 1
   */
  account: string;
  /**
   * 真实姓名
   * @minLength 1
   */
  realName: string;
  /** 角色集合 */
  roleIdList?: number[] | null;
  /** 扩展机构集合 */
  extOrgIdList?: SysUserExtOrg[] | null;
}

/** 全局返回结果 */
export interface AdminResultBoolean {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: boolean;
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
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  result?: CaptchaDto;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultFileOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  result?: FileOutput;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultIActionResult {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  result?: IActionResult;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultInt32 {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /**
   * 数据
   * @format int32
   */
  result?: number;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultInt64 {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /**
   * 数据
   * @format int64
   */
  result?: number;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultJObject {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: Record<string, JToken>;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListCodeGenConfig {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: CodeGenConfig[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListColumnOuput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: ColumnOuput[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListConstOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: ConstOutput[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListDatabaseOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: DatabaseOutput[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListDbColumnOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: DbColumnOutput[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListDbTableInfo {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: DbTableInfo[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListFileOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: FileOutput[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListInt64 {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: number[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListMenuOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: MenuOutput[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListObject {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: any[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListRoleOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: RoleOutput[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListString {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: string[] | null;
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
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SurgedDeclineInfoDto[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSysConfig {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SysConfig[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSysDictData {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SysDictData[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSysDictType {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SysDictType[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSysJobCluster {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SysJobCluster[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSysJobTrigger {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SysJobTrigger[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSysMenu {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SysMenu[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSysNotice {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SysNotice[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSysOrg {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SysOrg[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSysPos {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SysPos[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSysRegion {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SysRegion[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListSysUserExtOrg {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: SysUserExtOrg[] | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultListTableOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: TableOutput[] | null;
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
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: TodayAttentionDto[] | null;
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
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 用户登录结果 */
  result?: LoginOutput;
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
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 用户登录信息 */
  result?: LoginUserOutput;
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
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: any;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultPageQueryResultStockDto {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  result?: PageQueryResultStockDto;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultPageQueryResultStockOptionalDto {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  result?: PageQueryResultStockOptionalDto;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultPageQueryResultStockPerceptionDto {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  result?: PageQueryResultStockPerceptionDto;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListJobOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListJobOutput;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysCodeGen {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysCodeGen;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysConfig {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysConfig;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysDictData {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysDictData;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysDictType {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysDictType;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysFile {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysFile;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysLogDiff {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysLogDiff;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysLogOp {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysLogOp;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysLogVis {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysLogVis;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysNotice {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysNotice;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysNoticeUser {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysNoticeUser;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysOnlineUser {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysOnlineUser;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysRegion {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysRegion;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysRole {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysRole;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysUser {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysUser;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListSysWechatUser {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListSysWechatUser;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSqlSugarPagedListTenantOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 分页泛型集合 */
  result?: SqlSugarPagedListTenantOutput;
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
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 数据 */
  result?: string | null;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSysCodeGen {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 代码生成表 */
  result?: SysCodeGen;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSysCodeGenConfig {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 代码生成字段配置表 */
  result?: SysCodeGenConfig;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSysConfig {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 系统参数配置表 */
  result?: SysConfig;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSysDictData {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 系统字典值表 */
  result?: SysDictData;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSysDictType {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 系统字典类型表 */
  result?: SysDictType;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSysUser {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 系统用户表 */
  result?: SysUser;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultSysWechatPay {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  /** 系统微信支付表 */
  result?: SysWechatPay;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

/** 全局返回结果 */
export interface AdminResultWechatPayOutput {
  /**
   * 状态码
   * @format int32
   */
  code?: number;
  /** 类型success、warning、error */
  type?: string | null;
  /** 错误信息 */
  message?: string | null;
  result?: WechatPayOutput;
  /** 附加数据 */
  extras?: any;
  /**
   * 时间
   * @format date-time
   */
  time?: string;
}

export interface CaptchaDto {
  /** @format int64 */
  id?: number;
  img?: string | null;
}

/**
 * 证件类型枚举<br />&nbsp;身份证 IdCard = 0<br />&nbsp;护照 PassportCard = 1<br />&nbsp;出生证 BirthCard = 2<br />&nbsp;港澳台通行证 GatCard = 3<br />&nbsp;外国人居留证 ForeignCard = 4<br />
 * @format int32
 */
export enum CardTypeEnum {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4
}

export interface ChangePwdInput {
  /**
   * 当前密码
   * @minLength 1
   */
  passwordOld: string;
  /**
   * 新密码
   * @minLength 5
   * @maxLength 20
   */
  passwordNew: string;
}

/**
 * <br />&nbsp; Crashed = 0<br />&nbsp; Working = 1<br />&nbsp; Waiting = 2<br />
 * @format int32
 */
export enum ClusterStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2
}

/** 代码生成详细配置参数 */
export interface CodeGenConfig {
  /**
   * 主键Id
   * @format int64
   */
  id?: number;
  /**
   * 代码生成主表ID
   * @format int64
   */
  codeGenId?: number;
  /** 数据库字段名 */
  columnName?: string | null;
  /** 数据库字段名(首字母小写) */
  lowerColumnName?: string | null;
  /** 字段描述 */
  columnComment?: string | null;
  /** .NET类型 */
  netType?: string | null;
  /** 作用类型（字典） */
  effectType?: string | null;
  /** 外键实体名称 */
  fkEntityName?: string | null;
  /** 外键表名称 */
  fkTableName?: string | null;
  /** 外键实体名称(首字母小写) */
  lowerFkEntityName?: string | null;
  /** 外键显示字段 */
  fkColumnName?: string | null;
  /** 外键显示字段(首字母小写) */
  lowerFkColumnName?: string | null;
  /** 外键显示字段.NET类型 */
  fkColumnNetType?: string | null;
  /** 字典code */
  dictTypeCode?: string | null;
  /** 列表是否缩进（字典） */
  whetherRetract?: string | null;
  /** 是否必填（字典） */
  whetherRequired?: string | null;
  /** 是否是查询条件 */
  queryWhether?: string | null;
  /** 查询方式 */
  queryType?: string | null;
  /** 列表显示 */
  whetherTable?: string | null;
  /** 增改 */
  whetherAddUpdate?: string | null;
  /** 主外键 */
  columnKey?: string | null;
  /** 数据库中类型（物理类型） */
  dataType?: string | null;
  /** 是否是通用字段 */
  whetherCommon?: string | null;
  /** 表的别名 Table as XXX */
  tableNickName?: string | null;
  /** 显示文本字段 */
  displayColumn?: string | null;
  /** 选中值字段 */
  valueColumn?: string | null;
  /** 父级字段 */
  pidColumn?: string | null;
}

/** 数据库表列 */
export interface ColumnOuput {
  /** 字段名 */
  columnName?: string | null;
  /** 数据库中类型 */
  dataType?: string | null;
  /** .NET字段类型 */
  netType?: string | null;
  /** 字段描述 */
  columnComment?: string | null;
  /** 主外键 */
  columnKey?: string | null;
}

export interface ConstOutput {
  /** 名称 */
  name?: string | null;
  /** 编码 */
  code?: any;
  /** 扩展字段 */
  data?: any;
}

export interface CreateEntityInput {
  /**
   * 表名
   * @example "student"
   */
  tableName?: string | null;
  /**
   * 实体名
   * @example "Student"
   */
  entityName?: string | null;
  /**
   * 基类名
   * @example "AutoIncrementEntity"
   */
  baseClassName?: string | null;
  /**
   * 导出位置
   * @example "Web.Application"
   */
  position?: string | null;
  /** 库标识 */
  configId?: string | null;
}

/**
 * 文化程度枚举<br />&nbsp;小学 Level1 = 0<br />&nbsp;初中 Level2 = 1<br />&nbsp;高中 Level3 = 2<br />&nbsp;中专 Level4 = 3<br />&nbsp;大专 Level5 = 4<br />&nbsp;本科 Level6 = 5<br />&nbsp;硕士研究生 Level7 = 6<br />&nbsp;博士研究生 Level8 = 7<br />
 * @format int32
 */
export enum CultureLevelEnum {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7
}

export interface DailyDto {
  /** @format double */
  open?: number;
  /** @format double */
  high?: number;
  /** @format double */
  low?: number;
  /** @format double */
  close?: number;
  /** @format double */
  yesterdayClose?: number;
  /** @format double */
  surgedLimit?: number;
  /** @format double */
  declineLimit?: number;
  /** @format double */
  change?: number;
  /** @format double */
  pctChg?: number;
  /** @format double */
  vol?: number;
  /** @format double */
  amount?: number;
}

/**
 * 角色数据范围枚举<br />&nbsp;全部数据 All = 1<br />&nbsp;本部门及以下数据 DeptChild = 2<br />&nbsp;本部门数据 Dept = 3<br />&nbsp;仅本人数据 Self = 4<br />&nbsp;自定义数据 Define = 5<br />
 * @format int32
 */
export enum DataScopeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5
}

/** 数据库 */
export interface DatabaseOutput {
  /** 库定位器名 */
  configId?: string | null;
  dbType?: DbType;
  /** 数据库连接字符串 */
  connectionString?: string | null;
}

export interface DbColumnInput {
  configId?: string | null;
  tableName?: string | null;
  dbColumnName?: string | null;
  dataType?: string | null;
  /** @format int32 */
  length?: number;
  columnDescription?: string | null;
  /** @format int32 */
  isNullable?: number;
  /** @format int32 */
  isIdentity?: number;
  /** @format int32 */
  isPrimarykey?: number;
  /** @format int32 */
  decimalDigits?: number;
}

export interface DbColumnOutput {
  tableName?: string | null;
  /** @format int32 */
  tableId?: number;
  dbColumnName?: string | null;
  propertyName?: string | null;
  dataType?: string | null;
  propertyType?: any;
  /** @format int32 */
  length?: number;
  columnDescription?: string | null;
  defaultValue?: string | null;
  isNullable?: boolean;
  isIdentity?: boolean;
  isPrimarykey?: boolean;
  value?: any;
  /** @format int32 */
  decimalDigits?: number;
  /** @format int32 */
  scale?: number;
  isArray?: boolean;
  isJson?: boolean;
  isUnsigned?: boolean | null;
  /** @format int32 */
  createTableFieldSort?: number;
}

/** @format int32 */
export enum DbObjectType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2
}

export interface DbTableInfo {
  name?: string | null;
  description?: string | null;
  dbObjectType?: DbObjectType;
}

export interface DbTableInput {
  configId?: string | null;
  tableName?: string | null;
  description?: string | null;
  dbColumnInfoList?: DbColumnInput[] | null;
}

/** @format int32 */
export enum DbType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
  Value9 = 9,
  Value10 = 10,
  Value11 = 11,
  Value12 = 12,
  Value13 = 13,
  Value14 = 14,
  Value15 = 15,
  Value900 = 900
}

export interface DeleteCodeGenInput {
  /**
   * 代码生成器Id
   * @format int64
   */
  id: number;
}

export interface DeleteConfigInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DeleteDbColumnInput {
  configId?: string | null;
  tableName?: string | null;
  dbColumnName?: string | null;
}

export interface DeleteDbTableInput {
  configId?: string | null;
  tableName?: string | null;
}

export interface DeleteDictDataInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DeleteDictTypeInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DeleteFileInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DeleteJobDetailInput {
  /** 作业Id */
  jobId?: string | null;
}

export interface DeleteJobTriggerInput {
  /** 作业Id */
  jobId?: string | null;
  /** 触发器Id */
  triggerId?: string | null;
}

export interface DeleteMenuInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DeleteNoticeInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DeleteOrgInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DeletePosInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DeleteRegionInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DeleteRoleInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DeleteTenantInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DeleteUserInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
  /**
   * 机构Id
   * @format int64
   */
  orgId?: number;
}

export interface DeleteWechatUserInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface DictDataInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface DictTypeInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface FileInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface FileOutput {
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 提供者 */
  provider?: string | null;
  /** 名称 */
  name?: string | null;
  /** URL */
  url?: string | null;
  /** 大小 */
  sizeKb?: string | null;
  /** 后缀 */
  suffix?: string | null;
  /** 路径 */
  filePath?: string | null;
}

export interface GenAuthUrlInput {
  /** RedirectUrl */
  redirectUrl?: string | null;
  /** Scope */
  scope?: string | null;
}

/**
 * 性别枚举<br />&nbsp;男 Male = 1<br />&nbsp;女 Female = 2<br />
 * @format int32
 */
export enum GenderEnum {
  Value1 = 1,
  Value2 = 2
}

export type IActionResult = object;

export type JToken = JToken[];

export interface JobDetailInput {
  /** 作业Id */
  jobId?: string | null;
}

export interface JobOutput {
  /** 系统作业信息表 */
  jobDetail?: SysJobDetail;
  /** 触发器集合 */
  jobTriggers?: SysJobTrigger[] | null;
}

export interface JobTriggerInput {
  /** 作业Id */
  jobId?: string | null;
  /** 触发器Id */
  triggerId?: string | null;
}

export interface LogInput {
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
}

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
   * @format int64
   */
  codeId?: number;
  /** 验证码 */
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
  /** 电子签名 */
  signature?: string | null;
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

/** 系统菜单返回结果 */
export interface MenuOutput {
  /**
   * Id
   * @format int64
   */
  id?: number;
  /**
   * 父Id
   * @format int64
   */
  pid?: number;
  /** 系统菜单类型枚举<br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br /> */
  type?: MenuTypeEnum;
  /** 名称 */
  name?: string | null;
  /** 路由地址 */
  path?: string | null;
  /** 组件路径 */
  component?: string | null;
  /** 权限标识 */
  permission?: string | null;
  /** 重定向 */
  redirect?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** 备注 */
  remark?: string | null;
  /** 菜单Meta配置 */
  meta?: SysMenuMeta;
  /** 菜单子项 */
  children?: MenuOutput[] | null;
}

/**
 * 系统菜单类型枚举<br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br />
 * @format int32
 */
export enum MenuTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3
}

export interface MessageInput {
  /**
   * 用户ID
   * @format int64
   */
  userId?: number;
  /** 用户ID列表 */
  userIds?: number[] | null;
  /** 消息标题 */
  title?: string | null;
  /** 消息类型枚举<br />&nbsp;消息 Info = 0<br />&nbsp;成功 Success = 1<br />&nbsp;警告 Warning = 2<br />&nbsp;错误 Error = 3<br /> */
  messageType?: MessageTypeEnum;
  /** 消息内容 */
  message?: string | null;
}

/**
 * 消息类型枚举<br />&nbsp;消息 Info = 0<br />&nbsp;成功 Success = 1<br />&nbsp;警告 Warning = 2<br />&nbsp;错误 Error = 3<br />
 * @format int32
 */
export enum MessageTypeEnum {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3
}

export interface NoticeInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

/**
 * 通知公告状态枚举<br />&nbsp;草稿 DRAFT = 0<br />&nbsp;发布 PUBLIC = 1<br />&nbsp;撤回 CANCEL = 2<br />&nbsp;删除 DELETED = 3<br />
 * @format int32
 */
export enum NoticeStatusEnum {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3
}

/**
 * 通知公告状类型枚举<br />&nbsp;通知 NOTICE = 1<br />&nbsp;公告 ANNOUNCEMENT = 2<br />
 * @format int32
 */
export enum NoticeTypeEnum {
  Value1 = 1,
  Value2 = 2
}

/**
 * 通知公告用户状态枚举<br />&nbsp;未读 UNREAD = 0<br />&nbsp;已读 READ = 1<br />
 * @format int32
 */
export enum NoticeUserStatusEnum {
  Value0 = 0,
  Value1 = 1
}

export interface OptionalRequestDto {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number | null;
}

export interface PageQueryResultStockDto {
  items?: StockDto[] | null;
  /** @format int64 */
  itemCount?: number;
}

export interface PageQueryResultStockOptionalDto {
  items?: StockOptionalDto[] | null;
  /** @format int64 */
  itemCount?: number;
}

export interface PageQueryResultStockPerceptionDto {
  items?: StockPerceptionDto[] | null;
  /** @format int64 */
  itemCount?: number;
}

/**
 * 平台类型枚举<br />&nbsp;微信公众号 微信公众号 = 1<br />&nbsp;微信小程序 微信小程序 = 2<br />&nbsp;支付宝小程序 支付宝小程序 = 3<br />&nbsp;微信APP快捷登陆 微信APP快捷登陆 = 4<br />&nbsp;QQ在APP中快捷登陆 QQ在APP中快捷登陆 = 5<br />&nbsp;头条系小程序 头条系小程序 = 6<br />
 * @format int32
 */
export enum PlatformTypeEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6
}

export interface ResetPwdUserInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
}

export interface RoleInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

/** 授权角色菜单 */
export interface RoleMenuInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
  /** 菜单Id集合 */
  menuIdList?: number[] | null;
}

/** 授权角色机构 */
export interface RoleOrgInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
  /**
   * 数据范围
   * @format int32
   */
  dataScope?: number;
  /** 机构Id集合 */
  orgIdList?: number[] | null;
}

/** 角色列表输出参数 */
export interface RoleOutput {
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 编码 */
  code?: string | null;
}

export interface SignatureInput {
  /** Url */
  url?: string | null;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListJobOutput {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: JobOutput[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysCodeGen {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysCodeGen[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysConfig {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysConfig[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysDictData {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysDictData[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysDictType {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysDictType[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysFile {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysFile[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysLogDiff {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysLogDiff[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysLogOp {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysLogOp[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysLogVis {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysLogVis[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysNotice {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysNotice[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysNoticeUser {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysNoticeUser[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysOnlineUser {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysOnlineUser[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysRegion {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysRegion[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysRole {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysRole[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysUser {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysUser[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysWechatUser {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: SysWechatUser[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListTenantOutput {
  /**
   * 页码
   * @format int32
   */
  page?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /** 当前页集合 */
  items?: TenantOutput[] | null;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 是否有下一页 */
  hasNextPage?: boolean;
}

/**
 * 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br />
 * @format int32
 */
export enum StatusEnum {
  Value1 = 1,
  Value2 = 2
}

export interface StockDto {
  tsCode?: string | null;
  name?: string | null;
  todayDaily?: DailyDto;
}

export interface StockOptionalDto {
  tsCode?: string | null;
  name?: string | null;
  todayDaily?: DailyDto;
  /** @format int32 */
  mark?: number;
  logs?: StockOptionalLogDto[] | null;
}

export interface StockOptionalLogDto {
  /** @format date-time */
  tradeDay?: string;
  type?: string | null;
  /** @format int32 */
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

export interface SurgedDeclineInfoDto {
  day?: string | null;
  /** @format int32 */
  surgedCount?: number;
  /** @format int32 */
  declineCount?: number;
}

/** 代码生成表 */
export interface SysCodeGen {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 作者姓名
   * @maxLength 32
   */
  authorName?: string | null;
  /**
   * 是否移除表前缀
   * @maxLength 8
   */
  tablePrefix?: string | null;
  /**
   * 生成方式
   * @maxLength 32
   */
  generateType?: string | null;
  /**
   * 库定位器名
   * @maxLength 64
   */
  configId?: string | null;
  /**
   * 数据库名(保留字段)
   * @maxLength 64
   */
  dbName?: string | null;
  /**
   * 数据库类型
   * @maxLength 64
   */
  dbType?: string | null;
  /**
   * 数据库链接
   * @maxLength 256
   */
  connectionString?: string | null;
  /**
   * 数据库表名
   * @maxLength 128
   */
  tableName?: string | null;
  /**
   * 命名空间
   * @maxLength 128
   */
  nameSpace?: string | null;
  /**
   * 业务名
   * @maxLength 128
   */
  busName?: string | null;
  /**
   * 菜单编码
   * @format int64
   */
  menuPid?: number;
}

/** 代码生成字段配置表 */
export interface SysCodeGenConfig {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 代码生成主表Id
   * @format int64
   */
  codeGenId?: number;
  /**
   * 数据库字段名
   * @minLength 1
   * @maxLength 128
   */
  columnName: string;
  /**
   * 字段描述
   * @maxLength 128
   */
  columnComment?: string | null;
  /**
   * .NET数据类型
   * @maxLength 64
   */
  netType?: string | null;
  /**
   * 作用类型（字典）
   * @maxLength 64
   */
  effectType?: string | null;
  /**
   * 外键实体名称
   * @maxLength 64
   */
  fkEntityName?: string | null;
  /**
   * 外键表名称
   * @maxLength 128
   */
  fkTableName?: string | null;
  /**
   * 外键显示字段
   * @maxLength 64
   */
  fkColumnName?: string | null;
  /**
   * 外键显示字段.NET类型
   * @maxLength 64
   */
  fkColumnNetType?: string | null;
  /**
   * 字典编码
   * @maxLength 64
   */
  dictTypeCode?: string | null;
  /**
   * 列表是否缩进（字典）
   * @maxLength 8
   */
  whetherRetract?: string | null;
  /**
   * 是否必填（字典）
   * @maxLength 8
   */
  whetherRequired?: string | null;
  /**
   * 是否是查询条件
   * @maxLength 8
   */
  queryWhether?: string | null;
  /**
   * 查询方式
   * @maxLength 16
   */
  queryType?: string | null;
  /**
   * 列表显示
   * @maxLength 8
   */
  whetherTable?: string | null;
  /**
   * 增改
   * @maxLength 8
   */
  whetherAddUpdate?: string | null;
  /**
   * 主键
   * @maxLength 8
   */
  columnKey?: string | null;
  /**
   * 数据库中类型（物理类型）
   * @maxLength 64
   */
  dataType?: string | null;
  /**
   * 是否通用字段
   * @maxLength 8
   */
  whetherCommon?: string | null;
  /** 显示文本字段 */
  displayColumn?: string | null;
  /**
   * 选中值字段
   * @maxLength 128
   */
  valueColumn?: string | null;
  /**
   * 父级字段
   * @maxLength 128
   */
  pidColumn?: string | null;
}

/** 系统参数配置表 */
export interface SysConfig {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 名称
   * @minLength 1
   * @maxLength 64
   */
  name: string;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 属性值
   * @maxLength 64
   */
  value?: string | null;
  /** 是否枚举<br />&nbsp;是 Y = 1<br />&nbsp;否 N = 2<br /> */
  sysFlag?: YesNoEnum;
  /**
   * 分组编码
   * @maxLength 64
   */
  groupCode?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 256
   */
  remark?: string | null;
}

/** 系统字典值表 */
export interface SysDictData {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 字典类型Id
   * @format int64
   */
  dictTypeId?: number;
  /** 系统字典类型表 */
  dictType?: SysDictType;
  /**
   * 值
   * @minLength 1
   * @maxLength 128
   */
  value: string;
  /**
   * 编码
   * @minLength 1
   * @maxLength 64
   */
  code: string;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

/** 系统字典类型表 */
export interface SysDictType {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 名称
   * @minLength 1
   * @maxLength 64
   */
  name: string;
  /**
   * 编码
   * @minLength 1
   * @maxLength 64
   */
  code: string;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 256
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

/** 系统文件表 */
export interface SysFile {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 提供者
   * @maxLength 128
   */
  provider?: string | null;
  /**
   * 仓储名称
   * @maxLength 128
   */
  bucketName?: string | null;
  /**
   * 文件名称（上传时名称）
   * @maxLength 128
   */
  fileName?: string | null;
  /**
   * 文件后缀
   * @maxLength 16
   */
  suffix?: string | null;
  /**
   * 存储路径
   * @maxLength 128
   */
  filePath?: string | null;
  /**
   * 文件大小KB
   * @maxLength 16
   */
  sizeKb?: string | null;
  /**
   * 文件大小信息-计算后的
   * @maxLength 64
   */
  sizeInfo?: string | null;
  /**
   * 外链地址-OSS上传后生成外链地址方便前端预览
   * @maxLength 128
   */
  url?: string | null;
}

/** 系统作业集群表 */
export interface SysJobCluster {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 作业集群Id
   * @minLength 1
   * @maxLength 64
   */
  clusterId: string;
  /**
   * 描述信息
   * @maxLength 128
   */
  description?: string | null;
  /** <br />&nbsp; Crashed = 0<br />&nbsp; Working = 1<br />&nbsp; Waiting = 2<br /> */
  status?: ClusterStatus;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string | null;
}

/** 系统作业信息表 */
export interface SysJobDetail {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 作业Id
   * @minLength 1
   * @maxLength 64
   */
  jobId: string;
  /**
   * 组名称
   * @maxLength 128
   */
  groupName?: string | null;
  /**
   * 作业类型FullName
   * @maxLength 128
   */
  jobType?: string | null;
  /**
   * 程序集Name
   * @maxLength 128
   */
  assemblyName?: string | null;
  /**
   * 描述信息
   * @maxLength 128
   */
  description?: string | null;
  /** 是否并行执行 */
  concurrent?: boolean;
  /** 是否扫描特性触发器 */
  includeAnnotations?: boolean;
  /** 额外数据 */
  properties?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string | null;
  /** 是否为脚本创建的作业 */
  createFromScript?: boolean;
  /** 脚本代码 */
  scriptCode?: string | null;
}

/** 系统作业触发器表 */
export interface SysJobTrigger {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 触发器Id
   * @minLength 1
   * @maxLength 64
   */
  triggerId: string;
  /**
   * 作业Id
   * @minLength 1
   * @maxLength 64
   */
  jobId: string;
  /**
   * 触发器类型FullName
   * @maxLength 128
   */
  triggerType?: string | null;
  /**
   * 程序集Name
   * @maxLength 128
   */
  assemblyName?: string | null;
  /**
   * 参数
   * @maxLength 128
   */
  args?: string | null;
  /**
   * 描述信息
   * @maxLength 128
   */
  description?: string | null;
  /** <br />&nbsp; Backlog = 0<br />&nbsp; Ready = 1<br />&nbsp; Running = 2<br />&nbsp; Pause = 3<br />&nbsp; Blocked = 4<br />&nbsp; ErrorToReady = 5<br />&nbsp; Archived = 6<br />&nbsp; Panic = 7<br />&nbsp; Overrun = 8<br />&nbsp; Unoccupied = 9<br />&nbsp; NotStart = 10<br />&nbsp; Unknown = 11<br />&nbsp; Unhandled = 12<br /> */
  status?: TriggerStatus;
  /**
   * 起始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 最近运行时间
   * @format date-time
   */
  lastRunTime?: string | null;
  /**
   * 下一次运行时间
   * @format date-time
   */
  nextRunTime?: string | null;
  /**
   * 触发次数
   * @format int64
   */
  numberOfRuns?: number;
  /**
   * 最大触发次数（0:不限制，n:N次）
   * @format int64
   */
  maxNumberOfRuns?: number;
  /**
   * 出错次数
   * @format int64
   */
  numberOfErrors?: number;
  /**
   * 最大出错次数（0:不限制，n:N次）
   * @format int64
   */
  maxNumberOfErrors?: number;
  /**
   * 重试次数
   * @format int32
   */
  numRetries?: number;
  /**
   * 重试间隔时间（ms）
   * @format int32
   */
  retryTimeout?: number;
  /** 是否立即启动 */
  startNow?: boolean;
  /** 是否启动时执行一次 */
  runOnStart?: boolean;
  /** 是否在启动时重置最大触发次数等于一次的作业 */
  resetOnlyOnce?: boolean;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string | null;
}

/** 系统差异日志表 */
export interface SysLogDiff {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /** 操作前记录 */
  beforeData?: string | null;
  /** 操作后记录 */
  afterData?: string | null;
  /** Sql */
  sql?: string | null;
  /** 参数  手动传入的参数 */
  parameters?: string | null;
  /** 业务对象 */
  businessData?: string | null;
  /** 差异操作 */
  diffType?: string | null;
  /**
   * 耗时
   * @format int64
   */
  elapsed?: number | null;
}

/** 系统操作日志表 */
export interface SysLogOp {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 模块名称
   * @maxLength 256
   */
  controllerName?: string | null;
  /**
   * 方法名称
   * @maxLength 256
   */
  actionName?: string | null;
  /**
   * 显示名称
   * @maxLength 256
   */
  displayTitle?: string | null;
  /**
   * 执行状态
   * @maxLength 32
   */
  status?: string | null;
  /**
   * IP地址
   * @maxLength 256
   */
  remoteIp?: string | null;
  /**
   * 登录地点
   * @maxLength 128
   */
  location?: string | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 维度
   * @format double
   */
  latitude?: number | null;
  /**
   * 浏览器
   * @maxLength 256
   */
  browser?: string | null;
  /**
   * 操作系统
   * @maxLength 256
   */
  os?: string | null;
  /**
   * 操作用时
   * @format int64
   */
  elapsed?: number | null;
  /**
   * 日志时间
   * @format date-time
   */
  logDateTime?: string | null;
  /**
   * 账号
   * @maxLength 32
   */
  account?: string | null;
  /**
   * 真实姓名
   * @maxLength 32
   */
  realName?: string | null;
  /**
   * 请求方式
   * @maxLength 32
   */
  httpMethod?: string | null;
  /** 请求地址 */
  requestUrl?: string | null;
  /** 请求参数 */
  requestParam?: string | null;
  /** 返回结果 */
  returnResult?: string | null;
  /**
   * 事件Id
   * @format int32
   */
  eventId?: number | null;
  /**
   * 线程Id
   * @format int32
   */
  threadId?: number | null;
  /**
   * 请求跟踪Id
   * @maxLength 128
   */
  traceId?: string | null;
  /** 异常信息 */
  exception?: string | null;
  /** 日志消息Json */
  message?: string | null;
}

/** 系统访问日志表 */
export interface SysLogVis {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 模块名称
   * @maxLength 256
   */
  controllerName?: string | null;
  /**
   * 方法名称
   * @maxLength 256
   */
  actionName?: string | null;
  /**
   * 显示名称
   * @maxLength 256
   */
  displayTitle?: string | null;
  /**
   * 执行状态
   * @maxLength 32
   */
  status?: string | null;
  /**
   * IP地址
   * @maxLength 256
   */
  remoteIp?: string | null;
  /**
   * 登录地点
   * @maxLength 128
   */
  location?: string | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 维度
   * @format double
   */
  latitude?: number | null;
  /**
   * 浏览器
   * @maxLength 256
   */
  browser?: string | null;
  /**
   * 操作系统
   * @maxLength 256
   */
  os?: string | null;
  /**
   * 操作用时
   * @format int64
   */
  elapsed?: number | null;
  /**
   * 日志时间
   * @format date-time
   */
  logDateTime?: string | null;
  /**
   * 账号
   * @maxLength 32
   */
  account?: string | null;
  /**
   * 真实姓名
   * @maxLength 32
   */
  realName?: string | null;
}

/** 系统菜单表 */
export interface SysMenu {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 父Id
   * @format int64
   */
  pid?: number;
  /** 系统菜单类型枚举<br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br /> */
  type?: MenuTypeEnum;
  /**
   * 名称
   * @maxLength 64
   */
  name?: string | null;
  /**
   * 路由地址
   * @maxLength 128
   */
  path?: string | null;
  /**
   * 组件路径
   * @maxLength 128
   */
  component?: string | null;
  /**
   * 重定向
   * @maxLength 128
   */
  redirect?: string | null;
  /**
   * 权限标识
   * @maxLength 128
   */
  permission?: string | null;
  /**
   * 标题
   * @minLength 1
   * @maxLength 64
   */
  title: string;
  /**
   * 图标
   * @maxLength 128
   */
  icon?: string | null;
  /** 是否内嵌 */
  isIframe?: boolean;
  /**
   * 外链链接
   * @maxLength 256
   */
  outLink?: string | null;
  /** 是否隐藏 */
  isHide?: boolean;
  /** 是否缓存 */
  isKeepAlive?: boolean;
  /** 是否固定 */
  isAffix?: boolean;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 备注
   * @maxLength 256
   */
  remark?: string | null;
  /** 菜单子项 */
  children?: SysMenu[] | null;
}

/** 菜单Meta配置 */
export interface SysMenuMeta {
  /** 标题 */
  title?: string | null;
  /** 图标 */
  icon?: string | null;
  /** 是否内嵌 */
  isIframe?: boolean;
  /** 外链链接 */
  isLink?: string | null;
  /** 是否隐藏 */
  isHide?: boolean;
  /** 是否缓存 */
  isKeepAlive?: boolean;
  /** 是否固定 */
  isAffix?: boolean;
}

/** 系统通知公告表 */
export interface SysNotice {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 标题
   * @minLength 1
   * @maxLength 32
   */
  title: string;
  /**
   * 内容
   * @minLength 1
   */
  content: string;
  /** 通知公告状类型枚举<br />&nbsp;通知 NOTICE = 1<br />&nbsp;公告 ANNOUNCEMENT = 2<br /> */
  type?: NoticeTypeEnum;
  /**
   * 发布人Id
   * @format int64
   */
  publicUserId?: number;
  /**
   * 发布人姓名
   * @maxLength 32
   */
  publicUserName?: string | null;
  /**
   * 发布机构Id
   * @format int64
   */
  publicOrgId?: number;
  /**
   * 发布机构名称
   * @maxLength 64
   */
  publicOrgName?: string | null;
  /**
   * 发布时间
   * @format date-time
   */
  publicTime?: string | null;
  /**
   * 撤回时间
   * @format date-time
   */
  cancelTime?: string | null;
  /** 通知公告状态枚举<br />&nbsp;草稿 DRAFT = 0<br />&nbsp;发布 PUBLIC = 1<br />&nbsp;撤回 CANCEL = 2<br />&nbsp;删除 DELETED = 3<br /> */
  status?: NoticeStatusEnum;
}

/** 系统通知公告用户表 */
export interface SysNoticeUser {
  /**
   * 通知公告Id
   * @format int64
   */
  noticeId?: number;
  /** 系统通知公告表 */
  sysNotice?: SysNotice;
  /**
   * 用户Id
   * @format int64
   */
  userId?: number;
  /**
   * 阅读时间
   * @format date-time
   */
  readTime?: string | null;
  /** 通知公告用户状态枚举<br />&nbsp;未读 UNREAD = 0<br />&nbsp;已读 READ = 1<br /> */
  readStatus?: NoticeUserStatusEnum;
}

/** 系统在线用户表 */
export interface SysOnlineUser {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /** 连接Id */
  connectionId?: string | null;
  /**
   * 用户Id
   * @format int64
   */
  userId?: number;
  /**
   * 账号
   * @minLength 1
   * @maxLength 32
   */
  userName: string;
  /**
   * 真实姓名
   * @maxLength 32
   */
  realName?: string | null;
  /**
   * 连接时间
   * @format date-time
   */
  time?: string | null;
  /**
   * 连接IP
   * @maxLength 256
   */
  ip?: string | null;
  /**
   * 浏览器
   * @maxLength 128
   */
  browser?: string | null;
  /**
   * 操作系统
   * @maxLength 128
   */
  os?: string | null;
}

/** 系统机构表 */
export interface SysOrg {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 父Id
   * @format int64
   */
  pid?: number;
  /**
   * 名称
   * @minLength 1
   * @maxLength 64
   */
  name: string;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** 机构子项 */
  children?: SysOrg[] | null;
}

/** 系统职位表 */
export interface SysPos {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 名称
   * @minLength 1
   * @maxLength 64
   */
  name: string;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

/** 系统行政地区表 */
export interface SysRegion {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 父Id
   * @format int64
   */
  pid?: number;
  /**
   * 名称
   * @minLength 1
   * @maxLength 64
   */
  name: string;
  /**
   * 简称
   * @maxLength 32
   */
  shortName?: string | null;
  /**
   * 组合名
   * @maxLength 64
   */
  mergerName?: string | null;
  /**
   * 行政代码
   * @maxLength 32
   */
  code?: string | null;
  /**
   * 邮政编码
   * @maxLength 6
   */
  zipCode?: string | null;
  /**
   * 区号
   * @maxLength 6
   */
  cityCode?: string | null;
  /**
   * 层级
   * @format int32
   */
  level?: number;
  /**
   * 拼音
   * @maxLength 128
   */
  pinYin?: string | null;
  /**
   * 经度
   * @format float
   */
  lng?: number;
  /**
   * 维度
   * @format float
   */
  lat?: number;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 机构子项 */
  children?: SysRegion[] | null;
}

/** 系统角色表 */
export interface SysRole {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 名称
   * @minLength 1
   * @maxLength 64
   */
  name: string;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /** 角色数据范围枚举<br />&nbsp;全部数据 All = 1<br />&nbsp;本部门及以下数据 DeptChild = 2<br />&nbsp;本部门数据 Dept = 3<br />&nbsp;仅本人数据 Self = 4<br />&nbsp;自定义数据 Define = 5<br /> */
  dataScope?: DataScopeEnum;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

/** 系统用户表 */
export interface SysUser {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 账号
   * @minLength 1
   * @maxLength 32
   */
  account: string;
  /**
   * 真实姓名
   * @maxLength 32
   */
  realName?: string | null;
  /**
   * 昵称
   * @maxLength 32
   */
  nickName?: string | null;
  /**
   * 头像
   * @maxLength 512
   */
  avatar?: string | null;
  /** 性别枚举<br />&nbsp;男 Male = 1<br />&nbsp;女 Female = 2<br /> */
  sex?: GenderEnum;
  /**
   * 年龄
   * @format int32
   */
  age?: number;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: string | null;
  /**
   * 民族
   * @maxLength 32
   */
  nation?: string | null;
  /**
   * 手机号码
   * @maxLength 16
   */
  phone?: string | null;
  /** 证件类型枚举<br />&nbsp;身份证 IdCard = 0<br />&nbsp;护照 PassportCard = 1<br />&nbsp;出生证 BirthCard = 2<br />&nbsp;港澳台通行证 GatCard = 3<br />&nbsp;外国人居留证 ForeignCard = 4<br /> */
  cardType?: CardTypeEnum;
  /**
   * 身份证号
   * @maxLength 32
   */
  idCardNum?: string | null;
  /**
   * 邮箱
   * @maxLength 64
   */
  email?: string | null;
  /**
   * 地址
   * @maxLength 256
   */
  address?: string | null;
  /** 文化程度枚举<br />&nbsp;小学 Level1 = 0<br />&nbsp;初中 Level2 = 1<br />&nbsp;高中 Level3 = 2<br />&nbsp;中专 Level4 = 3<br />&nbsp;大专 Level5 = 4<br />&nbsp;本科 Level6 = 5<br />&nbsp;硕士研究生 Level7 = 6<br />&nbsp;博士研究生 Level8 = 7<br /> */
  cultureLevel?: CultureLevelEnum;
  /**
   * 政治面貌
   * @maxLength 16
   */
  politicalOutlook?: string | null;
  /**
   * 毕业院校
   * @maxLength 128
   */
  college?: string | null;
  /**
   * 办公电话
   * @maxLength 16
   */
  officePhone?: string | null;
  /**
   * 紧急联系人
   * @maxLength 32
   */
  emergencyContact?: string | null;
  /**
   * 紧急联系人电话
   * @maxLength 16
   */
  emergencyPhone?: string | null;
  /**
   * 紧急联系人地址
   * @maxLength 256
   */
  emergencyAddress?: string | null;
  /**
   * 个人简介
   * @maxLength 512
   */
  introduction?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 账号类型枚举<br />&nbsp;其他 None = 0<br />&nbsp;普通账号 User = 1<br />&nbsp;系统管理员 Admin = 4<br />&nbsp;超级管理员 SuperAdmin = 999<br /> */
  accountType?: AccountTypeEnum;
  /**
   * 机构Id
   * @format int64
   */
  orgId?: number;
  /** 系统机构表 */
  sysOrg?: SysOrg;
  /**
   * 职位Id
   * @format int64
   */
  posId?: number;
  /** 系统职位表 */
  sysPos?: SysPos;
  /**
   * 工号
   * @maxLength 32
   */
  jobNum?: string | null;
  /**
   * 职级
   * @maxLength 32
   */
  posLevel?: string | null;
  /**
   * 入职日期
   * @format date-time
   */
  joinDate?: string | null;
  /**
   * 最新登录Ip
   * @maxLength 256
   */
  lastLoginIp?: string | null;
  /**
   * 最新登录地点
   * @maxLength 128
   */
  lastLoginAddress?: string | null;
  /**
   * 最新登录时间
   * @format date-time
   */
  lastLoginTime?: string | null;
  /**
   * 最新登录设备
   * @maxLength 128
   */
  lastLoginDevice?: string | null;
  /**
   * 电子签名
   * @maxLength 512
   */
  signature?: string | null;
}

/** 系统用户扩展机构表 */
export interface SysUserExtOrg {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 用户Id
   * @format int64
   */
  userId?: number;
  /**
   * 机构Id
   * @format int64
   */
  orgId?: number;
  /** 系统机构表 */
  sysOrg?: SysOrg;
  /**
   * 职位Id
   * @format int64
   */
  posId?: number;
  /** 系统职位表 */
  sysPos?: SysPos;
  /**
   * 工号
   * @maxLength 32
   */
  jobNum?: string | null;
  /**
   * 职级
   * @maxLength 32
   */
  posLevel?: string | null;
  /**
   * 入职日期
   * @format date-time
   */
  joinDate?: string | null;
}

/** 系统微信支付表 */
export interface SysWechatPay {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 微信商户号
   * @minLength 1
   */
  merchantId: string;
  /**
   * 服务商AppId
   * @minLength 1
   */
  appId: string;
  /**
   * 商户订单号
   * @minLength 1
   */
  outTradeNumber: string;
  /**
   * 支付订单号
   * @minLength 1
   */
  transactionId: string;
  /** 交易类型 */
  tradeType?: string | null;
  /** 交易状态 */
  tradeState?: string | null;
  /** 交易状态描述 */
  tradeStateDescription?: string | null;
  /** 付款银行类型 */
  bankType?: string | null;
  /**
   * 订单总金额
   * @format int32
   */
  total?: number;
  /**
   * 用户支付金额
   * @format int32
   */
  payerTotal?: number | null;
  /**
   * 支付完成时间
   * @format date-time
   */
  successTime?: string | null;
  /**
   * 交易结束时间
   * @format date-time
   */
  expireTime?: string | null;
  /** 商品描述 */
  description?: string | null;
  /** 场景信息 */
  scene?: string | null;
  /** 附加数据 */
  attachment?: string | null;
  /** 优惠标记 */
  goodsTag?: string | null;
  /** 结算信息 */
  settlement?: string | null;
  /** 回调通知地址 */
  notifyUrl?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 微信OpenId标识 */
  openId?: string | null;
  /** 系统微信用户表 */
  sysWechatUser?: SysWechatUser;
  /** 子商户号 */
  subMerchantId?: string | null;
  /** 子商户AppId */
  subAppId?: string | null;
  /** 子商户唯一标识 */
  subOpenId?: string | null;
}

/** 系统微信用户表 */
export interface SysWechatUser {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 系统用户Id
   * @format int64
   */
  userId?: number;
  /** 系统用户表 */
  sysUser?: SysUser;
  /** 平台类型枚举<br />&nbsp;微信公众号 微信公众号 = 1<br />&nbsp;微信小程序 微信小程序 = 2<br />&nbsp;支付宝小程序 支付宝小程序 = 3<br />&nbsp;微信APP快捷登陆 微信APP快捷登陆 = 4<br />&nbsp;QQ在APP中快捷登陆 QQ在APP中快捷登陆 = 5<br />&nbsp;头条系小程序 头条系小程序 = 6<br /> */
  platformType?: PlatformTypeEnum;
  /**
   * OpenId
   * @minLength 1
   * @maxLength 64
   */
  openId: string;
  /**
   * 缓存key
   * @maxLength 256
   */
  sessionKey?: string | null;
  /**
   * UnionId
   * @maxLength 64
   */
  unionId?: string | null;
  /**
   * 昵称
   * @maxLength 64
   */
  nickName?: string | null;
  /**
   * 头像
   * @maxLength 256
   */
  avatar?: string | null;
  /**
   * 手机号码
   * @maxLength 16
   */
  mobile?: string | null;
  /**
   * 性别
   * @format int32
   */
  sex?: number | null;
  /**
   * 语言
   * @maxLength 64
   */
  language?: string | null;
  /**
   * 城市
   * @maxLength 64
   */
  city?: string | null;
  /**
   * 省
   * @maxLength 64
   */
  province?: string | null;
  /**
   * 国家
   * @maxLength 64
   */
  country?: string | null;
  /** AccessToken */
  accessToken?: string | null;
  /** RefreshToken */
  refreshToken?: string | null;
  /**
   * 过期时间
   * @format int32
   */
  expiresIn?: number | null;
}

/** 数据库表 */
export interface TableOutput {
  /** 库定位器名 */
  configId?: string | null;
  /** 表名（字母形式的） */
  tableName?: string | null;
  /** 实体名称 */
  entityName?: string | null;
  /** 创建时间 */
  createTime?: string | null;
  /** 更新时间 */
  updateTime?: string | null;
  /** 表名称描述（功能名） */
  tableComment?: string | null;
}

export interface TenantInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface TenantOutput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 用户Id
   * @format int64
   */
  userId?: number;
  /**
   * 机构Id
   * @format int64
   */
  orgId?: number;
  /**
   * 主机
   * @maxLength 128
   */
  host?: string | null;
  /** 租户类型枚举<br />&nbsp;Id隔离 Id = 0<br />&nbsp;库隔离 Db = 1<br /> */
  tenantType?: TenantTypeEnum;
  dbType?: DbType;
  /**
   * 数据库连接
   * @maxLength 256
   */
  connection?: string | null;
  /**
   * 数据库标识
   * @maxLength 64
   */
  configId?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** 租户名称 */
  name?: string | null;
  /** 管理员 */
  adminName?: string | null;
  /** 电子邮箱 */
  email?: string | null;
  /** 电话 */
  phone?: string | null;
}

/**
 * 租户类型枚举<br />&nbsp;Id隔离 Id = 0<br />&nbsp;库隔离 Db = 1<br />
 * @format int32
 */
export enum TenantTypeEnum {
  Value0 = 0,
  Value1 = 1
}

export interface TenantUserInput {
  /**
   * 用户Id
   * @format int64
   */
  userId?: number;
}

export interface TodayAttentionDto {
  name?: string | null;
  tsCode?: string | null;
  /** @format double */
  open?: number;
  /** @format double */
  high?: number;
  /** @format double */
  low?: number;
  /** @format double */
  close?: number;
  /** @format double */
  pctChg?: number;
  /** @format int32 */
  mark?: number;
  industry?: string | null;
  concept?: string | null;
  /** @format double */
  boxLow?: number;
  /** @format double */
  boxHigh?: number;
}

/**
 * <br />&nbsp; Backlog = 0<br />&nbsp; Ready = 1<br />&nbsp; Running = 2<br />&nbsp; Pause = 3<br />&nbsp; Blocked = 4<br />&nbsp; ErrorToReady = 5<br />&nbsp; Archived = 6<br />&nbsp; Panic = 7<br />&nbsp; Overrun = 8<br />&nbsp; Unoccupied = 9<br />&nbsp; NotStart = 10<br />&nbsp; Unknown = 11<br />&nbsp; Unhandled = 12<br />
 * @format int32
 */
export enum TriggerStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
  Value9 = 9,
  Value10 = 10,
  Value11 = 11,
  Value12 = 12
}

export interface UpdateCodeGenInput {
  /**
   * 当前页码
   * @format int32
   */
  page?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 排序字段 */
  field?: string | null;
  /** 排序方向 */
  order?: string | null;
  /** 降序排序 */
  descStr?: string | null;
  /** 作者姓名 */
  authorName?: string | null;
  /** 类名 */
  className?: string | null;
  /** 是否移除表前缀 */
  tablePrefix?: string | null;
  /** 库定位器名 */
  configId?: string | null;
  /** 数据库名(保留字段) */
  dbName?: string | null;
  /** 数据库类型 */
  dbType?: string | null;
  /** 数据库链接 */
  connectionString?: string | null;
  /** 生成方式 */
  generateType?: string | null;
  /** 数据库表名 */
  tableName?: string | null;
  /** 命名空间 */
  nameSpace?: string | null;
  /** 业务名（业务代码包名称） */
  busName?: string | null;
  /** 功能名（数据库表名称） */
  tableComment?: string | null;
  /** 菜单应用分类（应用编码） */
  menuApplication?: string | null;
  /**
   * 菜单父级
   * @format int64
   */
  menuPid?: number;
  /**
   * 代码生成器Id
   * @format int64
   */
  id: number;
}

export interface UpdateConfigInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 名称
   * @minLength 1
   * @maxLength 64
   */
  name: string;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 属性值
   * @maxLength 64
   */
  value?: string | null;
  /** 是否枚举<br />&nbsp;是 Y = 1<br />&nbsp;否 N = 2<br /> */
  sysFlag?: YesNoEnum;
  /**
   * 分组编码
   * @maxLength 64
   */
  groupCode?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 256
   */
  remark?: string | null;
}

export interface UpdateDbColumnInput {
  configId?: string | null;
  tableName?: string | null;
  columnName?: string | null;
  oldColumnName?: string | null;
  description?: string | null;
}

export interface UpdateDbTableInput {
  configId?: string | null;
  tableName?: string | null;
  oldTableName?: string | null;
  description?: string | null;
}

export interface UpdateDictDataInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 字典类型Id
   * @format int64
   */
  dictTypeId?: number;
  /** 系统字典类型表 */
  dictType?: SysDictType;
  /**
   * 值
   * @minLength 1
   * @maxLength 128
   */
  value: string;
  /**
   * 编码
   * @minLength 1
   * @maxLength 64
   */
  code: string;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface UpdateDictTypeInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 名称
   * @minLength 1
   * @maxLength 64
   */
  name: string;
  /**
   * 编码
   * @minLength 1
   * @maxLength 64
   */
  code: string;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 256
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

export interface UpdateJobDetailInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 组名称
   * @maxLength 128
   */
  groupName?: string | null;
  /**
   * 作业类型FullName
   * @maxLength 128
   */
  jobType?: string | null;
  /**
   * 程序集Name
   * @maxLength 128
   */
  assemblyName?: string | null;
  /**
   * 描述信息
   * @maxLength 128
   */
  description?: string | null;
  /** 是否并行执行 */
  concurrent?: boolean;
  /** 是否扫描特性触发器 */
  includeAnnotations?: boolean;
  /** 额外数据 */
  properties?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string | null;
  /** 是否为脚本创建的作业 */
  createFromScript?: boolean;
  /** 脚本代码 */
  scriptCode?: string | null;
  /**
   * 作业Id
   * @minLength 2
   */
  jobId: string;
}

export interface UpdateJobTriggerInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 触发器类型FullName
   * @maxLength 128
   */
  triggerType?: string | null;
  /**
   * 程序集Name
   * @maxLength 128
   */
  assemblyName?: string | null;
  /**
   * 参数
   * @maxLength 128
   */
  args?: string | null;
  /**
   * 描述信息
   * @maxLength 128
   */
  description?: string | null;
  /** <br />&nbsp; Backlog = 0<br />&nbsp; Ready = 1<br />&nbsp; Running = 2<br />&nbsp; Pause = 3<br />&nbsp; Blocked = 4<br />&nbsp; ErrorToReady = 5<br />&nbsp; Archived = 6<br />&nbsp; Panic = 7<br />&nbsp; Overrun = 8<br />&nbsp; Unoccupied = 9<br />&nbsp; NotStart = 10<br />&nbsp; Unknown = 11<br />&nbsp; Unhandled = 12<br /> */
  status?: TriggerStatus;
  /**
   * 起始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 最近运行时间
   * @format date-time
   */
  lastRunTime?: string | null;
  /**
   * 下一次运行时间
   * @format date-time
   */
  nextRunTime?: string | null;
  /**
   * 触发次数
   * @format int64
   */
  numberOfRuns?: number;
  /**
   * 最大触发次数（0:不限制，n:N次）
   * @format int64
   */
  maxNumberOfRuns?: number;
  /**
   * 出错次数
   * @format int64
   */
  numberOfErrors?: number;
  /**
   * 最大出错次数（0:不限制，n:N次）
   * @format int64
   */
  maxNumberOfErrors?: number;
  /**
   * 重试次数
   * @format int32
   */
  numRetries?: number;
  /**
   * 重试间隔时间（ms）
   * @format int32
   */
  retryTimeout?: number;
  /** 是否立即启动 */
  startNow?: boolean;
  /** 是否启动时执行一次 */
  runOnStart?: boolean;
  /** 是否在启动时重置最大触发次数等于一次的作业 */
  resetOnlyOnce?: boolean;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string | null;
  /**
   * 作业Id
   * @minLength 2
   */
  jobId: string;
  /**
   * 触发器Id
   * @minLength 2
   */
  triggerId: string;
}

export interface UpdateMenuInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 父Id
   * @format int64
   */
  pid?: number;
  /** 系统菜单类型枚举<br />&nbsp;目录 Dir = 1<br />&nbsp;菜单 Menu = 2<br />&nbsp;按钮 Btn = 3<br /> */
  type?: MenuTypeEnum;
  /**
   * 名称
   * @maxLength 64
   */
  name?: string | null;
  /**
   * 路由地址
   * @maxLength 128
   */
  path?: string | null;
  /**
   * 组件路径
   * @maxLength 128
   */
  component?: string | null;
  /**
   * 重定向
   * @maxLength 128
   */
  redirect?: string | null;
  /**
   * 权限标识
   * @maxLength 128
   */
  permission?: string | null;
  /**
   * 图标
   * @maxLength 128
   */
  icon?: string | null;
  /** 是否内嵌 */
  isIframe?: boolean;
  /**
   * 外链链接
   * @maxLength 256
   */
  outLink?: string | null;
  /** 是否隐藏 */
  isHide?: boolean;
  /** 是否缓存 */
  isKeepAlive?: boolean;
  /** 是否固定 */
  isAffix?: boolean;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 备注
   * @maxLength 256
   */
  remark?: string | null;
  /** 菜单子项 */
  children?: SysMenu[] | null;
  /**
   * 名称
   * @minLength 1
   */
  title: string;
}

export interface UpdateNoticeInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 标题
   * @minLength 1
   * @maxLength 32
   */
  title: string;
  /**
   * 内容
   * @minLength 1
   */
  content: string;
  /** 通知公告状类型枚举<br />&nbsp;通知 NOTICE = 1<br />&nbsp;公告 ANNOUNCEMENT = 2<br /> */
  type?: NoticeTypeEnum;
  /**
   * 发布人Id
   * @format int64
   */
  publicUserId?: number;
  /**
   * 发布人姓名
   * @maxLength 32
   */
  publicUserName?: string | null;
  /**
   * 发布机构Id
   * @format int64
   */
  publicOrgId?: number;
  /**
   * 发布机构名称
   * @maxLength 64
   */
  publicOrgName?: string | null;
  /**
   * 发布时间
   * @format date-time
   */
  publicTime?: string | null;
  /**
   * 撤回时间
   * @format date-time
   */
  cancelTime?: string | null;
  /** 通知公告状态枚举<br />&nbsp;草稿 DRAFT = 0<br />&nbsp;发布 PUBLIC = 1<br />&nbsp;撤回 CANCEL = 2<br />&nbsp;删除 DELETED = 3<br /> */
  status?: NoticeStatusEnum;
}

export interface UpdateOrgInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 父Id
   * @format int64
   */
  pid?: number;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** 机构子项 */
  children?: SysOrg[] | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
}

export interface UpdatePosInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
}

export interface UpdateRegionInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 父Id
   * @format int64
   */
  pid?: number;
  /**
   * 简称
   * @maxLength 32
   */
  shortName?: string | null;
  /**
   * 组合名
   * @maxLength 64
   */
  mergerName?: string | null;
  /**
   * 行政代码
   * @maxLength 32
   */
  code?: string | null;
  /**
   * 邮政编码
   * @maxLength 6
   */
  zipCode?: string | null;
  /**
   * 区号
   * @maxLength 6
   */
  cityCode?: string | null;
  /**
   * 层级
   * @format int32
   */
  level?: number;
  /**
   * 拼音
   * @maxLength 128
   */
  pinYin?: string | null;
  /**
   * 经度
   * @format float
   */
  lng?: number;
  /**
   * 维度
   * @format float
   */
  lat?: number;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 机构子项 */
  children?: SysRegion[] | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
}

export interface UpdateRoleInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 编码
   * @maxLength 64
   */
  code?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /** 角色数据范围枚举<br />&nbsp;全部数据 All = 1<br />&nbsp;本部门及以下数据 DeptChild = 2<br />&nbsp;本部门数据 Dept = 3<br />&nbsp;仅本人数据 Self = 4<br />&nbsp;自定义数据 Define = 5<br /> */
  dataScope?: DataScopeEnum;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 菜单Id集合 */
  menuIdList?: number[] | null;
}

export interface UpdateTenantInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 用户Id
   * @format int64
   */
  userId?: number;
  /**
   * 机构Id
   * @format int64
   */
  orgId?: number;
  /**
   * 主机
   * @maxLength 128
   */
  host?: string | null;
  /** 租户类型枚举<br />&nbsp;Id隔离 Id = 0<br />&nbsp;库隔离 Db = 1<br /> */
  tenantType?: TenantTypeEnum;
  dbType?: DbType;
  /**
   * 数据库连接
   * @maxLength 256
   */
  connection?: string | null;
  /**
   * 数据库标识
   * @maxLength 64
   */
  configId?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /** 电子邮箱 */
  email?: string | null;
  /** 电话 */
  phone?: string | null;
  /**
   * 租户名称
   * @minLength 2
   */
  name: string;
  /**
   * 管理员名称
   * @minLength 3
   */
  adminName: string;
}

export interface UpdateUserInput {
  /**
   * 雪花Id
   * @format int64
   */
  id?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string | null;
  /**
   * 创建者Id
   * @format int64
   */
  createUserId?: number | null;
  /**
   * 修改者Id
   * @format int64
   */
  updateUserId?: number | null;
  /** 软删除 */
  isDelete?: boolean;
  /**
   * 租户Id
   * @format int64
   */
  tenantId?: number | null;
  /**
   * 昵称
   * @maxLength 32
   */
  nickName?: string | null;
  /**
   * 头像
   * @maxLength 512
   */
  avatar?: string | null;
  /** 性别枚举<br />&nbsp;男 Male = 1<br />&nbsp;女 Female = 2<br /> */
  sex?: GenderEnum;
  /**
   * 年龄
   * @format int32
   */
  age?: number;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: string | null;
  /**
   * 民族
   * @maxLength 32
   */
  nation?: string | null;
  /**
   * 手机号码
   * @maxLength 16
   */
  phone?: string | null;
  /** 证件类型枚举<br />&nbsp;身份证 IdCard = 0<br />&nbsp;护照 PassportCard = 1<br />&nbsp;出生证 BirthCard = 2<br />&nbsp;港澳台通行证 GatCard = 3<br />&nbsp;外国人居留证 ForeignCard = 4<br /> */
  cardType?: CardTypeEnum;
  /**
   * 身份证号
   * @maxLength 32
   */
  idCardNum?: string | null;
  /**
   * 邮箱
   * @maxLength 64
   */
  email?: string | null;
  /**
   * 地址
   * @maxLength 256
   */
  address?: string | null;
  /** 文化程度枚举<br />&nbsp;小学 Level1 = 0<br />&nbsp;初中 Level2 = 1<br />&nbsp;高中 Level3 = 2<br />&nbsp;中专 Level4 = 3<br />&nbsp;大专 Level5 = 4<br />&nbsp;本科 Level6 = 5<br />&nbsp;硕士研究生 Level7 = 6<br />&nbsp;博士研究生 Level8 = 7<br /> */
  cultureLevel?: CultureLevelEnum;
  /**
   * 政治面貌
   * @maxLength 16
   */
  politicalOutlook?: string | null;
  /**
   * 毕业院校
   * @maxLength 128
   */
  college?: string | null;
  /**
   * 办公电话
   * @maxLength 16
   */
  officePhone?: string | null;
  /**
   * 紧急联系人
   * @maxLength 32
   */
  emergencyContact?: string | null;
  /**
   * 紧急联系人电话
   * @maxLength 16
   */
  emergencyPhone?: string | null;
  /**
   * 紧急联系人地址
   * @maxLength 256
   */
  emergencyAddress?: string | null;
  /**
   * 个人简介
   * @maxLength 512
   */
  introduction?: string | null;
  /**
   * 排序
   * @format int32
   */
  orderNo?: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
  /**
   * 备注
   * @maxLength 128
   */
  remark?: string | null;
  /** 账号类型枚举<br />&nbsp;其他 None = 0<br />&nbsp;普通账号 User = 1<br />&nbsp;系统管理员 Admin = 4<br />&nbsp;超级管理员 SuperAdmin = 999<br /> */
  accountType?: AccountTypeEnum;
  /**
   * 机构Id
   * @format int64
   */
  orgId?: number;
  /** 系统机构表 */
  sysOrg?: SysOrg;
  /**
   * 职位Id
   * @format int64
   */
  posId?: number;
  /** 系统职位表 */
  sysPos?: SysPos;
  /**
   * 工号
   * @maxLength 32
   */
  jobNum?: string | null;
  /**
   * 职级
   * @maxLength 32
   */
  posLevel?: string | null;
  /**
   * 入职日期
   * @format date-time
   */
  joinDate?: string | null;
  /**
   * 最新登录Ip
   * @maxLength 256
   */
  lastLoginIp?: string | null;
  /**
   * 最新登录地点
   * @maxLength 128
   */
  lastLoginAddress?: string | null;
  /**
   * 最新登录时间
   * @format date-time
   */
  lastLoginTime?: string | null;
  /**
   * 最新登录设备
   * @maxLength 128
   */
  lastLoginDevice?: string | null;
  /**
   * 电子签名
   * @maxLength 512
   */
  signature?: string | null;
  /**
   * 账号
   * @minLength 1
   */
  account: string;
  /**
   * 真实姓名
   * @minLength 1
   */
  realName: string;
  /** 角色集合 */
  roleIdList?: number[] | null;
  /** 扩展机构集合 */
  extOrgIdList?: SysUserExtOrg[] | null;
}

export interface UserInput {
  /**
   * 主键Id
   * @format int64
   */
  id: number;
  /** 通用状态枚举<br />&nbsp;启用 Enable = 1<br />&nbsp;停用 Disable = 2<br /> */
  status?: StatusEnum;
}

/** 授权用户角色 */
export interface UserRoleInput {
  /**
   * 用户Id
   * @format int64
   */
  userId?: number;
  /** 角色Id集合 */
  roleIdList?: number[] | null;
}

export interface WechatOAuth2Input {
  /**
   * Code
   * @minLength 10
   */
  code: string;
}

export interface WechatPayOutput {
  /** OpenId */
  openId?: string | null;
  /**
   * 订单金额
   * @format int32
   */
  total?: number;
  /** 附加数据 */
  attachment?: string | null;
  /** 优惠标记 */
  goodsTag?: string | null;
}

export interface WechatPayParaInput {
  /** 订单Id */
  prepayId?: string | null;
}

export interface WechatPayTransactionInput {
  /** OpenId */
  openId?: string | null;
  /**
   * 订单金额
   * @format int32
   */
  total?: number;
  /** 商品描述 */
  description?: string | null;
  /** 附加数据 */
  attachment?: string | null;
  /** 优惠标记 */
  goodsTag?: string | null;
}

export interface WechatUserLogin {
  /**
   * OpenId
   * @minLength 10
   */
  openId: string;
}

/**
 * 是否枚举<br />&nbsp;是 Y = 1<br />&nbsp;否 N = 2<br />
 * @format int32
 */
export enum YesNoEnum {
  Value1 = 1,
  Value2 = 2
}
