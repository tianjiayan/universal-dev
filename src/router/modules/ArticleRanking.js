import Layout from '../../views/layout'

export default {
  path: '/article',
  component: Layout,
  name: 'articleRanking',
  meta: {
    title: '文章',
    icon: 'article'
  },
  children: [
    {
      path: '/article/ranking',
      component: () => import('../../views/article-ranking'),
      meta: {
        title: '文章排名',
        icon: 'article-ranking'
      }
    },
    {
      path: '/article/:id',
      component: () => import('../../views/article-detail'),
      meta: {
        title: '文章详情'
      }
    }
  ]
}
