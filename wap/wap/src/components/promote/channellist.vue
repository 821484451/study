<template>

  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl" @popAC="popAC"/>
    <div class="main">
      <Search :channelStatus="channelStatus" :channelList="channelList" :time="time" :channelName="channelName" @searchKey="searchKey" @searchType="searchType"/>
      <div class="searchContent">
        <ul class="searchContent_ul" >
          <li class="searchContent_ul__li" v-for="(item, index) in channelList" :key="index" >
            <div class="channelName">{{item.user_nicename}}</div>
            <div class="channelAccount">
              <div>渠道账号:<span>{{item.user_login}}</span></div>
              <div>手机号码:<span>{{item.mobile}}</span></div>
            </div>
            <div class="channelTime">{{item.create_time}}</div>
          </li>
        </ul>
      </div>
      <p class="loadMoreTip" v-if="! loadStatus"><span>我是有底线的</span><i></i></p>
    </div>
    <div class="addChannel" v-if="popAddChannel" @click.prevent>
      <div class="addChannelBox">
        <h4>添加下级渠道</h4>
        <div class="inputList">
          <div class="inputBox">
            <span class="inputBox_name">渠道名称：</span>
            <input type="text" class="inputBox_input" v-model="agentName">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">渠道账号：</span>
            <input type="text" class="inputBox_input" v-model="agentUser">
          </div>
          <div class="inputBox">
            <span class="inputBox_name">登陆密码：</span>
            <input type="password" class="inputBox_input" v-model="agentPass">
          </div>
        </div>
        <p class="tip">{{tip}}</p>
        <div class="addChannelBox_footer">
          <a href="javascript:;" @click.stop="popAC()">取消</a>
          <a href="javascript:;" @click.stop="addChannel()">确定</a>
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
      text: '渠道列表',
      rightText: '添加',
      toUrl: '',
      popAddChannel: false,
      agentName: '',
      agentPass: '',
      agentUser: '',
      tip: '',
      channelStatus: true,
      time: true,
      channelName: false,
      loadStatus: true

    }
  },
  computed: {
    ...mapGetters([
      'channelList',
      'channelCount',
      'searchTime1',
      'searchTime2',
      'searchChannelName',
      'searchKeyWords',
      'sw'
    ])
  },
  watch: {
    channelList (curVal, oldVal) {
      let dom3 = document.querySelector('.main')
      if (curVal.length * 1 < this.playerListCount) {
        store.commit('UPDATE_SW', {sw: true})
      } else {
        dom3.removeEventListener('scroll', function () {}, false)
        this.loadStatus = false
      }
    }
  },
  methods: {
    popAC () {
      this.popAddChannel = !this.popAddChannel
    },
    addChannel () {
      let niceName = this.agentName.trim()
      let userName = this.agentUser.trim()
      let password = this.agentPass.trim()
      let reg1 = /^[0-9a-zA-Z]{6,16}$/
      let reg2 = /^[0-9a-zA-Z_]{6,16}$/
      if (niceName && userName && password) {
        if (reg1.test(userName)) {
          if (reg2.test(password)) {
            store.dispatch('addChannel', {agent_nicename: this.agentName, agent_login: this.agentUser, agent_pass: this.agentPass})
            this.popAC()
            this.agentName = ''
            this.agentUser = ''
            this.agentPass = ''
            this.tip = ''
          } else {
            this.tip = '*密码只能为6-16位数字或字母,下划线'
          }
        } else {
          this.tip = '*账号只能为6-16位数字或字母'
        }
      } else {
        this.tip = '渠道信息不能为空'
      }
    },
    searchKey () {
      store.dispatch('channelList', {user_nicename: this.searchKeyWords})
    },
    searchType () {
      store.dispatch('channelList', {
        user_login: this.searchChannelName,
        start_time: this.searchTime1,
        end_time: this.searchTime2
      })
    }
  },
  created () {
    store.dispatch('channelList')
    store.commit('UPDATE_SW', {sw: true})
  },
  mounted () {
    let _self = this
    let dom1 = document.querySelector('.main')
    let dom2 = document.querySelector('.searchContent')
    dom1.addEventListener('scroll', function () {
      if (dom1.scrollTop + dom1.offsetHeight >= dom2.offsetHeight) {
        if (_self.sw === true) {
          store.commit('UPDATE_SW', {sw: true})
          if (_self.channelCount > _self.channelList.length) {
            store.dispatch('channelList', {page: Math.ceil(_self.channelList.length / 20) + 1, offset: 20})
          }
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #f5f6ff;
  height: 100%;
}
.tip{
  color: #FF3636;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.5rem;
}
.searchContent{
  background-color: #fff;
  &_ul{
    padding: 0 0.3rem;
    &__li{
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
      border-bottom: 1px solid #EEEEEE;
      .channelName{
        font-size: 0.3rem;
        color: #000;
      }
      .channelAccount{
        padding-top: 0.21rem;
        display: flex;
        div{
          flex: 1;
          font-size: 0.24rem;
          span{
            color: #E41515;
          }
        }
      }
      .channelTime{
        padding-top: 0.21rem;
        font-size: 0.24rem;
        color: #7C7C7C;
      }
    }
  }
}
.addChannel{
  position: absolute;
  width:100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  left: 0;
  top: 0;
  z-index: 100;
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
    width: 35%;
    height: 100%;
    text-align: center;
    line-height: 0.75rem;
    font-size: 0.26rem;
  }
  &_input{
    height: 100%;
    border: none;
    width: 65%;
  }
}

</style>
