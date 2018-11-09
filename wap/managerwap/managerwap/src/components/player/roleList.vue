<template>
  <div class="roleList">
    <Search/>
    <ul class="chargeList_list">
      <li class="chargeList_list__li list" >
        <div class="list_div1">
          <p class="list_div1__p1">王者农药</p>
          <p class="list_div1__p2">区服：52区<span>角色名：不爱王思聪</span></p>
        </div>
        <img v-if="flag" @click="changeFlag()" src="../../assets/images/huosdk_tg_down_003.png" alt=""><img v-else @click="changeFlag()" src="../../assets/images/huosdk_tg_up_003.png" alt="">
      </li>
      <li class="detail" v-if="!flag">
        <div class="detail_div1">
          <p>等级：<span>19</span></p>
          <p>创建时间：<span> 2018-01-01 15:00</span></p>
        </div>
        <div class="detail_div2">
          <p>充值金额：<span>0</span></p>
          <p>更新时间：<span>2018-01-01 15:00</span></p>
        </div>
      </li>
    </ul>
    <ul class="chargeList_list">
      <li class="chargeList_list__li list" >
        <div class="list_div1">
          <p class="list_div1__p1">王者农药</p>
          <p class="list_div1__p2">区服：52区<span>角色名：不爱王思聪</span></p>
        </div>
        <img v-if="flag" @click="changeFlag()" src="../../assets/images/huosdk_tg_down_003.png" alt=""><img v-else @click="changeFlag()" src="../../assets/images/huosdk_tg_up_003.png" alt="">
      </li>
      <li class="detail" v-if="!flag">
        <div class="detail_div1">
          <p>等级：<span>19</span></p>
          <p>创建时间：<span> 2018-01-01 15:00</span></p>
        </div>
        <div class="detail_div2">
          <p>充值金额：<span>0</span></p>
          <p>更新时间：<span>2018-01-01 15:00</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import search from '../public/search.vue'
export default {
  components: {
    'Search': search
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      flag: true
    }
  },
  created () {
  },
  methods: {
    changeFlag () {
      this.flag = !this.flag
    }
  }
}
</script>

<style lang="scss" scoped>
.roleList{
  background-color: #F5F5F9;
}
.chargeList_list{
  padding: 0 0.3rem;
  background-color: #fff;
  &__li{
    display: flex;
    justify-content: space-between;
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
    &__p1{
      font-size: 0.3rem;
      color: #000;
    }
    &__p2{
      font-size: 0.24rem;
      color: #7C7C7C;
      padding-top: 0.23rem;
      span{
        padding-left: 0.8rem;
      }
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
      padding-bottom: 0.22rem;
    }
    span{
      color: #555555;
    }
  }

}
</style>
