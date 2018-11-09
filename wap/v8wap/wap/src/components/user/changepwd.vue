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
      <p class="tip">{{changeTip}}</p>
      <div class="btn">
        <a href="javascript:;" @click="changePwd()">确认</a>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'
import { mapGetters } from 'vuex'
import header from '../public/header.vue'
export default {
  components: {
    'Header': header

  },
  computed: {
    ...mapGetters([
      'loginStatus'
    ])
  },
  watch: {
    loginStatus (curVal, oldVal) {
      console.log(curVal)
      if (curVal === false) {
        console.log(curVal)
        this.$router.push({path: '/login', name: 'Login'})
      }
    }
  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '登录密码',
      oldPwd: '',
      newPwd: '',
      relPwd: '',
      changeTip: ''
    }
  },
  created () {
  },
  methods: {
    changePwd () {
      store.dispatch('changePwd', {'old_pwd': this.oldPwd, 'new_pwd': this.newPwd})
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
