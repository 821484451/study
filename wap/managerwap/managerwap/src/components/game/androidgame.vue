<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :leftUrl="leftUrl"/>
    <div class="gameTab">
      <div class="gameTab_item" @click="selected(0)"><router-link to="/androidGame/androidList">游戏列表<i v-if="selectNum === 0"></i></router-link></div>
      <div class="gameTab_item" @click="selected(1)"><router-link to="/androidGame/deletelist">删除列表<i v-if="selectNum === 1"></i></router-link></div>
    </div>
    <div class="main">
      <router-view/>
      <p class="loadMoreTip" v-if="! loadStatus"><span>我是有底线的</span><i></i></p>
    </div>
    <Footer :flag="flag"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
import header from '../public/header.vue'
export default {
  components: {
    'Header': header

  },
  computed: {
    ...mapGetters([
      'selectNum'
    ])
  },
  watch: {

  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '安卓游戏管理',
      flag: 'game',
      loadStatus: true,
      leftUrl: '/game'
    }
  },
  created () {

  },
  methods: {
    selected (num) {
      store.commit('UPDATE_SELECT_NUM', {'num': num})
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.home{
  background: url('../../assets/images/huosdk_tg_bg_001.png') no-repeat top;
  background-size: 100% auto;
  background-color: #f5f6ff;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
  }
  .header{
    background: none;
  }
  .gameTab{
    height: 1rem;
    display: flex;
    &_item{
      flex: 1;
      text-align: center;
      line-height: 1rem;
      font-size: 0.3rem;
      color: #fff;
      position: relative;
      a{
        color: #fff;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
      i{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0.05rem;
        display: inline-block;
        width: 1.4rem;
        height: 0.04rem;
        background-color: #fff;
      }
    }
  }
  .yornAdd,.popDotManage{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
  }
  .popDotManageBox{
    width: 5.8rem;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 0.07rem;
    &_name{
      height: 1rem;
      line-height: 1rem;
      font-size: 0.3rem;
      text-align: center;
    }
    &_main{
      padding: 0 0.3rem;
      &__div{
        margin-top: 0.15rem;
        height: 0.75rem;
        line-height: 0.75rem;
        font-size: 0.26rem;
        color: #111;
        border: 1px solid #EEEEEE;
        position: relative;
        padding-right: 0.5rem;
        display: flex;
        span{
          display: block;
          padding-left: 0.22rem;

        }
        .lg{
          width: 2.2rem;
        }
        input{
          height: 100%;
          line-height: 0.75rem;
          width: 50%;
        }
        i{
          font-style: normal;
          display: block;
          width: 0.3rem;
          height: 0.3rem;
          color: #FFBE00;
          text-align: center;
          line-height: 0.3rem;
          border: 1px solid #FFBE00;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          transform:translateY(-50%);
          right: 0.1rem;
          font-size: 0.22rem;
        }
      }
      &__line{
        height: 2px;
        margin-top: 0.26rem;
        background: url('../../assets/images/line.png') no-repeat left;
        background-size: 100% 100%；
      }
    }
    &_btn{
      height: 1rem;
      line-height: 1rem;
      display: flex;
      margin-top: 0.24rem;
      a{
        font-size: 0.28rem;
        color: #777;
        text-align: center;
        flex: 1;
      }
      a:nth-child(1){
        border-top: 1px solid #EEEEEE;
        border-right: 1px solid #EEEEEE;
      }
      a:nth-child(2){
        border-top: 1px solid #EEEEEE;
        color: #409FFF;
      }
    }
  }
}
.yornAdd_box{
  width: 5.2rem;
  height: 2.57rem;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 0.07rem;
  &__head{
    height: 1.56rem;
    line-height: 1.56rem;
    text-align: center;
    font-size: 0.3rem;
    color: #000;
    span{
      color: #409FFF;
    }
  }
  &__btn{
    height: 1rem;
    line-height: 1rem;
    display: flex;
    a{
      flex: 1;
      font-size: 0.28rem;
      text-align: center;
    }
    a:nth-child(1){
      border-top: 1px solid #D2D3D5;
      border-right: 1px solid #D2D3D5;
      color: #999;
    }
    a:nth-child(2){
      border-top: 1px solid #D2D3D5;
    }
  }
}
.line{
  width: 100%;
  height: 2px;
}
</style>
