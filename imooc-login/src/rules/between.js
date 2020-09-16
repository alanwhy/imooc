/**
 * @description 对vee-validate中的between规则进行定制化
*/
import { extend } from 'vee-validate'
import { between } from 'vee-validate/dist/rules'
extend('between', {
  ...between,
  // validate (value, {min, max}) {

  // },
  // params: ['min', 'max'],
  message: '{_field_}应该是{min}位～{max}位'
})
