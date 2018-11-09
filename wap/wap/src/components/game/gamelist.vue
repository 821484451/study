<template>
  <div class="gameList">
    <Search :platform="platform" @searchKey="searchKey" @searchType="searchType"/>
    <ul class="gameList_ul">
      <li class="gameList_ul__li" v-for="(item, index) in gameList" :key="index">
        <div class="gameImg"><img :src="item.icon" alt=""></div>
        <div class="gameDetail">
          <p class="gameDetail_p1">{{item.gamename}}&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_ios.png" v-if="item.classify_name === '苹果'" ><img src="../../assets/images/huosdk_tg_android.png" v-if="item.classify_name === '安卓'"> <span class="checking">{{item.promote_switch}}</span></p>
          <p class="gameDetail_p2">游戏ID：{{item.game_id}}</p>
          <p class="gameDetail_p3">折扣：<span class="discounts">{{item.agent_rate}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="returnMoney">玩家优惠：{{item.benefit_type}}</span></p>
        </div>
        <div class="gameBtn"><a href="javascript:;" @click="popAdd(item.gamename, item.game_id)">申请</a></div>
      </li>
    </ul>
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
      'addText',
      'popAddStatus',
      'gameList',
      'searchKeyWords',
      'searchClassify',
      'gameListCount'
    ])
  },
  watch: {
    gameList (curVal, oldVal) {

    }
  },
  data () {
    return {
      platform: true,
      sw: true
    }
  },
  created () {
    store.commit('UPDATE_SELECT_NUM', {'num': 0})
    store.dispatch('gameList')
  },
  methods: {
    popAdd (text, id) {
      if (this.popAddStatus) {
        store.commit('UPDATE_ADD_STATUS', {'popAddStatus': false, 'addText': ''})
      } else {
        store.commit('UPDATE_ADD_STATUS', {'popAddStatus': true, 'addText': text})
        store.commit('UPDATE_APPLY_GAME_ID', {'applyGameId': id})
      }
    },
    searchKey () {
      store.dispatch('gameList', {key: this.searchKeyWords})
    },
    searchType () {
      store.dispatch('gameList', {classify: this.searchClassify})
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.gameList{
  background-color: #fff;
  .gameList_ul{
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
  height: 1.3rem;
  position: relative;
  a{
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -0.3rem;
    display: flex;
    width: 1.1rem;
    height: 0.6rem;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 0.26rem;
    background-color: #67C23A;
    border-radius: 0.05rem;
  }
}

</style>
