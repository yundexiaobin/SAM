import { reactive } from "vue";
import type { FormRules } from "element-plus";

/** 自定义表单规则校验 */
export const formRules = reactive(<FormRules>{
 
    tsCode: [{ required: true, message: "股票號碼为必填项", trigger: "blur" }],
    reason: [{ required: true, message: "加入原因为必填项", trigger: "blur" }],
   });
