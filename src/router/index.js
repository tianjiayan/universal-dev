import { createRouter, createWebHashHistory } from 'vue-router'

// 公有路由表
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
