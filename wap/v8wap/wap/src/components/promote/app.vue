<template>
    <div class="main">
      <div class="picture">
        <img src="../../assets/images/huosdk_tg_app.png" >
      </div>
      <div class="btn">
        <router-link :to="{path: '/promote/newapp'}">申请APP</router-link>
      </div>
    </div>
</template>

<script>

export default {
  computed: {

  },
  watch: {

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
  },
  methods: {

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
