<template>
  <div class="content">
    <Search/>
    <ul class="list">
      <li class="list_li">
        <div class="list_li__div1">
          <p>渠道001&nbsp;&nbsp;<span>ID: 12313133</span></p>
          <p>2018-01-01 11:25</p>
        </div>
        <div class="list_li__div2">
          <p>20.00</p>
          <p>金额</p>
          <img v-if="!isNum(1)" @click="changeNum(1)" src="../../assets/images/huosdk_tg_down_003.png" alt="">
          <img v-else @click="changeNum(1)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
        </div>
      </li>
      <li class="detail" v-if="isNum(1)">
        <div class="detail_div1">
          <p>开户名：<span>王思聪</span></p>
          <p>联系电话：<span>13137543929</span></p>
          <p>开户银行：<span>建设银行</span></p>
          <p>玩家首充：<span>60</span></p>
        </div>
        <div class="detail_div2">
          <p>提现账号：<span>15137543929</span></p>
          <p>联系QQ：<span>25556666</span></p>
          <p>开户支行：<span>棠下支行</span></p>
          <p>玩家续充：<span>510</span></p>
        </div>
      </li>
      <li class="status">
        <div class="status_div1">状态：<span>待运营审核</span></div>
        <div class="status_div2">
          <a href="javascript:;">不通过</a>
          <a href="javascript:;">通过</a>
        </div>
      </li>
    </ul>
    <ul class="list">
      <li class="list_li">
        <div class="list_li__div1">
          <p>渠道001&nbsp;&nbsp;<span>ID: 12313133</span></p>
          <p>2018-01-01 11:25</p>
        </div>
        <div class="list_li__div2">
          <p>20.00</p>
          <p>金额</p>
          <img v-if="!isNum(2)" @click="changeNum(2)" src="../../assets/images/huosdk_tg_down_003.png" alt="">
          <img v-else @click="changeNum(2)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
        </div>
      </li>
      <li class="detail" v-if="isNum(2)">
        <div class="detail_div1">
          <p>开户名：<span>王思聪</span></p>
          <p>联系电话：<span>13137543929</span></p>
          <p>开户银行：<span>建设银行</span></p>
          <p>玩家首充：<span>60</span></p>
        </div>
        <div class="detail_div2">
          <p>提现账号：<span>15137543929</span></p>
          <p>联系QQ：<span>25556666</span></p>
          <p>开户支行：<span>棠下支行</span></p>
          <p>玩家续充：<span>510</span></p>
        </div>
      </li>
      <li class="status">
        <div class="status_div1">状态：<span>待运营审核</span></div>
        <div class="status_div2">
          <a href="javascript:;">不通过</a>
          <a href="javascript:;">通过</a>
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
      num: []
    }
  },
  created () {
    store.commit('UPDATE_CHANNEL_SELECT', {'num': 1})
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
.list{
  background-color: #fff;
  margin-bottom: 0.16rem;
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
          color: #7C7C7C;
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
.status{
  height: 1rem;
  padding: 0 0.3rem;
  display: flex;
  &_div1{
    flex: 1;
    display: flex;
    align-items: center;
    color: #7C7C7C;
    font-size: 0.26rem;
    span{
      color: #FF3636;
    }
  }
  &_div2{
    width: 2.6rem;
    display: flex;
    align-items: center;
    a{
      display: inline-block;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
      font-size: 0.26rem;
      color: #fff;
      border-radius: 0.05rem;
    }
    a:nth-child(1){
      background-color: #67C23A;
      width: 1.3rem;
    }
    a:nth-child(2){
      width: 1.1rem;
      background-color: #409FFF;
      margin-left: 0.2rem;
    }
  }
}
</style>
