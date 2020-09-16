/**
 * @description 对vee-validate中的min,max规则进行定制化
 * @description 因为这两个总会在一起使用去规定一个字段应该是min～max位
*/
import { extend } from 'vee-validate'
import { min, max } from 'vee-validate/dist/rules'
extend('min', {
  ...min,
  message: '{_field_}应大于{length}位'
})

extend('max', {
  ...max,
  message: '{_field_}应少于{length}位'
})
