<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <div class="oldPwd">
        <input type="text" id="oldPwd" v-model="phoneNum" placeholder="输入手机号">
      </div>
      <div class="oldPwd">
        <input type="text" id="newPwd" v-model="code" placeholder="验证码">
        <span @click="send()">获取验证码</span>
      </div>
      <p class="tip">{{bindingPhoneTip}}</p>
      <div class="btn">
        <a href="javascript:;" @click="binding()">保存</a>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../public/header.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    'Header': header

  },
  computed: {
    ...mapGetters([
      'bindingPhoneTip'
    ])
  },
  watch: {

  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '绑定手机',
      phoneNum: '',
      code: ''
    }
  },
  created () {
  },
  methods: {
    send () {
      let phoneReg = /^1[2,3,4,5,6,7,8,9][0-9]{9}$/
      if (phoneReg.test((this.phoneNum).trim())) {
        this.$store.dispatch('sendPhoneCode', {'mobile': this.phoneNum})
      } else {
        this.$store.commit('UPDATE_BINDING_TIP', {'bindingPhoneTip': '您的输入的手机号不合法'})
      }
    },
    binding () {
      if ((this.phoneNum).trim()) {
        if ((this.code).trim()) {
          this.$store.dispatch('bindingMobile', {'phone_num': this.phoneNum, 'code': this.code})
        } else {
          this.$store.commit('UPDATE_BINDING_TIP', {'bindingPhoneTip': '您的验证码不能为空'})
        }
      } else {
        this.$store.commit('UPDATE_BINDING_TIP', {'bindingPhoneTip': '您的输入的手机号不能为空'})
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

}
.tip{
  color: #FF3636;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.5rem;
}
</style>
