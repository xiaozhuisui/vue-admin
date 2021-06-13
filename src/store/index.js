/*
 * @Author: 追随
 * @Date: 2021-06-13 21:55:40
 * @LastEditTime: 2021-06-13 22:14:00
 * @LastEditors: Please set LastEditors
 * @Description: Vuex 状态管理
 */
import { createStore } from 'vuex'
import mutations from './mutations'
import storage from './../utils/storage'
const state = {
  userInfo: '' || storage.getItem("userInfo")  // 获取用户信息
}
export default createStore({
  state, mutations
})
