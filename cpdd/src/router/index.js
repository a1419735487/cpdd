import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'
import loveRouter from './love'
import visitorRouter from './visitor'
import articleRouter from './article'
import GLarticleRouter from './GLarticle'
import EditRouter from './Edit'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRouter,
    loveRouter,
    visitorRouter,
    articleRouter,
    GLarticleRouter,
    EditRouter,
    {
      path:'/*',
      redirect:'/home'
    }
  ]
})

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

//全局守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    const token = localStorage.getItem('Token');
    if(to.path==='/love/all' || to.path==='/love/qwgn' || to.path==='/love/mnzl' || to.path==='/love/mstd'){
      if(token){
        next()
      }else{
        next('/home')
      }
    }else if(to.path==='/Edit'){
      if(token){
        next()
      }else{
        next('/home')
      }
    }else{
      next();
    }
})

export default router;