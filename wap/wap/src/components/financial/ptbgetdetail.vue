<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl"/>
    <div class="main">
      <div class="role">
        <ul class="rolelist">
          <li class="rolelist_li">
            <p class="rolelist_li__p1">订单编号</p>
            <p class="rolelist_li__p2">s78979njkndjks</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">发放时间</p>
            <p class="rolelist_li__p2">06-21 12:25</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">玩家账号</p>
            <p class="rolelist_li__p2">15865478426</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">支付方式</p>
            <p class="rolelist_li__p2">微信支付</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">获取平台币</p>
            <p class="rolelist_li__p2"><span>20</span>平台币</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">支付金额</p>
            <p class="rolelist_li__p2">18元</p>
          </li>
        </ul>
      </div>
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
      text: '获取详情',
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
  background-color: #fff ;
  width: 100%;
  height: 100%;
}
.rolelist{
  padding: 0 0.31rem;
  border-bottom: 1px solid #EEEEEE;
  background-color: #fff ;
  &_li{
    display: flex;
    p{
      padding: 0.26rem 0;
      flex: 1;
      span{
        color: #FF0000;
      }
    }
    &__p1{
      font-size: 0.28rem;
      color: #999;
    }
    &__p2{
      font-size: 0.26rem;
      color: #333;
      text-align: right;
    }
  }
}
</style>
