import { reactive } from "vue";
import type { FormRules } from "element-plus";

/** 自定义表单规则校验 */
export const formRules = reactive(<FormRules>{
 
    content: [{ required: true, message: "文本內容为必填项", trigger: "blur" }],
  });
