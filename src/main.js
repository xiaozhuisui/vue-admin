import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import config from './config'
import axios from 'axios'
import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App)
console.log(config)
axios.get(config.mockApi + '/get/list').then((res) => [
  console.log(res)
])
app.use(router).use(ElementPlus)
  .mount('#app')
