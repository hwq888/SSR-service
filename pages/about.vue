<template>
  <div>
    <h1 class="h1">关于</h1>
    <div>{{listData}}</div>
  </div>
</template>

<script>
  // import axios from 'axios'
  import { aboutHead } from '~/utils/head.js'
  import http from '~/utils/http.js'
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
    async asyncData ({ store, query, req }) {
      // We can use async/await ES6 feature
      let { data } = await  http.get(`/v2/movie/in_theaters`, {apikey:'0df993c66c0c636e29ecbb5344252a4a', start:query.start, count:query.count}, req)
      return { listData: data.subjects }

       // http.get(`/v2/movie/in_theaters`, {apikey:'0df993c66c0c636e29ecbb5344252a4a', start:query.start, count:query.count}, req).then((res) => {
       //   console.log('22222222222')
       //   console.log(res)
       // })
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
