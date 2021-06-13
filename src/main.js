/*
 * @Author: your name
 * @Date: 2021-05-24 17:42:24
 * @LastEditTime: 2021-06-13 22:28:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin/vue-admin/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import request from './utils/request'
import api from './api'
import store from './store'
const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$api = api
app.use(router).use(ElementPlus).use(store)
  .mount('#app')
