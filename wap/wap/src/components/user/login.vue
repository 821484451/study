<template>
    <div class="login">
      <div class="logoBox">
        <div class="logo">
          <img src="../../assets/images/logo.png" alt="">
        </div>
      </div>
      <div class="loginBox">
        <div class="account">
          <span>账号</span>
          <input type="text" id="account" v-model="username"/>
        </div>
        <div class="password">
          <span>密码</span>
          <input :type="pwdStatus ? 'text' : 'password'" id="password" v-model="password">
          <div class="showPwdBox">
            <i class="showPwd" v-if="pwdStatus" @click="changePwdStatus()" ></i>
            <i class="hidePwd" v-else @click="changePwdStatus()" ></i>
          </div>
        </div>
        <p class="tip">{{loginTip}}</p>
        <a href="javascript:;" class="login" @click="login()" @keyup.enter="login()">立即登录</a>
      </div>
     <!--  <div class="forget">
        <router-link to="/forgetpwd" class="forgetPwd">忘记密码</router-link>
      </div> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {

  },
  computed: {
    ...mapGetters([
      'loginTip'
    ])
  },
  data () {
    return {
      username: '',
      password: '',
      msg: '',
      pwdStatus: false
    }
  },
  created () {
    this.$store.dispatch('getToken')
    this.$store.commit('UPDATE_LOGIN_TIP', {msg: ''})
    let self = this
    document.onkeydown = function (event) {
      let key = window.event.keyCode
      if (key === 13) {
        self.login()
      }
    }
  },
  methods: {
    login () {
      if ((this.username).trim() && (this.password).trim()) {
        this.$store.dispatch('userLogin', {'username': this.username, 'password': this.password})
      } else {
        this.$store.commit('UPDATE_LOGIN_TIP', {msg: '*你输入的账号与密码有问题'})
        this.username = ''
        this.password = ''
      }
    },
    changePwdStatus () {
      if (this.pwdStatus) {
        this.pwdStatus = false
      } else {
        this.pwdStatus = true
      }
    }
  }
}
</script>

<style lang="scss">
.login{
  width: 100%;
  height: 100%;
  background: url('../../assets/images/huosdk_tg_bg_004.png') no-repeat top;
  background-size: 100% auto;
  position: relative;
  background-color: #f5f6ff;
}
.logo{
  width: 2.07rem;
  height: 2.07rem;
  padding: 0.41rem;
  position: absolute;
  left: 50%;
  margin-left: -1.035rem;
  top: 50%;
  margin-top: -1.035rem;
  background-color: #fff;
  border-radius: 50%;
  img{
    width: 100%;
    height: 100%;
  }
}
.logoBox{
  width: 2.27rem;
  height: 2.27rem;
  position: absolute;
  left: 50%;
  margin-left: -1.085rem;
  top: 1.3rem;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.4);
  z-index: 10;
  box-shadow:0px 0px 12px rgba(80,178,249,0.17);
}
.loginBox{
  width: 6.6rem;
  height: 4.4rem;
  position: absolute;
  left: 50%;
  margin-left:-3.3rem;
  top: 2.37rem;
  background-color: rgba(255,255,255,1);
  border-radius:0.1rem;
  padding-top: 1.2rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  font-size: 0.3rem;
  div{
    height: 1.1rem;
    border-bottom:1px solid #DBEDFB;
    display: flex;
    span{
      display: block;
      line-height: 1.1rem;
      color: #999999;
    }
    input{
      height: 100%;
      border: none;
      flex: 1;
      text-indent: 0.3rem;
      font-size: 0.3rem;
    }
    .showPwdBox{
      width: 0.4rem;
      position: relative;
      i{
        position: absolute;
        width: 0.4rem;
        height: 0.4rem;
        top: 50%;
        margin-top: -0.2rem;
      }
      .hidePwd{
        background: url('../../assets/images/huosdk_tg_biyan.png') no-repeat;
        background-size: 100% 100%;
      }
      .showPwd{
        background: url('../../assets/images/huosdk_tg_zhengyan.png') no-repeat;
        background-size: 100% 100%;
      }
    }

  }
  .login{
    display: block;
    width: 5rem;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    color: #fff;
    background-color: #409FFF;
    border-radius: 0.1rem;
    position: absolute;
    left: 50%;
    margin-left: -2.5rem;
    bottom: -0.44rem;
  }
}
.forgetPwd{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 9.19rem;
  font-size: 0.28rem;
  color:#999999;
}
.tip{
  color: #FF3636;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.5rem;
}
</style>
