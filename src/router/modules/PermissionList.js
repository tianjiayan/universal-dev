import Layout from '../../views/layout'

export default {
  path: '/user',
  component: Layout,
  name: 'permissionList',
  meta: {
    title: '用户',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/permission',
      component: () => import('../../views/permission-list'),
      meta: {
        title: '权限列表',
        icon: 'permission'
      }
    }
  ]
}
