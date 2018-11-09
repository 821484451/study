<template>
  <div class="header">
    <h1>{{text}}</h1>
    <a class="header_icon__left" v-if="left == 1" href="javascript:;" @click="leftUrl ? toDetail('/financial') : $router.go(-1)"></a>
    <a class="header_icon__right" v-if="right == 1"  href="javascript:;" @click="toDetail(toUrl)" >{{rightText}}</a>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: ['left', 'right', 'text', 'rightText', 'toUrl', 'leftUrl'],
  methods: {
    useFc () {
      this.$emit('popAC')
    },
    toDetail (url) {
      if (url) {
        this.$router.push({path: url})
      } else {
        this.$emit('popAC')
      }
    }
  }
}
</script>

<style lang="scss">
  @mixin header-icon {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 50% auto;
  height: 0.96rem;
  position: absolute;
  top: 0;
  width: 0.96rem;
}

.header {
  background-image: url(../../assets/images/bg-header.png);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 0.96rem;
  position: relative;

  h1 {
    color: #fff;
    font-size: 0.34rem;
    line-height: 0.96rem;
    text-align: center;
  }

  &_icon {
    &__left {
      @include header-icon;
      background-image: url(../../assets/images/icon-larr.png);
      left: 0;
    }

    &__right {
      @include header-icon;
      width: 1.76rem;
      text-align: center;
      color: #fff;
      font-size: 0.28rem;
      line-height: 0.96rem;
      text-align: center;
      right: 0;
    }
  }
}
</style>
