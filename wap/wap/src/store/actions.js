import * as api from '../api'
// 普通登录
export const userLogin = ({ commit }, data) => {
  api.userLogin(data, res => {
    if (res.code === 200) {
      commit('UPDATE_LOGIN_STATUS', {loginStatus: true})
    } else {
      commit('UPDATE_LOGIN_STATUS', {loginStatus: false})
    }
    commit('UPDATE_LOGIN_TIP', {msg: res.msg})
  }, error => {
    console.info(error)
  })
}
export const loginOut = ({ commit }, data) => {
  api.loginOut(data, res => {
    if (res.code === 200) {
      commit('UPDATE_LOGIN_STATUS', {loginStatus: false})
    } else {
      commit('UPDATE_LOGIN_STATUS', {loginStatus: true})
    }
  }, error => {
    console.info(error)
  })
}
export const homeInit = ({ commit }, data) => {
  api.homeInit(data, res => {
    if (res.code === 200) {
      commit('INIT_HOME_DATA', {accountMoney: res.data.account_remain_sum, ptbMoney: res.data.ptb_remain_sum, frozenMoney: res.data.freeze_sum})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const monthWater = ({ commit }, data) => {
  api.monthWater(data, res => {
    if (res.code === 200) {
      commit('GET_MONTH_WATER', {
        monthWater: res.data.month_water,
        todayWater: res.data.today_water,
        monthDetail: res.data.month_water_detail.day_water,
        timeList: res.data.month_water_detail.date
      })
      commit('UPDATE_ECHARTS_DATA', {commonTimeList: res.data.month_water_detail.date, detail: res.data.month_water_detail.day_water})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const gameList = ({ commit, state }, data) => {
  api.gameList(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('GET_GAME_LIST', {list: [...state.gameList.list, ...res.data.list], count: res.data.count})
      } else {
        commit('GET_GAME_LIST', {list: res.data.list || [], count: res.data.count || ''})
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const applyGame = ({ commit, dispatch }, data) => {
  api.applyGame(data, res => {
    if (res.code === 200) {
      dispatch('gameList')
    } else {
      console.log(res.msg)
    }
    commit('UPDATE_TIP_STATUS', {tip: true, 'msg': res.msg})
  }, error => {
    console.info(error)
  })
}
export const monthIncome = ({ commit }, data) => {
  api.monthIncome(data, res => {
    if (res.code === 200) {
      commit('GET_MONTH_INCOME', {commonTimeList: res.data.date, monthIncome: res.data.income, monthPay: res.data.output})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const weekWater = ({ commit }, data) => {
  api.weekWater(data, res => {
    if (res.code === 200) {
      commit('GET_WEEK_WATER', {commonTimeList: res.data.week_water_detail.date, weekWater: res.data.week_water_detail.day_water})
      commit('UPDATE_WATER', {dayWater: res.data.today_water, weekWater: res.data.week_water})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const getToken = ({ commit }, data) => {
  api.token(data, res => {
    if (res.code === 200) {
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const changePwd = ({ commit }, data) => {
  api.changePwd(data, res => {
    if (res.code === 200) {
      commit('UPDATE_LOGIN_STATUS', {loginStatus: false})
      window.sessionStorage.setItem('user_id', 0)
    } else {
      console.log(res.msg)
    }
    commit('UPDATE_CHANGE_TIP', {'tip': res.msg})
  }, error => {
    console.info(error)
  })
}
export const bindingMobile = ({ commit }, data) => {
  api.bindingMobile(data, res => {
    if (res.code === 200) {

    } else {
      console.log(res.msg)
    }
    commit('UPDATE_BINDING_TIP', {'bindingPhoneTip': res.msg})
  }, error => {
    console.info(error)
    commit('UPDATE_BINDING_TIP', {'bindingPhoneTip': '服务器正在维护'})
  })
}
export const sendPhoneCode = ({ commit }, data) => {
  api.sendPhoneCode(data, res => {
    if (res.code === 200) {
      console.log(res)
      commit('UPDATE_BINDING_TIP', {'bindingPhoneTip': res.msg})
    } else {
      console.log(res.msg)
      commit('UPDATE_BINDING_TIP', {'bindingPhoneTip': '发送失败'})
    }
  }, error => {
    console.info(error)
    commit('UPDATE_BINDING_TIP', {'bindingPhoneTip': '服务器正在维护'})
  })
}
export const changePayPwd = ({ commit }, data) => {
  api.changePayPwd(data, res => {
    if (res.code === 200) {
    } else {
      console.log(res.msg)
    }
    commit('UPDATE_CHANGE_PAY_PWD_TIP', {'changePayPwdTip': res.msg})
  }, error => {
    console.info(error)
  })
}
export const myGameList = ({ commit, state }, data) => {
  api.myGame(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_MY_GAME_LIST', {list: [...res.data.list, ...state.myGameList.list], count: res.data.count})
      } else {
        commit('UPDATE_MY_GAME_LIST', {list: res.data.list || [], count: res.data.count})
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const generatePackage = ({ commit }, data) => {
  api.generatePackage(data, res => {
    if (res.code === 200) {

    } else {

    }
    commit('UPDATE_GENERATE_PACKAGE_TIP', {'generatePackageTip': res.msg})
  }, error => {
    console.info(error)
  })
}
export const dotManageMyGame = ({ commit, state }, data) => {
  api.dotManageMyGame(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_DOTMANAGE_GAME_LIST', {list: [...res.data.list, ...state.dotManageMyGameList]})
        commit('UPDATE_DOTMANAGE_GAME_COUNT', {count: res.data.count || ''})
      } else {
        commit('UPDATE_DOTMANAGE_GAME_LIST', {list: res.data.list || []})
        commit('UPDATE_DOTMANAGE_GAME_COUNT', {count: res.data.count || ''})
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const childDotManageMyGame = ({ commit, state }, data) => {
  api.childDotManageMyGame(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_CHILD_DOTMANAGE_GAME_LIST', {list: [...res.data.list, ...state.childDotManageMyGameList]})
        commit('UPDATE_CHILD_DOTMANAGE_GAME_COUNT', {count: res.data.count || ''})
      } else {
        commit('UPDATE_CHILD_DOTMANAGE_GAME_LIST', {list: res.data.list || []})
        commit('UPDATE_CHILD_DOTMANAGE_GAME_COUNT', {count: res.data.count || ''})
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const changePlayerPay = ({ commit, dispatch }, data) => {
  api.changePlayerPay(data, res => {
    if (res.code === 200) {
      dispatch('childDotManageMyGame')
    } else {
      console.log(res.msg)
    }
    commit('UPDATE_TIP_STATUS', {'tip': true, 'msg': res.msg})
  }, error => {
    console.info(error)
  })
}
export const changeChildPlayerPay = ({ commit }, data) => {
  api.changeChildPlayerPay(data, res => {
    if (res.code === 200) {

    } else {
      console.log(res.msg)
    }
    commit('UPDATE_TIP_STATUS', {'tip': true, 'msg': res.msg})
  }, error => {
    console.info(error)
  })
}
export const playerIncomeRecord = ({ commit, state }, data) => {
  api.playerIncomeRecord(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_PLAYER_INCOME_RECORD', {
          money: res.data.sum ? res.data.sum.sum_amount : '',
          realMoney: res.data.sum ? res.data.sum.sum_real_amount : '',
          channelIncome: res.data.sum ? res.data.sum.sum_agent_gain : '',
          list: [...res.data.list, ...state.playerIncomeRecord.list],
          count: res.data.count || ''
        })
      } else {
        commit('UPDATE_PLAYER_INCOME_RECORD', {
          money: res.data.sum ? res.data.sum.sum_amount : '',
          realMoney: res.data.sum ? res.data.sum.sum_real_amount : '',
          channelIncome: res.data.sum ? res.data.sum.sum_agent_gain : '',
          list: res.data.list || [],
          count: res.data.count || ''
        })
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const childIncomeRecord = ({ commit, state }, data) => {
  api.childIncomeRecord(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_PLAYER_INCOME_RECORD', {
          money: res.data.sum ? res.data.sum.sum_amount : '',
          realMoney: '',
          channelIncome: res.data.sum ? res.data.sum.sum_gain : '',
          list: [...res.data.list, ...state.playerIncomeRecord.list],
          count: res.data.count || ''
        })
      } else {
        commit('UPDATE_PLAYER_INCOME_RECORD', {
          money: res.data.sum ? res.data.sum.sum_amount : '',
          realMoney: '',
          channelIncome: res.data.sum ? res.data.sum.sum_gain : '',
          list: res.data.list || [],
          count: res.data.count || ''
        })
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const cashRecord = ({ commit, state }, data) => {
  api.cashRecord(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_CASH_RECORD', {
          cashSum: res.data.sum ? res.data.sum.sum_money : '',
          list: [...res.data.list, ...state.cashRecord.list],
          count: res.data.count || ''
        })
      } else {
        commit('UPDATE_CASH_RECORD', {
          cashSum: res.data.sum ? res.data.sum.sum_money : '',
          list: res.data.list || [],
          count: res.data.count || ''
        })
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const issuing = ({ commit }, data) => {
  api.issuing(data, res => {
    if (res.code === 200) {
      commit('UPDATE_ISSUING_RECORD', {
        total: res.data.sum ? res.data.sum.sum_coin_cnt : '',
        realTotal: res.data.sum ? res.data.sum.sum_real_pay : '',
        list: res.data.list || [],
        count: res.data.count || ''
      })
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const ptbIssuingRecord = ({ commit, state }, data) => {
  api.ptbIssuingRecord(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_PTB_ISSUING_RECORD', {
          issueNum: res.data.sum ? res.data.sum.sum_ptb_cnt : '',
          list: [...res.data.list, ...state.ptbIssuing.list],
          count: res.data.count || ''
        })
      } else {
        commit('UPDATE_PTB_ISSUING_RECORD', {
          issueNum: res.data.sum ? res.data.sum.sum_ptb_cnt : '',
          list: res.data.list || [],
          count: res.data.count || ''
        })
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const ptbGetRecord = ({ commit, state }, data) => {
  api.ptbGetRecord(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_PTB_GET_RECORD', {
          getTotal: res.data.sum ? res.data.sum.sum_ptb : '',
          list: [...res.data.list, ...state.ptbGet.list],
          count: res.data.count || ''
        })
      } else {
        commit('UPDATE_PTB_GET_RECORD', {
          getTotal: res.data.sum ? res.data.sum.sum_ptb : '',
          list: res.data.list || [],
          count: res.data.count || ''
        })
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const playerList = ({commit, state}, data) => {
  api.playerList(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_PLAYER_LIST', {
          list: [...res.data.list, ...state.playerList],
          count: res.data.count || ''
        })
      } else {
        commit('UPDATE_PLAYER_LIST', {
          list: res.data.list || [],
          count: res.data.count || ''
        })
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const playerRoleList = ({ commit, state }, data) => {
  api.playerRoleList(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_PLAYER_ROLE_LIST', {
          list: [...res.data.list, ...state.playerRoleList],
          count: res.data.count || ''
        })
      } else {
        commit('UPDATE_PLAYER_ROLE_LIST', {
          list: res.data.list || [],
          count: res.data.count || ''
        })
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const chargeRecord = ({ commit }, data) => {
  api.chargeRecord(data, res => {
    if (res.code === 200) {
      commit('UPDATE_CHARGE_RECORD_LIST', {
        list: res.data.list || []
      })
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const payRecord = ({ commit, state }, data) => {
  api.payRecord(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_PAY_RECORD', {
          pay: res.data.sum ? res.data.sum.sum_amount : '',
          realPay: res.data.sum ? res.data.sum.sum_real_amount : '',
          list: [...res.data.list, ...state.payRecord.list],
          count: res.data.count
        })
      } else {
        commit('UPDATE_PAY_RECORD', {
          pay: res.data.sum ? res.data.sum.sum_amount : '',
          realPay: res.data.sum ? res.data.sum.sum_real_amount : '',
          list: res.data.list || [],
          count: res.data.count
        })
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const channelList = ({ commit, state }, data) => {
  api.channelList(data, res => {
    if (res.code === 200) {
      if (data ? data.hasOwnProperty('page') : false) {
        commit('UPDATE_CHANNEL_LIST', {
          count: res.data.count || '',
          list: [...res.data.list, ...state.channelList.count]
        })
      } else {
        commit('UPDATE_CHANNEL_LIST', {
          count: res.data.count || '',
          list: res.data.list || []
        })
      }
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const addChannel = ({ commit, dispatch }, data) => {
  api.addChannel(data, res => {
    if (res.code === 200) {
      dispatch('channelList')
    } else {
      console.log(res.msg)
    }
    commit('UPDATE_TIP_STATUS', {tip: true, 'msg': res.msg})
  }, error => {
    console.info(error)
  })
}
export const getAgentRate = ({ commit }, data) => {
  api.getAgentRate(data, res => {
    if (res.code === 200) {
      commit('UPDATE_AGENT_RATE', {rate: res.data.grant_rate})
      commit('UPDATE_BENEFIT_TYPE', {banefitType: res.data.benefit_type})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const myAllGame = ({ commit }, data) => {
  api.myAllGame(data, res => {
    if (res.code === 200) {
      commit('UPDATE_MY_ALL_GAME', {myAllGame: res.data.list})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const chargeGameB = ({ commit }, data) => {
  api.chargeGameB(data, res => {
    if (res.code === 200) {
      commit('UPDATE_AGENT_RATE', {rate: ''})
      commit('UPDATE_BENEFIT_TYPE', {benefitType: ''})
    } else {
      console.log(res.msg)
    }
    commit('UPDATE_TIP_STATUS', {tip: true, 'msg': res.msg})
  }, error => {
    console.info(error)
  })
}
export const chargeSubPtb = ({ commit, dispatch }, data) => {
  api.chargeSubPtb(data, res => {
    if (res.code === 200) {
      dispatch('ptbIssuingRecord')
    } else {
      console.log(res.msg)
    }
    commit('UPDATE_TIP_STATUS', {tip: true, 'msg': res.msg})
  }, error => {
    console.info(error)
  })
}
export const getSettleInformation = ({ commit, dispatch }, data) => {
  api.getSettleInformation(data, res => {
    if (res.code === 200) {
      commit('UPDATE_SETTLE_INFORMATION', {settleInformation: res.data || []})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const getBankList = ({ commit, dispatch }, data) => {
  api.getBankList(data, res => {
    if (res.code === 200) {
      commit('UPDATE_BANK_LIST', {bankList: res.data})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const edictSettleInformation = ({ commit, dispatch }, data) => {
  api.edictSettleInformation(data, res => {
    if (res.code === 200) {
      dispatch('getSettleInformation')
    } else {
      console.log(res.msg)
    }
    commit('UPDATE_TIP_STATUS', {tip: true, 'msg': res.msg})
  }, error => {
    console.info(error)
  })
}
export const chargePtb = ({ commit, dispatch }, data) => {
  api.chargePtb(data, res => {
    if (res.code === 200) {
      dispatch('homeInit')
      if (res.data.type === 'msg') {
        commit('UPDATE_TIP_STATUS', {tip: true, 'msg': res.data.jumpurl})
      } else if (res.data.type === 'html') {
        commit('UPDATE_HTML', {html: res.data.jumpurl})
      } else {
        window.location.href = res.data.jumpurl
      }
    } else {
      commit('UPDATE_TIP_STATUS', {tip: true, 'msg': res.msg})
    }
  }, error => {
    console.info(error)
  })
}
export const getRate = ({ commit, dispatch }, data) => {
  api.getRate(data, res => {
    if (res.code === 200) {
      commit('UPDATE_RATE', {rate: res.data.rate})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const getUserInfo = ({ commit, dispatch }, data) => {
  api.getUserInfo(data, res => {
    if (res.code === 200) {
      commit('UPDATE_USER_INFO', {userInfo: res.data})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const withdraw = ({ commit, dispatch }, data) => {
  api.withdraw(data, res => {
    if (res.code === 200) {
      commit('UPDATE_TIP_STATUS', {tip: true, 'msg': '提现成功'})
      dispatch('homeInit')
    } else {
      console.log(res.msg)
      commit('UPDATE_TIP_STATUS', {tip: true, 'msg': '提现失败'})
    }
  }, error => {
    console.info(error)
  })
}
export const totalData = ({ commit, dispatch }, data) => {
  api.totalData(data, res => {
    if (res.code === 200) {
      commit('UPDATE_TOTAL_DATA', {totalData: res.data ? res.data.list : [], count: res.data ? res.data.count : ''})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const getMsgList = ({ commit, dispatch }, data) => {
  api.getMsgList(data, res => {
    if (res.code === 200) {
      commit('UPDATE_MSG_LIST', {msgList: res.data ? res.data.list : [], count: res.data ? res.data.count : ''})
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const getMsgDetail = ({ commit, dispatch }, data) => {
  api.getMsgDetail(data, res => {
    if (res.code === 200) {
      commit('UPDATE_MSG_DETAIL', { msgDetail: res.data })
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const getApp = ({ commit, dispatch }, data) => {
  api.getApp(data, res => {
    if (res.code === 200) {
      commit('UPDATE_APP_STATUS', { appStatus: res.data })
    } else {
      console.log(res.msg)
    }
  }, error => {
    console.info(error)
  })
}
export const requestSubpackage = ({ commit, dispatch }, data) => {
  api.requestSubpackage(data, res => {
    if (res.code === 200) {
      dispatch('getApp')
    } else {
      console.log(res.msg)
    }
    commit('UPDATE_TIP_STATUS', {tip: true, 'msg': res.msg})
  }, error => {
    console.info(error)
  })
}
