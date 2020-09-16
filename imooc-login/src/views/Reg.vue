<template>
<div class="layui-container fly-marginTop">
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user">
      <ul class="layui-tab-title">
        <li>
          <router-link :to="{name: 'login'}">登录</router-link>
        </li>
        <li class="layui-this">注册</li>
      </ul>
      <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
        <div class="layui-tab-item layui-show">
          <div class="layui-form layui-form-pane">
            <form method="post">

              <div class="layui-form-item">
                <label for="L_email" class="layui-form-label">邮箱</label>
                <ValidationProvider rules="required|email" v-slot="{ errors }">
                  <div class="layui-input-inline">
                    <input type="text" name="账户" v-model="username" autocomplete="off" class="layui-input">
                  </div>
                  <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                  <div class="layui-form-mid imooc-br">
                    <span style="color: #c00;">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>

              <div class="layui-form-item">
                <label for="L_username" class="layui-form-label">昵称</label>
                <ValidationProvider rules="required|min:5" v-slot="{ errors }">
                  <div class="layui-input-inline">
                    <input type="text" id="L_username" name="昵称" v-model="nickname" autocomplete="off" class="layui-input">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>

              <ValidationObserver>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <ValidationProvider rules="required|min:6|max:16" vid="password" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input type="password" id="L_pass" name="密码" v-model="password" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                    <div class="layui-form-mid imooc-br">
                      <span style="color: #c00;">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>

                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label">确认密码</label>
                  <ValidationProvider rules="required|min:6|max:16|confirmed:password" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input type="password" id="L_repass" name="密码" v-model="repassword" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-form-mid">
                      <span style="color: #c00;">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
              </ValidationObserver>

              <div class="layui-form-item">
                <label for="L_vercode" class="layui-form-label">人类验证</label>
                <ValidationProvider rules="required|length:4" v-slot="{ errors }">
                  <div class="layui-input-inline">
                    <input type="text" name="验证码" v-model="code" placeholder="请回答后面的问题" autocomplete="off" class="layui-input">
                  </div>
                  <div>
                    <span class="svg" v-html="svg" @click="_getCode()"></span>
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
              </div>

              <div class="layui-form-item">
                <button class="layui-btn" lay-filter="*" lay-submit>立即注册</button>
              </div>
              <div class="layui-form-item fly-form-app">
                <span>或者直接使用社交账号快捷注册</span>
                <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver
} from 'vee-validate'
import {
  getCode
} from '@/api/login'
import '@/rules/required.js'
import '@/rules/length.js'
import '@/rules/email.js'
import '@/rules/min_max.js'
import '@/rules/confirmed.js'

export default {
  name: 'reg',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      svg: '',
      code: '',
      username: '',
      nickname: '',
      password: '',
      repassword: ''
    }
  },
  mounted() {
    this._getCode()
  },
  methods: {
    _getCode() {
      getCode().then(res => {
        if (res.code !== 200) {
          return
        }
        this.svg = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.imooc-br {
  width: 100%;
  padding: 0 !important;
  margin-top: 8px;
}
</style>
