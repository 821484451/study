<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl"/>
    <div class="main">
      <Search :time="time"  :searchBox="searchBox" @searchType="searchType"/>
      <div class="chargeList">
        <div class="chargeList_head">
          <div class="chargeList_head__div1">
            <p>汇总</p>
            <p>平台币数量：{{ptbGetNum}}&nbsp;&nbsp;&nbsp;&nbsp;支付金额：￥21313</p>
          </div>
          <div class="chargeList_head__div2">
            <img src="../../assets/images/huosdk_tg_rili.png" alt="">
          </div>
        </div>
        <ul class="chargeList_list">
          <li class="chargeList_list__li list" v-for="(item, index) in ptbGetList" :key="index" @click="toDetail('/ptbgetdetail')">
            <div class="list_div1">
              <p class="list_div1__p1">{{item.payway_txt}}</p>
              <p class="list_div1__p2">{{item.create_time}}</p>
            </div>
            <div class="list_div2">
              <p class="list_div2__p1">+{{item.ptb_cnt}}</p>
              <p class="list_div2__p2">平台币</p>
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
      text: '平台币获取记录',
      rightText: '',
      toUrl: '',
      time: true,
      orderNum: true,
      enterAccount: true,
      searchBox: false,
      loadStatus: true
    }
  },
  created () {
    store.dispatch('ptbGetRecord')
    store.commit('UPDATE_SW', {sw: true})
  },
  computed: {
    ...mapGetters([
      'ptbGetNum',
      'ptbGetList',
      'searchTime1',
      'searchTime2',
      'ptbGetCount',
      'sw'
    ])
  },
  methods: {
    toDetail (url) {
      this.$router.push({path: url})
    },
    searchKey () {

    },
    searchType () {
      store.dispatch('ptbGetRecord', {
        start_time: this.searchTime1,
        end_time: this.searchTime2
      })
    }
  },
  watch: {
    ptbGetList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.ptbGetCount) {
        store.commit('UPDATE_SW', {sw: true})
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
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
          if (_self.ptbGetCount > _self.ptbGetList.length) {
            store.dispatch('ptbGetRecord', {page: Math.ceil(_self.ptbGetList.length / 20) + 1, offset: 20})
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
      padding-top: 0.23rem;
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
