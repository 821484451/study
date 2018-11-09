<template>
  <div class="content">
    <Search/>
    <ul class="list">
      <li class="list_li">
        <div class="list_li__div1">
          <p>单号001&nbsp;&nbsp;<span>通知CP失败</span></p>
          <p>2018-01-01 11:25</p>
        </div>
        <div class="list_li__div2">
          <a href="javascript:;">补单</a>
          <img v-if="!isNum(1)" @click="changeNum(1)" src="../../assets/images/huosdk_tg_down_003.png" alt="">
          <img v-else @click="changeNum(1)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
        </div>
      </li>
      <li class="detail" v-if="isNum(1)">
        <div class="detail_div1">
          <p>CP单号：<span>055523456</span></p>
          <p>小号昵称：<span>大圣归来</span></p>
          <p>金额：<span>521.23</span></p>
          <p>游戏区服：<span>王285服</span></p>
          <p>充值方式：<span>支付宝</span></p>
        </div>
        <div class="detail_div2">
          <p>账号：<span>15137543929</span></p>
          <p>游戏：<span>大话西游</span></p>
          <p>实收金额：<span>98</span></p>
          <p>游戏角色：<span>法师</span></p>
          <p>归属渠道：<span>渠道098</span></p>
        </div>
      </li>
    </ul>
    <ul class="list">
      <li class="list_li">
        <div class="list_li__div1">
          <p>单号001&nbsp;&nbsp;<span>未支付</span></p>
          <p>2018-01-01 11:25</p>
        </div>
        <div class="list_li__div2">
          <a href="javascript:;" v-if="boolean">补单</a>
          <img v-if="!isNum(2)" @click="changeNum(2)" src="../../assets/images/huosdk_tg_down_003.png" alt="">
          <img v-else @click="changeNum(2)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
        </div>
      </li>
      <li class="detail" v-if="isNum(2)">
        <div class="detail_div1">
          <p>CP单号：<span>055523456</span></p>
          <p>小号昵称：<span>大圣归来</span></p>
          <p>金额：<span>521.23</span></p>
          <p>游戏区服：<span>王285服</span></p>
          <p>充值方式：<span>支付宝</span></p>
        </div>
        <div class="detail_div2">
          <p>账号：<span>15137543929</span></p>
          <p>游戏：<span>大话西游</span></p>
          <p>实收金额：<span>98</span></p>
          <p>游戏角色：<span>法师</span></p>
          <p>归属渠道：<span>渠道098</span></p>
        </div>
      </li>
    </ul>
    <ul class="list">
      <li class="list_li">
        <div class="list_li__div1">
          <p>单号001&nbsp;&nbsp;<span>未通知CP</span></p>
          <p>2018-01-01 11:25</p>
        </div>
        <div class="list_li__div2">
          <a  href="javascript:;">补单</a>
          <img v-if="!isNum(3)" @click="changeNum(3)" src="../../assets/images/huosdk_tg_down_003.png" alt="">
          <img v-else @click="changeNum(3)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
        </div>
      </li>
      <li class="detail" v-if="isNum(3)">
        <div class="detail_div1">
          <p>CP单号：<span>055523456</span></p>
          <p>小号昵称：<span>大圣归来</span></p>
          <p>金额：<span>521.23</span></p>
          <p>游戏区服：<span>王285服</span></p>
          <p>充值方式：<span>支付宝</span></p>
        </div>
        <div class="detail_div2">
          <p>账号：<span>15137543929</span></p>
          <p>游戏：<span>大话西游</span></p>
          <p>实收金额：<span>98</span></p>
          <p>游戏角色：<span>法师</span></p>
          <p>归属渠道：<span>渠道098</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../../store'
import Search from '../public/search.vue'
export default {
  components: {
    'Search': Search
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      num: [],
      boolean: false
    }
  },
  created () {
    store.commit('UPDATE_CHANNEL_SELECT', {'num': 2})
    // console.log(this.num.include(0))
  },
  methods: {
    changeNum (num) {
      let self = this
      if (self.isNum(num)) {
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
.list{
  background-color: #fff;
  &_li{
    height: 1.44rem;
    padding: 0 0.3rem;
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
          color: #FF3D59;
          font-size: 0.24rem;
        }
      }
      p:nth-child(2){
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
      a{
        display: inline-block;
        width: 1.1rem;
        height: 0.6rem;
        color: #fff;
        font-size: 0.26rem;
        text-align: center;
        line-height: 0.6rem;
        background-color: #67C23A;
        border-radius: 0.05rem;
      }
      img{
        position: absolute;
        width: 0.23rem;
        height: 0.12rem;
        right: 0;
        bottom: 0.11rem;
      }
    }
  }
}
.detail{
  padding: 0 0.3rem;
  display: flex;
  margin-bottom: 0.16rem;
  div{
    flex: 1;
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
}
</style>
