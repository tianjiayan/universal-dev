import Layout from '../../views/layout'

export default {
  path: '/article',
  component: Layout,
  name: 'articleCreate',
  meta: {
    title: '文章',
    icon: 'article'
  },
  children: [
    {
      path: '/article/ranking',
      component: () => import('../../views/article-create'),
      meta: {
        title: '文章创建',
        icon: 'article-create'
      }
    }
  ]
}
