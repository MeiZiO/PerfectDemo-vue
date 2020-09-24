import Vue from 'vue'
import Router from 'vue-router'


import common from './common/index.js'

Vue.use(Router)

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...common
  ]
})
const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


// 路由守卫
router.beforeEach((to, from, next) => {
  if(to.path == '/'){
    return next({ path: '/mei' })
  }else{
    return next()
  }
})

export default router