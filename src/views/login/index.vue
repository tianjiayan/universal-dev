<template>
  <div class="login-container">
    <el-form
      ref="LoginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
        <svg-icon className="svg-language" icon="language"></svg-icon>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="user"></svg-icon>
          </el-icon>
        </span>
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="password"></svg-icon>
          </el-icon>
        </span>
        <el-input :type="inputType" v-model="loginForm.password"></el-input>
        <span class="svg-pwd" @click="handllePassWordStatus">
          <el-icon>
            <svg-icon :icon="passwordIconStatus"></svg-icon>
          </el-icon>
        </span>
      </el-form-item>
      <el-button
        class="login-button"
        type="primary"
        @click="handleLoginSubmit(LoginForm)"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import UserApi from '../../api/user'
import { reactive, ref, computed } from 'vue'
import { validatePassword } from './rule'
import md5 from 'md5'

const inputType = ref('password')
const LoginForm = ref()

const loginForm = reactive({
  username: '',
  password: ''
})
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ]
})
const passwordIconStatus = computed(() => {
  return inputType.value === 'password' ? 'eye' : 'eye-open'
})

// 登录方式

const handleLoginSubmit = async () => {
  if (!LoginForm.value) return
  await LoginForm.value.validate(async (valid) => {
    if (valid) {
      alert('登录')
      loginForm.password = md5(loginForm.password)
      const response = await UserApi.login(loginForm)
      console.log(response, '登录')
    }
  })
}

const handllePassWordStatus = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
</script>

<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  position: relative;
  height: 100%;
  background-color: $bg;
  .login-form {
    width: 520px;
    padding: 0 35px;
    position: absolute;
    left: 50%;
    margin-left: -260px;
    top: 160px;
    overflow: hidden;
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
      }
      .svg-pwd {
        position: absolute;
        right: 20px;
        top: 10px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
      }
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      .el-input__wrapper {
        background: transparent !important;
        box-shadow: none;
      }
      .el-input__wrapper.is-focus {
        box-shadow: none;
      }
      input {
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $light_gray;
        text-align: center;
        font-weight: bold;
        margin-bottom: 40px;
      }
      ::v-deep .svg-language {
        position: absolute;
        top: 4px;
        right: 0;
        background-color: #fff;
        font-size: 22px;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
    .login-button {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>
