<template>
  <div class="gameList">
    <Search :platform="platform" @searchKey="searchKey" @searchType="searchType"/>
    <ul class="gameList_ul">
      <li class="gameList_ul__li" >
        <div class="gameImg"><img src="../../assets/images/1.png" alt=""></div>
        <div class="gameDetail">
          <p class="gameDetail_p1">王者荣耀&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_ios.png" ><span>接入中</span></p>
          <p class="gameDetail_p2">CP名称：火速</p>
          <p class="gameDetail_p3">游戏ID：123213</p>
        </div>
        <div class="gameBtn"><a href="javascript:;">下线</a></div>
      </li>
      <li class="proportion">
        <div>
          <a href="javascript:;" @click="cloneTip()">复制参数</a>
          <a href="javascript:;">切换设置</a>
          <a href="javascript:;">编辑</a>
          <a href="javascript:;">开启支付切换</a>
        </div>
      </li>
    </ul>
    <ul class="gameList_ul">
      <li class="gameList_ul__li" >
        <div class="gameImg"><img src="../../assets/images/3.png" alt=""></div>
        <div class="gameDetail">
          <p class="gameDetail_p1">王者荣耀&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_ios.png" ><span>下线</span></p>
          <p class="gameDetail_p2">CP名称：火速</p>
          <p class="gameDetail_p3">游戏ID：123213</p>
        </div>
        <div class="gameBtn"><a class="onLine" href="javascript:;">上线</a></div>
      </li>
      <li class="proportion">
        <div>
          <a href="javascript:;" @click="cloneTip()">复制参数</a>
          <a href="javascript:;">切换设置</a>
          <a href="javascript:;">编辑</a>
          <a href="javascript:;" class="close">开启支付切换</a>
        </div>
      </li>
    </ul>
    <div class="addBtn">
      <a href="javascript:;">
        <img src="../../assets/images/gl_add.png" alt="">
      </a>
    </div>
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
    store.commit('UPDATE_SELECT_NUM', {'num': 1})
  },
  methods: {
    popAdd (text, id) {

    },
    searchKey () {

    },
    searchType () {

    },
    cloneTip () {
      store.commit('UPDATE_TIP_MSG', {tipStatus: true, tipMsg: '复制成功'})
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
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    a{
      display: inline-block;
      line-height: 0.56rem;
      font-size: 0.24rem;
      background-color: #F6F6F8;
      text-align: center;
      border-radius: 0.03rem;
      border: 0.01rem solid #DEDEDE;
    }
    a:nth-child(2), a:nth-child(1){
      width: 1.5rem;
      color: #666666;
      right: 2.4rem;
    }
    a:nth-child(3){
      width: 1rem;
      color: #0F84F8;
      right: 1.2rem;
    }
    a:nth-child(4){
      width: 2rem;
      color: #FFF;
      right: 0;
      background-color: #19BE6B;
      border: none;
    }
  }

}
.close{
  background-color: #808695 !important;
}

</style>
