<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <keep-alive>
      <div class="scroll">
        <div class="gameTab">
          <div class="gameTab_item" ><router-link to="/financial">财务统计<i></i></router-link></div>
          <div class="gameTab_item" ><router-link to="/incomerecord">收益记录</router-link></div>
          <div class="gameTab_item" ><router-link to="/cashrecord">提现记录</router-link></div>
          <div class="gameTab_item"  style="padding:0 0.3rem;width:3rem;"><router-link to="/ptbissuerecord">平台币发放记录</router-link></div>
          <div class="gameTab_item"  style="padding:0 0.3rem;width:3rem;"><router-link to="/ptbgetrecord">平台币获取记录</router-link></div>
        </div>
      </div>
    </keep-alive>
    <div class="main">
      <div class="sum">
        <div class="sum_div1">
          <p class="sum_div1__p1">账户余额（元）</p>
          <p class="sum_div1__p2">{{accountMoney}}</p>
        </div>
        <div class="sum_div2">
          <div class="sum_div2__left">
            <p>平台币金额（元）</p>
            <p>{{ptbMoney}}</p>
          </div>
          <div class="sum_div2__right">
            <p>账户冻结金额（元）</p>
            <p>{{frozenMoney}}</p>
          </div>
        </div>
        <div class="sum_div3">
          <a href="javascript:;" @click.stop="popAC()">充值</a>
          <a href="javascript:;" @click.stop="popBinding()">提现</a>
        </div>
      </div>
      <h4 class="monthIncome">
        <span>月收入(7月)</span>
        <span>
          <select name="month" v-model="curMonth" id="month">
            <option value="1">一月内</option>
            <option value="2">二月内</option>
            <option value="3">三月内</option>
            <option value="4">四月内</option>
            <option value="5">五月内</option>
            <option value="6">六月内</option>
            <option value="7">七月内</option>
            <option value="8">八月内</option>
            <option value="9">九月内</option>
            <option value="10">十月内</option>
            <option value="11">十一月内</option>
            <option value="12">十二月内</option>
          </select>
        </span>
      </h4>
    </div>
    <div class="echart">
      <MyEchart :widthLength="width"/>
    </div>
    <Footer :flag="flag"/>
    <div class="addChannel" v-if="popAddChannel" @touchmove.prevent>
      <div class="addChannelBox">
        <h4>平台币充值</h4>
        <div class="inputList" >
          <div class="inputBox disable">
            <span class="inputBox_name">充值账号：</span>
            <input type="text" disabled="disabled" class="inputBox_input" v-model="userInfo.username">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">火币数量：</span>
            <input type="text" class="inputBox_input" v-model="ptbNum">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">充值方式：</span>
            <select  class="inputBox_input" v-model="payWay">
              <option value ="alipay">旧版支付宝</option>
              <option value="wxpay">官方微信</option>
              <option value="ab">账户余额</option>
            </select>
          </div>
          <div class="inputBox disable">
            <span class="inputBox_name">支付金额：</span>
            <input type="text" class="inputBox_input" disabled="disabled" v-model="chargeNum">
          </div>
        </div>
        <div class="addChannelBox_footer" >
          <a href="javascript:;" @click.stop="popAC()">取消</a>
          <a href="javascript:;" @click.stop="chargePtb()">确定</a>
        </div>
      </div>
    </div>
    <div class="addChannel" v-if="cash" @touchmove.prevent>
      <div class="addChannelBox">
        <h4>余额提现</h4>
        <div class="inputList">
          <div class="inputBox disable">
            <span class="inputBox_name">账户余额：</span>
            <input type="text" class="inputBox_input" disabled="disabled" v-model="accountMoney">
          </div>
          <div class="inputBox disable">
            <span class="inputBox_name">手机号码：</span>
            <input type="text" class="inputBox_input" disabled="disabled" v-model="userInfo.mobile">
          </div>
          <div class="inputBox disable" >
            <span class="inputBox_name">提现方式：</span>
            <input type="text" class="inputBox_input" disabled="disabled" v-model="windrawWay">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">提现金额：</span>
            <input type="text" class="inputBox_input" v-model="withdrawNum">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">支付密码：</span>
            <input type="password" class="inputBox_input" v-model="withdrawPwd">
          </div>
        </div>
        <div class="addChannelBox_footer">
          <a href="javascript:;" @click.stop="popCash()">取消</a>
          <a href="javascript:;" @click.stop="withdraw()">确定</a>
        </div>
      </div>
    </div>
    <div class="bindPhone" v-if="bindPhoneStatus" @touchmove.prevent>
      <div class="bindPhoneBox">
        <div class="bindPhoneBox_content">
          你还未绑定手机号，不能提现.<br>
          是否前往绑定？
        </div>
        <div class="bindPhoneBox_btn">
          <a href="javascript:;" @click.stop="popBinding()">取消</a>
          <router-link to="/bindingmobile">去绑定</router-link>
        </div>
      </div>
    </div>
    <div v-html="html"></div>
  </div>

</template>

<script>
import header from '../public/header.vue'
import footer from '../public/tab.vue'
import myEchart from '../public/echarts.vue'
import { mapGetters } from 'vuex'
import store from '../../store'
export default {
  components: {
    'Header': header,
    'Footer': footer,
    'MyEchart': myEchart
  },
  computed: {
    ...mapGetters([
      'accountMoney',
      'ptbMoney',
      'frozenMoney',
      'channelList',
      'rate',
      'html',
      'userInfo',
      'settleInformation'
    ]),
    month: () => {
      let date = new Date()
      return date.getMonth() + 1
    }
  },
  watch: {
    curMonth (curVal, oldVal) {
      store.dispatch('monthIncome', {'month': curVal})
    },
    ptbNum (curVal, oldVal) {
      this.chargeNum = curVal * this.rate
    },
    html (curVal, oldVal) {
      if (curVal) {
        document.forms[0].submit()
      }
    }

  },
  data () {
    return {
      left: 0,
      right: 0,
      text: '财务中心',
      flag: 'financial',
      popAddChannel: false,
      select: false,
      cash: false,
      bindPhoneStatus: false,
      width: '1500px',
      curMonth: '',
      chargeAccount: 121212,
      chargeNum: 0,
      payWay: 'alipay',
      ptbNum: '',
      windrawWay: '银行卡',
      withdrawNum: '',
      withdrawPwd: ''
    }
  },
  created () {
    store.dispatch('homeInit')
    this.curMonth = this.month
    store.dispatch('channelList')
    store.dispatch('getRate')
    store.dispatch('getUserInfo')
    store.dispatch('getSettleInformation')
  },
  methods: {
    popAC () {
      this.popAddChannel = !this.popAddChannel
    },
    popCash () {
      this.cash = !this.cash
    },
    popBinding () {
      if (this.userInfo.mobile) {
        this.cash = true
      } else {
        this.bindPhoneStatus = !this.bindPhoneStatus
      }
    },
    changeSelect (flag) {
      this.select = flag
    },
    give () {
      store.dispatch('chargeSubPtb', {amount: this.chargeNum, pay_pwd: this.chargeSubPwd, agent_login: this.channelId})
      this.chargeSubPwd = ''
    },
    chargePtb () {
      store.dispatch('chargePtb', {amount: this.ptbNum, payway: this.payWay})
    },
    withdraw () {
      this.popCash()
      store.dispatch('withdraw', {amount: this.withdrawNum, payway: 'bank', paypwd: this.withdrawPwd, account: this.settleInformation.banknum})
    }
  },
  mounted () {
    if (this.$route.params.cash) {
      this.cash = true
    } else if (this.$route.params.charge) {
      this.popAddChannel = true
    }
    this.$store.dispatch('monthIncome')
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
.home{
  background: url('../../assets/images/huosdk_tg_bg_001.png') no-repeat top;
  background-size: 100% auto;
  background-color: #f5f6ff;
  padding-bottom: 1.06rem;
  .header{
    background: none;
  }
  .scroll{
    width: 100%;
    overflow-y: hidden;
  }
  .gameTab{
    height: 1rem;
    display: flex;
    width: 12rem;
    &_item{
      width: 2rem;
      text-align: center;
      line-height: 1rem;
      font-size: 0.3rem;
      color: #fff;
      position: relative;
      a{
        color: #fff;
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
}
.sum{
  background-color: #fff;
  &_div1{
    padding-left: 0.5rem;
    &__p1{
      font-size: 0.24rem;
      color: #9DA7AE;
      padding-top: 0.31rem;
    }
    &__p2{
      color: #3D3A55;
      font-size: 0.72rem;
      font-weight: 570;
    }
  }
  &_div2{
    display: flex;
    padding-top: 0.43rem;
    div{
      flex: 1;
    }
    &__left{
      padding-left: 0.5rem;
      p:nth-child(1){
        font-size: 0.24rem;
        color: #9DA7AE;
      }
      p:nth-child(2){
        font-size: 0.42rem;
        color: #3D3A55;
        padding-top: 0.17rem;
      }
    }
    &__right{
      p:nth-child(1){
        font-size: 0.24rem;
        color: #FF3636;
      }
      p:nth-child(2){
        font-size: 0.42rem;
        color: #3D3A55;
        padding-top: 0.17rem;
      }
    }
  }
  &_div3{
    display: flex;
    justify-content: space-around;
    padding-top: 0.44rem;
    padding-bottom: 0.35rem;
    a{
     width: 3rem;
     height: 0.7rem;
     line-height: 0.7rem;
     font-size: 0.3rem;
     text-align: center;
     box-shadow:0px 0px 12px rgba(16,142,233,0.27);
     border-radius: 0.35rem;
    }
    a:nth-child(1){
      color: #108EE9;

    }
    a:nth-child(2){
      background-color: #108EE9;
      color: #fff;
    }
  }
}
.monthIncome{
  height: 0.9rem;
  line-height: 0.9rem;
  padding: 0 0.3rem;
  font-size: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 0.35rem;
    height: 0.34rem;
  }
  span:nth-child(2){
    display: block;
    height: 100%;
    select{
      height: 100%;
      background-color: #f5f6ff;
      border: none;
      -webkit-appearance: none;
    }
  }
}
.echart{
  background-color: #fff;
}
.addChannel{
  position: fixed;
  width:100%;
  height: 100%;
  left: 0;
  top:0;
  background-color: rgba(0,0,0,0.5);
  .addChannelBox{
    width: 5.8rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 0.07rem;
    font-size: 0.3rem;
    color: #333;
    h4{
      line-height: 1rem;
      text-align: center;
      display: flex;
      border-bottom: 1px solid #EEEEEE;
      a{
        flex: 1;
        display: block;
        text-align: center;
        line-height: 1rem;
        position: relative;
        color: #000000;
        i{
          display: none;
          width: 1.4rem;
          height: 0.04rem;
          background-color: #409FFF;
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -0.7rem;
        }
        span{
          display: block;
          width: 1px;
          height: 0.57rem;
          position: absolute;
          background-color: #D2D2D2;
          left: 0;
          top: 50%;
          margin-top: -0.285rem;
        }
      }
      .checked{
        color: #409FFF;
        i{
          display: block;
        }
      }
    }
    h4{
      line-height: 1rem;
      text-align: center;
      justify-content: center;
    }
    &_footer{
      height: 1rem;
      line-height: 1rem;
      text-align:center;
      display: flex;
      margin-top: 0.2rem;
      a{
        flex: 1;
      }
      a:nth-child(1){
        color: #777;
        border-top: 1px solid #EEEEEE;
        border-right: 1px solid #EEEEEE;
      }
      a:nth-child(2){
        color:#409FFF;
        border-top: 1px solid #EEEEEE;
      }
    }
  }
}
.inputList{
  padding: 0 0.3rem;
  padding-top: 0.2rem;
}
.inputBox{
  height: 0.75rem;
  line-height: 0.75rem;
  display: flex;
  border: 1px solid #EEEEEE;
  margin-bottom: 0.15rem;
  &_name{
    width: 30%;
    height: 100%;
    text-align: right;
    line-height: 0.75rem;
    font-size: 0.26rem;
  }
  &_input{
    height: 100%;
    border: none;
    width: 70%;
  }
  select{
    flex: 1;
    outline: none;
    background-color: #fff;
    width: 65%;
    font-size: 0.24rem;
  }
}
.bindPhone{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  .bindPhoneBox{
    width: 5.2rem;
    height: 2.9rem;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 0.07rem;
    &_content{
      height: 1.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.3rem;
      color: #333;
      text-align: center;
    }
    &_btn{
      height: 1rem;
      width: 100%;
      display: flex;
      a{
        flex: 1;
        text-align: center;
        line-height: 1rem;
        font-size: 0.28rem;
      }
      a:nth-child(1){
        color: #999;
        border-top: 1px solid #EEEEEE;
        border-right: 1px solid #EEEEEE;
      }
      a:nth-child(2){
        color: #409FFF;
        border-top: 1px solid #EEEEEE;
      }
    }
  }
}
.disable{
  background-color: #F5F5F9;
  span{
    background-color: #F5F5F9;
  }
  input{
    background-color: #F5F5F9;
  }
}
</style>
