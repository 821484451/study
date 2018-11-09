<template>
    <div class="main">
      <div class="picture">
        <img src="../../assets/images/erweima.png" >
      </div>
      <div class="btn"><a href="javascript:;" class="new" @click="update(1)" >APP更新</a></div>
      <div class="btn clone"><a href="javascript:;" class="clone" @click="cloneTip()">复制下载链接</a></div>
    </div>
</template>

<script>
import store from '../../store'
export default {
  computed: {

  },
  components: {

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
      flag: 'promote',
      showFlag: true
    }
  },
  created () {
  },
  methods: {
    update (num) {
      this.tip = num
      store.commit('UPDATE_TIP_STATUS', {msg: '更新成功', tip: true})
      this.showFlag = false
    },
    cloneTip (msg) {
      store.commit('UPDATE_TIP_STATUS', {msg: '复制成功', tip: true})
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
