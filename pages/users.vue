<template>
  <div>
    <p>嵌套路由:users.vue</p>
    <nuxt-child/>
  </div>
</template>
<script>
  export default {
    layout: 'navbar-layouts',
    middleware: 'userAuth'
  }
</script>

<style scoped>
</style>
