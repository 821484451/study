<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl"/>
    <div class="main" v-if="list">
      <div class="role">
        <ul class="rolelist" v-if="$route.params.player == 0">
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
            <p class="rolelist_li__p2">1321313</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">发放数量</p>
            <p class="rolelist_li__p2"><span>20</span>平台币</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">支付金额</p>
            <p class="rolelist_li__p2" >18平台币</p>
          </li>
        </ul>
        <ul class="rolelist" v-if="$route.params.player != 0" >
          <li class="rolelist_li">
            <p class="rolelist_li__p1">订单编号</p>
            <p class="rolelist_li__p2">{{list.order_id}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">发放时间</p>
            <p class="rolelist_li__p2">{{list.create_time}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">发放渠道</p>
            <p class="rolelist_li__p2">{{list.give_agent_name}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">子渠道名称</p>
            <p class="rolelist_li__p2">{{list.sub_agent_name}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">发放数量</p>
            <p class="rolelist_li__p2"><span>{{list.ptb_cnt}}</span>平台币</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">支付金额</p>
            <p class="rolelist_li__p2" >{{list.money}}平台币</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import header from '../public/header.vue'
import search from '../public/search.vue'
import store from '../../store'
export default {
  components: {
    'Header': header,
    'Search': search
  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '平台币发放详情',
      rightText: '',
      toUrl: '',
      playerFb: true
    }
  },
  computed: {
    list: {
      get () {
        return store.state.ptbIssuing.list[0]
      },
      set (val) {

      }
    }
  },
  created () {
    let self = this
    store.dispatch('ptbIssuingRecord', {order_id: self.$route.query.num})
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
