<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <div class="oldPwd">
        <span>原始密码</span>
        <input type="password" id="oldPwd">
      </div>
      <div class="oldPwd">
        <span>修改密码</span>
        <input type="password" id="newPwd">
      </div>
      <div class="oldPwd">
        <span>再次确认密码</span>
        <input type="password" id="relPwd">
      </div>
      <div class="btn">
        <a href="#">确认</a>
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
      text: '登录密码'
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
    input{
      flex: 1;
      background-color: #F7F7F7;
      text-indent: 0.3rem;
    }
  }

}
</style>
