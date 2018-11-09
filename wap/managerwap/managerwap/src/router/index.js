import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
// 首页
import Index from '@/components/home/index'
// 安全设置
import Security from '@/components/security/index'
import Login from '@/components/security/login'
import BindingMobile from '@/components/security/bindingmobile'
import UnBindingMobile from '@/components/security/unbindingmobile'
import ChangePwd from '@/components/security/changepwd'
import ChangePayPwd from '@/components/security/changepaypwd'
// 游戏管理
import Game from '@/components/game/index'
import AndroidGame from '@/components/game/androidgame'
import IosGame from '@/components/game/iosgame'
import DeveloperList from '@/components/game/developerlist'
import Promote from '@/components/game/promote'
import Gift from '@/components/gift/index'
// 玩家管理
import Player from '@/components/player/index'
// 渠道管理
import Channel from '@/components/channel/index'
// 数据中心
import Data from '@/components/data/index'
// 财务中心
import Financial from '@/components/financial/index'
import Income from '@/components/financial/income'
import Expend from '@/components/financial/expend'
// 开服管理
import Openservice from '@/components/openservice/index'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/security',
      name: 'security',
      component: Security
    },
    {
      path: '/bindingmobile',
      name: 'bindingmobile',
      component: BindingMobile
    },
    {
      path: '/unbindingmobile',
      name: 'unbindingmobile',
      component: UnBindingMobile
    },
    {
      path: '/changepwd',
      name: 'changepwd',
      component: ChangePwd
    },
    {
      path: '/changepaypwd',
      name: 'changepaypwd',
      component: ChangePayPwd
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/promote',
      name: 'promote',
      component: Promote
    },
    {
      path: '/player',
      name: 'player',
      component: Player,
      redirect: '/player/playerList',
      children: [
        {
          path: '/player/playerList',
          name: 'playerList',
          component: () => import('@/components/player/playerList')
        },
        {
          path: '/player/roleList',
          name: 'roleList',
          component: () => import('@/components/player/roleList')
        }
      ]
    },
    {
      path: '/gift',
      name: 'gift',
      component: Gift
    },
    {
      path: '/channel',
      name: 'channel',
      component: Channel,
      redirect: '/channel/channelList',
      children: [
        {
          path: '/channel/channelList',
          name: 'channelList',
          component: () => import('@/components/channel/channelList')
        },
        {
          path: '/channel/discount',
          name: 'discount',
          component: () => import('@/components/channel/discount')
        }
      ]
    },
    {
      path: '/androidGame',
      name: 'androidGame',
      component: AndroidGame,
      redirect: '/androidGame/androidList',
      children: [
        {
          path: '/androidGame/androidList',
          name: 'androidList',
          component: () => import('@/components/game/androidlist')
        },
        {
          path: '/androidGame/deletelist',
          name: 'deleteList',
          component: () => import('@/components/game/androiddeletelist')
        }
      ]
    },
    {
      path: '/iosGame',
      name: 'iosGame',
      component: IosGame,
      redirect: '/iosGame/iosprison',
      children: [
        {
          path: '/iosGame/iosprison',
          name: 'iosprison',
          component: () => import('@/components/game/iosprison')
        },
        {
          path: '/iosGame/iosswitch',
          name: 'iosswitch',
          component: () => import('@/components/game/iosswitch')
        },
        {
          path: '/iosGame/iosdelete',
          name: 'iosdelete',
          component: () => import('@/components/game/iosdelete')
        }
      ]
    },
    {
      path: '/developerlist',
      name: 'developerlist',
      component: DeveloperList
    },
    {
      path: '/data',
      name: 'data',
      component: Data,
      redirect: '/data/everyday',
      children: [
        {
          path: '/data/everyday',
          name: 'everyday',
          component: () => import('@/components/data/everyday')
        },
        {
          path: '/data/player',
          name: 'playerlist',
          component: () => import('@/components/data/player')
        },
        {
          path: '/data/order',
          name: 'order',
          component: () => import('@/components/data/order')
        },
        {
          path: '/data/channel',
          name: 'channellist',
          component: () => import('@/components/data/channel')
        },
        {
          path: '/data/game',
          name: 'gamelist',
          component: () => import('@/components/data/game')
        }
      ]
    },
    {
      path: '/financial',
      name: 'financial',
      component: Financial,
      redirect: '/financial/audit',
      children: [
        {
          path: '/financial/audit',
          name: 'audit',
          component: () => import('@/components/financial/audit')
        },
        {
          path: '/financial/operation',
          name: 'operation',
          component: () => import('@/components/financial/operation')
        },
        {
          path: '/financial/withdraw',
          name: 'withdraw',
          component: () => import('@/components/financial/withdraw')
        },
        {
          path: '/financial/channel',
          name: 'channelMoney',
          component: () => import('@/components/financial/channel')
        }
      ]
    },
    {
      path: '/financial/income',
      name: 'income',
      component: Income
    },
    {
      path: '/financial/expend',
      name: 'expend',
      component: Expend
    },
    {
      path: '/openservice',
      name: 'openservice',
      component: Openservice
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('UPDATE_LOADING_STATUS', {'isLoading': true})
  next()
})
router.afterEach(function (to) {
  store.commit('UPDATE_LOADING_STATUS', {'isLoading': false})
})

export default router
