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
      }
    },
    async asyncData ({ query }) {
      // We can use async/await ES6 feature
      const { data } = await axios.get(`/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${query.start}&count=${query.count}`)
      return { listData: data.subjects }
    },
    mounted () {
      // if (process.client) {
      //   require('external_library')
      // }
      console.log(window)
    }
  }
</script>

<style lang="sass" scoped>
  .h1
    color: red
</style>
