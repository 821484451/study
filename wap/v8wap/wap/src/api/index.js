import store from '../store'
import axios from 'axios'
import qs from 'qs'
require('es6-promise').polyfill()
// 请求的拦截器
axios.interceptors.request.use(function (config) {
  store.commit('UPDATE_LOADING_STATUS', {isLoading: true})
  let options = {
    'format': 'json'
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
  store.commit('UPDATE_LOADING_STATUS', {isLoading: false})
  if (response.code === 1002) {
    store.commit('UPDATE_LOGIN_STATUS', {loginStatus: false})
    window.sessionStorage.removeItem('user_id')
  }
  return response
}, function (error) {
  // 对响应错误做点什么
  alert('响应错误')
  store.commit('UPDATE_LOGIN_STATUS', {loginStatus: false})
  window.sessionStorage.removeItem('user_id')
  return Promise.reject(error)
})
export const token = (params, succ, fail) => {
  axios.get('/agentmobile/agent/info', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const userLogin = (params, succ, fail) => {
  axios.post('/agentmobile/agent/login', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const loginOut = (params, succ, fail) => {
  axios.post('/agentmobile/agent/logout', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const homeInit = (params, succ, fail) => {
  axios.get('/agentmobile/home/get_index_data', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const monthWater = (params, succ, fail) => {
  axios.get('/agentmobile/agent/report/data', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const gameList = (params, succ, fail) => {
  axios.get('/agentmobile/game/list', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const applyGame = (params, succ, fail) => {
  axios.post('/agentmobile/game/apply', qs.stringify(params)).then(({ data }) => {
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
  axios.get('/agentmobile/game/my_list', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const generatePackage = (params, succ, fail) => {
  axios.post('/agentmobile/game/pack', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const dotManageMyGame = (params, succ, fail) => {
  axios.get('/agentmobile/discount/list', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const childDotManageMyGame = (params, succ, fail) => {
  axios.get('/agentmobile/discount/subagent/list', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const changePlayerPay = (params, succ, fail) => {
  axios.post('/agentmobile/game/sub/benefit/edit', qs.stringify(params)).then(({ data }) => {
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
  axios.get('/agentmobile/sub/list', {params: params}).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
export const addChannel = (params, succ, fail) => {
  axios.post('/agentmobile/sub/add', qs.stringify(params)).then(({ data }) => {
    succ(data)
  }).catch(error => {
    fail(error)
  })
}
