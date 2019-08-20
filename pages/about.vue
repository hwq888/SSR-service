<template>
  <div>
    <h1 class="h1">关于</h1>
    <div>{{listData}}</div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { aboutHead } from '~/utils/head.js'
  export default {
    layout: 'navbar-layouts',
    head () {
      return aboutHead
    },
    data () {
      return {
        listData: ''
      }
    },
    async asyncData ({ store, query }) {
      // We can use async/await ES6 feature
      console.log('1111111111111')
      console.log(process.client)
      console.log(store.state.user.name)
      const name = store.state.user.name
      if (name) {
        axios.defaults.headers.common['name'] = name
      }
      // console.log(`window:${window}`)
      const { data } = await axios.get(`/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${query.start}&count=${query.count}`)
      return { listData: data.subjects }
    },
    created () {
      console.log('created2')

    },
    mounted () {
      // if (process.client) {
      //   require('external_library')
      // }
      // this.getData()
    },
    methods: {
      // getData () {
      //  axios.get(`/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${this.$route.query.start}&count=${this.$route.query.count}`)
      //    .then ((res)=>{
      //      console.log(res)
      //      this.listData = res.data.subjects
      //    })
      //    .catch ((error)=> {
      //      console.log(error)
      //    })
      // }
    }
  }
</script>

<style lang="sass" scoped>
  .h1
    color: red
</style>
