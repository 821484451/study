<template>
  <div class="home">
    <div class="main">
      <div class="head">
        <div class="headImg">
          <router-link to="/account">
            <img src="../../assets/images/1.png" alt="">
            &nbsp;&nbsp;
            <span>{{userInfo.nicename}}</span>
          </router-link>
        </div>
        <div class="headBtn">
          <router-link to="/player/playerlist/1">代充</router-link>
        </div>
        <div class="money">
          <div>
            <p>{{accountMoney}}</p>
            <p>账户余额</p>
            <p><a href="javascript:;" @click="toFicancial('cash')">提现</a></p>
          </div>
          <div>
            <p>{{ptbMoney}}</p>
            <p>平台币余额</p>
            <p><a href="javascript:;" @click="toFicancial('charge')">充值</a></p>
          </div>
          <div>
            <p>{{frozenMoney}}</p>
            <p>账户冻结金额</p>
            <p></p>
          </div>
        </div>
      </div>
      <div class="total">
        <h4>
          <span>总流水</span>
          <span>
            <select name="weekNum" v-model="weekNum" id="month">
              <option value="0">本周</option>
              <option value="1">前一周</option>
              <option value="2">前两周</option>
              <option value="3">前三周</option>
              <option value="4">前四周</option>
            </select>
          </span>
        </h4>
        <div class="weekTotal">
          <div>
            <p>{{weekDataWater}}</p>
            <p>本周流水（万）</p>
          </div>
          <div>
            <p>{{dayDataWater}}</p>
            <p>今日流水</p>
          </div>
        </div>
        <MyEchart />
      </div>
    </div>
    <div id="test"></div>
    <Footer :flag="flag"/>
  </div>
</template>

<script>
import store from '../../store'
import { mapGetters } from 'vuex'
import header from '../public/header.vue'
import footer from '../public/tab.vue'
import myEchart from '../public/echarts.vue'
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
      'weekDataWater',
      'dayDataWater',
      'userInfo'
    ])
  },
  watch: {
    weekNum (curVal, oldVal) {
      store.dispatch('weekWater', {week: curVal})
    }
  },
  data () {
    return {
      left: 0,
      right: 0,
      text: '首页',
      flag: 'home',
      weekNum: 0
    }
  },
  beforeCreate () {
    store.dispatch('homeInit')
    store.dispatch('weekWater')
  },
  created () {
    this.curMonth = this.month
    store.dispatch('getUserInfo')
  },
  methods: {
    toFicancial (param) {
      if (param === 'cash') {
        this.$router.push({name: 'Financial', path: '/financial', params: { cash: true, charge: false }})
      } else if (param === 'charge') {
        this.$router.push({name: 'Financial', path: '/financial', params: { cash: false, charge: true }})
      }
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.home{
  padding-bottom: 1.06rem;
  overflow-x: hidden;

}
.main{
  background: url('../../assets/images/huosdk_tg_bg_005.png') no-repeat left top;
  background-size: 100% auto;
  background-color: #FFFFFF;
  overflow-x: auto;
}
.head{
  height: 1.29rem;
  padding: 0 0.18rem;
  padding-top: 0.41rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  .headImg{
    height: 0.88rem;
    font-size: 0.3rem;
    color: #fff;
    line-height: 0.88rem;
    a{
      color: #fff;
    }
    img{
      width: 0.88rem;
      height: 0.88rem;
      border-radius: 50%;
      vertical-align: middle;
    }
    span{
      display:inline-block;
      height: 0.88rem;
      line-height: 0.88rem;
      vertical-align: middle;
    }
  }
  .headBtn{
    width: 1.8rem;
    height: 0.88rem;
    position: relative;
    a{
      display: block;
      width: 1.2rem;
      height: 0.55rem;
      line-height: 0.55rem;
      font-size: 0.26rem;
      color: #333;
      background-color: #fff;
      border-radius: 0.55rem;
      text-align: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
}
.money{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 6.82rem;
  border-radius: 0.2rem;
  background-color: #fff;
  display: flex;
  top: 1.53rem;
  box-shadow:9px 0px 21px rgba(37,159,247,0.19);
  div{
    flex: 1;
    p{
      text-align: center;
      position: relative;
    }
    p:nth-child(1){
      font-size: 0.54rem;
      color: #017FFF;
      padding-top: 0.41rem;
      font-weight: bold;
    }
    p:nth-child(2){
      font-size: 0.24rem;
      color: #888888;

    }
    p:nth-child(3){
      font-size: 0.24rem;
      padding-top: 0.21rem;
      height: 0.92rem;
      a{
        display: block;
        width: 1.2rem;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        border-radius: 0.5rem;
        background-color: #E7B10E;
        color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }
}
.total{
  padding-top: 3rem;
  h4{
    height: 0.9rem;
    display: flex;
    justify-content:space-between;
    padding: 0 0.31rem;
    background-color: #F5F5F9;
    span{
      display: block;
      height: 0.9rem;
      line-height: 0.9rem;
    }
    span:nth-child(1){
      font-size: 0.3rem;
    }
    span:nth-child(2){
      font-size: 0;
      color: #888;
      vertical-align: middle;
    }
    img{
      width: 0.17rem;
      height: 0.1rem;
      vertical-align: middle;
    }
    #month{
      height: 100%;
      background-color: #F5F5F9;
      border: none;
      outline: none;
      font-size: 0.24rem;
      -webkit-appearance: none;
    }
  }
  .weekTotal{
    height: 1.86rem;
    display: flex;
    div{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p{
        text-align: center;
      }
      p:nth-child(1){
        font-size: 0.56rem;
        color: #FC9000;
      }
      p:nth-child(2){
        font-size: 0.22rem;
        color: #888;
      }
    }
    div:nth-child(2){
      p:nth-child(1){
        color: #65C15C;
      }
    }
  }
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
}
.inputBox{
  height: 0.75rem;
  line-height: 0.75rem;
  display: flex;
  border: 1px solid #EEEEEE;
  margin-bottom: 0.15rem;
  &_name{
    width: 1.56rem;
    height: 100%;
    text-align: center;
    line-height: 0.75rem;
    font-size: 0.26rem;
  }
  &_input{
    height: 100%;
    border: none;
  }
}
</style>
