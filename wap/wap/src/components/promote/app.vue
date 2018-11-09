<template>
    <div class="main">
      <div class="picture">
        <img src="../../assets/images/huosdk_tg_app.png" >
      </div>
      <div class="btn">
        <a href="javascript:;" @click="requestApp()">申请APP</a>
      </div>
    </div>
</template>

<script>
import store from '../../store'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'appStatus'
    ])
  },
  watch: {
    appStatus (curVal, oldVal) {
      if (curVal && curVal.url) {
        this.$router.push({path: '/promote/newapp'})
      }
    }
  },
  data () {
    return {
      left: 0,
      right: 1,
      text: 'APP推广',
      rightText: '渠道列表',
      toUrl: '/',
      flag: 'promote'
    }
  },
  created () {
    store.dispatch('getApp')
  },
  methods: {
    requestApp () {
      store.dispatch('requestSubpackage')
    }
  }
}
</script>

<style lang="scss" scoped>
.picture{
  height: 6.07rem;
  position: relative;
  img{
    width: 5.79rem;
    height: 4.39rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>
