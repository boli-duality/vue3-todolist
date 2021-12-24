import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '', redirect: '/all' },
      {
        path: '/all',
        name: 'All',
        component: () => import('@/components/all.vue')
      },
      {
        path: '/doing',
        name: 'Doing',
        component: () => import('@/components/doing.vue')
      },
      {
        path: '/done',
        name: 'Done',
        component: () => import('@/components/done.vue')
      },
      {
        path: '/delete',
        name: 'Delete',
        component: () => import('@/components/delete.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active' // 配置模糊匹配
})

export default router
