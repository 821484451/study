<template>
  <div class="account">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <div class="content">
        <div class="headIcon" @click="toUrl()">
          <img class="head" src="../../assets/images/huosdk_tg_juese.png" >
          <img class="edict" src="../../assets/images/huosdk_tg_bianji.png" >
        </div>
        <div class="nickName" >木兰家人</div>
        <p class="signature">此用户很懒，什么也没留下....</p>
        <ul class="menu">
          <li class="menu_li"><router-link to="/bindingmobile">绑定手机<i>12313123212&nbsp;&nbsp;<img src="../../assets/images/huosdk_tg_back_002.png" alt=""></i></router-link></li>
          <li class="menu_li"><router-link to="/changepwd">登录密码<i><img src="../../assets/images/huosdk_tg_back_002.png" alt=""></i></router-link></li>
          <li class="menu_li"><router-link to="/changepaypwd">支付密码<i><img src="../../assets/images/huosdk_tg_back_002.png" alt=""></i></router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../public/header.vue'
export default {
  components: {
    'Header': header
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      left: 1,
      right: 0,
      text: ''
    }
  },
  created () {
  },
  methods: {
    toUrl () {
      // this.$router.push({path: '/changedetail'})
    }
  }
}
</script>

<style lang="scss" scoped>
.account{
  width: 100%;
  height: 100%;
  background:url('../../assets/images/huosdk_tg_bg_003.png') no-repeat;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  .header{
    background: none;
  }
  .main{
    padding-top: 1.5rem;
    .content{
      height: 100%;
      border-top-left-radius:0.3rem;
      border-top-right-radius:0.3rem;
      background-color: #fff;
      position: relative;
      padding-top: 0.88rem;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      .headIcon{
        width: 2.27rem;
        height: 2.27rem;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -1.135rem;
        top: -1.46rem;
        background-color: rgba(255,255,255,0.5);
        .head{
          width: 2.07rem;
          height: 2.07rem;
          position: absolute;
          left: 50%;
          margin-left: -1.035rem;
          top: 50%;
          margin-top: -1.035rem;
          border-radius: 50%;
        }
        .edict{
          width: 0.51rem;
          height: 0.51rem;
          position: absolute;
          right:0.1rem;
          bottom: 0.1rem;
        }

      }
      .nickName{
        font-size: 0.36rem;
        color: #333;
        text-align: center;
        line-height: 0.4rem;
        font-weight: bold;
      }
      .signature{
        font-size: 0.24rem;
        padding-top: 0.18rem;
        text-align: center;
        color: #AAA;
      }
    }
    .menu{
      &_li{
        height: 0.8rem;
        margin-top: 0.2rem;
        line-height: 0.8rem;
        font-size: 0.28rem;
        border-bottom: 1px solid #E3E3E3;
        a{
          display: block;
          height: 100%;
          color: #333;
          i{
            float: right;
            font-style: normal;
            img{
              width: 0.15rem;
              height: 0.27rem;
            }
            span{
              display: inline-block;
              text-align: center;
              line-height: 0.36rem;
              width: 0.36rem;
              height: 0.36rem;
              border-radius: 50%;
              background-color: #f00;
              color: #fff;
            }
          }
        }

      }

    }
  }

}
</style>
