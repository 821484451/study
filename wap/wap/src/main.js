// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/js/rem'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/js/vconsole'
Vue.use(ElementUI)
var echarts = require('echarts')
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
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
    home.style.height = ''
  }
}
Vue.prototype.$dataFormat = function (fmt, date) {
  var date1
  if (date) {
    if ((/-/g).test(date)) {
      date1 = new Date(date.replace(/-/g, '/'))
    } else {
      date1 = new Date(date)
    }
    var o = {
      'M+': date1.getMonth() + 1,
      'd+': date1.getDate(),
      'h+': date1.getHours(),
      'm+': date1.getMinutes(),
      's+': date1.getSeconds(),
      'q+': Math.floor((date1.getMonth() + 3) / 3),
      'S': date1.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date1.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  } else {
    return ''
  }
}
Vue.prototype.$copy = function ($text) {
  const input = document.createElement('input')
  input.setAttribute('readonly', 'readonly')
  input.setAttribute('value', $text)
  document.body.appendChild(input)
  input.select()
  input.setSelectionRange(0, 9999)
  if (document.execCommand('copy')) {
    document.execCommand('copy')
  }
  document.body.removeChild(input)
  store.commit('UPDATE_TIP_STATUS', {msg: '复制成功', tip: true})
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
