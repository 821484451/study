
<template>
  <div class="searchBox">
    <div class="search">
      <div class="search_filter" @click="changeflag()" :class="searchFlag ? '' : 'searchUp'">
        筛选 <img v-if="searchFlag" src="../../assets/images/huosdk_tg_down.png" >
        <img v-else src="../../assets/images/huosdk_tg_up.png" alt="">
      </div>
      <div class="search_key"><input type="text" v-model="key" @change="updateKeyWords()" v-if="searchBox"></div>
      <div class="search_btn"><a href="#" @click="searchKey">搜索</a></div>
    </div>
    <div class="searchPop" v-if="searchFlag === false" >
      <div class="searchPopBox">
        <div class="searchPopBox_main">
          <div class="searchPopBox_main__name" v-if="withdraw">
            <div>提现方式</div>
            <div><img src="../../assets/images/huosdk_tg_down_002.png" alt=""></div>
          </div>
          <div class="list" v-if="withdraw">
            <ul class="list_ul withdraw">
              <li :class="withdrawStyle === 'zfb' ? 'active': ''" @click="changeWithdrawStyle('zfb')">支付宝</li>
              <li :class="withdrawStyle === 'wx' ? 'active': ''" @click="changeWithdrawStyle('wx')">微信</li>
              <li :class="withdrawStyle === 'yh' ? 'active': ''" @click="changeWithdrawStyle('yh')">银行</li>
            </ul>
          </div>
          <div class="searchPopBox_main__name" v-if="withdraw">
            <div>提现状态</div>
            <div><img src="../../assets/images/huosdk_tg_down_002.png" alt=""></div>
          </div>
          <div class="list" v-if="withdraw">
            <ul class="list_ul">
              <li style="width: 23%;" :class="checkStatus === 0 ? 'active': ''" @click="changeCheckStatus(0)">待审核</li>
              <li style="width: 25%;" :class="checkStatus === 1 ? 'active': ''" @click="changeCheckStatus(1)">审核通过</li>
              <li style="width: 23%;" :class="checkStatus === 2 ? 'active': ''" @click="changeCheckStatus(2)">已打款</li>
              <li style="width: 25%;" :class="checkStatus === 3 ? 'active': ''" @click="changeCheckStatus(3)">审核不通过</li>
            </ul>
          </div>
          <div class="searchPopBox_main__name" v-if="platform">
            <div>平台类型</div>
            <div><img src="../../assets/images/huosdk_tg_down_002.png" alt=""></div>
          </div>
          <div class="list" v-if="platform">
            <ul class="list_ul withdraw">
              <li :class="searchClassify === 3 ? 'active': ''" @click="changePlatform(3)">安卓</li>
              <li :class="searchClassify === 4 ? 'active': ''" @click="changePlatform(4)">IOS</li>
              <li :class="searchClassify === 5 ? 'active': ''" @click="changePlatform(5)">H5</li>
            </ul>
          </div>
          <div class="searchPopBox_main__name" v-if="channelStatus">
            <div>渠道名称</div>
            <div><img src="../../assets/images/huosdk_tg_down_002.png" alt=""></div>
          </div>
          <div class="list zjx-slect" v-if="channelStatus" >
            <el-select v-model="searchChannelName" filterable placeholder="请选择" style="width: 100%" v-if="channelName">
              <el-option
                v-for="(item, index) in channelList" :key="index" :label="item.user_nicename"  :value="item.user_nicename">
              </el-option>
            </el-select>
            <el-select v-model="searchChannelName" filterable placeholder="请选择" style="width: 100%" v-else>
              <el-option
                v-for="(item, index) in channelList" :key="index" :label="item.user_nicename"  :value="item.user_login">
              </el-option>
            </el-select>
          </div>
          <div class="time" v-if="time">
            <p class="time_p">时间</p>
            <div class="date">
              <div class="block" style="width:47%;font-size: 0;">
                <el-date-picker
                  v-model="searchTime1"
                  type="date"
                  @change="dateChange1"
                  format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                  placeholder="选择日期" style="width:auto">
                </el-date-picker>
              </div>
              <div class="block" style="width:47%;font-size: 0;">
                <el-date-picker
                  v-model="searchTime2"
                  type="date"
                  @change="dateChange2"
                  placeholder="选择日期"
                  format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                   style="width:auto">
                </el-date-picker>
              </div>
            </div>
          </div>
          <div class="playerAccount" v-if="orderNum">
            <p class="playerAccount_p">订单号</p>
            <el-input  placeholder="请输入订单号"  v-model="searchOrderId"  clearable></el-input>
          </div>
          <div class="playerAccount" v-if="enterAccount">
            <p class="playerAccount_p">入账方式</p>
            <div class="playerAccount_input">
              <input type="text" placeholder="选择入账方式">
            </div>
          </div>
          <div class="playerAccount" v-if="playerAccount">
            <p class="playerAccount_p">玩家账号</p>
            <el-input  placeholder="请输入玩家账号"  v-model="searchPlayerAccount"  clearable></el-input>
          </div>
          <div class="playerAccount" v-if="chargeWay">
            <p class="playerAccount_p">充值方式</p>
            <ul class="list_ul withdraw">
              <li :class="searchChargeWay === 0 ? 'active': ''" @click="changeChargeStyle(0)">所有</li>
              <li :class="searchChargeWay === 1 ? 'active': ''" @click="changeChargeStyle(1)">自然流水</li>
              <li :class="searchChargeWay === 2 ? 'active': ''" @click="changeChargeStyle(2)">非自然流水</li>
            </ul>
          </div>
          <div class="playerAccount" v-if="playerChannel">
            <p class="playerAccount_p">玩家账号/渠道名称</p>
            <div class="playerAccount_input">
              <input type="text" placeholder="请输入玩家账号/渠道名称">
            </div>
          </div>
        </div>
        <div class="searchPopBox_btn">
          <h4 @click="changeflag()">取消</h4>
          <h4 @click="searchType()">确定</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
export default {
  components: {

  },
  props: {
    'channelList': {
      default () { return [] }
    },
    'channelStatus': {default: false},
    'withdraw': {default: false},
    'time': {default: false},
    'orderNum': {default: false},
    'playerAccount': {default: false},
    'platform': {default: false},
    'enterAccount': {default: false},
    'searchBox': {default: true},
    'playerChannel': {default: false},
    'chargeWay': {default: false},
    'channelName': {default: true}
  },
  computed: {
    ...mapGetters([
      'searchFlag',
      'searchUrl',
      'searchKeyWords',
      'searchClassify'
    ]),
    searchChannelName: {
      get () {
        return store.state.searchChannelName
      },
      set (val) {
        store.commit('UPDATE_CHANNEL_NAME', {channelName: val})
      }
    },
    searchOrderId: {
      get () {
        return store.state.searchOrderId
      },
      set (val) {
        store.commit('UPDATE_ORDER_ID', {orderId: val})
      }
    },
    searchPlayerAccount: {
      get () {
        return store.state.searchPlayerAccount
      },
      set (val) {
        store.commit('UPDATE_PLAYER_ACCOUNT', {playerAccount: val})
      }
    },
    searchTime1: {
      get () {
        return store.state.searchTime1
      },
      set (val) {
        store.commit('UPDATE_TIME1', {time1: val})
      }
    },
    searchTime2: {
      get () {
        return store.state.searchTime2
      },
      set (val) {
        store.commit('UPDATE_TIME2', {time2: val})
      }
    },
    searchChargeWay: {
      get () {
        return store.state.searchChargeWay
      },
      set (val) {
        store.commit('UPDATE_CHARGE_WAY', {chargeWay: val})
      }
    }
  },
  watch: {
    searchFlag (curVal, oldVal) {
      if (curVal) {
        this.$scroll.move()
      } else {
        this.$scroll.stop()
      }
    },
    checkStatus (curVal, oldVal) {
      store.commit('UPDATE_CHECK_STATUS', {checkStatus: curVal * 1 + 1})
    }
  },
  data () {
    return {
      key: '',
      time1: '',
      time2: '',
      checkStatus: 0,
      withdrawStyle: 'zfb',
      platformSelect: 'android',
      channelSelect: 0
    }
  },
  created () {
    store.commit('UPDATE_SEARCH_KEYWORDS', {'key': ''})
  },
  methods: {
    changeflag () {
      if (this.searchFlag) {
        store.commit('UPDATE_SEARCH_STATUS', {'searchFlag': false})
      } else {
        store.commit('UPDATE_SEARCH_STATUS', {'searchFlag': true})
      }
    },
    changeCheckStatus (num) {
      this.checkStatus = num
    },
    changeWithdrawStyle (flag) {
      this.withdrawStyle = flag
    },
    changePlatform (flag) {
      store.commit('UPDATE_SEARCH_CLASSIFY', {classify: flag})
    },
    searchKey () {
      this.$emit('searchKey')
    },
    searchType () {
      this.$emit('searchType')
      store.commit('UPDATE_SEARCH_STATUS', {'searchFlag': true})
    },
    updateKeyWords () {
      store.commit('UPDATE_SEARCH_KEYWORDS', {'key': this.key})
    },
    dateChange1 (val) {
      this.searchTime1 = val
    },
    dateChange2 (val) {
      this.searchTime2 = val
    },
    changeChargeStyle (num) {
      this.searchChargeWay = num
    }
  }
}
</script>

<style lang="scss" >
.zjx-slect{
  font-size: 0;
}
.time{
  padding-top: 0.36rem;
}
.search{
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #DEDEDE;
  background-color: #fff;
  &_filter{
    width: 1.25rem;
    height: 100%;
    text-align: center;
    img{
      width: 0.17rem;
      height: 0.1rem;
      vertical-align: middle;
    }
  }
  &_key{
    flex: 1;
    position: relative;
    input{
      width: 4.57rem;
      height: 0.56rem;
      border: 1px solid #E6E6EA;
      border-radius: 0.56rem;
      display: block;
      text-indent: 2em;
      background: url('../../assets/images/huosdk_tg_sousuo.png') no-repeat;
      background-size: 0.25rem 0.25rem;
      background-position: 1em center;
      position: absolute;
      top: 50%;
      margin-top: -0.28rem;
      left: 50%;
      margin-left: -2.285rem;
    }
  }
  &_btn{
    width: 1.25rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a{
      display: block;
      height: 0.4rem;
      width: 100%;
      border-left: 1px solid #B4BEC8;
      color:#333;
      text-align: center;
      line-height: 0.4rem;
    }

  }
  .searchUp{
    color: #409FFF !important;
  }
}
.searchPop{
  position: fixed;
  width: 100%;
  height: calc(100% - 1.76rem);
  background-color:rgba(0,0,0,0.5);
  z-index: 100;
  .searchPopBox{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 350px;
    &_main{
      flex: 1;
      overflow-x: hidden;
      padding: 0 0.31rem;
      padding-bottom: 0.5rem;
      &__name{
        display: flex;
        justify-content: space-between;
        font-size: 0.3rem;
        line-height: 1rem;
        color: #333;
        div:nth-child(2){
          img{
            width: 0.25rem;
            height: 0.16rem;
          }
        }
      }
      .list{
        &_ul{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding-bottom: 0.3rem;
          li{
            width: 1.5rem;
            height: 0.7rem;
            background-color: #F5F5F5;
            text-align: center;
            line-height: 0.7rem;
            font-size: 0.26rem;
            margin-top: 0.2rem;
            border-radius: 0.1rem;
          }
        }
        .withdraw{
          justify-content: flex-start;
          li{
            margin-right: 0.2rem;
          }
        }
      }
      .time{
        p{
          font-size: 0.3rem;
          color: #333;
        }
      }
    }
    &_btn{
      height: 1rem;
      display: flex;
      font-size: 0.3rem;
      line-height: 0.3rem;
      color: #333;
      h4{
        flex: 1;
        text-align: center;
        line-height: 1rem;
        background-color: #E9F3FC;

      }
      h4:nth-child(2){
        background-color: #409FFF;
        color: #fff;

      }
    }
  }
}
.date{
  width: 100%;
  padding-top: 0.36rem;
  display: flex;
  justify-content: space-between;
  & > div{
    width: 3.03rem;
  }
}
.playerAccount{
  padding-top: 0.47rem;
  font-size: 0.3rem;
  color: #333;
  &_p{
    padding-bottom: 0.35rem;
  }
  &_input{
    height: 0.73rem;
    border: 1px solid #D5D5D5;
    border-radius: 0.05rem;
    input{
      text-indent: 0.38rem;
      width: 100%;
      height: 100%;
      border-radius: 0.05rem;
      font-size: 0.26rem;
    }
  }
}
.active{
  background-color: #409FFF !important;
  color: #fff !important;
}
</style>
