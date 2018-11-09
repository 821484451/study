<template>
  <div class="qrcode" v-if="qrCodeStatus">
    <div class="qrcode_box">
      <img class="erweima" src="../../assets/images/erweima.png" >
      <img src="../../assets/images/huosdk_tg_close.png" @click="cancel()" class="cancel">
      <p>长按保存二维码</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
export default {
  components: {

  },
  computed: {
    ...mapGetters([
      'qrCodeStatus'
    ])
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
    cancel () {
      store.commit('UPDATE_QRCODE_STATUS', {qrCodeStatus: false})
    }
  }
}
</script>

<style lang="scss">
</style>
