<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <div class="dataHead">
        <router-link to="/player/totaldata/0">
          <img src="../../assets/images/huosdk_tg_shuju.png" alt="">
          <p>数据总览</p>
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
            <select name="weekNum" v-model="weekNum">
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
        <MyEchart/>
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
      'dayDataWater'
    ])
  },
  data () {
    return {
      left: 0,
      right: 0,
      text: '数据中心',
      flag: 'data',
      weekNum: 0
    }
  },
  created () {
  },
  watch: {
    weekNum (curVal, oldVal) {
      this.$store.dispatch('weekWater', {week: curVal})
    }
  },
  methods: {

  },
  mounted () {
    store.dispatch('weekWater')
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
