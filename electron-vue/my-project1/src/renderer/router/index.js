import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: require('@/components/Login/index').default
    },
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home/index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus',{'isLoading': true});
  if (to.name != 'login' && !localStorage.getItem('userName')){
    next('/login')
  }else{
    next()  
  }
  
})
router.afterEach((to, from) => {
  console.log(6666)
  store.commit('updateLoadingStatus', {'isLoading': false})
})

export default router
