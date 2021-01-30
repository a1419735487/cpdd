export default{
  path : '/visitor',
  component : () => import('@/views/visitor'),
  children : [
    {
      path : 'all',
      component : () => import('@/components/Article'),
      meta: {
        title: "(๑˃́ꇴ˂̀๑)文章列表"
      }
    },
    {
      path : 'qwgn',
      component : () => import('@/components/qwgn'),
      meta: {
        title: "ฅ՞•ﻌ•՞ฅ趣味功能"
      }
    },
    {
      path : 'mnzl',
      component : () => import('@/components/mnzl'),
      meta: {
        title: "ʕ•̼͛͡•ʕ-̺͛͡•ʔ•̮͛͡•ʔ码农之路"
      }
    },
    {
      path : 'mstd',
      component : () => import('@/components/mstd'),
      meta: {
        title: "ଘ(੭ˊᵕˋ)੭* ੈ✩美食探店"
      }
    },
    {
      path : '/visitor',
      redirect : '/visitor/all'
    }
  ]
}