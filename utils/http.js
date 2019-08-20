import axios from 'axios'

// 设置请求头token
const ajaxToken = function () {
  // const lang = localStorage.lang || 'zh'
  const token = utils.getCookie('UserLoginToken')
  // axios.defaults.headers.common['lang'] = lang
  if (token) {
    axios.defaults.headers.common['Token'] = token
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
  get: function (url, params) {
    ajaxToken()
    return axios.get(baseUrl + url, {params: params}).then(res => res.data)
  },
  post: function (url, params) {
    ajaxToken()
    return axios.post(baseUrl + url, params).then(res => res.data)
  },
  postForm: function (url, params) {
    ajaxToken()
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
    }).then(res => res.data)
  },
  put: function (url, params) {
    ajaxToken()
    return axios.put(baseUrl + url, params).then(res => res.data)
  },
  putForm: function (url, params) {
    ajaxToken()
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
    }).then(res => res.data)
  },
  delete: function (url, params) {
    ajaxToken()
    return axios.delete(baseUrl + url, params).then(res => res.data)
  },
  deleteForm: function (url, params) {
    ajaxToken()
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
    }).then(res => res.data)
  }
}
