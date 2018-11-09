<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <div class="oldPwd">
        <span>原始密码</span>
        <input type="password" id="oldPwd" v-model="oldPwd">
      </div>
      <div class="oldPwd">
        <span>修改密码</span>
        <input type="password" id="newPwd" v-model="newPwd">
      </div>
      <div class="oldPwd">
        <span>再次确认密码</span>
        <input type="password" id="relPwd" v-model="relPwd">
      </div>
      <p class="tip">{{changePayPwdTip}}</p>
      <div class="btn">
        <a href="javascript:;" @click="change()">确认</a>
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
      'changePayPwdTip'
    ])
  },
  watch: {

  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '支付密码',
      oldPwd: '',
      newPwd: '',
      relPwd: ''
    }
  },
  created () {
  },
  methods: {
    change () {
      let _oldPwd = (this.oldPwd).trim()
      let _newPwd = (this.newPwd).trim()
      let _relPwd = (this.relPwd).trim()
      if (_oldPwd && _newPwd && _relPwd) {
        if (_newPwd.length >= 6) {
          if (_newPwd === _relPwd) {
            if (_oldPwd === _newPwd) {
              this.$store.commit('UPDATE_CHANGE_PAY_PWD_TIP', {'changePayPwdTip': '新密码与旧密码不能相同'})
            } else {
              this.$store.dispatch('changePayPwd', {'old_pay_pwd': this.oldPwd, 'cur_pay_pwd': this.newPwd})
            }
          } else {
            this.$store.commit('UPDATE_CHANGE_PAY_PWD_TIP', {'changePayPwdTip': '确认密码与修改密码不一致'})
          }
        } else {
          this.$store.commit('UPDATE_CHANGE_PAY_PWD_TIP', {'changePayPwdTip': '修改密码过短'})
        }
      } else {
        this.$store.commit('UPDATE_CHANGE_PAY_PWD_TIP', {'changePayPwdTip': '输入密码不能为空'})
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
    input{
      flex: 1;
      background-color: #F7F7F7;
      text-indent: 0.3rem;
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
