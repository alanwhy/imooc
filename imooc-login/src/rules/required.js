/**
 * @description 对vee-validate中的required规则进行定制化
*/
import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
extend('required', {
  ...required,
  message: '必须填写{_field_}'
})
