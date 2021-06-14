/*
 * @Author: 郑圳宏
 * @Date: 2021-05-25 16:34:07
 * @LastEditTime: 2021-06-14 17:13:43
 * @LastEditors: Please set LastEditors
 * @Description: 环境配置封装
 * @FilePath: /vue-admin/vue-admin/src/config/index.js
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/3bf02f2d39e09bbcb38208e696712328/api'
  },
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/3bf02f2d39e09bbcb38208e696712328/api'
  },
  prod: {
    baseApi: '//futurefe.com/api',
    mockApi: ''
  },
}
export default {
  env,
  mock: false,
  namespace: 'manager',
  ...EnvConfig[env]
}
