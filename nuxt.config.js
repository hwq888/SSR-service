
export default {
  mode: 'universal',
  /*
 ** 端口和ip
 */
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#4FC08D',
    failedColor: '#bf5050',
    duration: 1500
  },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '~assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  generate: {
    routes: [
      '/users/1',
      '/users/2'
    ]
  },
  // // 动态路由 异步获取
  // generate: {
  //   routes: function () {
  //     return axios.get('https://my-api/users')
  //       .then((res) => {
  //         return res.data.map((user) => {
  //           return '/users/' + user.id
  //         })
  //       })
  //   }
  // },
  axios: {
    proxy: true
  },
  proxy: {
    '/v2': {
      target: 'http://api.douban.com',
      pathRewrite: {
        '^/v2': '/v2'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
