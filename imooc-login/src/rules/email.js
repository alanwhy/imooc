/**
 * @description 对vee-validate中的email规则进行定制化
*/
import { extend } from 'vee-validate'
import { email } from 'vee-validate/dist/rules'
extend('email', {
  ...email,
  message: '账户应为邮箱格式'
})
