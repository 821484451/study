<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <div class="dataHead">
        <router-link to="/player/totaldata/0">
          <img src="../../assets/images/huosdk_tg_shuju.png" alt="">
          <p>统计报表</p>
        </router-link>
        <router-link to="/player/playerlist/1">
          <img src="../../assets/images/huosdk_tg_player.png" alt="">
          <p>玩家列表</p>
        </router-link>
        <router-link to="/player/chargelist/2">
          <img src="../../assets/images/huosdk_tg_chongzhi.png" alt="">
          <p>充值列表</p>
        </router-link>
        <router-link to="/player/rolelist/3">
          <img src="../../assets/images/huosdk_tg_juese.png" alt="">
          <p>角色列表</p>
        </router-link>
      </div>
      <div class="total">
        <h4>
          <span>总流水</span>
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
        <div class="weekTotal">
          <div>
            <p>{{monthWater}}</p>
            <p>本月流水（万）</p>
          </div>
          <div>
            <p>{{todayWater}}</p>
            <p>今日流水</p>
          </div>
        </div>
        <MyEchart :widthLength="width"/>
      </div>
    </div>
    <Footer :flag="flag"/>
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
      'weekDataWater',
      'dayDataWater',
      'monthWater',
      'todayWater',
      'monthDetail',
      'timeList',
      'detail'
    ]),
    month: () => {
      let date = new Date()
      return date.getMonth() + 1
    }
  },
  data () {
    return {
      left: 0,
      right: 0,
      text: '数据中心',
      flag: 'data',
      width: '1500px',
      curMonth: '',
      weekNum: 0
    }
  },
  created () {
    this.curMonth = this.month
  },
  watch: {
    curMonth (curVal, oldVal) {
      this.$store.dispatch('monthWater', {month: curVal})
    }
  },
  methods: {

  },
  mounted () {
    store.dispatch('monthWater')
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #F5F5F9;
  padding-bottom: 1.06rem;
}
.dataHead{
  height: 2rem;
  display: flex;
  background-color: #fff;
  a{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
    }
    p{
      text-align: center;
      font-size: 0.24rem;
      color: #474747;
      padding-top: 0.24rem;
    }
  }
}
.total{
  background-color: #fff;
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
      select{
        width: 100%;
        height: 100%;
        border: none;
        background-color: #F5F5F9;
        outline: none;
        -webkit-appearance: none;
      }
    }
    span:nth-child(1){
      font-size: 0.3rem;
    }
    span:nth-child(2){
      font-size: 0.24rem;
      color: #888;
      vertical-align: middle;
    }
    img{
      width: 0.17rem;
      height: 0.1rem;
      vertical-align: middle;
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
</style>
