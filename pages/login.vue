<template>
  <div>
    <h1>登录</h1>
    <p><input type="text" maxlength="11" placeholder="请输入手机号码" v-model="name"></p>
    <p><input type="password" maxlength="20" placeholder="请输入密码" v-model="pwa"></p>
    <p><button type="button" @click="sumbit">登录</button></p>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'
import { loginHead } from '~/utils/head.js'
// import Navbar from '~/components/Navbar'

export default {
  head () {
    return loginHead
  },
  data  () {
    return {
      name: '',
      pwa: ''
    }
  },
  asyncData (context) {
    return { project: 'nuxt' }
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  components: {
    // Navbar
  },
  created () {
    // console.log(window)
    console.log('created:'+ Cookies.get('userInfo'))
  },
  mounted () {
    console.log(this)
    console.log('mounted:'+ Cookies.get('userInfo'))
  },
  methods: {
    test () {
      console.log('methods: test () ')
    },
    async sumbit(){
      let params = {
        name: this.name,
        pwa: this.pwa
      }
      console.log('login sumbit')
      console.log(params)
      Cookies.set('token', params.name, { expires: 1 })
      Cookies.set('userInfo', params, { expires: 1 })
      this.$store.commit('SET_USER', params)
      this.$router.push('/users/1?userType=3')
    }
  }
}
</script>

<style scoped>
</style>
