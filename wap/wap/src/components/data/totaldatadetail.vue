<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl"/>
    <div class="main">
      <ul class="datalist">
        <li class="datalist_li">
          <p class="datalist_p1">时间</p>
          <p class="datalist_p2">s78979njkndjks</p>
        </li>
        <li class="datalist_li">
          <p class="datalist_p1">渠道</p>
          <p class="datalist_p2">s78979njkndjks</p>
        </li>
        <li class="datalist_li">
          <p class="datalist_p1">新增账号数</p>
          <p class="datalist_p2">s78979njkndjks</p>
        </li>
        <li class="datalist_li">
          <p class="datalist_p1">活跃用户数</p>
          <p class="datalist_p2">s78979njkndjks</p>
        </li>
        <li class="datalist_li">
          <p class="datalist_p1">新用户付费数</p>
          <p class="datalist_p2">s78979njkndjks</p>
        </li>
        <li class="datalist_li">
          <p class="datalist_p1">总付费人数</p>
          <p class="datalist_p2">s78979njkndjks</p>
        </li>
        <li class="datalist_li">
          <p class="datalist_p1">新用户充值额</p>
          <p class="datalist_p2"><span>20</span>平台币</p>
        </li>
        <li class="datalist_li">
          <p class="datalist_p1">总付费额</p>
          <p class="datalist_p2">审核中</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import header from '../public/header.vue'
import search from '../public/search.vue'
export default {
  components: {
    'Header': header,
    'Search': search
  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '数据总览',
      rightText: '',
      toUrl: ''
    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #F5F5F9;
  width: 100%;
  height: 100%;
}
.datalist{

}
</style>
