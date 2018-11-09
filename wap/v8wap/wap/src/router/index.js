import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
// 个人中心
import Index from '@/components/home/index'
import Login from '@/components/user/login'
import Message from '@/components/user/message'
import ChangePwd from '@/components/user/changepwd'
import Changepersonaldetail from '@/components/user/changepersondetail'
import Changepaypwd from '@/components/user/changepaypwd'
import Identify from '@/components/user/identify'
import Account from '@/components/user/account'
import Bindingmobile from '@/components/user/bindingmobile'
import Unbindingmobile from '@/components/user/unbindingmobile'
import Settlement from '@/components/user/settlement'
import Resetpwd from '@/components/user/resetpwd'
import Forgetpwd from '@/components/user/forgetpwd'
import Search from '@/components/user/search'
import Messagedetail from '@/components/user/messagedetail'
// 数据中心
import Data from '@/components/data/index'
import Player from '@/components/data/player'
import Playerlist from '@/components/data/playerlist'
import Rolelist from '@/components/data/rolelist'
import Rolelistdetail from '@/components/data/rolelistdetail'
import Totaldata from '@/components/data/totaldata'
import Totaldatadetail from '@/components/data/totaldatadetail'
import Chargelist from '@/components/data/chargelist'
import Chargerecord from '@/components/data/chargerecord'
import Payrecord from '@/components/data/payrecord'
import Chargedetail from '@/components/data/chargedetail'
import Chargerecorddetail from '@/components/data/chargerecorddetail'
import Payrecorddetail from '@/components/data/payrecorddetail'
// 财务
import Financial from '@/components/financial/index'
import Incomerecord from '@/components/financial/incomerecord'
import Childincomerecord from '@/components/financial/childincomerecord'
import Childincomedetail from '@/components/financial/childincomedetail'
import Playerincomerecord from '@/components/financial/playerincomerecord'
import Playerincomedetail from '@/components/financial/playerincomedetail'
import Cashrecord from '@/components/financial/cashrecord'
import Cashrecorddetail from '@/components/financial/cashrecorddetail'
import Ptbgetrecord from '@/components/financial/ptbgetrecord'
import Ptbgetdetail from '@/components/financial/ptbgetdetail'
import Ptbissuerecord from '@/components/financial/ptbissuerecord'
import Ptbissuedetail from '@/components/financial/ptbissuedetail'
import Issuing from '@/components/financial/issuing'
// 游戏列表
import Game from '@/components/game/index'
import Gamelist from '@/components/game/gamelist'
import Mygame from '@/components/game/mygame'
import Dotmanage from '@/components/game/dotmanage'

import Register from '@/components/user/register'

import Newapp from '@/components/promote/newapp'
import Channellist from '@/components/promote/channellist'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    },
    {
      path: '/financial',
      name: 'Financial',
      component: Financial
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
      redirect: '/game/gamelist',
      children: [
        {
          path: '/game/mygame',
          name: 'Mygame',
          component: Mygame
        },
        {
          path: '/game/dotmanage',
          name: 'Dotmanage',
          component: Dotmanage
        },
        {
          path: '/game/gamelist',
          name: 'Gamelist',
          component: Gamelist
        },
        {
          path: '/game/childdotmanage',
          name: 'Childdotmanage',
          component: () => import('@/components/game/childdotmanage')
        }
      ]
    },
    {
      path: '/promote',
      name: 'Promote',
      component: () => import('@/components/promote/index'),
      redirect: '/promote/app',
      children: [
        {
          path: '/promote/app',
          name: 'App',
          component: () => import('@/components/promote/app')
        },
        {
          path: '/promote/newapp',
          name: 'Newapp',
          component: Newapp
        }
      ]
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/changepwd',
      name: 'ChangePwd',
      component: ChangePwd
    },
    {
      path: '/changedetail',
      name: 'ChangeDetail',
      component: Changepersonaldetail
    },
    {
      path: '/changepaypwd',
      name: 'ChangePayPwd',
      component: Changepaypwd
    },
    {
      path: '/identify',
      name: 'Identify',
      component: Identify
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/bindingmobile',
      name: 'Bindingmobile',
      component: Bindingmobile
    },
    {
      path: '/unbindingmobile',
      name: 'Unbindingmobile',
      component: Unbindingmobile
    },
    {
      path: '/settlement',
      name: 'Settlement',
      component: Settlement
    },
    {
      path: '/resetpwd',
      name: 'Resetpwd',
      component: Resetpwd
    },
    {
      path: '/forgetpwd',
      name: 'Forgetpwd',
      component: Forgetpwd
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/channellist',
      name: 'Channellist',
      component: Channellist
    },
    {
      path: '/player',
      name: 'Player',
      component: Player,
      redirect: '/player',
      children: [
        {
          path: '/player/totaldata/:flag',
          name: 'Totaldata',
          component: Totaldata
        },
        {
          path: '/player/playerlist/:flag',
          name: 'Playerlist',
          component: Playerlist
        },
        {
          path: '/player/chargelist/:flag',
          name: 'Chargelist',
          component: Chargelist
        },
        {
          path: '/player/rolelist/:flag',
          name: 'Rolelist',
          component: Rolelist
        }
      ]
    },
    {
      path: '/totaldatadetail',
      name: 'Totaldatadetail',
      component: Totaldatadetail
    },
    {
      path: '/rolelistdetail',
      name: 'Rolelistdetail',
      component: Rolelistdetail
    },
    {
      path: '/chargerecord',
      name: 'Chargerecord',
      component: Chargerecord
    },
    {
      path: '/payrecord',
      name: 'Payrecord',
      component: Payrecord
    },
    {
      path: '/chargedetail',
      name: 'Chargedetail',
      component: Chargedetail
    },
    {
      path: '/chargerecorddetail',
      name: 'Chargerecorddetail',
      component: Chargerecorddetail
    },
    {
      path: '/payrecorddetail',
      name: 'Payrecorddetail',
      component: Payrecorddetail
    },
    {
      path: '/incomerecord',
      name: 'Incomerecord',
      component: Incomerecord,
      redirect: '/incomerecord/playerincomerecord',
      children: [
        {
          path: '/incomerecord/childincomerecord',
          name: 'Childincomerecord',
          component: Childincomerecord
        },
        {
          path: '/incomerecord/playerincomerecord',
          name: 'Playerincomerecord',
          component: Playerincomerecord
        }
      ]
    },
    {
      path: '/cashrecord',
      name: 'Cashrecord',
      component: Cashrecord
    },
    {
      path: '/issuing',
      name: 'Issuing',
      component: Issuing
    },
    {
      path: '/cashrecorddetail',
      name: 'Cashrecorddetail',
      component: Cashrecorddetail
    },
    {
      path: '/childincomedetail',
      name: 'Childincomedetail',
      component: Childincomedetail
    },
    {
      path: '/playerincomedetail',
      name: 'Playerincomedetail',
      component: Playerincomedetail
    },
    {
      path: '/ptbgetrecord',
      name: 'Ptbgetrecord',
      component: Ptbgetrecord
    },
    {
      path: '/ptbgetdetail',
      name: 'Ptbgetdetail',
      component: Ptbgetdetail
    },
    {
      path: '/ptbissuerecord',
      name: 'Ptbissuerecord',
      component: Ptbissuerecord
    },
    {
      path: '/ptbissuedetail/:player',
      name: 'Ptbissuedetail',
      component: Ptbissuedetail
    },
    {
      path: '/messagedetail',
      name: 'Messagedetail',
      component: Messagedetail
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('UPDATE_LOADING_STATUS', {'isLoading': true})
  store.commit('UPDATE_SEARCH_STATUS', {'searchFlag': true})
  let token = window.sessionStorage.getItem('user_id') || false

  if (to.name === 'Login') {
    if (token) {
      store.commit('UPDATE_LOGIN_STATUS', {'loginStatus': true})
      next({path: '/'})
    } else {
      store.commit('UPDATE_LOGIN_STATUS', {'loginStatus': false})
      next()
    }
  } else if (to.name === 'Forgetpwd') {
    next()
  } else {
    if (token) {
      next()
    } else {
      next({path: '/login'})
    }
  }
})
router.afterEach(function (to) {
  store.commit('UPDATE_LOADING_STATUS', {isLoading: false})
})

export default router
