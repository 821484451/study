<template>
  <div id="app">
    <router-view/>
    <main-loading />
    <main-tip />
  </div>
</template>

<script>
import loading from './components/public/loading.vue'
import tip from './components/public/tip.vue'
export default {
  name: 'App',
  components: {
    'main-loading': loading,
    'main-tip': tip
  }
}
</script>

<style lang="scss">
@import './assets/styles/base.scss';
</style>
