/**
 * @description 对vee-validate中的confirmed规则进行定制化
*/
import { extend } from 'vee-validate'
import { confirmed } from 'vee-validate/dist/rules'
extend('confirmed', {
  ...confirmed,
  message: '两次{_field_}不一致'
})
