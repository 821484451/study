import Vue from 'vue'
const mutations = {
  UPDATE_LOADING_STATUS (state, payload) {
    state.isLoading = payload.isLoading
  },
  UPDATE_SEARCH_STATUS (state, payload) {
    state.searchFlag = payload.searchFlag
  },
  UPDATE_SELECT_NUM (state, payload) {
    state.selectNum = payload.num
  },
  UPDATE_CHANNEL_SELECT (state, payload) {
    state.channelSelect = payload.num
  },
  UPDATE_SEARCH_URL (state, content) {
    state.searchUrl = content.searchUrl
  },
  GET_WEEK_PEOPLE (state, content) {
    Vue.set(state, 'weekPeople', content)
  },
  UPDATE_PLAYER_MANAGE_STATUE (state, content) {
    state.playerManageStatus = content.flag
  },
  UPDATE_FREEZE_ACCOUNT_STATUE (state, content) {
    state.freezeAccountTip = content.flag
  },
  UPDATE_GIVE_GAMEB_STATUE (state, content) {
    state.giveGameB = content.flag
  },
  UPDATE_REDUCE_GAMEB_STATUS (state, content) {
    state.reduceGameB = content.flag
  },
  UPDATE_TIP_MSG (state, content) {
    state.tipStatus = content.tipStatus
    state.tipMsg = content.tipMsg
    setTimeout(function () {
      state.tipStatus = false
      state.tipMsg = ''
    }, 1000)
  }
}
export default mutations
