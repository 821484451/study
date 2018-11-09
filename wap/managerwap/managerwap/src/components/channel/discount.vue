<template>
  <div class="myGame">
    <ul class="myGame_ul">
      <li class="myGame_ul__li">
        <div class="gameImg"><img src="../../assets/images/1.png" alt=""></div>
        <div class="gameDetail">
          <p class="gameDetail_p1">三届毒霸&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_android.png" ><span>审核通过</span></p>
          <p class="gameDetail_p2">id：45452108203</p>
          <p class="gameDetail_p3">折扣：0.5&nbsp;&nbsp;&nbsp;&nbsp;优惠类型：折扣</p>
        </div>
        <div class="gameBtn"><a href="javascript:;" @click="popBox()">修改</a></div>
      </li>
      <li class="proportion">
        <div>
          <p>渠道名称：<span>渠道002</span></p>
          <p>渠道归属：<span>火速</span></p>
        </div>
        <div>
          <p>玩家首充：<span>60</span></p>
          <p>玩家续充：<span>510</span></p>
        </div>
      </li>
    </ul>
    <ul class="myGame_ul">
      <li class="myGame_ul__li">
        <div class="gameImg"><img src="../../assets/images/2.png" alt=""></div>
        <div class="gameDetail">
          <p class="gameDetail_p1">三届毒霸&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_android.png" ><span>审核通过</span></p>
          <p class="gameDetail_p2">id：45452108203</p>
          <p class="gameDetail_p3">折扣：0.5&nbsp;&nbsp;&nbsp;&nbsp;优惠类型：折扣</p>
        </div>
        <div class="gameBtn"><a href="javascript:;" @click="popBox()">修改</a></div>
      </li>
      <li class="proportion">
        <div>
          <p>渠道名称：<span>渠道002</span></p>
          <p>渠道归属：<span>火速</span></p>
        </div>
        <div>
          <p>玩家首充：<span>60</span></p>
          <p>玩家续充：<span>510</span></p>
        </div>
      </li>
    </ul>
    <ul class="myGame_ul">
      <li class="myGame_ul__li">
        <div class="gameImg"><img src="../../assets/images/3.png" alt=""></div>
        <div class="gameDetail">
          <p class="gameDetail_p1">三届毒霸&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_android.png" ><span>审核通过</span></p>
          <p class="gameDetail_p2">id：45452108203</p>
          <p class="gameDetail_p3">折扣：0.5&nbsp;&nbsp;&nbsp;&nbsp;优惠类型：折扣</p>
        </div>
        <div class="gameBtn"><a href="javascript:;" @click="popBox()">修改</a></div>
      </li>
      <li class="proportion">
        <div>
          <p>渠道名称：<span>渠道002</span></p>
          <p>渠道归属：<span>火速</span></p>
        </div>
        <div>
          <p>玩家首充：<span>60</span></p>
          <p>玩家续充：<span>510</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
export default {
  components: {

  },
  computed: {
    ...mapGetters([

    ])
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
    popBox () {

    }
  },
  mounted () {
    store.commit('UPDATE_CHANNEL_SELECT', {'num': 1})
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
    background-color: #FF9900;
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
    }
  }
  div:nth-child(2){
    padding-top: 0.3rem;
  }
}
</style>
