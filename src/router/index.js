import { createRouter, createWebHashHistory } from 'vue-router'
// import layout from '../views/layout'
// import store from '../store'

import ArticleRanking from './modules/ArticleRanking'
import UserManage from './modules/UserManage'
import RoleList from './modules/RoleList'
import PermissionList from './modules/PermissionList'
import ArticleCreate from './modules/ArticleCreate'
// 公有路由表
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout'),
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile/profile.vue'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('../views/chart'),
        meta: {
          title: '数据可视化',
          icon: 'chart'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401')
      }
    ]
  }
]
// 私有路由表
export const privateRoutes = [
  UserManage,
  RoleList,
  PermissionList,
  ArticleRanking,
  ArticleCreate
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router

//私有路由表
// const privateRouters = [
//   {
//     path: '/user',
//     name: 'user',
//     component: layout,
//     redirect: '/user/manage',
//     meta: {
//       title: '用户',
//       icon: 'personnel'
//     },
//     children: [
//       {
//         path: '/user/manage',
//         name: 'userManage',
//         component: () => import('../views/user-manage'),
//         meta: {
//           title: '员工管理',
//           icon: 'personnel-manage'
//         }
//       },
//       {
//         path: '/user/role',
//         name: 'userRole',
//         component: () => import('../views/role-list'),
//         meta: {
//           title: '角色列表',
//           icon: 'role'
//         }
//       },
//       {
//         path: '/user/permission',
//         name: 'userPermission',
//         component: () => import('../views/permission-list'),
//         meta: {
//           title: '权限列表',
//           icon: 'permission'
//         }
//       },
//       {
//         path: '/user/info/:id',
//         name: 'userInfo',
//         component: () => import('../views/user-info')
//       },
//       {
//         path: '/user/import',
//         name: 'userImport',
//         component: () => import('../views/import')
//       }
//     ]
//   },
//   {
//     path: '/article',
//     name: 'article',
//     component: () => layout,
//     meta: {
//       title: '文章',
//       icon: 'article'
//     },
//     redirect: '/article/ranking',
//     children: [
//       {
//         path: '/article/ranking',
//         name: 'articleRanking',
//         component: () => import('../views/article-ranking'),
//         meta: {
//           title: '文章排名',
//           icon: 'article-ranking'
//         }
//       },
//       {
//         path: '/article/create',
//         name: 'articleCreate',
//         component: () => import('../views/article-create'),
//         meta: {
//           title: '创建文章',
//           icon: 'article-create'
//         }
//       },
//       {
//         path: '/article/:id',
//         name: 'articleDetail',
//         component: () => import('../views/article-detail')
//       }
//     ]
//   }
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: [...publicRoutes, ...privateRouters]
// })

// router.beforeEach(async (to, from, next) => {
//   const token = store.getters.token
//   const userInfo = store.getters.userInfo
//   if (to.path == '/login') {
//     next()
//     return
//   }
//   if (token) {
//     // 调用获取信息接口
//     const response = await store.dispatch('user/getUserInfo')
//     if (response) {
//       next()
//     } else {
//       next('/login')
//     }

//     return
//   } else {
//     next('/login')
//   }
// })
// export default router
