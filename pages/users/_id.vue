<template>
  <div>
    <p>
      <nuxt-link to="/users/2?userType=4">用户2</nuxt-link>
      <nuxt-link to="/users/3?userType=5">用户3</nuxt-link>
      <nuxt-link to="/users/4?userType=6">用户4</nuxt-link>
    </p>
    <p>用户参数id：{{userId}}</p>
    <p>用户参数type：{{userType}}</p>
    <p v-show="loggedUser">用户登录信息：{{loggedUser}}</p>
  </div>
</template>

<script>
  import { userHead } from '~/utils/head.js'
  import { mapGetters } from 'vuex'
  export default {
    watchQuery: true, // 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
    head () {
      return userHead
    },
    validate({params, query}){
      // Must be a number
      return /^\d+$/.test(params.id) && /^\d+$/.test(query.userType)
    },
    fetch  () {
      console.log('fetch')
    },
    asyncData (context) {
      console.log('asyncData1')
    },
    data () {
      return {
        userId: '',
        userType: '',
        text: ''
      }
    },
    computed: mapGetters(['loggedUser']),
    // watch: {
    //   $route: {
    //     handler: function(newVal, oldVal){
    //       console.log('watch:'+ newVal);
    //       this.userId = newVal.params.id
    //       this.userType = newVal.query.userType
    //     },
    //     // 深度观察监听
    //     deep: true
    //   }
    // },
    beforeRouteUpdate (to, from, next) {
      console.log('beforeRouteUpdate')
      this.userId = to.params.id
      this.userType = to.query.userType
      // next()
    },
    beforeCreate () {
      console.log('beforeCreate')
    },
    created () {
      console.log('created')
    },
    beforeMount () {
      console.log('beforeMount')
      this.userId = this.$route.params.id
      this.userType = this.$route.query.userType
    },
    mounted () {
      console.log('mounted')
      // console.log(this.$route.params.id)
      // this.test()
      // this.userId = this.$route.params.id
      // this.userType = this.$route.query.userType
    },
    methods: {
      test () {
        console.log('methods: test () ')
      },
      async click(){
        let {status,data:{text}} = await self.$axios.post('/updateText',{
          text,
          newText
        })
        this.text = text;
      }
    }
  }
</script>

<style scoped>

</style>
