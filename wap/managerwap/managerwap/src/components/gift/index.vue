<template>
  <div class="home">
    <Header :left="left" :text="text" />
    <Search/>
    <ul class="chargeList_list">
      <li class="chargeList_list__li list" >
        <div class="list_div1">
          <img src="../../assets/images/gl_libao.png" alt="">
        </div>
        <div class="list_div2">
          <p class="list_div2__p1">H5礼包</p>
          <p class="list_div2__p2">游戏名：王者荣耀</p>
          <p class="list_div2__p3">创建时间：2018-08-01 11:00</p>
        </div>
        <img v-if="flag !== 1" @click="changeFlag(1)" src="../../assets/images/huosdk_tg_down_003.png" alt=""><img v-else @click="changeFlag(0)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
      </li>
      <li class="detail" v-if="flag === 1">
        <div class="detail_div1">
          <p>开始时间：<span>2018-08-01 11:00</span></p>
          <p>QQ群号：<span> asas</span></p>
          <p>剩余数：<span>16</span></p>
        </div>
        <div class="detail_div2">
          <p>结束时间：<span>2018-08-01 11:00</span></p>
          <p>所需积分：<span>1</span></p>
          <p>总数：<span>16</span></p>
        </div>
      </li>
    </ul>
    <ul class="chargeList_list">
      <li class="chargeList_list__li list" >
        <div class="list_div1">
          <img src="../../assets/images/gl_libao.png" alt="">
        </div>
        <div class="list_div2">
          <p class="list_div2__p1">H5礼包</p>
          <p class="list_div2__p2">游戏名：王者荣耀</p>
          <p class="list_div2__p3">创建时间：2018-08-01 11:00</p>
        </div>
        <img v-if="flag !== 2" @click="changeFlag(2)" src="../../assets/images/huosdk_tg_down_003.png" alt=""><img v-else @click="changeFlag(0)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
      </li>
      <li class="detail" v-if="flag === 2">
        <div class="detail_div1">
          <p>开始时间：<span>2018-08-01 11:00</span></p>
          <p>QQ群号：<span> asas</span></p>
          <p>剩余数：<span>16</span></p>
        </div>
        <div class="detail_div2">
          <p>结束时间：<span>2018-08-01 11:00</span></p>
          <p>所需积分：<span>1</span></p>
          <p>总数：<span>16</span></p>
        </div>
      </li>
    </ul>
    <ul class="chargeList_list">
      <li class="chargeList_list__li list" >
        <div class="list_div1">
          <img src="../../assets/images/gl_libao.png" alt="">
        </div>
        <div class="list_div2">
          <p class="list_div2__p1">H5礼包</p>
          <p class="list_div2__p2">游戏名：王者荣耀</p>
          <p class="list_div2__p3">创建时间：2018-08-01 11:00</p>
        </div>
        <img v-if="flag !== 3" @click="changeFlag(3)" src="../../assets/images/huosdk_tg_down_003.png" alt=""><img v-else @click="changeFlag(0)" src="../../assets/images/huosdk_tg_up_003.png" alt="">
      </li>
      <li class="detail" v-if="flag === 3">
        <div class="detail_div1">
          <p>开始时间：<span>2018-08-01 11:00</span></p>
          <p>QQ群号：<span> asas</span></p>
          <p>剩余数：<span>16</span></p>
        </div>
        <div class="detail_div2">
          <p>结束时间：<span>2018-08-01 11:00</span></p>
          <p>所需积分：<span>1</span></p>
          <p>总数：<span>16</span></p>
        </div>
      </li>
    </ul>
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
  computed: {

  },
  watch: {

  },
  data () {
    return {
      left: 1,
      text: '礼包列表',
      flag: 0
    }
  },
  created () {
  },
  methods: {
    changeFlag (num) {
      this.flag = num
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #f5f6ff;
  height: 100%;
}
.chargeList_list{
  background-color: #fff;
  padding: 0 0.3rem;
  &__li{
    display: flex;
    position: relative;
    padding-bottom: 0.43rem;
    padding-top: 0.37rem;
    img{
      width: 0.23rem;
      height: 0.12rem;
      position: absolute;
      bottom: 0.1rem;
      right: 0;
    }
  }

}
.list{
  border-bottom: 1px solid #EEEEEE;
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &_div1{
    width: 1.61rem;
    display: flex;
    justify-content: center;
    img{
      width: 1.3rem;
      height: 1.2rem;
      position: static;
    }
  }
  &_div2{
    position: relative;
    &__p1{
      font-size: 0.32rem;
      color: #333;
      font-weight: bold;
    }
    &__p3, &__p2{
      font-size: 0.24rem;
      color: #777;
      padding-top: 0.23rem;
    }
  }
}
.detail{
  display: flex;
  margin-bottom: 0.16rem;
  div{
    flex: 1;
    color: #99A9BF;
    font-size: 0.24rem;
    P:nth-child(1){
      padding-top: 0.26rem;
    }
    P:nth-child(2){
      padding-top: 0.3rem;
    }
    P:nth-child(3){
      padding-top: 0.31rem;
      padding-bottom: 0.24rem;
    }
    span{
      color: #555555;
    }
  }
}
</style>
