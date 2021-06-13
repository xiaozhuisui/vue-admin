/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/',
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
  mock: true,
  namespace: 'manager',
  ...EnvConfig[env]
}
