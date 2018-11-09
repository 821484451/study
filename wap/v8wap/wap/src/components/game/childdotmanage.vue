<template>
  <div class="myGame">
    <Search :platform="platform" @searchKey="searchKey" @searchType="searchType"/>
    <template v-for="(item, index) in childDotManageMyGameList" >
      <ul class="myGame_ul" :key="index">
        <li class="myGame_ul__li">
          <div class="gameImg"><img :src="item.icon" alt=""></div>
          <div class="gameDetail">
            <p class="gameDetail_p1">
              {{item.gamename}}&nbsp;&nbsp;
              <img v-if="item.classify_name === '安卓'" src="../../assets/images/huosdk_tg_android.png" >
              <img v-else-if="item.classify_name === '苹果'" src="../../assets/images/huosdk_tg_ios.png" >
              <img v-else src="../../assets/images/huosdk_tg_h5.png" >
            </p>
            <p class="gameDetail_p2">游戏ID：{{item.game_id}}</p>
            <p class="gameDetail_p3"><span class="discounts">{{item.agent_name}}</span></p>
          </div>
          <div class="gameBtn"><a href="javascript:;" @click="popBox(item.agent_rate, item.first_mem_rate, item.mem_rate, item.ag_id)">修改</a></div>
        </li>
        <li class="proportion">
          <div>
            <p>折扣：<span>{{1 - item.agent_rebate * 1}}折</span></p>
            <p>发币折扣：
              <span>{{item.agent_rate}}折</span>
            </p>
          </div>
          <div>
            <p>玩家首充：<span>{{item.first_mem_rate}}</span></p>
            <p>玩家续充：<span>{{item.mem_rate}}</span></p>
          </div>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
import search from '../public/search.vue'
export default {
  components: {
    'Search': search
  },
  computed: {
    ...mapGetters([
      'popChildStatus',
      'childDotManageMyGameList',
      'searchKeyWords',
      'searchClassify'
    ])
  },
  watch: {

  },
  data () {
    return {
      down: 0,
      platform: true
    }
  },
  created () {
    store.dispatch('childDotManageMyGame')
  },
  methods: {
    popBox (arg1, arg2, arg3, arg4) {
      store.commit('UPDATE_CHANNEL_DISCOUNT', {channelDiscount: arg1})
      store.commit('UPDATE_CHILD_PLAYER_FIRST', {childPlayerFirstPay: arg2})
      store.commit('UPDATE_CHILD_PLAYER_CONTINUE', {childPlayerContinuePay: arg3})
      store.commit('UPDATE_CHANNEL_ID', {channelId: arg4})
      if (this.popChildStatus) {
        store.commit('UPDATE_POP_CHILD_STATUS', {'popChildStatus': false})
      } else {
        store.commit('UPDATE_POP_CHILD_STATUS', {'popChildStatus': true})
      }
    },
    downUp (num) {
      this.down = num
    },
    searchKey () {
      store.dispatch('childDotManageMyGame', {keywords: this.searchKeyWords})
    },
    searchType () {
      store.dispatch('childDotManageMyGame', {classify: this.searchClassify})
    }
  },
  mounted () {
    store.commit('UPDATE_SELECT_NUM', {'num': 3})
  }
}
</script>

<style lang="scss" scoped>
.myGame{
  .myGame_ul{
    margin-bottom: 0.16rem;
    background-color: #fff;
    &__li{
      padding: 0.35rem 0.3rem;
      display: flex;
      border-bottom: 1px solid #EEEEEE;
    }
  }
}
.gameImg{
  width: 1.62rem;
  height: 1.3rem;
  padding-right: 0.32rem;
  img{
    width: 1.3rem;
    height: 1.3rem;
  }
}
.gameDetail{
  flex: 1;
  &_p1{
    font-size:0.32rem;
    color: #333;
    img{
      width: 0.26rem;
      height: 0.3rem;
      vertical-align: middle;
    }
    span{
      font-size: 0.24rem;
      color:#FF3636;
    }
  }
  &_p2{
    font-size: 0.24rem;
    color: #777777;
    padding-top: 0.1rem;
  }
  &_p3{
    font-size: 0.24rem;
    color: #777777;
    padding-top: 0.1rem;
    .discounts{
      color:#FF3636;
    }
  }
}
.gameBtn{
  width: 1.7rem;
  position: relative;
  a{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    width: 1.1rem;
    height: 0.6rem;
    color: #fff;
    justify-content: center;
    align-items: center;
    font-size: 0.26rem;
    background-color: #67C23A;
    border-radius: 0.05rem;
  }
  .update{
    background-color: #409FFF;
    top:0;
    right: 0;
    top: auto;
    transform: translateY(0);
  }
  .storeCode, .cloneHttp{
    display: block;
    height: 0.54rem;
    line-height: 0.54rem;
    font-size: 0.22rem;
    color: #777;
    border: 1px solid #EEEEEE;
    background-color: #F7F7F7;
    position: absolute;
    top: auto;
    transform: translateY(0);
  }
  .storeCode{
    bottom: 0;
    left:0;
    width: 1.4rem;
  }
  .cloneHttp{
    right: 0;
    bottom: 0;
    width: 1.2rem;
  }
}
.proportion{
  padding: 0.26rem 0.3rem;
  div{
    display: flex;
    p{
      flex: 1;
      font-size: 0.24rem;
      color: #99A9BF;
      span{
        color: #333;
      }
      img{
        width: 0.18rem;
        height: 0.11rem;
      }
    }
  }
  div:nth-child(3), div:nth-child(2){
    padding-top: 0.3rem;
  }
}
</style>
