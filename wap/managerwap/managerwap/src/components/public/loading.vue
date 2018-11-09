<template>
    <div class="loading" v-if="loadingStatus" @touchmove.prevent>
        <img class="loadingImg" src="../../assets/images/loading.gif" >
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {

  },
  computed: {
    ...mapGetters([
      'loadingStatus'
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
  .loading{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 1000;
    .loadingImg{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);

    }
  }

</style>
