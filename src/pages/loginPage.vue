<template>
  <div class="login-container">
    <div class="login-panel">
      <div class="login-title markdown-block" style="margin-bottom: 30px;">用户登录</div>
      <Input v-model="username" size="large" placeholder="用户名"></Input>
      <Input v-model="password" size="large" type="password" placeholder="密码"></Input>
      <Alert type="error" show-icon v-show="isPasswordWrong" style="margin-bottom: 20px">用户名密码错误</Alert>
      <Button type="success" class="pull-right" long @click="login()">登录</Button>
      <br/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import config from '../config';
  import blogService from '../services/blogService';

  export default {
    name: 'Login',
    data: function() {
      return {
        username: '',
        password: '',
        isPasswordWrong: false,
      };
    },
    methods: {
      login() {
        blogService.login(this.username, this.password).then(() => {
          this.$root.isLogin = true;
          this.isPasswordWrong = false;
        }).catch(e => {
          this.isPasswordWrong = true;
        });
      },
    },
    mounted:function () {

    },
  };
</script>

<style scoped>
  @import "../assets/css/root.css";

  .login-title {
    color: var(--brand-color);
    font-size: 25px;
    padding-left: 20px;
  }

  .markdown-block {
    border-left: 3px solid var(--brand-color);
  }

  .login-container {
    width: 100%;
    height: 100vh;
    padding-top: 1px;
    background-image: url('~@/assets/img/login-back.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: auto;
    padding-left: 0;
  }

  .login-panel {
    width: 400px;
    margin: 250px auto 100px auto;
    border-radius: 5px;
    border: 1px solid white;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 50px;
    padding-bottom: 80px;
  }

  .login-panel * {
    margin-bottom: 20px;
  }
</style>
