<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item" :class="{'form-group--error':$v.name.$error}">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input
              v-model.trim="$v.name.$model"
              type="text"
              name="title"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="error layui-form-mid" v-if="!$v.name.required">用户名不得为空</div>
          <div class="error layui-form-mid" v-if="!$v.name.email">用户名输入格式错误</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input
              v-model="password"
              type="password"
              name="title"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              v-model="code"
              type="password"
              name="password"
              required
              lay-verify="required"
              placeholder="输入验证码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="layui-form-mid svg" v-html="svg" @click="getCaptcha"></div>
        </div>
        <button type="button" class="layui-btn" @click="checkForm">点击登录</button>
        <a class="imooc-link" href="http://www.layui.com">忘记密码？</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "app",
  data() {
    return {
      svg: "",
      name: "",
      password: "",
      code: "",
      errorMsg: [],
    };
  },
  validations: {
    name: {
      required,
      email,
    },
    password: {
      required,
    },
    code: {
      required,
    },
  },
  methods: {
    getCaptcha() {
      axios.get("http://localhost:3000/getCaptcha").then((res) => {
        if (res.status === 200) {
          if (res.data.code === 200) {
            this.svg = res.data.data;
          }
        }
      });
    },
    checkForm() {
      this.errorMsg = [];
      if (!this.name) {
        this.errorMsg.push("登录名为空");
      }
      if (!this.password) {
        this.errorMsg.push("密码不得为空");
      }
      if (!this.code) {
        this.errorMsg.push("验证码未填写");
      }
    },
  },
  mounted() {
    this.getCaptcha();
  },
};
</script>

<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}
.layui-container {
  background: #fff;
}
input {
  width: 190px;
}
.imooc-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}
.svg {
  position: relative;
  top: -15px;
}
.error {
  display: none;
}
.form-group--error {
  .error {
    display: block;
  }
}
</style>
