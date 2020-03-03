
import axios from 'axios'
import qs from 'qs'

// Vue.use(axios)
// Vue.use(qs)
// qs - 用于解决axios POST请求参数的问题
// 注：qs，使用axios，必须得安装 qs，所有的Post 请求，我们都需要 qs,对参数进行序列化。

// 添加拦截器函数
// 在 request 拦截器实现 发送时
axios.interceptors.request.use(config => {
  // 开始
  return config
}, err => {
  return Promise.reject(err)
})

// 在 response 拦截器实现 响应时
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
// axios.interceptors.response.use(response => response, err => Promise.resolve(err.response))

// 检查状态码
function checkStatus (res) {
  console.log(res.date)
  // 结束
  // 200:正确的请求返回正确的结果
  // 304：请求的资源并没有被修改过
  if (res.status === 200 || res.status === 304) {
    return res.data
  }
  return {
    code: 0,
    msg: res.data.msg || res.statusText,
    data: res.statusText
  }
  return res
}

function checkCode (res) {
  if (res.code === 0) {
    throw new Error(res.msg)
  }
  return res
}

const baseURL = 'https://easy-mock.com/mock/5d9f01e456cc7f41d470bf4f/zgmzx'
export default {
  get (url, params) {
    if (!url) return
    return axios({
      method: 'get',
      url: baseURL + url,
      params, // params` 是即将与请求一起发送的 URL 参数
      timeout: 30000
    }).then(checkStatus).then(checkCode)
  },
  post (url, data) {
    if (!url) return
    return axios({
      method: 'post',
      url: baseURL + url,
      data: qs.stringify(data), // data是作为请求主体被发送的数据
      timeout: 2000
    }).then(checkStatus)
  }
}
