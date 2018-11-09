<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text[$route.params.flag]" :rightText="rightText" :toUrl="toUrl"/>
    <div class="main">
      <router-view></router-view>
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
  data () {
    return {
      left: 1,
      right: 0,
      text: ['数据总览', '玩家列表', '玩家充值列表', '玩家角色列表'],
      rightText: '',
      toUrl: '/channellist',
      flag: 'data'
    }
  },
  computed: {
    ...mapGetters([
      'playerPayList',
      'playerPayCount'
    ])
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #F5F5F9;
  width: 100%;
  height: 100%;
}
</style>
