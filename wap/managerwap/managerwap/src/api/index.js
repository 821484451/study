import store from '../store'
import axios from 'axios'
import qs from 'qs'
require('es6-promise').polyfill()
// 请求的拦截器
axios.interceptors.request.use(function (config) {
  store.commit('UPDATE_LOADING_STATUS', {isLoading: true})
  return config
}, function (error) {
  store.commit('UPDATE_LOADING_STATUS', {isLoading: true})
  return Promise.reject(error)
})
// 响应的拦截器
axios.interceptors.response.use(function (response) {
  store.commit('UPDATE_LOADING_STATUS', {isLoading: false})
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
export const userLogin = (params, succ, fail) => {
  axios.post('http://192.168.1.143:888/login', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const weekPeople = (params, succ, fail) => {
  axios.get('/tg/weekPeople', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
