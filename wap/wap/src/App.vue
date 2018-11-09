<template>
  <div id="app">
    <router-view/>
    <main-loading/>
    <main-tip/>
    <main-qrcode/>
  </div>
</template>

<script>
import loading from './components/public/loading.vue'
import tip from './components/public/tip.vue'
import qrcode from './components/public/qrcode.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    'main-loading': loading,
    'main-tip': tip,
    'main-qrcode': qrcode
  },
  computed: {
    ...mapGetters([
      'loginStatus'
    ])
  },
  watch: {
    loginStatus (curVal, oldVal) {
      if (curVal === true) {
        this.$router.push({path: '/'})
      } else if (curVal === false) {
        this.$router.push({path: '/login'})
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/base.scss';
</style>
