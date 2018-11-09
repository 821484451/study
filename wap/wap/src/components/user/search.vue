<template>
  <div class="search">
    <div class="header">
      <div @click="$router.go(-1)"></div>
      <div><input type="text" class="searchText"></div>
      <div>搜索</div>
    </div>
    <div class="content">
      <div class="hotSearch">
        <h4 class="hotSearch_header">热门搜索</h4>
        <div class="hotSearch_div">
          <div class="hotSearch_div__item">刺客天下</div>
          <div class="hotSearch_div__item">刺客天下</div>
          <div class="hotSearch_div__item">刺客天下</div>
          <div class="hotSearch_div__item">刺客天下</div>
          <div class="hotSearch_div__item">刺客天下</div>
          <div class="hotSearch_div__item">刺客天下</div>
          <div class="hotSearch_div__item">刺客天下</div>
          <div class="hotSearch_div__item">刺客天下</div>
        </div>
        <p><img src="../../assets/images/huosdk_tg_close.png" alt="">&nbsp;&nbsp;换一批</p>
      </div>
      <div class="recentSearch">
        <h4 class="recentSearch_header">最近搜索 <span><img src="../../assets/images/huosdk_tg_close.png" alt="">&nbsp;&nbsp;清除</span></h4>
        <ul class="recentSearch_ul">
          <li class="recentSearch_ul__item"><img src="../../assets/images/huosdk_tg_close.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;霸刀战神</li>
          <li class="recentSearch_ul__item"><img src="../../assets/images/huosdk_tg_close.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;霸刀战神</li>
          <li class="recentSearch_ul__item"><img src="../../assets/images/huosdk_tg_close.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;霸刀战神</li>
          <li class="recentSearch_ul__item"><img src="../../assets/images/huosdk_tg_close.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;霸刀战神</li>
          <li class="recentSearch_ul__item"><img src="../../assets/images/huosdk_tg_close.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;霸刀战神</li>
          <li class="recentSearch_ul__item"><img src="../../assets/images/huosdk_tg_close.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;霸刀战神</li>
          <li class="recentSearch_ul__item"><img src="../../assets/images/huosdk_tg_close.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;霸刀战神</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  computed: {

  },
  watch: {

  },
  data () {
    return {

    }
  },
  created () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.search{
  width: 100%;
  height: 100%;
  background-color: #f5f6ff;
  display: flex;
  flex-direction: column;

  .header{
    height: 0.96rem;
    background-color: #409FFF;
    display: flex;
    div:nth-child(1){
      width: 0.96rem;
      height: 0.96rem;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 50% auto;
      position: relative;
      top: 0;
      background-image: url('../../assets/images/icon-larr.png');
      left: 0;
    }
    div:nth-child(2){
      flex: 1;
      position: relative;
      input{
        position: absolute;
        width: 100%;
        height: 0.64rem;
        border-radius: 0.64rem;
        background-color: #fff;
        left: 0;
        top: 50%;
        margin-top: -0.32rem;
        text-indent: 2em;
      }

    }
    div:nth-child(3){
      width: 0.96rem;
      height: 0.96rem;
      font-size: 0.28rem;
      color: #fff;
      text-align: center;
      line-height: 0.96rem;
    }
  }
  .content{
    flex: 1;
    overflow-x: hidden;
    padding-top: 0.16rem;
    .hotSearch{
      padding: 0.31rem;
      background-color: #fff;
      &_header{
        font-size: 0.28rem;
        color: #999;
      }
      &_div{
        display: flex;
        justify-content:space-between;
        flex-wrap: wrap;
        &__item{
          width: 2rem;
          height: 0.6rem;
          text-align: center;
          line-height: 0.6rem;
          font-size: 0.24rem;
          color: #333333;
          background-color: #eee;
          border-radius: 0.6rem;
          margin-top: 0.25rem;
        }
        &__item:nth-child(1){
          background-color: #409FFF;
          color: #fff;
        }
      }
      p{
        font-size: 0.24rem;
        text-align: center;
        color: #BBBBBB;
        margin-top: 0.3rem;
        img{
          width: 0.32rem;
          height:0.26rem;
        }
      }
    }
    .recentSearch{
      background-color: #fff;
      margin-top: 0.16rem;
      padding: 0.31rem;
      &_header{
        font-size: 0.28rem;
        color: #999;
        border-bottom: 1px solid #E3E3E3;
        height: 0.9rem;
        line-height: 0.9rem;
        span{
          float: right;
          img{
            width: 0.22rem;
            height: 0.22rem;
          }
        }
      }
      &_ul{
        &__item{
          height: 0.9rem;
          line-height: 0.9rem;
          font-size: 0.26rem;
          color: #333;
          border-bottom: 1px solid #E3E3E3;
          img{
            width: 0.28rem;
            height: 0.28rem;
          }
        }
      }
    }
  }
}
</style>
