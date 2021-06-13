<!--
 * @Author: your name
 * @Date: 2021-05-25 15:10:24
 * @LastEditTime: 2021-06-13 22:30:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin/vue-admin/src/views/Login.vue
-->
<!--  -->
<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form status-icon :model="user" :rules="rules" ref="userForm">
        <div class="title">火星</div>
        <el-form-item prop="userName">
          <el-input type="text" prefix-icon="el-icon-user" v-model="user.userName" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type="password" prefix-icon="el-icon-view" v-model="user.userPwd" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script >
export default {
  name: 'login',
  data() {
    return {
      user: {
        userName: '',
        userPwd: ''
      },
      rules: {
        userName: [{ required: true, message: "请输入用户名", trigger: 'blur' }],
        userPwd: [{ required: true, message: "请输入密码", trigger: 'blur' }],
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.userForm.validate(async (valid) => {
        if (valid) {
          const res = await this.$api.login(this.user)
          this.$store.commit('saveUserInfo',res)
          this.$router.push('/welcome')
        }
      })    }
  }
}
</script>
<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .modal {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>
