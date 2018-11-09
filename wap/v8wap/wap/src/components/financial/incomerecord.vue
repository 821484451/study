<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl" :leftUrl="leftUrl" />
    <div class="gameTab">
      <div class="gameTab_item" @click="select()"><router-link to="/incomerecord/playerincomerecord">玩家收益记录<i v-if="incomeTabFlag"></i></router-link></div>
      <div class="gameTab_item" @click="select()"><router-link to="/incomerecord/childincomerecord">子渠道收益记录<i v-if="! incomeTabFlag"></i></router-link></div>
    </div>
    <div class="main">
      <Search :channelStatus="channelStatus" :channelList="channelList" :time="time" :channelName="false" :playerAccount="playerAccount" :orderNum="orderNum" @searchKey="searchKey"
      @searchType="searchType"/>
      <div class="chargeList">
        <div class="chargeList">
          <div class="chargeList_head">
            <div class="chargeList_head__div1">
              <p>汇总</p>
              <p>金额： ￥{{playerMoney}}&nbsp;&nbsp;&nbsp;<span v-if="realPlayerMoney">实付金额：￥{{realPlayerMoney}}</span></p>
              <p> 渠道收益：￥{{playerChannelIncome}}</p>
            </div>
            <div class="chargeList_head__div2">
              <img src="../../assets/images/huosdk_tg_rili.png" alt="">
            </div>
          </div>
          <router-view/>
          <p class="loadMoreTip" v-if="! loadStatus"><span>我是有底线的</span><i></i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../public/header.vue'
import search from '../public/search.vue'
import { mapGetters } from 'vuex'
import store from '../../store'
export default {
  components: {
    'Header': header,
    'Search': search
  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '收益记录',
      rightText: '',
      toUrl: '',
      leftUrl: '/financial/cash',
      channelStatus: true,
      time: true,
      playerAccount: true,
      orderNum: true,
      searchBox: false,
      loadStatus: true
    }
  },
  created () {
    store.dispatch('channelList')
    store.commit('UPDATE_SW', {sw: true})
  },
  computed: {
    ...mapGetters([
      'incomeTabFlag',
      'playerMoney',
      'realPlayerMoney',
      'playerChannelIncome',
      'channelCount',
      'channelList',
      'searchKeyWords',
      'searchChannelName',
      'searchOrderId',
      'searchPlayerAccount',
      'searchTime1',
      'searchTime2',
      'sw',
      'playerIncomeList',
      'playerIncomeListCount'

    ])
  },
  watch: {
    channelCount (curVal, oldVal) {
      if (curVal) {
        store.dispatch('channelList', {offset: curVal})
      }
    },
    playerIncomeList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.playerIncomeListCount) {
        store.commit('UPDATE_SW', {sw: true})
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
    }
  },
  methods: {
    select () {
      if (this.incomeTabFlag) {
        store.commit('UPDATE_INCOME_FLAG', { 'incomeTabFlag': false })
      } else {
        store.commit('UPDATE_INCOME_FLAG', { 'incomeTabFlag': true })
      }
    },
    searchKey () {
      if (this.incomeTabFlag) {
        store.dispatch('playerIncomeRecord', {game_name: this.searchKeyWords})
      } else {
        store.dispatch('childIncomeRecord', {game_name: this.searchKeyWords})
      }
    },
    searchType () {
      if (this.incomeTabFlag) {
        store.dispatch('playerIncomeRecord', {
          agent_login: this.searchChannelName,
          mem_name: this.searchPlayerAccount,
          order_id: this.searchOrderId,
          start_time: this.searchTime1,
          end_time: this.searchTime2
        })
      } else {
        store.dispatch('childIncomeRecord', {
          agent_login: this.searchChannelName,
          mem_name: this.searchPlayerAccount,
          order_id: this.searchOrderId,
          start_time: this.searchTime1,
          end_time: this.searchTime2
        })
      }
    }
  },
  mounted () {
    let _self = this
    let dom1 = document.querySelector('.main')
    let dom2 = document.querySelector('.main').children[1]
    dom1.addEventListener('scroll', function () {
      if (dom1.scrollTop + dom1.offsetHeight >= dom2.offsetHeight) {
        if (_self.sw === true) {
          store.commit('UPDATE_SW', {sw: false})
          if (_self.incomeTabFlag) {
            if (_self.playerIncomeListCount > _self.playerIncomeList.length) {
              store.dispatch('playerIncomeRecord', {page: Math.ceil(_self.playerIncomeList.length / 20) + 1, offset: 20})
            }
          } else {
            if (_self.playerIncomeListCount > _self.playerIncomeList.length) {
              store.dispatch('childIncomeRecord', {page: Math.ceil(_self.playerIncomeList.length / 20) + 1, offset: 20})
            }
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
  height: 100%;
  .header{
    background: none;
  }
}
.chargeList_head{
  padding: 0 0.3rem;
  display: flex;
  background-color: #F5F5F9;
  &__div1{
    flex: 1;
    p:nth-child(1){
      font-size: 0.28rem;
      color: #333;
      line-height: 0.5rem;
    }
    p:nth-child(2){
      font-size: 0.24rem;
      line-height: 0.5rem;
      color: #999;
    }
    p:nth-child(3){
      font-size: 0.24rem;
      line-height: 0.5rem;
      color: #999;
    }
  }
  &__div2{
    width: 0.45rem;
    position: relative;
    img{
      width: 0.35rem;
      height: 0.34rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
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
        width: 100%;
        height: 100%;
        display: block;
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

</style>
