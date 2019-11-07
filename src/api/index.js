// 导出一个配置好的axios对象
import axios from 'axios'
import local from '@/utils/local'
import router from '@/router'
import JSONBIG from 'json-bigint'
// 对axios进行配置
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
axios.defaults.transformResponse = [(data) => {
  try {
    return JSONBIG.parse(data)
  } catch (e) {
    return data
  }
}]
// 设置默认的请求头
// if (local.getUser()) {
//   axios.defaults.headers.Authorization = `Bearer ${local.getUser().token}`
// }
axios.interceptors.request.use((config) => {
  const user = local.getUser() || {}
  config.headers.Authorization = `Bearer ${user.token}`
  return config
}, (err) => {
  return Promise.reject(err)
})
axios.interceptors.response.use(res => res, err => {
  // 获取响应状态码 err.response 响应对象
  if (err.response.status === 401) {
    return router.push('/login')
  }
  return Promise.reject(err)
})
export default axios
