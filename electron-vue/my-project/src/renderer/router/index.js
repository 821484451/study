import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/Login/index').default
    },
    {
      path: '/other',
      name: 'other',
      component: require('@/components/Other/index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
