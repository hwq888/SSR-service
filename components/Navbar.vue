<template>
  <div class="header">
    <nuxt-link to="/" exact>首页</nuxt-link>
    <nuxt-link to="/about?start=1&count=10">关于</nuxt-link>
    <nuxt-link to="/users/1?userType=3">用户</nuxt-link>
    <a class="userInfo" v-show="loggedUser"><font>欢迎您：{{loggedUser.name}}</font> <i class="login-out" @click="loginOut">注销</i></a>
    <nuxt-link to="/login" v-show="!loggedUser">登录</nuxt-link>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters(['loggedUser']),
    created () {
      console.log('created1')
      if (Cookies.get('userInfo')) {
        this.$store.commit('SET_USER', Cookies.getJSON('userInfo'))
      }
    },
    methods: {
      loginOut () {
        Cookies.remove('userInfo')
        this.$store.commit('SET_USER', '')
        this.$router.replace('/')
      }
    }
  }
</script>

<style scoped>
.header {
  display: flex;
  margin-bottom: 20px;
}
a {
  margin-right: 20px;
  font-size: 14px;
  color: #999;
  text-decoration: none;
  text-transform: uppercase;
  padding-top: 2px;
  padding-bottom: 2px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: color .25s;
  font-weight: 400;
  line-height: normal;
}
a:hover {
  color: #333;
}
a.nuxt-link-active {
  color: #333;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  font-weight: 600;
}
  .userInfo{
    font-size: 12px;
    padding-top: 2px;
    padding-bottom: 2px;
    height: 21px;
    line-height: 21px;
  }
  .login-out{
    color: blue;
    font-style: normal;
  }

</style>
