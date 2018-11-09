<template>
  <div class="playerList">
    <Search/>
    <div class="list">
      <div class="list_top">
        <div>
          <p>18125041707&nbsp;&nbsp;<span>正常</span></p>
          <p>01-01 11:36</p>
        </div>
        <div>
          <p>注册渠道：渠道01</p>
          <p>注册游戏：王者荣耀</p>
        </div>
        <div>
          <p>绑定手机：12313213</p>
          <p>绑定邮箱：2121313@qq.com</p>
        </div>
      </div>
      <div class="list_bottom">
        <a href="javascript:;" @click="pop()" >编辑</a>
        <a href="javascript:;" @click="popFreeze()">冻结</a>
        <a href="javascript:;" @click="popGameB()">发币</a>
        <a href="javascript:;" @click="popReduceGameB()">扣币</a>
        <a href="javascript:;">余额统计</a>
      </div>
    </div>
    <div class="list">
      <div class="list_top">
        <div>
          <p>18125041707&nbsp;&nbsp;<span>正常</span></p>
          <p>01-01 11:36</p>
        </div>
        <div>
          <p>注册渠道：渠道01</p>
          <p>注册游戏：王者荣耀</p>
        </div>
        <div>
          <p>绑定手机：12313213</p>
          <p>绑定邮箱：2121313@qq.com</p>
        </div>
      </div>
      <div class="list_bottom">
        <a href="javascript:;" @click="pop()" >编辑</a>
        <a href="javascript:;" @click="popFreeze()">冻结</a>
        <a href="javascript:;" @click="popGameB()">发币</a>
        <a href="javascript:;" @click="popReduceGameB()">扣币</a>
        <a href="javascript:;">余额统计</a>
      </div>
    </div>
  </div>
</template>

<script>
import search from '../public/search.vue'
import store from '../../store'
export default {
  components: {
    'Search': search
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {

    }
  },
  created () {
  },
  methods: {
    pop () {
      store.commit('UPDATE_PLAYER_MANAGE_STATUE', {flag: true})
    },
    popFreeze () {
      store.commit('UPDATE_FREEZE_ACCOUNT_STATUE', {flag: true})
    },
    popGameB () {
      store.commit('UPDATE_GIVE_GAMEB_STATUE', {flag: true})
    },
    popReduceGameB () {
      store.commit('UPDATE_REDUCE_GAMEB_STATUS', {flag: true})
    }
  }
}
</script>

<style lang="scss" scoped>
.playerList{
  background-color: #F5F5F9;
}
.list{
  padding:0 0.3rem;
  background-color: #fff;
  margin-bottom: 0.16rem;
}
.list_top{
  border-bottom: 1px solid #EEEEEE;
  div{
    display: flex;
    p{
      flex: 1;
      font-size: 0.24rem;
      color: #7C7C7C;
    }
  }
  div:nth-child(1){
    padding-top: 0.34rem;
    p:nth-child(1){
      color: #000000;
      font-size: 0.3rem;
      span{
        color: #FF3636;
        font-size: 0.24rem;
      }
    }
    p:nth-child(2){
      text-align: right;
    }
  }
  div:nth-child(2){
    padding-top: 0.24rem;
  }
  div:nth-child(3){
    padding-top: 0.22rem;
    padding-bottom: 0.24rem;
  }
}
.list_bottom{
  padding: 0.2rem 0;
  display: flex;
  justify-content: space-between;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.1rem;
    height: 0.6rem;
    border-radius: 0.05rem;
    color: #fff;
    background-color: #67C23A;
    font-size: 0.26rem;

  }
  a:nth-child(5){
    width: 1.5rem;
  }
}
</style>
