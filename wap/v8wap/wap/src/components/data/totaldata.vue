<template>
    <div class="totalData">
      <Search :channelStatus="channelStatus" :channelList="channelList" :time="time"/>
      <div class="totalData_head">
        <div class="totalData_head__div1">
          <p>汇总</p>
          <p>发放数量： 1800&nbsp;&nbsp;&nbsp;支付金额：￥52441</p>
        </div>
        <div class="totalData_head__div2">
          <img src="../../assets/images/huosdk_tg_rili.png" alt="">
        </div>
      </div>
      <div class="totalDataList" >
        <div class="totalDataList_div1">
          <div class="totalDataList_div1__name">
            <p>渠道01</p>
            <p>06-01 15:30</p>
          </div>
          <div class="totalDataList_div1__account">
            <p>新增账号数：<span>285</span></p>
            <p>总付费额：<span>120,234</span></p>
          </div>
          <div class="totalDataList_div1__pay">
            <p>新用户付费率：<span>0.56%</span></p>
            <p>总付费人数：<span>1,234</span></p>
            <p><img v-if="flag !== 1" @click.stop="changeFlag($event, 1)" src="../../assets/images/huosdk_tg_down_003.png" alt=""><img @click.stop="changeFlag($event, 1)" v-else src="../../assets/images/huosdk_tg_up_003.png" alt=""></p>
          </div>
        </div>
        <div class="totalDataList_div2" v-if="flag === 1">
          <div class="totalDataList_div2__account">
            <p>活跃用户数：<span>285</span></p>
            <p>新用户付费数：<span>120,234</span></p>
          </div>
          <div class="totalDataList_div2__account">
            <p>新用户充值额：<span>285</span></p>
            <p>新增付费用户：<span>120,234</span></p>
          </div>
          <div class="totalDataList_div2__account">
            <p>活跃付费率：<span>0.5%</span></p>
            <p>ARPPU：<span>0</span></p>
            <p>APRU：<span>0</span></p>
          </div>
        </div>
      </div>

      <div class="totalDataList" >
        <div class="totalDataList_div1">
          <div class="totalDataList_div1__name">
            <p>渠道02</p>
            <p>06-01 15:30</p>
          </div>
          <div class="totalDataList_div1__account">
            <p>新增账号数：<span>285</span></p>
            <p>总付费额：<span>120,234</span></p>
          </div>
          <div class="totalDataList_div1__pay">
            <p>新用户付费率：<span>0.56%</span></p>
            <p>总付费人数：<span>1,234</span></p>
            <p><img v-if="flag !== 2" @click.stop="changeFlag($event, 2)" src="../../assets/images/huosdk_tg_down_003.png" alt=""><img @click.stop="changeFlag($event, 2)" v-else src="../../assets/images/huosdk_tg_up_003.png" alt=""></p>
          </div>
        </div>
        <div class="totalDataList_div2" v-if="flag === 2">
          <div class="totalDataList_div2__account">
            <p>活跃用户数：<span>285</span></p>
            <p>新用户付费数：<span>120,234</span></p>
          </div>
          <div class="totalDataList_div2__account">
            <p>新用户充值额：<span>285</span></p>
            <p>新增付费用户：<span>120,234</span></p>
          </div>
          <div class="totalDataList_div2__account">
            <p>活跃付费率：<span>0.5%</span></p>
            <p>ARPPU：<span>0</span></p>
            <p>APRU：<span>0</span></p>
          </div>
        </div>
      </div>
      <div class="totalDataList" >
        <div class="totalDataList_div1">
          <div class="totalDataList_div1__name">
            <p>渠道03</p>
            <p>06-01 15:30</p>
          </div>
          <div class="totalDataList_div1__account">
            <p>新增账号数：<span>285</span></p>
            <p>总付费额：<span>120,234</span></p>
          </div>
          <div class="totalDataList_div1__pay">
            <p>新用户付费率：<span>0.56%</span></p>
            <p>总付费人数：<span>1,234</span></p>
            <p><img v-if="flag !== 3" @click.stop="changeFlag($event, 3)" src="../../assets/images/huosdk_tg_down_003.png" alt=""><img @click.stop="changeFlag($event, 3)" v-else src="../../assets/images/huosdk_tg_up_003.png" alt=""></p>
          </div>
        </div>
        <div class="totalDataList_div2" v-if="flag === 3">
          <div class="totalDataList_div2__account">
            <p>活跃用户数：<span>285</span></p>
            <p>新用户付费数：<span>120,234</span></p>
          </div>
          <div class="totalDataList_div2__account">
            <p>新用户充值额：<span>285</span></p>
            <p>新增付费用户：<span>120,234</span></p>
          </div>
          <div class="totalDataList_div2__account">
            <p>活跃付费率：<span>0.5%</span></p>
            <p>ARPPU：<span>0</span></p>
            <p>APRU：<span>0</span></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import search from '../public/search.vue'
export default {
  components: {
    'Search': search
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      flag: 0,
      channelStatus: true,
      channelList: ['360', '九游', '渠道一', '渠道2', '渠道一', '渠道2', '渠道一', '渠道2'],
      time: true
    }
  },
  created () {
  },
  methods: {
    changeFlag (event, num) {
      if (this.flag === num) {
        this.flag = 0
      } else {
        this.flag = num
      }
    },
    toDetail () {
      this.$router.push({path: '/totaldatadetail'})
    }
  }
}
</script>

<style lang="scss" scoped>

.totalData_head{
  height: 1rem;
  padding: 0 0.3rem;
  display: flex;
  background-color: #F5F5F9;
  &__div1{
    flex: 1;
    p:nth-child(1){
      font-size: 0.28rem;
      color: #333;
      line-height: 0.5rem;
    }
    p:nth-child(2){
      font-size: 0.24rem;
      line-height: 0.5rem;
      color: #999;
    }
  }
  &__div2{
    width: 0.45rem;
    position: relative;
    img{
      width: 0.35rem;
      height: 0.34rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
}
.totalDataList{
  background-color: #fff;
  &_div2, &_div1{
    padding: 0.25rem 0.3rem;
    border-bottom: 1px solid #EEEEEE;
    &__name{
      display: flex;
      justify-content: space-between;
      p:nth-child(1){
        font-size: 0.3rem;
        color: #000;
      }
      p:nth-child(2){
        font-size: 0.22rem;
        color: #999;
      }
    }
    &__pay, &__account{
      display: flex;
      padding-top: 0.25rem;
      P:nth-child(1){
        width: 2.89rem;
        font-size: 0.24rem;
        color: #888;
        span{
          color: #FF3D59;
        }
      }
      P:nth-child(2){
        width: 2.89rem;
        font-size: 0.24rem;
        color: #888;
        span{
          color: #FF3D59;
        }
      }
      P:nth-child(3){
        flex: 1;
        position: relative;
        img{
          width: 0.23rem;
          height: 0.12rem;
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
  &_div2{
    border: none;
    margin-bottom: 0.16rem;
    &__account{
      p{
        color: #99A9BF !important;
        span{
          color: #555 !important;
        }
      }
      p:nth-child(3){
        font-size: 0.24rem;
      }
    }
  }
}
</style>
