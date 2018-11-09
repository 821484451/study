<template>
    <div class="totalData">
      <Search :channelStatus="channelStatus" :channelList="channelList" :time="time" @searchKey="searchKey" @searchType="searchType"/>
      <div class="totalDataList" v-for="(item, index) in totalData" :key="index">
        <div class="totalDataList_div1">
          <div class="totalDataList_div1__name">
            <p>{{item.agent_name}}</p>
            <p>{{item.date}}</p>
          </div>
          <div class="totalDataList_div1__pay">
            <p>充值游戏：<span>{{item.gamename}}</span></p>
            <p>充值金额：<span>{{item.charge_amount}}</span></p>
            <p><img v-if="flag !== 1" @click.stop="changeFlag($event, 1)" src="../../assets/images/huosdk_tg_down_003.png" alt=""><img @click.stop="changeFlag($event, 1)" v-else src="../../assets/images/huosdk_tg_up_003.png" alt=""></p>
          </div>
        </div>
        <div class="totalDataList_div2" v-if="flag === 1">
          <div class="totalDataList_div2__account">
            <p>新增用户：<span>{{item.new_user_cnt}}</span></p>
            <p>活跃用户：<span>{{item.active_user_cnt}}</span></p>
          </div>
          <div class="totalDataList_div2__account">
            <p>充值人数：<span>{{item.pay_user_cnt}}</span></p>
            <p>付费率：<span>{{item.pay_rate}}</span></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import search from '../public/search.vue'
import store from '../../store'
import { mapGetters } from 'vuex'
export default {
  components: {
    'Search': search
  },
  computed: {
    ...mapGetters([
      'totalData',
      'channelList',
      'searchKeyWords',
      'searchTime1',
      'searchTime2',
      'searchChannelName'
    ])
  },
  watch: {

  },
  data () {
    return {
      flag: 0,
      channelStatus: true,
      time: true
    }
  },
  created () {
    store.dispatch('totalData')
    store.dispatch('channelList')
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
    },
    searchKey () {
      store.dispatch('totalData', {game_name: this.searchKeyWords})
    },
    searchType () {
      store.dispatch('totalData', {
        sub_agent_name: this.searchChannelName,
        start_time: this.searchTime1,
        end_time: this.searchTime2
      })
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
