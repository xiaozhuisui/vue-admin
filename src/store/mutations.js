/*  Vuex 状态管理
 * @Author: 追随
 * @Date: 2021-06-13 21:55:52
 * @LastEditTime: 2021-06-13 22:04:17
 * @LastEditors: Please set LastEditors
 * @Description: Mutations 业务提交
 * @FilePath: /vue-admin/vue-admin/src/store/mutations.js
 */
import storage from './../utils/storage'
export default {
  saveUserInfo(state, userInfo) {
    state.userInfo = userInfo
    storage.setItem('userInfo', userInfo)
  }
}
