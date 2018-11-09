<template>
  <div class="home">
    <Header :left="left" :text="text" :right="right" :leftUrl="leftUrl"/>
    <div class="gameTab">
      <div class="gameTab_item" @click="selected(0)"><router-link to="/player/playerList">玩家列表<i v-if="selectNum === 0"></i></router-link></div>
      <div class="gameTab_item" @click="selected(1)"><router-link to="/player/roleList">角色列表<i v-if="selectNum === 1"></i></router-link></div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="playerManage" @touchmove.prevent v-if="playerManageStatus">
      <div class="playerManageBox">
        <h4 class="playerManageBox_h4">玩家管理</h4>
        <div class="inputBox">
          <span>注册渠道</span><br/>
          <input type="text" value="火树渠道" disabled="disabled" class="channelName disable">
        </div>
        <div class="inputBox">
          <span>登录密码</span><br/>
          <input type="password" value="12312313" disabled="disabled" class="channelName disable">
        </div>
        <div class="inputBox">
          <span>绑定手机</span><br/>
          <input type="text" value="13137543929" disabled="disabled" class="channelName disable">
        </div>
        <div class="inputBox">
          <span>绑定邮箱</span><br/>
          <input type="text" class="channelName disable">
        </div>
        <div class="playerManageBox_btn">
          <a href="javascript:;" @click="changePlayerManageStatus()">取消</a>
          <a href="javascript:;" @click="changePlayerManageStatus()">确认更改</a>
        </div>
      </div>
    </div>
    <div class="playerManage" @touchmove.prevent v-if="giveGameB" >
      <div class="playerManageBox">
        <h4 class="playerManageBox_h4">发放游戏币</h4>
        <div class="inputBox">
          <span>玩家账号</span><br/>
          <input type="text" value="火树渠道" disabled="disabled" class="channelName">
        </div>
        <div class="inputBox">
          <span>游戏名称</span><br/>
          <input type="text" value="打声归来" disabled="disabled">
        </div>
        <div class="inputBox">
          <span>发放数量</span><br/>
          <input type="text" >
        </div>
        <div class="inputBox">
          <span>备注</span><br/>
          <input type="text" class="channelName">
        </div>
        <div class="inputBox">
          <span>二级密码</span><br/>
          <input type="text" class="channelName">
        </div>
        <div class="playerManageBox_btn">
          <a href="javascript:;" @click="hideGameB()">取消</a>
          <a href="javascript:;" @click="hideGameB()">发币</a>
        </div>
      </div>
    </div>
    <div class="bindPhone" v-if="freezeAccountTip" @touchmove.prevent>
      <div class="bindPhoneBox">
        <div class="bindPhoneBox_content">
          你确定要冻结此账户吗？
        </div>
        <div class="bindPhoneBox_btn">
          <a href="javascript:;" @click.stop="hideFreezeAccount()">取消</a>
          <a href="javascript:;" @click.stop="hideFreezeAccount()">确定</a>
        </div>
      </div>
    </div>
    <div class="playerManage" @touchmove.prevent v-if="reduceGameB" >
      <div class="playerManageBox">
        <h4 class="playerManageBox_h4">扣回游戏币</h4>
        <div class="inputBox">
          <span>玩家账号</span><br/>
          <input type="text" value="火树渠道" disabled="disabled" class="channelName">
        </div>
        <div class="inputBox">
          <span>游戏名称</span><br/>
          <input type="text" value="打声归来" disabled="disabled">
        </div>
        <div class="inputBox">
          <span>游戏币余额</span><br/>
          <input type="text" value="0.00" disabled="disabled">
        </div>
        <div class="inputBox">
          <span>扣回数量</span><br/>
          <input type="text" >
        </div>
        <div class="inputBox">
          <span>备注</span><br/>
          <input type="text" class="channelName">
        </div>
        <div class="inputBox">
          <span>二级密码</span><br/>
          <input type="text" class="channelName">
        </div>
        <div class="playerManageBox_btn">
          <a href="javascript:;" @click="hideReduceGameB()">取消</a>
          <a href="javascript:;" @click="hideReduceGameB()">扣币</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
import header from '../public/header.vue'
export default {
  components: {
    'Header': header
  },
  computed: {
    ...mapGetters([
      'selectNum',
      'playerManageStatus',
      'freezeAccountTip',
      'giveGameB',
      'reduceGameB'
    ])
  },
  watch: {
    freezeAccountTip (curVal, oldVal) {

    }
  },
  data () {
    return {
      left: 1,
      text: '玩家管理',
      right: 0,
      leftUrl: '/'

    }
  },
  created () {

  },
  methods: {
    selected (num) {
      store.commit('UPDATE_SELECT_NUM', {'num': num})
    },
    changePlayerManageStatus () {
      store.commit('UPDATE_PLAYER_MANAGE_STATUE', {flag: false})
    },
    hideFreezeAccount () {
      store.commit('UPDATE_FREEZE_ACCOUNT_STATUE', {flag: false})
    },
    hideGameB () {
      store.commit('UPDATE_GIVE_GAMEB_STATUE', {flag: false})
    },
    hideReduceGameB () {
      store.commit('UPDATE_REDUCE_GAMEB_STATUS', {flag: false})
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  background: none !important;
}
.home{
  background: url('../../assets/images/huosdk_tg_bg_001.png') no-repeat left top;
  background-size: 100% auto;
  height: 100%;
}
.gameTab{
  height: 1rem;
  display: flex;
  &_item{
    flex: 1;
    text-align: center;
    line-height: 1rem;
    font-size: 0.3rem;
    color: #fff;
    position: relative;
    a{
      color: #fff;
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    i{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0.05rem;
      display: inline-block;
      width: 1.4rem;
      height: 0.04rem;
      background-color: #fff;
    }
  }
}
.playerManage{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.5);
}
.playerManageBox{
  width: 6.4rem;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 0.2rem;
  overflow: hidden;
  &_h4{
    height: 1rem;
    line-height: 1rem;
    font-size: 0.32rem;
    color: #fff;
    background-color: #409FFF;
    text-align: center;
    line-height: 1rem;
  }
  &_btn{
    height: 1rem;
    display: flex;
    margin-top: 0.3rem;
    a{
      flex: 1;
      display: block;
      text-align: center;
      line-height: 1rem;
      font-size: 0.28rem;
      color: #777777;
      border-top:1px solid #D2D3D5;
    }
    a:nth-child(1){
      border-right: 1px solid #D2D3D5;
    }
    a:nth-child(2){
      color: #409FFF;
    }
  }
}
.inputBox{
  padding: 0 0.3rem;
  padding-top: 0.32rem;
  font-size: 0;
  span{
    font-size: 0.24rem;
    color: #111111;
  }
  input{
    height: 0.75rem;
    text-indent: 0.31rem;
    width: 100%;
    border: 1px solid #BBBBBB;
    border-radius: 0.05rem;
    margin-top: 0.15rem;
    font-size: #808695;
  }
  input[disabled='disabled']{
    background-color: #F5F5F9;
    color: #808695;
  }
}
.bindPhone{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  left: 0;
  top: 0;
  .bindPhoneBox{
    width: 5.2rem;
    height: 2.9rem;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    &_content{
      height: 1.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.3rem;
      color: #333;
      text-align: center;
    }
    &_btn{
      height: 1rem;
      width: 100%;
      display: flex;
      a{
        flex: 1;
        text-align: center;
        line-height: 1rem;
        font-size: 0.28rem;
      }
      a:nth-child(1){
        color: #999;
        border-top: 1px solid #EEEEEE;
        border-right: 1px solid #EEEEEE;
      }
      a:nth-child(2){
        color: #409FFF;
        border-top: 1px solid #EEEEEE;
      }
    }
  }
}
</style>
