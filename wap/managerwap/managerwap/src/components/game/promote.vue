<template>
  <div class="home">
    <Header :left="left" :text="text"/>
    <Search/>
    <div class="main">
      <ul class="gameList">
        <li class="gameList_li">
          <div class="gameList_li__div1">
            <img src="../../assets/images/1.png" alt="">
          </div>
          <div class="gameList_li__div2">
            <p>三界独尊&nbsp;
              <img src="../../assets/images/huosdk_tg_android.png" alt="">
            </p>
            <p>
              折扣：0.6&nbsp;&nbsp;
              优惠类型：无优惠
            </p>
            <p>
              首充：0.4&nbsp;&nbsp;
              续充：0.8
            </p>
          </div>
          <div class="gameList_li__div3">
            <a href="javascript:;">下线</a>
          </div>
        </li>
        <li class="discount">
          <div class="discount_div1">推广上线：<span>上线</span></div>
          <div class="discount_div2">
            <a class="discount_div2__a1" href="javascript:;">开启审核</a>
            <a class="discount_div2__a2" href="javascript:;">优惠设置</a>
          </div>
        </li>
      </ul>
      <ul class="gameList">
        <li class="gameList_li">
          <div class="gameList_li__div1">
            <img src="../../assets/images/1.png" alt="">
          </div>
          <div class="gameList_li__div2">
            <p>三界独尊&nbsp;
              <img src="../../assets/images/huosdk_tg_android.png" alt="">
            </p>
            <p>
              折扣：0.6&nbsp;&nbsp;
              优惠类型：无优惠
            </p>
            <p>
              首充：0.4&nbsp;&nbsp;
              续充：0.8
            </p>
          </div>
          <div class="gameList_li__div3">
            <a href="javascript:;" class="outLine">上线</a>
          </div>
        </li>
        <li class="discount">
          <div class="discount_div1">推广上线：<span>下线</span></div>
          <div class="discount_div2">
            <a class="discount_div2__a1" href="javascript:;">开启审核</a>
            <a class="discount_div2__a2" href="javascript:;">优惠设置</a>
          </div>
        </li>
      </ul>
      <ul class="gameList">
        <li class="gameList_li">
          <div class="gameList_li__div1">
            <img src="../../assets/images/1.png" alt="">
          </div>
          <div class="gameList_li__div2">
            <p>三界独尊&nbsp;
              <img src="../../assets/images/huosdk_tg_android.png" alt="">
            </p>
            <p>
              折扣：0.6&nbsp;&nbsp;
              优惠类型：无优惠
            </p>
            <p>
              首充：0.4&nbsp;&nbsp;
              续充：0.8
            </p>
          </div>
          <div class="gameList_li__div3">
            <a href="javascript:;" class="outLine">上线</a>
          </div>
        </li>
        <li class="discount">
          <div class="discount_div1">推广上线：<span>下线</span></div>
          <div class="discount_div2">
            <a class="discount_div2__a1 close" href="javascript:;">关闭审核</a>
            <a class="discount_div2__a2" href="javascript:;">优惠设置</a>
          </div>
        </li>
      </ul>
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
      text: '推广游戏管理'
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
      overflow-x:hidden;
      background-color: #f5f6ff;
    }
  }
  .gameList{
    background-color: #fff;
    margin-bottom: 0.16rem;
    &_li{
      height: 2rem;
      padding:0.35rem 0.3rem;
      border-bottom: 0.01rem solid #EEE;
      display: flex;
      &__div1{
        width: 1.3rem;
        height: 1.3rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      &__div2{
        flex: 1;
        padding-left: 0.3rem;
        p:nth-child(1){
          color: #333;
          font-size: 0.32rem;
          img{
            width: 0.26rem;
            height: 0.32rem;
          }
        }
        p:nth-child(2){
          padding-top: 0.16rem;
        }
        p:nth-child(3){
          padding-top: 0.13rem;
        }
        p{
          font-size: 0.24rem;
          color: #777;
        }
      }
      &__div3{
        width: 1.1rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
          display: inline-block;
          width: 1.1rem;
          height: 0.6rem;
          text-align: center;
          line-height: 0.6rem;
          font-size: 0.26rem;
          color: #fff;
          background-color: #67C23A;
          border-radius: 0.05rem;
        }
        .outLine{
          background-color: #409FFF;
        }
      }
    }
    .discount{
      height: 1rem;
      display: flex;
      padding:0 0.3rem;
      &_div1{
        flex: 1;
        color: #7C7C7C;
        font-size: 0.26rem;
        line-height: 1rem;
        span{
          color: #FF3636;
        }
      }
      &_div2{
        width: 3.4rem;
        display: flex;
        align-items: center;
        a{
          display: inline-block;
          font-size: 0.26rem;
          width: 1.6rem;
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: center;
          border-radius: 0.05rem;
        }
        a:nth-child(1){
          background-color: #DEDEDE;
          color: #409FFF;
        }
        a:nth-child(2){
          background-color: #FF9900;
          color: #fff;
          margin-left: 0.2rem;
        }
        .close{
          color: #515A6E !important;
        }
      }
    }
  }
</style>
