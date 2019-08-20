import axios from 'axios'
import utils from '~/utils/utils'

// 设置请求头token
const ajaxToken = function (req) {
  let isClient = process.client; // 客户端
  let isServer = process.server; // 服务端
  let token = ''
  if (isClient) {
    token = utils.getcookiesInClient('token')
  }
  if (isServer) {
    let cookies = utils.getcookiesInServer(req)
    token = cookies.token ? cookies.token : ''
    console.log('http token:'+ token)
  }

  if (token) {
    axios.defaults.headers.common['token'] = token
  }
}

// 超时时间
// axios.defaults.timeout = 60000
// http请求拦截器
// axios.interceptors.request.use(config => {
//   ajaxToken()
//   return config
// }, error => {
//   return Promise.reject(error)
// })
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  // return data
  let code = data.data.code
  switch (code) {
    case 401:
      console.log('没有对应权限，请联系管理员')
      break
    case 403:
      console.log('token失效，请重新登录')
      $router.push('/login')
      break
    case 404:
      console.log('该请求没有找到指定资源!')
      break
    case 300:
      console.log('当前网络不给力或该请求无法进行跨域访问!')
      break
    default:
      return data
  }
  return data
}, error => {
  if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    // 请求超时处理
    console.log('服务器繁忙，请稍后再试！')
  } else {
    return Promise.reject(error)
  }
})
let baseUrl = ''
export default {
  get: function (url, params, req) {
    ajaxToken(req)
    return axios.get(baseUrl + url, {params: params}).then(res => res)
  },
  post: function (url, params, req) {
    ajaxToken(req)
    return axios.post(baseUrl + url, params).then(res => res)
  },
  postForm: function (url, params, req) {
    ajaxToken(req)
    return axios({
      url: baseUrl + url,
      method: 'post',
      data: params,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => res)
  },
  put: function (url, params, req) {
    ajaxToken(req)
    return axios.put(baseUrl + url, params).then(res => res)
  },
  putForm: function (url, params, req) {
    ajaxToken(req)
    return axios({
      url: baseUrl + url,
      method: 'put',
      data: params,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => res)
  },
  delete: function (url, params, req) {
    ajaxToken(req)
    return axios.delete(baseUrl + url, params).then(res => res)
  },
  deleteForm: function (url, params, req) {
    ajaxToken(req)
    return axios({
      url: url,
      method: 'delete',
      data: params,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => res)
  }
}
