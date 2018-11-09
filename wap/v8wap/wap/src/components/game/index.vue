<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" />
    <div class="gameTab">
      <div class="gameTab_item" @click="selected(0)"><router-link to="/game/gamelist">  游戏列表<i v-if="selectNum === 0"></i></router-link></div>
      <div class="gameTab_item" @click="selected(1)"><router-link to="/game/mygame">我的游戏<i v-if="selectNum === 1"></i></router-link></div>
      <div class="gameTab_item" @click="selected(2)"><router-link to="/game/dotmanage">点位管理<i v-if="selectNum === 2"></i></router-link></div>
      <div class="gameTab_item" @click="selected(3)"><router-link to="/game/childdotmanage">子渠道点位<i v-if="selectNum === 3"></i></router-link></div>
    </div>
    <div class="main">
      <router-view/>
      <p class="loadMoreTip" v-if="! loadStatus"><span>我是有底线的</span><i></i></p>
    </div>
    <div class="popDotManage" v-if="popStatus">
      <div class="popDotManageBox">
        <h4 class="popDotManageBox_name">点位管理</h4>
        <div class="popDotManageBox_main">
          <div class="popDotManageBox_main__div">
            <span>玩家首充：</span>
            <input type="text" v-model="playerFirst">
            <i class="qh">?</i>
          </div>
          <div class="popDotManageBox_main__div">
            <span>玩家续充：</span>
            <input type="text" v-model="playerContinue">
            <i class="qh">?</i>
          </div>
        </div>
        <div class="popDotManageBox_btn">
          <a href="javascript:;" @click="popBox()">取消</a>
          <a href="javascript:;" @click="changePlayerPay()">确定</a>
        </div>
      </div>
    </div>

    <div class="popDotManage" v-if="popChildStatus">
      <div class="popDotManageBox">
          <h4 class="popDotManageBox_name">下级渠道折扣</h4>
          <div class="popDotManageBox_main">
            <div class="popDotManageBox_main__div">
              <span>渠道折扣：</span>
              <input type="text" v-model="channelDiscount">
              <i class="qh">?</i>
            </div>
            <div class="popDotManageBox_main__div">
              <span>玩家首充：</span>
              <input type="text" v-model="childPlayerFirst">
              <i class="qh">?</i>
            </div>
            <div class="popDotManageBox_main__div">
              <span >玩家续充：</span>
              <input type="text" v-model="childPlayerContinue" >
              <i class="qh">?</i>
            </div>
            <div class="popDotManageBox_btn">
              <a href="javascript:;" @click="popChildBox()">取消</a>
              <a href="javascript:;" @click="changeChildPlayerPay()">确定</a>
            </div>
          </div>
      </div>
    </div>

    <div class="yornAdd" v-if="popAddStatus">
      <div class="yornAdd_box">
        <div class="yornAdd_box__head">确定添加<span>《{{addText}}》</span>游戏吗？</div>
        <div class="yornAdd_box__btn">
          <a href="javascript:;" @click="popAdd('')">取消</a>
          <a href="javascript:;" @click="confirm()">确定</a>
        </div>
      </div>
    </div>
    <Footer :flag="flag"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
import header from '../public/header.vue'
import footer from '../public/tab.vue'
export default {
  components: {
    'Header': header,
    'Footer': footer

  },
  computed: {
    ...mapGetters([
      'selectNum',
      'popStatus',
      'addText',
      'popAddStatus',
      'applyGameId',
      'applyGameMsg',
      'playerContinuePay',
      'playerFirstPay',
      'popChildStatus',
      'channelId',
      'sw',
      'selectNum',
      'gameList',
      'gameListCount',
      'myGameList',
      'myGameListCount',
      'dotManageMyGameListCount',
      'dotManageMyGameList',
      'childDotManageMyGameList',
      'childDotManageMyGameCount'
    ]),
    playerFirst: {
      get () {
        return store.state.playerFirstPay
      },
      set (val) {
        store.commit('UPDATE_PLAYER_FIRST', {playerFirstPay: val})
      }
    },
    playerContinue: {
      get () {
        return store.state.playerContinuePay
      },
      set (val) {
        store.commit('UPDATE_PLAYER_CONTINUE', {playerContinuePay: val})
      }
    },
    childPlayerFirst: {
      get () {
        return store.state.childPlayerFirstPay
      },
      set (val) {
        store.commit('UPDATE_CHILD_PLAYER_FIRST', {childPlayerFirstPay: val})
      }
    },
    childPlayerContinue: {
      get () {
        return store.state.childPlayerContinuePay
      },
      set (val) {
        store.commit('UPDATE_CHILD_PLAYER_CONTINUE', {childPlayerContinuePay: val})
      }
    },
    channelDiscount: {
      get () {
        return store.state.channelDiscount
      },
      set (val) {
        store.commit('UPDATE_CHANNEL_DISCOUNT', {channelDiscount: val})
      }
    }

  },
  watch: {
    popStatus (currentValue, oldValue) {
      if (currentValue) {
        this.$scroll.stop()
      } else {
        this.$scroll.move()
      }
    },
    gameList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.gameListCount) {
        store.commit('UPDATE_SW', {sw: true})
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
    },
    myGameList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.myGameListCount) {
        store.commit('UPDATE_SW', {sw: true})
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
    },
    dotManageMyGameList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.dotManageMyGameListCount) {
        store.commit('UPDATE_SW', {sw: true})
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
    },
    childDotManageMyGameList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.childDotManageMyGameCount) {
        store.commit('UPDATE_SW', {sw: true})
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
    }
  },
  data () {
    return {
      left: 0,
      right: 0,
      text: '游戏管理',
      flag: 'game',
      loadStatus: true
    }
  },
  created () {
    store.commit('UPDATE_SW', {sw: true})
  },
  methods: {
    selected (num) {
      store.commit('UPDATE_SELECT_NUM', {'num': num})
    },
    popBox () {
      if (this.popStatus) {
        store.commit('UPDATE_POP_STATUS', {'popStatus': false})
      } else {
        store.commit('UPDATE_POP_STATUS', {'popStatus': true})
      }
    },
    popAdd (text) {
      if (this.popAddStatus) {
        store.commit('UPDATE_ADD_STATUS', {'popAddStatus': false, 'addText': ''})
      } else {
        store.commit('UPDATE_ADD_STATUS', {'popAddStatus': true, 'addText': text})
      }
    },
    confirm () {
      store.dispatch('applyGame', {'game_id': this.applyGameId})
      store.commit('UPDATE_ADD_STATUS', {'popAddStatus': false, 'addText': ''})
    },
    changePlayerPay () {
      store.commit('UPDATE_POP_STATUS', {'popStatus': false})
      store.dispatch('changePlayerPay', {'mem_first': this.playerFirst, 'mem_offer': this.playerContinue, 'ag_id': this.channelId})
    },
    popChildBox () {
      if (this.popChildStatus) {
        store.commit('UPDATE_POP_CHILD_STATUS', {'popChildStatus': false})
      } else {
        store.commit('UPDATE_POP_CHILD_STATUS', {'popChildStatus': true})
      }
    },
    changeChildPlayerPay () {
      store.commit('UPDATE_POP_CHILD_STATUS', {'popChildStatus': false})
      store.dispatch('changePlayerPay', {'mem_first': this.childPlayerFirst, 'mem_offer': this.childPlayerContinue, 'ag_id': this.channelId, 'agent_rate': this.channelDiscount})
    }
  },
  mounted () {
    let _self = this
    let dom1 = document.querySelector('.main')
    let dom2 = document.querySelector('.main').children[0]
    dom1.addEventListener('scroll', function () {
      if (dom1.scrollTop + dom1.offsetHeight >= dom2.offsetHeight) {
        if (_self.sw === true) {
          store.commit('UPDATE_SW', {sw: false})
          switch (_self.selecNum) {
            case 0 :
              if (_self.gameListCount > _self.gameList.length) {
                store.dispatch('gameList', {page: Math.ceil(_self.gameList.length / 20) + 1, offset: 20})
              }
              break
            case 1 :
              if (_self.myGameListCount > _self.myGameList.length) {
                store.dispatch('myGameList', {page: Math.ceil(_self.myGameList.length / 20) + 1, offset: 20})
              }
              break
            case 2 :
              if (_self.dotManageMyGameListCount > _self.dotManageMyGameList.length) {
                store.dispatch('dotManageMyGame', {page: Math.ceil(_self.dotManageMyGameList.length / 20) + 1, offset: 20})
              }
              break
            case 3 :
              if (_self.childDotManageMyGameCount > _self.childDotManageMyGameList.length) {
                store.dispatch('childDotManageMyGame', {page: Math.ceil(_self.childDotManageMyGameList.length / 20) + 1, offset: 20})
              }
              break
          }
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.home{
  background: url('../../assets/images/huosdk_tg_bg_001.png') no-repeat top;
  background-size: 100% auto;
  background-color: #f5f6ff;
  padding-bottom: 1.06rem;
  height: 100%;
  .header{
    background: none;
  }
  .gameTab{
    height: 1rem;
    display: flex;
    &_item{
      flex: 1;
      text-align: center;
      line-height: 1rem;
      font-size: 0.3rem;
      color: #fff;
      position: relative;
      a{
        color: #fff;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
      i{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0.05rem;
        display: inline-block;
        width: 1.4rem;
        height: 0.04rem;
        background-color: #fff;
      }
    }
  }
  .yornAdd,.popDotManage{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
  }
  .popDotManageBox{
    width: 5.8rem;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 0.07rem;
    &_name{
      height: 1rem;
      line-height: 1rem;
      font-size: 0.3rem;
      text-align: center;
    }
    &_main{
      padding: 0 0.3rem;
      &__div{
        margin-top: 0.15rem;
        height: 0.75rem;
        line-height: 0.75rem;
        font-size: 0.26rem;
        color: #111;
        border: 1px solid #EEEEEE;
        position: relative;
        padding-right: 0.5rem;
        display: flex;
        span{
          display: block;
          padding-left: 0.22rem;

        }
        .lg{
          width: 2.2rem;
        }
        input{
          height: 100%;
          line-height: 0.75rem;
          width: 50%;
        }
        i{
          font-style: normal;
          display: block;
          width: 0.3rem;
          height: 0.3rem;
          color: #FFBE00;
          text-align: center;
          line-height: 0.3rem;
          border: 1px solid #FFBE00;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          transform:translateY(-50%);
          right: 0.1rem;
          font-size: 0.22rem;
        }
      }
      &__line{
        height: 2px;
        margin-top: 0.26rem;
        background: url('../../assets/images/line.png') no-repeat left;
        background-size: 100% 100%；
      }
    }
    &_btn{
      height: 1rem;
      line-height: 1rem;
      display: flex;
      margin-top: 0.24rem;
      a{
        font-size: 0.28rem;
        color: #777;
        text-align: center;
        flex: 1;
      }
      a:nth-child(1){
        border-top: 1px solid #EEEEEE;
        border-right: 1px solid #EEEEEE;
      }
      a:nth-child(2){
        border-top: 1px solid #EEEEEE;
        color: #409FFF;
      }
    }
  }
}
.yornAdd_box{
  width: 5.2rem;
  height: 2.57rem;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 0.07rem;
  &__head{
    height: 1.56rem;
    line-height: 1.56rem;
    text-align: center;
    font-size: 0.3rem;
    color: #000;
    span{
      color: #409FFF;
    }
  }
  &__btn{
    height: 1rem;
    line-height: 1rem;
    display: flex;
    a{
      flex: 1;
      font-size: 0.28rem;
      text-align: center;
    }
    a:nth-child(1){
      border-top: 1px solid #D2D3D5;
      border-right: 1px solid #D2D3D5;
      color: #999;
    }
    a:nth-child(2){
      border-top: 1px solid #D2D3D5;
    }
  }
}
.line{
  width: 100%;
  height: 2px;
}
</style>
