<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <div class="oldPwd">
        <input type="text" id="oldPwd" placeholder="登录账号">
      </div>
      <div class="oldPwd vcode">
        <input type="text" id="newPwd" placeholder="验证码" v-model="code">
        <img class="code" @click="upDateCode" :src="vcode" alt="">
      </div>
      <div class="btn">
        <a href="javascript:;" @click="validate()" >下一步</a>
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
      text: '忘记密码',
      vcode: '',
      code: ''
    }
  },
  created () {
    this.createCode()
    this.upDateCode()
  },
  methods: {
    upDateCode () {
      this.vcode = `http://313tg.1tsdk.com/captcha/new.html?${new Date().getTime()}&font_size=50`
    },
    createCode () {
      let code = ''
      var codeLength = 5
      var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 36)
        code += random[index]
      }
      this.vcode = code
    },
    validate () {
      if (this.code === '') {
        alert('请输入验证码')
      } else if (this.code.toUpperCase() !== this.vcode) {
        alert('验证码不正确，请重新输入')
        this.code = ''
        this.createCode()
      } else {

      }
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
  .vcode{
    background-color: #fff;
    .code{
      height: 100%;
      width: 2.41rem;
      margin-left: 0.19rem;
      background: url('../../assets/images/huosdk_tg_yzm.png') no-repeat;
      backgroud-size: 100% 100%;
      font-size: 0.6rem;
      text-align: center;
      color: #FF00FF;
    }
    input{
      flex: 1;
    }
  }
}
</style>
