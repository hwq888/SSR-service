# nuxtJS 服务端渲染demo

![Image text](/hwq888/SSR-service/blob/master/static/demo.gif?raw=true)

涉及到的功能点：
- 路由：路由根据pages目录自动生成对应路径的路由，这里有初步的模拟了一下嵌套路由和动态路由
- 配置项： 新增server，head，loading，全局css，axios，proxy 等配置，具体说明可以查看 nuxt.config.js
- 布局：default.vue 默认布局   navbar-layouts.vue 自定义布局   error.vue 自定义404错误和其他错误信息
- 其他：新增sass预处理，新增渲染的head设置，模拟登录，登录退出等功能

## 参考文档

- [nuxtjs](https://zh.nuxtjs.org/guide


## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
