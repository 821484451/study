<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl"/>
    <div class="main">
      <div class="role">
        <ul class="rolelist" v-if="list">
          <li class="rolelist_li">
            <p class="rolelist_li__p1">订单编号</p>
            <p class="rolelist_li__p2">{{list.order_id}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">申请时间</p>
            <p class="rolelist_li__p2">{{list.create_time}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">玩家账号</p>
            <p class="rolelist_li__p2">{{list.mem_name}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">所属渠道</p>
            <p class="rolelist_li__p2">{{list.agent_name}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">游戏</p>
            <p class="rolelist_li__p2">{{list.game_name}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">充值方式</p>
            <p class="rolelist_li__p2">{{list.payway_txt}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">到账金额</p>
            <p class="rolelist_li__p2"><span>{{list.amount}}</span>平台币</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">实付金额</p>
            <p class="rolelist_li__p2">{{list.real_amount}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">玩家返利</p>
            <p class="rolelist_li__p2">{{list.rebate_cnt}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">渠道收益</p>
            <p class="rolelist_li__p2">{{list.agent_gain}}元</p>
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
import { mapGetters } from 'vuex'
export default {
  components: {
    'Header': header,
    'Search': search
  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '玩家收益详情',
      rightText: '',
      toUrl: ''
    }
  },
  computed: {
    ...mapGetters([
      'playerIncomeList'
    ]),
    list: {
      get () {
        let self = this
        return store.state.playerIncomeRecord.list.filter(item => item.order_id === self.$route.query.num)[0]
      },
      set (val) {

      }
    }
  },
  created () {
    let self = this
    store.dispatch('playerIncomeRecord', {order_id: self.$route.query.num})
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
