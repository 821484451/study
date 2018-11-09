<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl" />
    <router-view></router-view>
    <Footer :flag="flag"/>
  </div>
</template>

<script>
import header from '../public/header.vue'
import footer from '../public/tab.vue'
export default {
  components: {
    'Header': header,
    'Footer': footer
  },
  data () {
    return {
      left: 0,
      right: 1,
      text: 'APP推广',
      rightText: '渠道列表',
      toUrl: '/channellist',
      flag: 'promote'
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  padding-bottom: 1.06rem;
}
.footer{

}
</style>
