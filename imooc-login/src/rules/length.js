/**
 * @description 对vee-validate中的length规则进行定制化
*/
import { extend } from 'vee-validate'
import { length } from 'vee-validate/dist/rules'
extend('length', {
  ...length,
  message: '{_field_}应该是{length}位'
})
