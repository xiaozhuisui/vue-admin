/*
 * @Author: your name
 * @Date: 2021-05-26 09:56:20
 * @LastEditTime: 2021-06-14 17:55:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin/vue-admin/src/utils/request.js
 */
/**
 * 请求函数封装
 * axios 二次封装
 */
import axios from 'axios'
import config from './../config'
import { ElMessage } from 'element-plus'
import router from './../router'
const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'
// 创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
})
service.interceptors.request.use((req) => {
  const headers = req.headers
  // 这一步是复杂类型引用
  if (!headers.Authorization) headers.Authorization = ' Bear Jack'
  return req
})
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if (code === 200) {
    return data
  } else if (
    code === 500001) {
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 1500)
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})
/**
 * 请求的核心函数
 * @param {*} options 请求配置
 */
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data;
  }
  let isMock = config.mock;
  if (typeof options.mock !== 'undefined') {
    isMock = options.mock;
  }
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  }

  return service(options)
}
export default request
