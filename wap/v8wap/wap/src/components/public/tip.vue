<template>
  <div class="resetTip" v-if="tipStatus">
    <div class="resetTip_box">
      <img src="../../assets/images/huosdk_tg_path.png" alt="">
      {{tipMsg}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {

  },
  computed: {
    ...mapGetters([
      'tipStatus',
      'tipMsg'
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

  }
}
</script>

<style lang="scss">
</style>
