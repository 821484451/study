<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl" @popAC="popAC" />
    <div class="main">
      <Search :time="time"  :searchBox="searchBox"  :channelStatus="channelName" :channelList="channelList" @searchKey="searchKey" @searchType="searchType"/>
      <div class="chargeList">
        <div class="chargeList_head">
          <div class="chargeList_head__div1">
            <p>汇总</p>
            <p>发放数量：{{ptbIssueNum}}&nbsp;&nbsp;&nbsp;&nbsp;<span>支付金额：￥21313</span></p>
          </div>
          <div class="chargeList_head__div2">
            <img src="../../assets/images/huosdk_tg_rili.png" alt="">
          </div>
        </div>
        <ul class="chargeList_list">
          <li class="chargeList_list__li list" v-for="(item, index) in ptbIssuingList" :key="index"  @click="toDetail('/ptbissuedetail/1', item.order_id)">
            <div class="list_div1">
              <p class="list_div1__p1">{{item.give_agent_name}}</p>
              <p class="list_div1__p2">{{item.create_time}}</p>
            </div>
            <div class="list_div2">
              <p class="list_div2__p1">-{{item.ptb_cnt}}</p>
              <p class="list_div2__p2">发币数量</p>
              <i></i>
            </div>
          </li>
        </ul>
      </div>
      <p class="loadMoreTip" v-if="! loadStatus"><span>我是有底线的</span><i></i></p>
    </div>
    <div class="addChannel" v-if="popAddChannel" @touchmove.prevent>
      <div class="addChannelBox">
        <h4>平台币发放</h4>
        <div class="inputList">
          <div class="inputBox">
            <span class="inputBox_name">充值账号：</span>
            <input type="text" class="inputBox_input">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">充值金额：</span>
            <input type="text" class="inputBox_input">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">支付金额：</span>
            <input type="text" class="inputBox_input">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">支付密码：</span>
            <input type="text" class="inputBox_input">
          </div>
        </div>
        <div class="addChannelBox_footer">
          <a href="javascript:;" @click.stop="popAC()">取消</a>
          <a href="javascript:;" @click.stop="popAC()">发放</a>
        </div>
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
      right: 1,
      text: '平台币发放记录',
      rightText: '发放',
      toUrl: '',
      time: true,
      orderNum: true,
      playerChannel: true,
      searchBox: false,
      popAddChannel: false,
      playerAccount: true,
      channelName: true,
      loadStatus: true
    }
  },
  created () {
    store.dispatch('ptbIssuingRecord')
    if (this.channelCount) {
      store.dispatch('channelList', {offset: this.channelCount})
    } else {
      store.dispatch('channelList')
    }
  },
  computed: {
    ...mapGetters([
      'ptbIssuingList',
      'ptbIssueNum',
      'searchChannelName',
      'searchTime1',
      'searchTime2',
      'channelCount',
      'channelList',
      'ptbIssueCount',
      'sw'
    ])
  },
  watch: {
    channelCount (curVal, oldVal) {
      if (curVal) {
        store.dispatch('channelList', {offset: curVal})
      }
    },
    ptbIssuingList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.ptbIssueCount) {
        store.commit('UPDATE_SW', {sw: true})
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
    }
  },
  methods: {
    toDetail (url, index) {
      this.$router.push({path: url, query: {num: index}})
    },
    popAC () {
      this.popAddChannel = !this.popAddChannel
    },
    searchKey () {

    },
    searchType () {
      store.dispatch('ptbIssuingRecord', {
        sub_agent_name: this.searchChannelName,
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
          if (_self.ptbIssueCount > _self.ptbIssuingList.length) {
            store.dispatch('ptbIssuingRecord', {page: Math.ceil(_self.ptbIssuingList.length / 20) + 1, offset: 20})
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
      font-size: 0.56rem;
      color: #FF3D59;
      font-weight: bold;
    }
    &__p2{
      font-size: 0.24rem;
      color: #888;
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
.addChannel{
  position: fixed;
  width:100%;
  height: 100%;
  left: 0;
  top:0;
  background-color: rgba(0,0,0,0.5);
  .addChannelBox{
    width: 5.8rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 0.07rem;
    font-size: 0.3rem;
    color: #333;
    h4{
      line-height: 1rem;
      text-align: center;
    }
    &_footer{
      height: 1rem;
      line-height: 1rem;
      text-align:center;
      display: flex;
      margin-top: 0.2rem;
      a{
        flex: 1;
      }
      a:nth-child(1){
        color: #777;
        border-top: 1px solid #EEEEEE;
        border-right: 1px solid #EEEEEE;
      }
      a:nth-child(2){
        color:#409FFF;
        border-top: 1px solid #EEEEEE;
      }
    }
  }
}
.inputList{
  padding: 0 0.3rem;
}
.inputBox{
  height: 0.75rem;
  line-height: 0.75rem;
  display: flex;
  border: 1px solid #EEEEEE;
  margin-bottom: 0.15rem;
  &_name{
    width: 30%;
    height: 100%;
    text-align: right;
    line-height: 0.75rem;
    font-size: 0.26rem;
  }
  &_input{
    height: 100%;
    border: none;
    width: 70%
  }
  select{
    flex: 1;
    outline: none;
    background-color: #fff;
    width: 70%
  }
}
</style>
