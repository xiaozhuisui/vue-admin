import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './../components/Home.vue'
const routes = [{
  name: 'home',
  path: '/',
  component: Home,
  meta: {
    title: '首页'
  },
  redirect: '/Login',
  children: [{
    name: 'welcome',
    path: '/welcome',
    component: () => import('./../views/Welcome.vue'),
    meta: {
      title: '欢迎页'
    }
  },
  ]
}, {
  name: 'login',
  path: '/login',
  component: () => import('./../views/Login.vue'),
  meta: {
    title: '登录页'
  }
}]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
