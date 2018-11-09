<template>
  <div class="home">
    <div class="head">
      <div class="head_logo"></div>
      <div class="head_btn"><a class="btn" href="javascript:;">退出</a></div>
    </div>
    <div class="total">
      <div class="total_div">
        <p class="total_div__p1">2299</p>
        <p class="total_div__p2">今日注册</p>
      </div>
      <div class="total_div">
        <p class="total_div__p1">1478</p>
        <p class="total_div__p2">今日活跃</p>
      </div>
      <div class="total_div">
        <p class="total_div__p1">4324</p>
        <p class="total_div__p2">今日流水</p>
      </div>
    </div>
    <div class="chartList">
      <div class="chartList_box">
        <Echarts v-if="timeList.length > 0" :className="name1" :timeList="timeList" :dataList="dataList1" :text="text1"/>
        <Echarts v-if="timeList.length > 0" :className="name2" :timeList="timeList" :dataList="dataList2" :text="text2"/>
        <Echarts v-if="timeList.length > 0" :className="name3" :timeList="timeList" :dataList="dataList3" :text="text3"/>
        <Echarts v-if="timeList.length > 0" :className="name4" :timeList="timeList" :dataList="dataList4" :text="text4"/>
      </div>
    </div>
    <div class="menu">
      <div class="menu_div" @click="toUrl('/game')"><div><img src="../../assets/images/gl_youxi.png" alt=""></div><span>游戏管理</span></div>
      <div class="menu_div" @click="toUrl('/player')"><div><img src="../../assets/images/gl_wanjia.png" alt=""></div><span>玩家管理</span></div>
      <div class="menu_div" @click="toUrl('/channel')"><div><img src="../../assets/images/gl_qudao.png" alt=""></div><span>渠道管理</span></div>
      <div class="menu_div" @click="toUrl('/data')"><div><img src="../../assets/images/gl_shuju.png" alt=""></div><span>数据管理</span></div>
      <div class="menu_div" @click="toUrl('/financial')"><div><img src="../../assets/images/gl_caiwu.png" alt=""></div><span>财务中心</span></div>
      <div class="menu_div" @click="toUrl('/gift')"><div><img src="../../assets/images/gl_gift.png" alt=""></div><span>礼包管理</span></div>
      <div class="menu_div" @click="toUrl('/openservice')"><div><img src="../../assets/images/gl_open.png" alt=""></div><span>开服管理</span></div>
      <div class="menu_div" @click="toUrl('/security')"><div><img src="../../assets/images/gl_anquan.png" alt=""></div><span>安全设置</span></div>
    </div>
  </div>
</template>

<script>
import echarts from '../public/echarts.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    'Echarts': echarts
  },
  computed: {
    ...mapGetters([
      'timeList',
      'dataList1',
      'dataList2',
      'dataList3',
      'dataList4'
    ])
  },
  watch: {

  },
  data () {
    return {
      name1: 'mychart1',
      name2: 'mychart2',
      name3: 'mychart3',
      name4: 'mychart4',
      text1: '注册用户',
      text2: '付费用户',
      text3: '活跃用户',
      text4: '充值用户'
    }
  },
  created () {
  },
  methods: {
    toUrl (url) {
      this.$router.push({path: url})
    }
  },
  mounted () {
    this.$store.dispatch('weekPeople', {userId: '123413'})
  }
}
</script>

<style lang="scss" scoped>
.home{
  background: url('../../assets/images/huosdk_tg_bg_005.png') no-repeat left top;
  background-size: 100% auto;
  background-color: #fff;
  height: 100%;
  padding:0 0.19rem;
  padding-top: 0.37rem;
  overflow-x: hidden;
}
.head{
  height: 0.79rem;
  display: flex;

  &_logo{
    width: 2.4rem;
    height: 0.79rem;
    background: url('../../assets/images/gl_logo.png') no-repeat left top;
    background-size: 100% 100%;
  }
  &_btn{
    flex: 1;
    position: relative;
    .btn{
      display: block;
      width: 1.2rem;
      height: 0.55rem;
      border-radius: 0.55rem;
      font-size: 0.26rem;
      color: #333;
      text-align: center;
      line-height: 0.55rem;
      background-color: #fff;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
.total{
  margin-top: 0.36rem;
  width: 100%;
  height: 1.66rem;
  padding: 0.41rem 0 0.36rem 0;
  box-shadow:9px 0px 21px rgba(37,159,247,0.19);
  background-color: #fff;
  border-radius: 0.2rem;
  display: flex;
  &_div{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
      text-align: center;
    }
    &__p1{
      font-size: 0.54rem;
      color: #017FFF;
      font-weight: bold;
    }
    &__p2{
      font-size: 0.24rem;
      color: #888888;
    }
  }
}
.menu{
  height: 4.62rem;
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  &_div{
    width: 25%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
      width: 0.82rem;
      height: 0.82rem;
      border-radius: 0.33rem;
      position: relative;
      img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    span{
      margin-top: 0.24rem;
      font-size: 0.24rem;
      color: #565656;
    }
  }
  &_div:nth-child(1){
    div{
      background:linear-gradient(-90deg,rgba(36,163,255,1),rgba(125,201,255,1));
    }
  }
  &_div:nth-child(2){
    div{
      background:linear-gradient(-90deg,rgba(255,146,36,1),rgba(255,206,116,1));
    }
  }
  &_div:nth-child(3){
    div{
      background:linear-gradient(-90deg,rgba(177,112,251,1),rgba(204,171,253,1));
    }
  }
  &_div:nth-child(4){
    div{
      background:linear-gradient(-90deg,rgba(255,101,123,1),rgba(253,149,169,1));
    }
  }
  &_div:nth-child(5){
    div{
      background:linear-gradient(-90deg,rgba(33,224,135,1),rgba(149,239,198,1));
    }
  }
  &_div:nth-child(6){
    div{
      background:linear-gradient(-90deg,rgba(255,92,204,1),rgba(255,150,224,1));
    }
  }
  &_div:nth-child(7){
    div{
      background:linear-gradient(-90deg,rgba(36,163,255,1),rgba(125,201,255,1));
    }
  }
  &_div:nth-child(8){
    div{
      background:linear-gradient(-90deg,rgba(152,155,166,1),rgba(198,200,207,1));
    }
  }
}
.chartList{
  width: 100%;
  overflow-y: hidden;
  padding-top: 0.4rem;
  &_box{
    width: 1250px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
