<template>
  <div>
    <h1>首页</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { indexHead } from '~/utils/head.js'
// import Navbar from '~/components/Navbar'

export default {
  layout: 'navbar-layouts',
  head () {
    return indexHead
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  components: {
    // Navbar
  }
}
</script>

<style scoped>
</style>
