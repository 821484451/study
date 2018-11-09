<template>
  <div class="chargeList">
    <Search
    :channelStatus="channelStatus"
    :channelList="channelList"
    :time="time"
    :playerAccount="playerAccount"
    @searchKey="searchKey"
    @searchType="searchType"
    />
    <div class="chargeList_head">
      <div class="chargeList_head__div1">
        <p>汇总</p>
        <p>发放数量： 1800&nbsp;&nbsp;&nbsp;支付金额：￥52441</p>
      </div>
      <div class="chargeList_head__div2">
        <img src="../../assets/images/huosdk_tg_rili.png" alt="">
      </div>
    </div>
    <ul class="chargeList_list">
      <li class="chargeList_list__li list" v-for="(item, index) in playerRoleList" :key="index"  @click="toDetail('/rolelistdetail', index)">
        <div class="list_div1">
          <p class="list_div1__p1">{{item.username}}</p>
          <p class="list_div1__p2">渠道：<span>{{item.user_nicename}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;等级：<span>{{item.level}}</span></p>
          <p class="list_div1__p3">{{item.create_time}}</p>
        </div>
        <div class="list_div2">
          <p class="list_div2__p1">{{item.money}}</p>
          <p class="list_div2__p2">充值金额</p>
        </div>
      </li>
    </ul>
    <p class="loadMoreTip" v-if="! loadStatus"><span>我是有底线的</span><i></i></p>
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
      'playerRoleList',
      'channelCount',
      'channelList',
      'searchTime1',
      'searchTime2',
      'searchPlayerAccount',
      'searchKeyWords',
      'playerRoleListCount',
      'sw'
    ])
  },
  watch: {
    channelCount (curVal, oldVal) {
      if (curVal) {
        store.dispatch('channelList', {offset: curVal})
      }
    },
    playerRoleList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.playerListCount) {
        store.commit('UPDATE_SW', {sw: true})
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
    }
  },
  data () {
    return {
      channelStatus: true,
      time: true,
      playerAccount: true,
      loadStatus: true
    }
  },
  created () {
    store.commit('UPDATE_SW', {sw: true})
    store.dispatch('playerRoleList')
    if (this.channelCount) {
      store.dispatch('channelList', {offset: this.channelCount})
    } else {
      store.dispatch('channelList')
    }
  },
  methods: {
    toDetail (url, index) {
      this.$router.push({path: url, query: {num: index}})
    },
    searchKey () {
      store.dispatch('playerRoleList', {game_name: this.searchKeyWords})
    },
    searchType () {
      store.dispatch('playerRoleList', {
        sub_agent_name: this.searchChannelName,
        start_time: this.searchTime1,
        end_time: this.searchTime2,
        mem_name: this.searchPlayerAccount
      })
    }
  },
  mounted () {
    let _self = this
    let dom1 = document.querySelector('.main')
    let dom2 = document.querySelector('.chargeList')
    dom1.addEventListener('scroll', function () {
      if (dom1.scrollTop + dom1.offsetHeight >= dom2.offsetHeight) {
        if (_self.sw === true) {
          store.commit('UPDATE_SW', {sw: true})
          if (_self.playerRoleListCount > _self.playerRoleList.length) {
            store.dispatch('playerRoleList', {page: Math.ceil(_self.playerRoleList.length / 20) + 1, offset: 20})
          }
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.chargeList_head{
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
.chargeList_list{
  padding: 0 0.3rem;
  background-color: #fff;
  &__li{
    display: flex;
    justify-content: space-between;
    padding: 0.24rem 0;
  }
}
.list{
  border-bottom: 1px solid #EEEEEE;
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &_div1{
    p{
      text-align: left;
      width: 100%;
    }
    &__p1{
      font-size: 0.3rem;
      color: #000;
    }
    &__p2{
      font-size: 0.24rem;
      color: #333;
      padding-top: 0.23rem;
      span{
        color: #E41515;
      }
    }
    &__p3{
      font-size: 0.24rem;
      color: #7C7C7C;
      padding-top: 0.23rem;
    }
  }

  &_div2{
    position: relative;
    &__p1{
      font-size: 0.36rem;
      color: #FF3D59;
      font-weight: bold;
    }
    &__p2{
      font-size: 0.2rem;
      color: #888;
      text-align: center;
    }
    i{
      width: 1px;
      height: 0.5rem;
      background-color: #EEE;
      position: absolute;
      left: -0.5rem;
      top: 50%;
      margin-top: -0.25rem;

    }
  }

}
</style>
