<template>
  <div class="chargeList">
    <Search :channelStatus="channelStatus"
    :channelList="channelList"
    :time="time"
    :playerAccount="playerAccount"
    :orderNum="orderNum"
    :chargeWay="chargeWay"
    @searchKey="searchKey"
    @searchType="searchType"
    />
    <div class="chargeList_head">
      <div class="chargeList_head__div1">
        <p>汇总</p>
        <p>支付金额：￥{{pay}}&nbsp;&nbsp;&nbsp;实际支付金额：￥{{realPay}}</p>
      </div>
      <div class="chargeList_head__div2">
        <img src="../../assets/images/huosdk_tg_rili.png" alt="">
      </div>
    </div>
    <ul class="chargeList_list" v-for="(item, index) in playerPayList" :key="index">
      <li class="chargeList_list__li list" >
        <div class="list_div1">
          <p class="list_div1__p1">{{item.mem_name}}</p>
          <p class="list_div1__p2">{{item.create_time}}</p>
        </div>
        <div class="list_div2">
          <p class="list_div2__p1">+{{item.amount}}</p>
          <p class="list_div2__p2">充值金额</p>
          <i></i>
        </div>
        <img v-if="! showArray.includes(index)" @click="pushShowArray(index)" src="../../assets/images/huosdk_tg_down_003.png" alt=""><img v-if="showArray.includes(index)" @click="pushShowArray(index)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
      </li>
      <li class="detail" v-if="showArray.includes(index)">
        <div class="detail_div1">
          <p>渠道名称：<span>{{item.agent_name}}</span></p>
          <p>充值折扣：<span> {{item.real_amount/item.amount}}折</span></p>
          <p>充值方式：<span>{{item.payway_txt.slice(0, -2)}}</span></p>
        </div>
        <div class="detail_div2">
          <p>充值游戏：<span>{{item.game_name}}</span></p>
          <p>实收金额：<span>{{item.real_amount}}</span></p>
          <p>订单号：<span>{{item.order_id}}</span></p>
        </div>
      </li>
    </ul>
    <p class="loadMoreTip" v-if="! loadStatus"><span>我是有底线的</span><i></i></p>

  </div>
</template>

<script>
import search from '../public/search.vue'
import store from '../../store'
import { mapGetters } from 'vuex'
export default {
  components: {
    'Search': search
  },
  computed: {
    ...mapGetters([
      'pay',
      'realPay',
      'playerPayList',
      'channelCount',
      'channelList',
      'searchTime1',
      'searchTime2',
      'searchPlayerAccount',
      'searchKeyWords',
      'searchChannelName',
      'searchChargeWay',
      'searchOrderId',
      'playerPayCount',
      'sw'
    ])
  },
  watch: {
    channelCount (curVal, oldVal) {
      if (curVal) {
        store.dispatch('channelList', {offset: curVal})
      }
    },
    playerPayList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.playerPayCount) {
        store.commit('UPDATE_SW', {sw: true})
      } else if (curVal.length * 1 < 20) {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = true
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
    }
  },
  data () {
    return {
      flag: -1,
      channelStatus: true,
      time: true,
      playerAccount: true,
      orderNum: true,
      chargeWay: true,
      loadStatus: true,
      showArray: []
    }
  },
  created () {
    store.dispatch('payRecord')
    store.commit('UPDATE_SW', {sw: true})
    if (this.channelCount) {
      store.dispatch('channelList', {offset: this.channelCount})
    } else {
      store.dispatch('channelList')
    }
  },
  methods: {
    toDetail (url) {
      this.$router.push({path: url})
    },
    changeFlag (num) {
      this.flag = num
    },
    searchKey () {
      store.dispatch('payRecord', {game_name: this.searchKeyWords})
    },
    searchType () {
      store.dispatch('payRecord', {
        sub_agent_name: this.searchChannelName,
        mem_name: this.searchPlayerAccount,
        start_time: this.searchTime1,
        end_time: this.searchTime2,
        order_id: this.searchOrderId,
        payway: this.searchChargeWay
      })
    },
    pushShowArray (num) {
      if (this.showArray.includes(num)) {
        this.showArray = this.showArray.filter(item => item !== num)
      } else {
        this.showArray.push(num)
      }
    }
  },
  mounted () {
    let _self = this
    let dom1 = document.querySelector('.main')
    let dom2 = document.querySelector('.chargeList')
    dom1.addEventListener('scroll', function () {
      if (dom1.scrollTop + dom1.offsetHeight >= dom2.offsetHeight) {
        if (_self.sw === true) {
          _self.sw = false
          if (_self.playerPayCount > _self.playerPayList.length) {
            store.dispatch('payRecord', {page: Math.ceil(_self.playerPayList.length / 20) + 1, offset: 20})
          }
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.chargeList_head{
  height: 1rem;
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
.chargeList_list{
  padding: 0 0.3rem;
  background-color: #fff;
  &__li{
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-bottom: 0.43rem;
    padding-top: 0.37rem;
    img{
      width: 0.23rem;
      height: 0.12rem;
      position: absolute;
      bottom: 0.1rem;
      right: 0;
    }
  }

}
.list{
  border-bottom: 1px solid #EEEEEE;
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &_div1{
    &__p1{
      font-size: 0.3rem;
      color: #000;
    }
    &__p2{
      font-size: 0.24rem;
      color: #7C7C7C;
      padding-top: 0.23rem;
    }
  }
  &_div2{
    position: relative;
    &__p1{
      font-size: 0.56rem;
      color: #FF3D59;
      font-weight: bold;
    }
    &__p2{
      font-size: 0.24rem;
      color: #888;
    }
    i{
      width: 1px;
      height: 0.5rem;
      background-color: #EEE;
      position: absolute;
      left: -0.5rem;
      top: 50%;
      margin-top: -0.25rem;

    }
  }
}
.detail{
  display: flex;
  margin-bottom: 0.2rem;
  div{
    color: #99A9BF;
    font-size: 0.24rem;
    P:nth-child(1){
      padding-top: 0.26rem;
    }
    P:nth-child(2){
      padding-top: 0.3rem;
    }
    P:nth-child(3){
      padding-top: 0.31rem;
      padding-bottom: 0.24rem;
    }
    span{
      color: #555555;
    }
  }
  &_div1{
    width: 36%;
  }
}
</style>
