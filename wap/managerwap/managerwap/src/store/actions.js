import * as api from '../api'
// 普通登录
export const userLogin = ({ commit }, data) => {
  api.userLogin(data, res => {
    if (res.msg === 'success') {
      commit('UPDATE_LOGIN_STATUS', {loginStatus: true})
      window.localStorage.setItem('userId', res.data.user_id)
    } else {
      commit('UPDATE_LOGIN_STATUS', {loginStatus: false})
    }
  }, error => {
    console.info(error)
  })
}
export const weekPeople = ({ commit }, data) => {
  api.weekPeople(data, res => {
    if (res.msg === 'success') {
      commit('GET_WEEK_PEOPLE', {
        timeList: res.data.time_list,
        dataList1: res.data.weekPeople1,
        dataList2: res.data.weekPeople2,
        dataList3: res.data.weekPeople3,
        dataList4: res.data.weekPeople4
      })
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
