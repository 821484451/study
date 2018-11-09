<template>
  <div class="gameList">
    <Search :platform="platform" @searchKey="searchKey" @searchType="searchType"/>
    <ul class="gameList_ul">
      <li class="gameList_ul__li" >
        <div class="gameImg"><img src="../../assets/images/2.png" alt=""></div>
        <div class="gameDetail">
          <p class="gameDetail_p1">王者荣耀&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_android.png" /></p>
          <p class="gameDetail_p2">CP名称：火速</p>
          <p class="gameDetail_p3">游戏ID：123213</p>
        </div>
        <div class="gameBtn"><a class="recover" href="javascript:;">恢复</a></div>
      </li>
      <li class="proportion">
        <div>
          删除时间：2018-07-01 15:30
        </div>
      </li>
    </ul>
    <ul class="gameList_ul">
      <li class="gameList_ul__li" >
        <div class="gameImg"><img src="../../assets/images/2.png" alt=""></div>
        <div class="gameDetail">
          <p class="gameDetail_p1">王者荣耀&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_android.png" /></p>
          <p class="gameDetail_p2">CP名称：火速</p>
          <p class="gameDetail_p3">游戏ID：123213</p>
        </div>
        <div class="gameBtn"><a class="recover" href="javascript:;">恢复</a></div>
      </li>
      <li class="proportion">
        <div>
          删除时间：2018-07-01 15:30
        </div>
      </li>
    </ul>
    <ul class="gameList_ul">
      <li class="gameList_ul__li" >
        <div class="gameImg"><img src="../../assets/images/2.png" alt=""></div>
        <div class="gameDetail">
          <p class="gameDetail_p1">王者荣耀&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_android.png" /></p>
          <p class="gameDetail_p2">CP名称：火速</p>
          <p class="gameDetail_p3">游戏ID：123213</p>
        </div>
        <div class="gameBtn"><a class="recover" href="javascript:;">恢复</a></div>
      </li>
      <li class="proportion">
        <div>
          删除时间：2018-07-01 15:30
        </div>
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
    ])
  },
  watch: {

  },
  data () {
    return {
      platform: true,
      sw: true
    }
  },
  created () {
    store.commit('UPDATE_SELECT_NUM', {'num': 2})
  },
  methods: {
    popAdd (text, id) {

    },
    searchKey () {

    },
    searchType () {

    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.gameList{
  .gameList_ul{
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
.proportion{
  height: 0.9rem;
  padding: 0 0.3rem;
  display: flex;
  div:nth-child(1){
    line-height: 0.9rem;
    font-size: 0.26rem;
    color: #7C7C7C;
    span{
      color: #FF3636;
    }
  }
}
.recover{
  background-color: #909399 !important;
  width: 1.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.26rem;
  text-align: center;
  border-radius: 0.05rem;
}
</style>
