<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <div class="list" @click="toDetail()">
        <div class="list_left">
          <img src="../../assets/images/tg_new.png" >
          <i></i>
        </div>
        <div class="list_right">
          <p>系统消息<span>06-06 11:00</span></p>
          <p>亲爱的玩家1231313，恭喜你升……</p>
        </div>
      </div>
      <div class="list" @click="toDetail()">
        <div class="list_left">
          <img src="../../assets/images/tg_new.png" >
          <i></i>
        </div>
        <div class="list_right">
          <p>系统消息<span>06-06 11:00</span></p>
          <p>亲爱的玩家1231313，恭喜你升……</p>
        </div>
      </div>
      <div class="list" @click="toDetail()">
        <div class="list_left">
          <img src="../../assets/images/tg_new.png" >
          <i></i>
        </div>
        <div class="list_right">
          <p>系统消息<span>06-06 11:00</span></p>
          <p>亲爱的玩家1231313，恭喜你升……</p>
        </div>
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
      text: '系统消息'
    }
  },
  created () {
  },
  methods: {
    toDetail () {
      this.$router.push({path: '/messagedetail'})
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #f5f6ff;
}
.main{
  padding: 0 0.3rem;
  background-color: #fff;
}
.list{
  height: 1.6rem;
  padding: 0.3rem 0;
  display: flex;
  border-bottom:1px solid #EEEEEE;
  &_left{
    width: 1rem;
    height: 1rem;
    border-radius: 0.2rem;
    background-color: #409FFF;
    position: relative;
    img{
      width: 0.44rem;
      height: 0.42rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
    i{
      width: 0.2rem;
      height: 0.2rem;
      background-color: #F4163F;
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  &_right{
    flex: 1;
    padding-left: 0.24rem;
    p:nth-child(1){
      font-size: 0.32rem;
      color: #000;
      span{
        float: right;
        font-size: 0.24rem;
        color: #868686;
      }
    }
    p:nth-child(2){
      font-size: 0.28rem;
      color: #868686;
      padding-top: 0.23rem;
    }
  }
}
</style>
