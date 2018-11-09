<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl"/>
    <div class="main">
      <div class="role">
        <ul class="rolelist" v-if="list">
          <li class="rolelist_li">
            <p class="rolelist_li__p1">订单编号</p>
            <p class="rolelist_li__p2">{{list.settle_id}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">申请时间</p>
            <p class="rolelist_li__p2">{{list.create_time}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">更新时间</p>
            <p class="rolelist_li__p2">{{list.check_time}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">打款时间</p>
            <p class="rolelist_li__p2">{{list.settle_time}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">提现方式</p>
            <p class="rolelist_li__p2">银行卡提现</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">提现账号</p>
            <p class="rolelist_li__p2">{{list.banknum}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">提现金额</p>
            <p class="rolelist_li__p2"><span>{{list.money}}</span>平台币</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">状态</p>
            <p class="rolelist_li__p2" style="color:#1A93F6">{{list.status_name}}</p>
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
      text: '提现详情',
      rightText: '',
      toUrl: ''
    }
  },
  computed: {
    ...mapGetters([
      'cashCount'
    ]),
    list: {
      get () {
        let self = this
        return store.state.cashRecord.list.filter(item => item.settle_id === self.$route.query.num)[0]
      },
      set (val) {

      }
    }
  },
  created () {
    var self = this
    this.$store.dispatch('cashRecord', {settle_id: self.$route.query.num})
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
