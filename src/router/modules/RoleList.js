import Layout from '../../views/layout'

export default {
  path: '/user',
  component: Layout,
  name: 'roleList',
  meta: {
    title: '用户',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/role',
      component: () => import('../../views/role-list'),
      meta: {
        title: '角色列表',
        icon: 'role'
      }
    }
  ]
}
