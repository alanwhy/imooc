import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VeeValidate, { Validator } from "vee-validate"

Vue.config.productionTip = false

Vue.use(VeeValidate)

// import zh from "vee-validate/dist/locale/zh_CN"
// Validator.localize("zh_CN", zh)

import "./local/index"
const validator = new Validator()
validator.localize('zh-CN')

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'http://your.domain.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
