// 虽然字段很少 但是抽离出来 后续有扩展字段需求就很方便了

import { SysRoleResponse } from "@/api-services/data-contracts";

interface FormItemProps extends SysRoleResponse {
  /** 备注 */
  remark1?: string;
}
interface FormProps {
  formInline: FormItemProps;
}

interface MenuTreeProps {
  formInline: number[];
}

export type { FormItemProps, FormProps, MenuTreeProps };
