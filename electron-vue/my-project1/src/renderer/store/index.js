import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const globalModule ={global: {state, getters, actions, mutations }, modules}
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules, 
  plugins: [
    createPersistedState()
    //createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
