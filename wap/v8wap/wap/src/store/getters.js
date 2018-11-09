// 获取loading状态
export const loadingStatus = state => state.isLoading
// 提示框
export const tipMsg = state => state.msg
export const tipStatus = state => state.tip
// 二维码
export const qrCodeStatus = state => state.qrCodeStatus
// 搜索
export const searchFlag = state => state.searchFlag
export const selectNum = state => state.selectNum
export const searchKeyWords = state => state.searchKeyWords
export const searchClassify = state => state.searchClassify
// 弹窗
export const popStatus = state => state.popStatus
export const addText = state => state.addText
export const popAddStatus = state => state.popAddStatus
export const incomeTabFlag = state => state.incomeTabFlag
// 搜索接口
export const searchUrl = state => state.searchUrl
export const loginStatus = state => state.loginStatus
export const loginTip = state => state.loginTip

// 首页初始化数据
export const accountMoney = state => state.home.accountMoney
export const ptbMoney = state => state.home.ptbMoney
export const frozenMoney = state => state.home.frozenMoney
export const monthWater = state => state.homeWater.monthWater
export const todayWater = state => state.homeWater.todayWater
export const timeList = state => state.homeWater.timeList
export const monthDetail = state => state.homeWater.monthDetail
// echarts
export const commonTimeList = state => state.echarts.commonTimeList
export const detail = state => state.echarts.detail
export const incomeList = state => state.echarts.incomeList
export const payList = state => state.echarts.payList
export const weekWater = state => state.echarts.weekWater
// 游戏列表
export const gameList = state => state.gameList.list
export const applyGameMsg = state => state.applyGameMsg
export const applyGameId = state => state.applyGameId
export const myGameList = state => state.myGameList.list
export const myGameListCount = state => state.myGameList.count
export const generatePackageTip = state => state.generatePackageTip
export const dotManageMyGameList = state => state.dotManageMyGameList
export const dotManageMyGameListCount = state => state.dotManageMyGameListCount
export const childDotManageMyGameList = state => state.childDotManageMyGameList
export const childDotManageMyGameCount = state => state.childDotManageMyGameCount
export const gameListCount = state => state.gameList.count
// 修改登录密码提示
export const changeTip = state => state.changeTip
export const bindingPhoneTip = state => state.bindingPhoneTip
export const changePayPwdTip = state => state.changePayPwdTip
// 玩家
export const playerContinuePay = state => state.playerContinuePay
export const playerFirstPay = state => state.playerFirstPay
export const popChildStatus = state => state.popChildStatus
export const channelId = state => state.channelId
export const childPlayerContinuePay = state => state.childPlayerContinuePay
export const childPlayerFirstPay = state => state.childPlayerFirstPay
export const channelDiscount = state => state.channelDiscount
// 玩家收益记录
export const playerMoney = state => state.playerIncomeRecord.money
export const realPlayerMoney = state => state.playerIncomeRecord.realMoney
export const playerChannelIncome = state => state.playerIncomeRecord.channelIncome
export const playerIncomeList = state => state.playerIncomeRecord.list
export const playerIncomeListCount = state => state.playerIncomeRecord.count
// 提现记录
export const cashSum = state => state.cashRecord.cashSum
export const cashList = state => state.cashRecord.list
export const cashCount = state => state.cashRecord.count
// 下级发币
export const total = state => state.issuing.total
export const realTotal = state => state.issuing.realTotal
export const issuingList = state => state.issuing.list
// 平台币发放记录
export const ptbIssuingList = state => state.ptbIssuing.list
export const ptbIssueNum = state => state.ptbIssuing.issueNum
export const ptbIssueCount = state => state.ptbIssuing.count
// 平台币获取记录
export const ptbGetNum = state => state.ptbGet.getTotal
export const ptbGetList = state => state.ptbGet.list
export const ptbGetCount = state => state.ptbGet.count
// 数据中心
export const weekDataWater = state => state.weekWater
export const dayDataWater = state => state.dayWater
// 玩家列表
export const playerList = state => state.playerList
// 角色列表
export const playerRoleList = state => state.playerRoleList
export const playerRoleListCount = state => state.playerRoleListCount
// 代充记录
export const chargeRecordList = state => state.chargeRecordList
// 玩家充值列表
export const pay = state => state.payRecord.pay
export const realPay = state => state.payRecord.realPay
export const playerPayList = state => state.payRecord.list
export const playerPayCount = state => state.payRecord.count
// 渠道列表
export const channelList = state => state.channelList.list
export const channelCount = state => state.channelList.count
// 搜索
export const searchChannelName = state => state.searchChannelName
export const searchPlayerAccount = state => state.searchPlayerAccount
export const searchOrderId = state => state.searchOrderId
export const searchTime1 = state => state.searchTime1
export const searchTime2 = state => state.searchTime2
export const searchCheckStatus = state => state.searchCheckStatus
export const searchChargeWay = state => state.searchChargeWay
export const playerListCount = state => state.playerListCount
// 滚动加载
export const sw = state => state.sw
// 获取渠道信息
export const userDetail = state => state.userDetail
