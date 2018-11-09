<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl"/>
    <div class="main">
      <Search :withdraw="withdraw" :time="time" :orderNum="orderNum" @searchKey="searchKey" @searchType="searchType" />
      <div class="chargeList">
        <div class="chargeList_head">
          <div class="chargeList_head__div1">
            <p>汇总</p>
            <p>提现金额：￥{{cashSum}}</p>
          </div>
          <div class="chargeList_head__div2">
            <img src="../../assets/images/huosdk_tg_rili.png" alt="">
          </div>
        </div>
        <ul class="chargeList_list">
          <li class="chargeList_list__li list" v-for="(item, index) in cashList" :key="index" @click="toDetail('/cashrecorddetail', item.settle_id)">
            <div class="list_div1">
              <p class="list_div1__p1">{{item.banknum}}&nbsp;&nbsp;&nbsp;&nbsp;<br><span>{{item.status_name}}</span></p>
              <p class="list_div1__p2">{{item.create_time}}</p>
            </div>
            <div class="list_div2">
              <p class="list_div2__p1">-{{item.money}}</p>
              <p class="list_div2__p2">提现金额</p>
            </div>
          </li>
        </ul>
      </div>
      <p class="loadMoreTip" v-if="! loadStatus"><span>我是有底线的</span><i></i></p>
    </div>
  </div>
</template>

<script>
import header from '../public/header.vue'
import search from '../public/search.vue'
import { mapGetters } from 'vuex'
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
      text: '提现记录',
      rightText: '',
      toUrl: '',
      withdraw: true,
      time: true,
      orderNum: true,
      searchBox: false,
      loadStatus: true
    }
  },
  computed: {
    ...mapGetters([
      'cashSum',
      'cashList',
      'searchCheckStatus',
      'searchOrderId',
      'searchTime1',
      'searchTime2',
      'cashCount',
      'sw'
    ])
  },
  watch: {
    cashList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.cashCount) {
        store.commit('UPDATE_SW', {sw: true})
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
    }
  },
  created () {
    this.$store.dispatch('cashRecord')
    store.commit('UPDATE_SW', {sw: true})
  },
  methods: {
    toDetail (url, index) {
      this.$router.push({path: url, query: {num: index}})
    },
    searchKey () {
      store.dispatch('cashRecord', {game_name: this.searchKeyWords})
    },
    searchType () {
      store.dispatch('cashRecord', {
        status: this.searchCheckStatus,
        settle_id: this.searchOrderId,
        start_time: this.searchTime1,
        end_time: this.searchTime2
      })
    }
  },
  mounted () {
    let _self = this
    let dom1 = document.querySelector('.main')
    let dom2 = document.querySelector('.main').children[1]
    dom1.addEventListener('scroll', function () {
      if (dom1.scrollTop + dom1.offsetHeight >= dom2.offsetHeight) {
        if (_self.sw === true) {
          store.commit('UPDATE_SW', {sw: false})
          if (_self.cashCount > _self.cashList.length) {
            store.dispatch('cashRecord', {page: Math.ceil(_self.cashList.length / 20) + 1, offset: 20})
          }
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
}
.chargeList_list{
  padding: 0 0.3rem;
  background-color: #fff;
  &__li{
    display: flex;
    justify-content: space-between;
  }
}
.list{
  height: 1.44rem;
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
      span{
        color: #E41515;
        font-size: 0.24rem;
      }
    }
    &__p2{
      font-size: 0.24rem;
      color: #7C7C7C;
      padding-top: 0.13rem;
    }
  }
  &_div2{
    position: relative;
    &__p1{
      font-size: 0.36rem;
      color: #FF3D59;
      font-weight: bold;
    }
    &__p2{
      font-size: 0.2rem;
      color: #888;
      text-align: center;
    }
    i{
      width: 1px;
      height: 0.5rem;
      background-color: #EEE;
      position: absolute;
      left: -0.5rem;
      top: 50%;
      margin-top: -0.25rem;

    }
  }

}
.chargeList_head{
  padding: 0 0.3rem;
  display: flex;
  background-color: #F5F5F9;
  &__div1{
    flex: 1;
    p:nth-child(1){
      font-size: 0.28rem;
      color: #333;
      line-height: 0.5rem;
    }
    p:nth-child(2){
      font-size: 0.24rem;
      line-height: 0.5rem;
      color: #999;
    }
    p:nth-child(3){
      font-size: 0.24rem;
      line-height: 0.5rem;
      color: #999;
    }
  }
  &__div2{
    width: 0.45rem;
    position: relative;
    img{
      width: 0.35rem;
      height: 0.34rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }

  }
}
</style>
