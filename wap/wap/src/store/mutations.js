import Vue from 'vue'
const mutations = {
  // 改变loading状态
  UPDATE_LOADING_STATUS (state, payload) {
    state.isLoading = payload.isLoading
  },
  UPDATE_TIP_STATUS (state, content) {
    state.tip = content.tip
    state.msg = content.msg
    setTimeout(function () {
      state.tip = false
    }, 1000)
  },
  UPDATE_QRCODE_STATUS (state, payload) {
    state.qrCodeStatus = payload.qrCodeStatus
    state.qrCodeUrl = payload.qrCodeUrl
  },
  UPDATE_SEARCH_STATUS (state, payload) {
    state.searchFlag = payload.searchFlag
  },
  UPDATE_SELECT_NUM (state, payload) {
    state.selectNum = payload.num
  },
  UPDATE_POP_STATUS (state, payload) {
    state.popStatus = payload.popStatus
  },
  UPDATE_POP_CHILD_STATUS (state, payload) {
    state.popChildStatus = payload.popChildStatus
  },
  UPDATE_ADD_STATUS (state, content) {
    state.popAddStatus = content.popAddStatus
    state.addText = content.addText
  },
  UPDATE_INCOME_FLAG (state, content) {
    state.incomeTabFlag = content.incomeTabFlag
  },
  UPDATE_SEARCH_URL (state, content) {
    state.searchUrl = content.searchUrl
  },
  UPDATE_LOGIN_TIP (state, content) {
    state.loginTip = content.msg
  },
  UPDATE_LOGIN_STATUS (state, content) {
    state.loginStatus = content.loginStatus
  },
  INIT_HOME_DATA (state, content) {
    Vue.set(state, 'home', {
      accountMoney: content.accountMoney,
      ptbMoney: content.ptbMoney,
      frozenMoney: content.frozenMoney
    })
  },
  GET_MONTH_WATER (state, content) {
    Vue.set(state, 'homeWater', {
      monthWater: content.monthWater,
      todayWater: content.todayWater,
      timeList: content.timeList,
      monthDetail: content.monthDetail
    })
  },
  UPDATE_ECHARTS_DATA (state, content) {
    Vue.set(state, 'echarts', content)
  },
  GET_GAME_LIST (state, content) {
    Vue.set(state, 'gameList', content)
  },
  GET_MONTH_INCOME (state, content) {
    Vue.set(state, 'echarts', {
      commonTimeList: content.commonTimeList,
      detail: [],
      incomeList: content.monthIncome,
      payList: content.monthPay
    })
  },
  GET_WEEK_WATER (state, content) {
    Vue.set(state, 'echarts', {
      commonTimeList: content.commonTimeList,
      detail: [],
      incomeList: [],
      payList: [],
      weekWater: content.weekWater
    })
  },
  UPDATE_CHANGE_TIP (state, content) {
    state.changeTip = content.tip
  },
  UPDATE_BINDING_TIP (state, content) {
    state.bindingPhoneTip = content.bindingPhoneTip
  },
  UPDATE_CHANGE_PAY_PWD_TIP (state, content) {
    state.changePayPwdTip = content.changePayPwdTip
  },
  UPDATE_APPLY_GAME_MSG (state, content) {
    state.applyGameMsg = content.msg
  },
  UPDATE_APPLY_GAME_ID (state, content) {
    state.applyGameId = content.applyGameId
  },
  UPDATE_MY_GAME_LIST (state, content) {
    Vue.set(state, 'myGameList', content)
  },
  UPDATE_GENERATE_PACKAGE_TIP (state, content) {
    state.generatePackageTip = content.generatePackageTip
  },
  UPDATE_DOTMANAGE_GAME_LIST (state, content) {
    state.dotManageMyGameList = content.list
  },
  UPDATE_DOTMANAGE_GAME_COUNT (state, content) {
    state.dotManageMyGameListCount = content.count
  },
  UPDATE_CHILD_DOTMANAGE_GAME_LIST (state, content) {
    state.childDotManageMyGameList = content.list
  },
  UPDATE_CHILD_DOTMANAGE_GAME_COUNT (state, content) {
    state.childDotManageMyGameCount = content.count
  },
  UPDATE_SEARCH_KEYWORDS (state, content) {
    state.searchKeyWords = content.key
  },
  UPDATE_SEARCH_CLASSIFY (state, content) {
    state.searchClassify = content.classify
  },
  UPDATE_PLAYER_PAY (state, content) {
    state.playerFirstPay = content.playerFirstPay
    state.playerContinuePay = content.playerContinuePay
    state.channelId = content.channelId
  },
  UPDATE_CHANNEL_ID (state, content) {
    state.channelId = content.channelId
  },
  UPDATE_PLAYER_FIRST (state, content) {
    state.playerFirstPay = content.playerFirstPay
  },
  UPDATE_PLAYER_CONTINUE (state, content) {
    state.playerContinuePay = content.playerContinuePay
  },
  UPDATE_CHANNEL_DISCOUNT (state, content) {
    state.channelDiscount = content.channelDiscount
  },
  UPDATE_CHILD_PLAYER_FIRST (state, content) {
    state.childPlayerFirstPay = content.childPlayerFirstPay
  },
  UPDATE_CHILD_PLAYER_CONTINUE (state, content) {
    state.childPlayerContinuePay = content.childPlayerContinuePay
  },
  UPDATE_PLAYER_INCOME_RECORD (state, content) {
    Vue.set(state, 'playerIncomeRecord', content)
  },
  UPDATE_CASH_RECORD (state, content) {
    Vue.set(state, 'cashRecord', content)
  },
  UPDATE_ISSUING_RECORD (state, content) {
    Vue.set(state, 'issuing', content)
  },
  UPDATE_PTB_ISSUING_RECORD (state, content) {
    Vue.set(state, 'ptbIssuing', content)
  },
  UPDATE_PTB_GET_RECORD (state, content) {
    Vue.set(state, 'ptbGet', content)
  },
  UPDATE_WATER (state, content) {
    state.weekWater = content.weekWater
    state.dayWater = content.dayWater
  },
  UPDATE_PLAYER_LIST (state, content) {
    state.playerList = content.list
    state.playerListCount = content.count
  },
  UPDATE_PLAYER_ROLE_LIST (state, content) {
    state.playerRoleList = content.list
    state.playerRoleListCount = content.count
  },
  UPDATE_CHARGE_RECORD_LIST (state, content) {
    state.chargeRecordList = content.list
  },
  UPDATE_PAY_RECORD (state, content) {
    Vue.set(state, 'payRecord', content)
  },
  UPDATE_CHANNEL_LIST (state, content) {
    Vue.set(state, 'channelList', content)
  },
  UPDATE_CHANNEL_NAME (state, content) {
    state.searchChannelName = content.channelName
  },
  UPDATE_ORDER_ID (state, content) {
    state.searchOrderId = content.orderId
  },
  UPDATE_PLAYER_ACCOUNT (state, content) {
    state.searchPlayerAccount = content.playerAccount
  },
  UPDATE_TIME1 (state, content) {
    state.searchTime1 = content.time1
  },
  UPDATE_TIME2 (state, content) {
    state.searchTime2 = content.time2
  },
  UPDATE_CHECK_STATUS (state, content) {
    state.searchCheckStatus = content.checkStatus
  },
  UPDATE_CHARGE_WAY (state, content) {
    state.searchChargeWay = content.chargeWay
  },
  UPDATE_PLAYER_LIST_COUNT (state, content) {
    state.playerListCount = content.count
  },
  UPDATE_SW (state, content) {
    state.sw = content.sw
  },
  UPDATE_AGENT_RATE (state, content) {
    state.agentRate = content.rate
  },
  UPDATE_BENEFIT_TYPE (state, content) {
    state.benefitType = content.benefitType
  },
  UPDATE_MY_ALL_GAME (state, content) {
    state.myAllGame = content.myAllGame
  },
  UPDATE_SETTLE_INFORMATION (state, content) {
    state.settleInformation = content.settleInformation
  },
  UPDATE_BANK_LIST (state, content) {
    state.bankList = content.bankList
  },
  UPDATE_RATE (state, content) {
    state.rate = content.rate
  },
  UPDATE_HTML (state, content) {
    state.html = content.html
  },
  UPDATE_USER_INFO (state, content) {
    state.userInfo = content.userInfo
  },
  UPDATE_TOTAL_DATA (state, content) {
    state.totalData = content.totalData
    state.totalCount = content.count
  },
  UPDATE_MSG_LIST (state, content) {
    state.msgList = content.msgList
    state.msgCount = content.count
  },
  UPDATE_MSG_DETAIL (state, content) {
    state.msgDetail = content.msgDetail
  },
  UPDATE_APP_STATUS (state, content) {
    state.appStatus = content.appStatus
  }

}
export default mutations
