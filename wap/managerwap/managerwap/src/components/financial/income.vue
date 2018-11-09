<template>
  <div class="home">
    <Header :left="left" :text="text"/>
    <div class="main">
      <ul class="list">
        <li class="list_li">
          <div class="list_li__div1">
            <p>玩家账号152</p>
            <p>游戏名称：球球总动员</p>
            <p>上级渠道：官方</p>
          </div>
          <div class="list_li__div2">
            <p>20.00</p>
            <p>充值金额</p>
            <img v-if="!isNum(1)" @click="changeNum(1)" src="../../assets/images/huosdk_tg_down_003.png" alt="">
            <img v-else @click="changeNum(1)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
          </div>
        </li>
        <li class="detail" v-if="isNum(1)">
          <div class="detail_div1">
            <p>实付金额：<span>18.00</span></p>
            <p>获得收益：<span>3.20</span></p>
            <p>时间：<span>2018-06-06 11:25</span></p>
          </div>
          <div class="detail_div2">
            <p>优惠类型：<span>折扣</span></p>
            <p>充值方式：<span>支付宝</span></p>
            <p>订单：<span>21313213131333333333</span></p>
          </div>
        </li>
      </ul>
      <ul class="list">
        <li class="list_li">
          <div class="list_li__div1">
            <p>玩家账号152</p>
            <p>游戏名称：球球总动员</p>
            <p>上级渠道：官方</p>
          </div>
          <div class="list_li__div2">
            <p>20.00</p>
            <p>充值金额</p>
            <img v-if="!isNum(2)" @click="changeNum(2)" src="../../assets/images/huosdk_tg_down_003.png" alt="">
            <img v-else @click="changeNum(2)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
          </div>
        </li>
        <li class="detail" v-if="isNum(2)">
          <div class="detail_div1">
            <p>实付金额：<span>18.00</span></p>
            <p>获得收益：<span>3.20</span></p>
            <p>时间：<span>2018-06-06 11:25</span></p>
          </div>
          <div class="detail_div2">
            <p>优惠类型：<span>折扣</span></p>
            <p>充值方式：<span>支付宝</span></p>
            <p>订单：<span>21313213131333333333</span></p>
          </div>
        </li>
      </ul>
      <ul class="list">
        <li class="list_li">
          <div class="list_li__div1">
            <p>玩家账号152</p>
            <p>游戏名称：球球总动员</p>
            <p>上级渠道：官方</p>
          </div>
          <div class="list_li__div2">
            <p>20.00</p>
            <p>充值金额</p>
            <img v-if="!isNum(3)" @click="changeNum(3)" src="../../assets/images/huosdk_tg_down_003.png" alt="">
            <img v-else @click="changeNum(3)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
          </div>
        </li>
        <li class="detail" v-if="isNum(3)">
          <div class="detail_div1">
            <p>实付金额：<span>18.00</span></p>
            <p>获得收益：<span>3.20</span></p>
            <p>时间：<span>2018-06-06 11:25</span></p>
          </div>
          <div class="detail_div2">
            <p>优惠类型：<span>折扣</span></p>
            <p>充值方式：<span>支付宝</span></p>
            <p>订单：<span>21313213131333333333</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../public/header.vue'
export default {
  components: {
    'Header': Header
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      left: 1,
      text: '收益明细',
      num: []
    }
  },
  created () {
  },
  methods: {
    changeNum (num) {
      let self = this
      if (this.isNum(num)) {
        this.num.splice(self.num.indexOf(num), 1)
      } else {
        this.num.push(num)
      }
    },
    isNum (num) {
      return this.num.indexOf(num) > -1
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    overflow-x: hidden;
    background-color: #f5f6ff;
  }
}
.list{
  background-color: #fff;
  &_li{
    padding: 0.2rem 0.3rem;
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    &__div1{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p:nth-child(1){
        color: #000;
        font-size: 0.3rem;
        span{
          color: #7C7C7C;
          font-size: 0.24rem;
        }
      }
      p:nth-child(3), p:nth-child(2){
        color: #7C7C7C;
        font-size: 0.24rem;
        padding-top: 0.16rem;
      }
    }
    &__div2{
      width: 1.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-direction: column;
      p:nth-child(1){
        color: #FF3D59;
        font-size: 0.56rem;
      }
      p:nth-child(2){
        color: #888;
        font-size: 0.24rem;
      }
      img{
        position: absolute;
        width: 0.23rem;
        height: 0.12rem;
        right: 0;
        bottom: -0.11rem;
      }
    }
  }
}
.detail{
  padding: 0.15rem 0.3rem;
  display: flex;
  margin-bottom: 0.16rem;
  div{
    p{
      padding-top: 0.15rem;
      padding-bottom: 0.15rem;
      color: #99A9BF;
      font-size: 0.24rem;
      span{
        color: #555555;
      }
    }
  }
  div:nth-child(1){
    width: 43%;
  }
  div:nth-child(2){
    width: 57%;
  }
}
</style>
