import store from '../store'
import axios from 'axios'
import qs from 'qs'
require('es6-promise').polyfill()
// 请求的拦截器
axios.interceptors.request.use(function (config) {
  store.commit('UPDATE_LOADING_STATUS', {isLoading: true})
  let options = {
    'token': sessionStorage.getItem('token') || '',
    'user_id': sessionStorage.getItem('user_id') || ''
  }
  if (config.method === 'post') {
    let oldData = qs.parse(config.data)
    let newData = {
      ...options,
      ...oldData
    }
    let keys = Object.keys(newData).sort()
    let data = {}
    keys.forEach(key => {
      data[key] = newData[key]
    })
    config.data = qs.stringify(data)
  } else if (config.method === 'get') {
    let newData = {
      ...options,
      ...config.params
    }
    let keys = Object.keys(newData).sort()
    let data = {}
    keys.forEach(key => {
      data[key] = newData[key]
    })
    config.params = data
  }
  return config
}, function (error) {
  store.commit('UPDATE_LOADING_STATUS', {isLoading: false})
  return Promise.reject(error)
})
// 响应的拦截器
axios.interceptors.response.use(function (response) {
  let codeArray = [40301, 40302, 40303, 40304]
  store.commit('UPDATE_LOADING_STATUS', {isLoading: false})
  window.sessionStorage.setItem('user_id', response.data.user_id)
  window.sessionStorage.setItem('token', response.data.token)
  if (codeArray.includes(response.data.code)) {
    store.commit('UPDATE_LOGIN_STATUS', {loginStatus: false})
    window.sessionStorage.setItem('user_id', 0)
  }
  return response
}, function (error) {
  // 对响应错误做点什么
  alert('响应错误')
  store.commit('UPDATE_LOGIN_STATUS', {loginStatus: false})
  window.sessionStorage.setItem('user_id', 0)
  return Promise.reject(error)
})
export const token = (params, succ, fail) => {
  axios.get('/agentmobile/index/getToken', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const userLogin = (params, succ, fail) => {
  axios.post('/agentmobile/index/login', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const loginOut = (params, succ, fail) => {
  axios.post('/agentmobile/index/logout', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const homeInit = (params, succ, fail) => {
  axios.get('/agentmobile/index/homeinit', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const monthWater = (params, succ, fail) => {
  axios.get('/agentmobile/index/monthwater', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const gameList = (params, succ, fail) => {
  axios.post('/agentmobile/game/applygamelist', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const applyGame = (params, succ, fail) => {
  axios.post('/agentmobile/game/applygame', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const monthIncome = (params, succ, fail) => {
  axios.get('/agentmobile/money/monthincome', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const weekWater = (params, succ, fail) => {
  axios.get('/agentmobile/index/weekwater', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const changePwd = (params, succ, fail) => {
  axios.post('/agentmobile/index/changePwd', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const bindingMobile = (params, succ, fail) => {
  axios.post('/agentmobile/index/bindingphone', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const sendPhoneCode = (params, succ, fail) => {
  axios.post('/agentmobile/index/sendPhoneCode', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const changePayPwd = (params, succ, fail) => {
  axios.post('/agentmobile/index/changePayPwd', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const myGame = (params, succ, fail) => {
  axios.get('/agentmobile/game/mygamelist', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const generatePackage = (params, succ, fail) => {
  axios.post('/agentmobile/game/ganeratepackage', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const dotManageMyGame = (params, succ, fail) => {
  axios.get('/agentmobile/game/mybenefitlist', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const childDotManageMyGame = (params, succ, fail) => {
  axios.get('/agentmobile/game/subbenefitlist', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const changePlayerPay = (params, succ, fail) => {
  axios.post('/agentmobile/game/setagentbenefit', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const changeChildPlayerPay = (params, succ, fail) => {
  axios.post('/agentmobile/game/setsubbenefit', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const playerIncomeRecord = (params, succ, fail) => {
  axios.get('/agentmobile/money/memrechargerecords', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const childIncomeRecord = (params, succ, fail) => {
  axios.get('/agentmobile/money/agentgainfromsub', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const cashRecord = (params, succ, fail) => {
  axios.get('/agentmobile/money/settlelist', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const issuing = (params, succ, fail) => {
  axios.get('/agentmobile/money/dataagentformem', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const ptbIssuingRecord = (params, succ, fail) => {
  axios.get('/agentmobile/money/ptbagentforsublist', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const ptbGetRecord = (params, succ, fail) => {
  axios.get('/agentmobile/money/getptbagentchargelist', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const playerList = (params, succ, fail) => {
  axios.get('/agentmobile/data/datamemaccount', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const playerRoleList = (params, succ, fail) => {
  axios.get('/agentmobile/data/getmemrolelist', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const chargeRecord = (params, succ, fail) => {
  axios.get('/agentmobile/money/dataagentformem', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const payRecord = (params, succ, fail) => {
  axios.get('/agentmobile/data/getmemchargelist', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const channelList = (params, succ, fail) => {
  axios.get('/agentmobile/promote/getsubagentlist', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const addChannel = (params, succ, fail) => {
  axios.post('/agentmobile/promote/addsubagent', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const getAgentRate = (params, succ, fail) => {
  axios.get('/agentmobile/game/getagentmemrate', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const myAllGame = (params, succ, fail) => {
  axios.get('/agentmobile/game/getagentgamelist', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const chargeGameB = (params, succ, fail) => {
  axios.post('/agentmobile/game/charge', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const chargeSubPtb = (params, succ, fail) => {
  axios.post('/agentmobile/game/chargesub', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const getSettleInformation = (params, succ, fail) => {
  axios.get('/agentmobile/money/settlebankinfo', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const getBankList = (params, succ, fail) => {
  axios.get('/agentmobile/money/getbanklist', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const edictSettleInformation = (params, succ, fail) => {
  axios.post('/agentmobile/money/changesettle', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const chargePtb = (params, succ, fail) => {
  axios.post('/agentmobile/pay/charge', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const getRate = (params, succ, fail) => {
  axios.get('/agentmobile/pay/getptbrate', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const getUserInfo = (params, succ, fail) => {
  axios.post('/agentmobile/index/getUserInfo', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const withdraw = (params, succ, fail) => {
  axios.post('/agentmobile/money/settlemoney', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const totalData = (params, succ, fail) => {
  axios.get('/agentmobile/data/StatisticsReport', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const getMsgList = (params, succ, fail) => {
  axios.post('/agentmobile/index/getMsgList', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const getMsgDetail = (params, succ, fail) => {
  axios.post('/agentmobile/index/getMsgDetails', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const getApp = (params, succ, fail) => {
  axios.post('/agentmobile/Promote/getApp', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const requestSubpackage = (params, succ, fail) => {
  axios.post('/agentmobile/Promote/doPackRemote', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
