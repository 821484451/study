<template>
  <div class="player">
    <Search :channelStatus="channelStatus" :channelList="channelList" :time="time" :playerAccount="playerAccount" @searchKey="searchKey" @searchType="searchType"/>
    <div class="playerList" v-for="(item, index) in playerList" :key="index" >
      <div class="playerList_div1">
        <div class="playerList_div1__left" >
          <p>{{item.username}}</p>
          <p>注册渠道：<span>{{item.user_nicename}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册游戏：<span>{{item.gamename}}</span></p>
          <p>{{item.reg_time}}</p>
        </div>
        <div class="playerList_div1__right">
          <a href="javascript:;" @click="popAC()">代充</a>
        </div>
      </div>
      <div class="playerList_div2">
        <p>
          最后登录：{{$dataFormat('yyyy-MM-dd hh:mm', item.last_login_time)}}
        </p>
        <p>
          <a href="javascript:;" @click="toUrl('/chargerecord', item.id, item.agent_id)">代充记录</a>
          <a href="javascript:;" @click="toUrl('/payrecord', item.id, item.agent_id)">消费记录</a>
        </p>
      </div>
    </div>
    <p class="loadMoreTip" v-if="! loadStatus"><span>我是有底线的</span><i></i></p>
    <div class="addChannel" v-if="popAddChannel">
      <div class="addChannelBox" >
        <h4><a href="javascript:;" :class="select ? '' : 'checked'"  @click="changeSelect(false)">充值游戏币<i></i></a><a @click="changeSelect(true)" :class="select ? 'checked' : ''" href="javascript:;">充值平台币<span></span><i></i></a></h4>
        <div class="inputList" v-if="select">
          <div class="inputBox disable" >
            <span class="inputBox_name">充值账号：</span>
            <input type="text" disabled='disabled' class="inputBox_input" value="13865478426">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">充值平台币：</span>
            <input type="text" class="inputBox_input">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">二级密码：</span>
            <input type="text" class="inputBox_input">
          </div>
        </div>
        <div class="addChannelBox_footer" v-if="select">
          <a href="javascript:;" @click="popAC()">取消</a>
          <a href="javascript:;" @click="popAC()">确定</a>
        </div>
        <div class="inputList" v-if="!select">
          <div class="inputBox disable" >
            <span class="inputBox_name">充值游戏：</span>
            <input type="text" disabled='disabled' class="inputBox_input" value="三姐独尊">
          </div>
          <div class="inputBox disable">
            <span class="inputBox_name">充值账号：</span>
            <input type="text" disabled='disabled' class="inputBox_input" value="13865478426">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">充值游戏币：</span>
            <input type="text" class="inputBox_input">
          </div>
          <div class="inputBox disable">
            <span class="inputBox_name">充值折扣：</span>
            <input type="text" disabled='disabled' class="inputBox_input" value="无折扣">
          </div>
          <div class="inputBox disable">
            <span class="inputBox_name">支付平台币：</span>
            <input type="text" disabled='disabled' class="inputBox_input" value="0">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">支付密码：</span>
            <input type="text" class="inputBox_input">
          </div>
        </div>
        <div class="addChannelBox_footer" v-if="!select">
          <a href="javascript:;" @click="popAC()">取消</a>
          <a href="javascript:;" @click="popAC()">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from '../public/search.vue'
import { mapGetters } from 'vuex'
import store from '../../store'
export default {
  components: {
    'Search': search
  },
  computed: {
    ...mapGetters([
      'playerList',
      'channelCount',
      'channelList',
      'searchTime1',
      'searchTime2',
      'searchPlayerAccount',
      'searchKeyWords',
      'searchChannelName',
      'playerListCount'
    ])
  },
  data () {
    return {
      popAddChannel: false,
      select: false,
      channelStatus: true,
      time: true,
      playerAccount: true,
      sw: true,
      loadStatus: true
    }
  },
  watch: {
    channelCount (curVal, oldVal) {
      if (curVal) {
        store.dispatch('channelList', {offset: curVal})
      }
    },
    playerList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.playerListCount) {
        this.sw = true
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
    }
  },
  created () {
    store.dispatch('playerList')
    if (this.channelCount) {
      store.dispatch('channelList', {offset: this.channelCount})
    } else {
      store.dispatch('channelList')
    }
  },
  methods: {
    popAC () {
      this.popAddChannel = !this.popAddChannel
    },
    changeSelect (flag) {
      this.select = flag
    },
    toUrl (url, memId, agentId) {
      this.$router.push({path: url, query: {memId: 61, agentId: 0}})
    },
    searchKey () {
      store.dispatch('playerList', {game_name: this.searchKeyWords})
    },
    searchType () {
      store.dispatch('playerList', {
        sub_agent_name: this.searchChannelName,
        mem_name: this.searchPlayerAccount,
        start_time: this.searchTime1,
        end_time: this.searchTime2
      })
    }
  },
  mounted () {
    let _self = this
    let dom1 = document.querySelector('.main')
    let dom2 = document.querySelector('.player')
    dom1.addEventListener('scroll', function () {
      if (dom1.scrollTop + dom1.offsetHeight >= dom2.offsetHeight) {
        if (_self.sw === true) {
          _self.sw = false
          if (_self.playerListCount > _self.playerList.length) {
            store.dispatch('playerList', {page: Math.ceil(_self.playerList.length / 20) + 1, offset: 20})
          }
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.playerList{
  background-color: #fff;
  margin-bottom: 0.15rem;
  &_div1{
    padding: 0 0.3rem;
    display: flex;
    border-bottom: 1px solid #EEEEEE;
    &__left{
      flex: 1;
      padding-top: 0.09rem;
      p{
        padding-top: 0.1rem;
      }
      p:nth-child(1){
        font-size: 0.32rem;
        color: #333;
        font-weight: bold;
        line-height: 0.32rem;
      }
      p:nth-child(2){
        font-size: 0.24rem;
        color: #333;
        span{
          color: #E41515;
        }
      }
      p:nth-child(3){
        font-size: 0.24rem;
        color: #999;
        padding-bottom: 0.19rem;
      }
    }
    &__right{
      width: 1.7rem;
      position: relative;
      a{
        display: block;
        width: 1.1rem;
        height: 0.6rem;
        line-height: 0.6rem;
        background-color: #409FFF;
        border-radius: 0.1rem;
        text-align: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        font-size: 0.26rem;
        color: #fff;
      }
    }
  }
  &_div2{
    display: flex;
    height: 1rem;
    padding: 0 0.3rem;
    p{
      line-height: 1rem;
      flex: 1;
    }
    p:nth-child(1){
      font-size: 0.24rem;
      color: #999;
    }
    p:nth-child(2){
      position: relative;
      a{
        display: inline-block;
        width: 1.5rem;
        height: 0.6rem;
        text-align: center;
        font-size: 0.24rem;
        color: #777;
        border: 1px solid #EEEEEE;
        background-color: #F7F7F7;
        border-radius: 0.1rem;
        line-height: 0.6rem;
      }
      a:nth-child(1){
        position: absolute;
        right: 1.7rem;
        top: 50%;
        transform: translateY(-50%);
      }
      a:nth-child(2){
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
.addChannel{
  position: absolute;
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
      display: flex;
      border-bottom: 1px solid #EEEEEE;
      a{
        flex: 1;
        display: block;
        text-align: center;
        line-height: 1rem;
        position: relative;
        color: #000000;
        i{
          display: none;
          width: 1.4rem;
          height: 0.04rem;
          background-color: #409FFF;
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -0.7rem;
        }
        span{
          display: block;
          width: 1px;
          height: 0.57rem;
          position: absolute;
          background-color: #D2D2D2;
          left: 0;
          top: 50%;
          margin-top: -0.285rem;
        }
      }
      .checked{
        color: #409FFF;
        i{
          display: block;
        }
      }

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
  padding-top: 0.29rem;
}
.inputBox{
  height: 0.75rem;
  line-height: 0.75rem;
  display: flex;
  border: 1px solid #EEEEEE;
  margin-bottom: 0.15rem;
  &_name{
    width: 40%;
    height: 100%;
    line-height: 0.75rem;
    font-size: 0.26rem;
    text-indent: 1em;
  }
  &_input{
    height: 100%;
    border: none;
    width: 60%;
  }
}
.disable{
  background-color: #F5F5F9;
  span{
    background-color: #F5F5F9;
  }
  input{
    background-color: #F5F5F9;
  }
}
</style>
