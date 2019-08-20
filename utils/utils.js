/**
 * Creation time:2019/8/20
 */
import Cookie from 'js-cookie'
export default{
  // 获取服务端cookie
  getcookiesInServer:function (req) {
    // console.log(req.headers.cookie)
    let service_cookie = {};
    req && req.headers.cookie && req.headers.cookie.split(';').forEach(function (item, index) {
      let parts = item.split('=');
      service_cookie[parts[0].trim()] = (parts[1] || '').trim();
    });
    return service_cookie;
  },
  // 获取客户端cookie
  getcookiesInClient:function (key) {
    return Cookie.get(key) ? Cookie.get(key) : ''
  }
}
