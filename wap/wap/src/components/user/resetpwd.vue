<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <div class="oldPwd">
        <input type="password" id="oldPwd" placeholder="新密码">
      </div>
      <div class="oldPwd">
        <input type="password" id="newPwd" placeholder="确认密码">
      </div>
      <div class="btn">
        <a href="javascript:;" @click="showTip(1)">确认</a>
      </div>
    </div>
    <Tip :msg="msg" :tip="tip"/>
  </div>
</template>

<script>
import header from '../public/header.vue'
import tip from '../public/tip.vue'
export default {
  components: {
    'Header': header,
    'Tip': tip

  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '重置密码',
      msg: '重置成功',
      tip: 0
    }
  },
  created () {
  },
  methods: {
    showTip (num) {
      this.tip = num
      let self = this
      setTimeout(function () {
        self.tip = 0
      }, 1000)
    }
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
