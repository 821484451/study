
<template>
  <div class="searchBox">
    <div class="search">
      <div class="search_filter" @click="changeflag()" :class="searchFlag ? '' : 'searchUp'">
        筛选 <img v-if="searchFlag" src="../../assets/images/huosdk_tg_down.png" >
        <img v-else src="../../assets/images/huosdk_tg_up.png" alt="">
      </div>
      <div class="search_key"><input type="text" v-model="key" v-if="searchBox"></div>
      <div class="search_btn"><a href="#">搜索</a></div>
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
              <li style="width: 25%;" :class="checkStatus === 0 ? 'active': ''" @click="changeCheckStatus(0)">待审核</li>
              <li style="width: 25%;" :class="checkStatus === 1 ? 'active': ''" @click="changeCheckStatus(1)">已结算</li>
              <li style="width: 40%;" :class="checkStatus === 2 ? 'active': ''" @click="changeCheckStatus(2)">待财务审核</li>
              <li style="width: 45%;" :class="checkStatus === 3 ? 'active': ''" @click="changeCheckStatus(3)">运营审核不通过</li>
              <li style="width: 45%;" :class="checkStatus === 4 ? 'active': ''" @click="changeCheckStatus(4)">财务审核不通过</li>
            </ul>
          </div>
          <div class="searchPopBox_main__name" v-if="platform">
            <div>平台类型</div>
            <div><img src="../../assets/images/huosdk_tg_down_002.png" alt=""></div>
          </div>
          <div class="list" v-if="platform">
            <ul class="list_ul withdraw">
              <li :class="platformSelect === 'android' ? 'active': ''" @click="changePlatform('android')">安卓</li>
              <li :class="platformSelect === 'ios' ? 'active': ''" @click="changePlatform('ios')">IOS</li>
              <li :class="platformSelect === 'h5' ? 'active': ''" @click="changePlatform('h5')">H5</li>
            </ul>
          </div>
          <div class="searchPopBox_main__name" v-if="channelStatus">
            <div>渠道名称</div>
            <div><img src="../../assets/images/huosdk_tg_down_002.png" alt=""></div>
          </div>
          <div class="list" v-if="channelStatus">
            <ul class="list_ul">
              <li v-for="(item, index) in channelList" :key="index" :class="channelSelect === index ? 'active': ''" @click="changeChannel(index)">{{item}}</li>
            </ul>
          </div>
          <div class="time" v-if="time">
            <p class="time_p">时间</p>
            <div class="date">
              <date-picker v-model="time1" :first-day-of-week="1"></date-picker>
              <date-picker v-model="time2" :first-day-of-week="1"></date-picker>
            </div>
          </div>
          <div class="playerAccount" v-if="orderNum">
            <p class="playerAccount_p">订单号</p>
            <div class="playerAccount_input">
              <input type="text" placeholder="请输入订单号">
            </div>
          </div>
          <div class="playerAccount" v-if="enterAccount">
            <p class="playerAccount_p">入账方式</p>
            <div class="playerAccount_input">
              <input type="text" placeholder="选择入账方式">
            </div>
          </div>
          <div class="playerAccount" v-if="playerAccount">
            <p class="playerAccount_p">玩家账号</p>
            <div class="playerAccount_input">
              <input type="text" placeholder="请输入玩家账号">
            </div>
          </div>
          <div class="playerAccount" v-if="chargeWay">
            <p class="playerAccount_p">充值方式</p>
            <div class="playerAccount_input">
              <input type="text" placeholder="选择充值方式">
            </div>
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
          <h4 @click="changeflag()">确定</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
import DatePicker from 'vue2-datepicker'
export default {
  components: {
    DatePicker
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
    'chargeWay': {default: false}
  },
  computed: {
    ...mapGetters([
      'searchFlag',
      'searchUrl'
    ])
  },
  watch: {
    searchFlag (curVal, oldVal) {
      if (curVal) {
        this.$scroll.move()
      } else {
        this.$scroll.stop()
      }
    }
  },
  data () {
    return {
      key: '',
      time1: '',
      time2: '',
      shortcuts: [
        {
          text: 'Today',
          onClick: () => {
            this.time3 = [ new Date(), new Date() ]
          }
        }
      ],
      timePickerOptions: {
        start: '00:00',
        step: '00:30',
        end: '23:30'
      },
      checkStatus: 0,
      withdrawStyle: 'zfb',
      platformSelect: 'android',
      channelSelect: 0
    }
  },
  created () {

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
      this.platformSelect = flag
    },
    changeChannel (num) {
      this.channelSelect = num
    }

  }
}
</script>

<style lang="scss" >
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
