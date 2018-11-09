<template>
    <div class="main">
      <div class="picture">
        <img :src="url" alt="">
      </div>
      <div class="btn"><a href="javascript:;" class="new" @click="update(1)" >APP更新</a></div>
      <div class="btn clone"><a href="javascript:;" class="clone" @click="cloneTip()">复制下载链接</a></div>
    </div>
</template>

<script>
import store from '../../store'
import { mapGetters } from 'vuex'
import QRCode from 'qrcode'
export default {
  computed: {
    ...mapGetters([
      'appStatus'
    ])
  },
  components: {

  },
  watch: {
    appStatus (curVal, oldVal) {
      let self = this
      QRCode.toDataURL(curVal.url).then(url => {
        self.url = url
      }).catch(err => {
        console.error(err)
      })
    }
  },
  data () {
    return {
      left: 0,
      right: 1,
      text: 'APP推广',
      rightText: '渠道列表',
      toUrl: '/',
      flag: 'promote',
      showFlag: true,
      url: ''
    }
  },
  created () {
    store.dispatch('getApp')
  },
  methods: {
    update (num) {
      this.tip = num
      this.showFlag = false
      store.dispatch('requestSubpackage')
    },
    cloneTip () {
      this.$copy(this.appStatus.url)
    },
    creatqrcode () {
      store.commit('UPDATE_QRCODE_STATUS', {qrCodeStatus: true})
    }
  }
}
</script>

<style lang="scss" scoped>
.picture{
  height: 6.07rem;
  position: relative;
  img{
    width: 3.96rem;
    height: 3.96rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
.new{
  background-color: #67C23A !important;
}
.clone{
  background-color: #f3f3f3 !important;
  color: #777 !important;
  border-radius: 0.05rem;
}
.btn{
  margin-top: 0.3rem !important;
}
.clone{
  margin-bottom: 0.3rem;
}
</style>
