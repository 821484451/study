<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <div class="oldPwd">
        <input type="text" id="oldPwd" placeholder="输入手机号">
      </div>
      <div class="oldPwd">
        <input type="text" id="newPwd" placeholder="验证码">
        <span>获取验证码</span>
      </div>
      <p class="tip"><span>!</span>&nbsp;&nbsp;需要先验证已绑定手机号，再解绑</p>
      <div class="btn">
        <a href="#">解绑</a>
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
      text: '解绑手机'
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
  background-color: #fff;
}
.main{
  padding-top: 0.3rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  .oldPwd{
    margin-top: 0.3rem;
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    padding-left: 0.3rem;
    background-color: #F7F7F7;
    border-radius: 3px;
    font-size: 0.28rem;
    color: #999;
    display: flex;
    position: relative;
    input{
      flex: 1;
      background-color: #F7F7F7;
    }
    span{
      display: block;
      width: 1.93rem;
      height: 0.4rem;
      border-left: 1px solid #DEDEDE;
      text-align: center;
      color: #409FFF;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -0.2rem;
      line-height: 0.4rem;
      font-size: 0.28rem;
    }
  }
  .tip{
    font-size: 0.24rem;
    color: #EC1414;
    padding-top: 0.19rem;
    span{
      display: inline-block;
      width: 0.23rem;
      height: 0.23rem;
      border-radius: 50%;
      text-align: center;
      line-height: 0.23rem;
      color: #fff;
      background-color:#EC1414;
      font-size: 0.23rem;
    }
  }

}

</style>
