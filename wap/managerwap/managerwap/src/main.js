// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/js/rem'
// import './assets/js/vconsole'
var echarts = require('echarts')
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$scroll = {
  stop () {
    document.body.style.overflow = 'hidden'
    var home = document.getElementsByClassName('home')[0]
    home.style.overflow = 'hidden'
    home.style.height = '100%'
  },
  move () {
    document.body.style.overflow = ''
    var home = document.getElementsByClassName('home')[0]
    home.style.overflow = ''
    home.style.height = 'auto'
  }
}
Vue.prototype.$sort = function (arr) {
  return arr.sort(function () {
    return Math.random() - 0.5
  })
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
