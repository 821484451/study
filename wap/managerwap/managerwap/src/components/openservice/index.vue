<template>
  <div class="home">
    <Header :left="left" :text="text"/>
    <Search/>
    <div class="main">
      <ul class="gameList_ul">
        <li class="gameList_ul__li" >
          <div class="gameImg"><img src="../../assets/images/2.png" alt=""></div>
          <div class="gameDetail">
            <p class="gameDetail_p1">王者荣耀&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_android.png" />&nbsp;&nbsp;<span>已开服</span></p>
            <p class="gameDetail_p2">王城32服</p>
            <p class="gameDetail_p3">开服时间：2018-01-09 15:10</p>
          </div>
          <div class="gameBtn"><a class="recover" href="javascript:;">编辑</a></div>
        </li>
        <li class="gameList_ul__li" >
          <div class="gameImg"><img src="../../assets/images/2.png" alt=""></div>
          <div class="gameDetail">
            <p class="gameDetail_p1">王者荣耀&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_android.png" />&nbsp;&nbsp;<span>已开服</span></p>
            <p class="gameDetail_p2">王城32服</p>
            <p class="gameDetail_p3">开服时间：2018-01-09 15:10</p>
          </div>
          <div class="gameBtn"><a class="recover" href="javascript:;">编辑</a></div>
        </li>
        <li class="gameList_ul__li" >
          <div class="gameImg"><img src="../../assets/images/2.png" alt=""></div>
          <div class="gameDetail">
            <p class="gameDetail_p1">王者荣耀&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_android.png" />&nbsp;&nbsp;<span>已开服</span></p>
            <p class="gameDetail_p2">王城32服</p>
            <p class="gameDetail_p3">开服时间：2018-01-09 15:10</p>
          </div>
          <div class="gameBtn"><a class="recover" href="javascript:;">编辑</a></div>
        </li>
        <li class="gameList_ul__li" >
          <div class="gameImg"><img src="../../assets/images/2.png" alt=""></div>
          <div class="gameDetail">
            <p class="gameDetail_p1">王者荣耀&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_android.png" />&nbsp;&nbsp;<span>已开服</span></p>
            <p class="gameDetail_p2">王城32服</p>
            <p class="gameDetail_p3">开服时间：2018-01-09 15:10</p>
          </div>
          <div class="gameBtn"><a class="recover" href="javascript:;">编辑</a></div>
        </li>
      </ul>
    </div>
     <div class="addBtn">
      <a href="javascript:;">
        <img src="../../assets/images/gl_add.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
import Header from '../public/header.vue'
import Search from '../public/search.vue'
export default {
  components: {
    'Header': Header,
    'Search': Search
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      left: 1,
      text: '开服列表'
    }
  },
  created () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    overflow-x: hidden;
    background-color: #f5f6ff;
  }
}

.gameList_ul{
  background-color: #fff;
  padding: 0 0.3rem;
  &__li{
    padding: 0.35rem 0;
    display: flex;
    border-bottom: 1px solid #EEEEEE;
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
.recover{
  background-color: #808695 !important;
  width: 1.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.26rem;
  text-align: center;
  border-radius: 0.05rem;
}
</style>
