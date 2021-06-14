/*
 * @Author: your name
 * @Date: 2021-05-24 17:42:24
 * @LastEditTime: 2021-06-14 17:12:22
 * @LastEditors: Please set LastEditors
 * @Description: 项目配置文件
 * @FilePath: /vue-admin/vue-admin/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 8080,
    proxy: {
      "^/api": {
        target: "http://localhost:3000"
      }
    }
  },
  plugins: [vue()]
})
