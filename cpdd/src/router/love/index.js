export default{
  path : '/love',
  component : () => import('@/views/love'),
  children : [
    {
      path : 'all',
      component : () => import('@/components/ArticleGL'),
      meta: {
        title: "✧ʕ̢̣̣̣̣̩̩̩̩·͡˔·ོɁ̡̣̣̣̣̩̩̩̩✧你来啦~"
      }
    },
    {
      path : 'qwgn',
      component : () => import('@/components/qwgn_gl'),
      meta: {
        title: "ฅ՞•ﻌ•՞ฅ趣味功能"
      }
    },
    {
      path : 'mnzl',
      component : () => import('@/components/mnzl_gl'),
      meta: {
        title: "ʕ•̼͛͡•ʕ-̺͛͡•ʔ•̮͛͡•ʔ码农之路"
      }
    },
    {
      path : 'mstd',
      component : () => import('@/components/mstd_gl'),
      meta: {
        title: "ଘ(੭ˊᵕˋ)੭* ੈ✩美食探店"
      }
    },
    {
      path : '/love',
      redirect : '/love/all'
    }
  ]
}