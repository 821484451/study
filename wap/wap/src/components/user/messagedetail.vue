<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <h4>{{msgDetail ? msgDetail.title : ''}}</h4>
      <p class="time"><span>发表{{msgDetail ? (msgDetail.modified === 0 ? $dataFormat('yyyy-MM-dd hh:mm', msgDetail.post_date) : '') : ''}}</span> <i></i></p>
      <div class="content" v-html="msgDetail ? msgDetail.content : ''">
      </div>
    </div>
  </div>
</template>

<script>
import header from '../public/header.vue'
import store from '../../store'
import { mapGetters } from 'vuex'
export default {
  components: {
    'Header': header
  },
  computed: {
    ...mapGetters([
      'msgDetail'
    ])
  },
  watch: {

  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '消息详情'
    }
  },
  created () {
    store.dispatch('getMsgDetail', {id: this.$route.query.id})
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.main{
  padding: 0 0.3rem;
  padding: 0.42rem;
  h4{
    color: #010101;
    font-size: 0.42rem;
    text-align: center;
    padding-bottom: 0.35rem;
  }
  .time{
    color: #868686;
    font-size: 0.24rem;
    text-align: center;
    position: relative;
    height: 0.3rem;
    span{
      padding: 0 0.2rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 100;
      background-color: #fff;
    }
    i{
      display: block;
      width: 100%;
      height: 0.02rem;
      background-color: #EEEEEE;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .content{
    padding-top: 0.56rem;
    font-size: 0.28rem;
    color: #333;
  }
}

</style>
