<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl"/>
    <div class="main">
      <div class="role">
        <ul class="rolelist">
          <li class="rolelist_li">
            <p class="rolelist_li__p1">订单编号</p>
            <p class="rolelist_li__p2">{{list.order_id}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">代充时间</p>
            <p class="rolelist_li__p2">{{list.create_time}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">玩家账号</p>
            <p class="rolelist_li__p2">{{list.mem_name}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">适用游戏</p>
            <p class="rolelist_li__p2">{{list.game_name}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">代充数量</p>
            <p class="rolelist_li__p2"><span>{{list.coin_cnt}}</span>平台币</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">支付金额</p>
            <p class="rolelist_li__p2">{{list.real_pay}}平台币</p>
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
      text: '代充记录',
      rightText: '',
      toUrl: ''
    }
  },
  computed: {
    list: {
      get () {
        return store.state.chargeRecordList[this.$route.query.index]
      },
      set (val) {

      }
    }
  },
  created () {
    store.dispatch('chargeRecord', {mem_id: this.$route.query.memId, agent_id: this.$route.query.agentId})
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
