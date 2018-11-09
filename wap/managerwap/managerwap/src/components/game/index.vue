<template>
  <div class="home">
    <Header :left="left" :text="text" :leftUrl="leftUrl"/>
    <div class="main">
      <ul class="list">
        <li class="list_li" @click="toUrl('/androidGame')">
          <div class="list_li__div1">
            <div><img src="../../assets/images/gl_android.png" alt=""></div>
          </div>
          <div class="list_li__div2">安卓游戏管理</div>
          <div class="list_li__div3">
            <img src="../../assets/images/gl_into.png" alt="">
          </div>
        </li>
        <li class="list_li" @click="toUrl('/iosGame')">
          <div class="list_li__div1">
            <div><img src="../../assets/images/gl_ios.png" alt=""></div>
          </div>
          <div class="list_li__div2">IOS游戏管理</div>
          <div class="list_li__div3">
            <img src="../../assets/images/gl_into.png" alt="">
          </div>
        </li>
        <li class="list_li" @click="toUrl('/developerlist')">
          <div class="list_li__div1">
            <div><img src="../../assets/images/gl_kaifa.png" alt=""></div>
          </div>
          <div class="list_li__div2">开发者管理</div>
          <div class="list_li__div3">
            <img src="../../assets/images/gl_into.png" alt="">
          </div>
        </li>
        <li class="list_li" @click="toUrl('/promote')">
          <div class="list_li__div1">
            <div><img src="../../assets/images/gl_tuiguang.png" alt=""></div>
          </div>
          <div class="list_li__div2">推广游戏管理</div>
          <div class="list_li__div3">
            <img src="../../assets/images/gl_into.png" alt="">
          </div>
        </li>
      </ul>
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
      text: '游戏管理',
      leftUrl: '/'
    }
  },
  created () {
  },
  methods: {
    toUrl (url) {
      this.$router.push({path: url})
    }
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
  }
}
.main{
  padding: 0 0.3rem;
}
.list{
  &_li{
    height: 1.19rem;
    display: flex;
    border-bottom:1px solid #E8E8E8;
    &__div1{
      width: 0.72rem;
      height: 100%;
      position: relative;
      div{
        width: 0.72rem;
        height: 0.72rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 0.3rem;
        img{
          width: 0.42rem;
          height: 0.42rem;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    &__div2{
      flex: 1;
      padding-left: 0.31rem;
      font-size: 0.28rem;
      color: #333;
      line-height: 1.19rem;
    }
    &__div3{
      width: 0.16rem;
      position: relative;
      img{
        width: 0.12rem;
        height: 0.22rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  &_li:nth-child(1){
    div{
      div{
        background:linear-gradient(0deg,rgba(70,188,239,1) 0%,rgba(130,219,255,1) 100%);
      }
    }
  }
  &_li:nth-child(2){
    div{
      div{
        background:linear-gradient(0deg,rgba(255,51,73,1) 0%,rgba(253,114,129,1) 100%);
      }
    }
  }
  &_li:nth-child(3){
    div{
      div{
        background:linear-gradient(0deg,rgba(127,194,93,1) 0%,rgba(148,215,114,1) 100%);
      }
    }
  }
  &_li:nth-child(4){
    div{
      div{
        background:linear-gradient(0deg,rgba(70,189,239,1) 0%,rgba(129,218,255,1) 100%);
      }
    }
  }
}
</style>
