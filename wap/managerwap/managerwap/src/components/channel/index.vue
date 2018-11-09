<template>
  <div class="home">
    <Header :left="left" :text="text" :right="right" :leftUrl="leftUrl"/>
    <div class="gameTab">
      <div class="gameTab_item" @click="selected(0)"><router-link to="/channel/channelList">渠道列表<i v-if="channelSelect === 0"></i></router-link></div>
      <div class="gameTab_item" @click="selected(1)"><router-link to="/channel/discount">优惠管理<i v-if="channelSelect === 1"></i></router-link></div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
import header from '../public/header.vue'
export default {
  components: {
    'Header': header
  },
  computed: {
    ...mapGetters([
      'channelSelect'
    ])
  },
  watch: {

  },
  data () {
    return {
      left: 1,
      text: '渠道管理',
      right: 0,
      leftUrl: '/'

    }
  },
  created () {
  },
  methods: {
    selected (num) {
      store.commit('UPDATE_CHANNEL_SELECT', {'num': num})
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  background: none !important;
}
.home{
  background: url('../../assets/images/huosdk_tg_bg_001.png') no-repeat left top;
  background-size: 100% auto;
  height: 100%;
  background-color: #f5f6ff;
}
.gameTab{
  height: 1rem;
  display: flex;
  &_item{
    flex: 1;
    text-align: center;
    line-height: 1rem;
    font-size: 0.3rem;
    color: #fff;
    position: relative;
    a{
      color: #fff;
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 1rem;
    }
    i{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0.05rem;
      display: inline-block;
      width: 1.4rem;
      height: 0.04rem;
      background-color: #fff;
    }
  }
}
</style>
