<template>
  <div class="myGame">
    <Search :platform="platform" @searchKey="searchKey" @searchType="searchType"/>
    <template v-for="(item, index) in myGameList" >
      <ul class="myGame_ul" v-if="item.status !== 2" :key="index">
        <li class="myGame_ul__li" >
          <div class="gameImg"><img :src='item.icon' alt=""/></div>
          <div class="gameDetail">
            <p class="gameDetail_p1">
              {{item.gamename}}&nbsp;&nbsp;
              <img v-if="item.classify_name === 3" src="../../assets/images/huosdk_tg_android.png" >
              <img v-else-if="item.classify_name === 4" src="../../assets/images/huosdk_tg_ios.png" >
              <img v-else src="../../assets/images/huosdk_tg_h5.png" >
            </p>
            <p class="gameDetail_p2">游戏ID：{{item.game_id}}</p>
            <p class="gameDetail_p3"><span class="discounts">{{packStatus(item.status)}}</span></p>
          </div>
          <div class="gameBtn"><a href="javascript:;" @click="popTip(item.ag_id)">生成包</a></div>
        </li>
        <li class="proportion">
          <div>
            <p>渠道折扣：<span>{{1 - item.agent_rebate * 1}}折</span></p>
            <p>下级渠道折扣：
              <span>{{1 - item.sub_agent_rebate * 1}}折</span>
              <img src="../../assets/images/huosdk_tg_down.png" v-if="! showArray.includes(index)" alt="" @click="pushShowArray(index)">
              <img src="../../assets/images/huosdk_tg_up.png" v-if="showArray.includes(index)" alt="" @click="pushShowArray(index)">
            </p>
          </div>
          <div v-if="showArray.includes(index)">
            <p>发币折扣：<span>{{item.agent_rate}}折</span></p>
            <p>下级发币折扣：<span>{{item.sub_agent_rate}}折</span></p>
          </div>
          <div>
            <p>玩家首充：<span>{{item.first_mem_rate}}</span></p>
            <p>玩家续充：<span>{{item.mem_rate}}</span></p>
          </div>
        </li>
      </ul>
      <ul class="myGame_ul" v-else :key="index">
        <li class="myGame_ul__li">
           <div class="gameImg"><img :src="item.icon" alt=""/></div>
          <div class="gameDetail">
            <p class="gameDetail_p1">
              {{item.gamename}}&nbsp;&nbsp;
              <img v-if="item.classify_name === 3" src="../../assets/images/huosdk_tg_android.png" >
              <img v-else-if="item.classify_name === 4" src="../../assets/images/huosdk_tg_ios.png" >
              <img v-else src="../../assets/images/huosdk_tg_h5.png" >
            </p>
            <p class="gameDetail_p2">游戏ID：{{item.game_id}}</p>
            <p class="gameDetail_p3"><span class="discounts">已出包</span></p>
          </div>
          <div class="gameBtn">
            <a class="update" href="javascript:;" @click="popTip(item.ag_id)">更新</a>
            <a class="storeCode" href="javascript:;" @click="storeQrcode()">保存二维码</a>
            <a class="cloneHttp" href="javascript:;" @click="copy(item.url)">复制推广</a>
          </div>
        </li>
        <li class="proportion">
          <div>
            <p>渠道折扣：<span>{{1 - item.agent_rebate * 1}}折</span></p>
            <p>下级渠道折扣：
              <span>{{1 - item.sub_agent_rebate * 1}}折</span>
              <img src="../../assets/images/huosdk_tg_down.png" v-if="! showArray.includes(index)" alt="" @click="pushShowArray(index)">
              <img src="../../assets/images/huosdk_tg_up.png" v-if="showArray.includes(index)" alt="" @click="pushShowArray(index)">
            </p>
          </div>
          <div v-if="showArray.includes(index)">
            <p>发币折扣：<span>{{item.agent_rate}}折</span></p>
            <p>下级发币折扣：<span>{{item.sub_agent_rate}}折</span></p>
          </div>
          <div>
            <p>玩家首充：<span>{{item.first_mem_rate}}</span></p>
            <p>玩家续充：<span>{{item.mem_rate}}</span></p>
          </div>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
import search from '../public/search.vue'
export default {
  components: {
    'Search': search
  },
  computed: {
    ...mapGetters([
      'qrCodeStatus',
      'myGameList',
      'generatePackageTip',
      'searchKeyWords',
      'searchClassify'
    ])
  },
  watch: {
    generatePackageTip (curVal, oldVal) {
      if (curVal) {
        if (curVal.indexOf('失败') !== -1) {
          store.commit('UPDATE_TIP_STATUS', {'tip': true, 'msg': '分包失败'})
        } else if (curVal.indexOf('成功') !== -1) {
          store.commit('UPDATE_TIP_STATUS', {'tip': true, 'msg': '分包成功'})
        } else {
          store.commit('UPDATE_TIP_STATUS', {'tip': true, 'msg': curVal})
        }
        setTimeout(function () {
          store.commit('UPDATE_GENERATE_PACKAGE_TIP', {'generatePackageTip': ''})
        }, 500)
      }
    }
  },
  data () {
    return {
      down: -1,
      platform: true,
      showArray: []
    }
  },
  created () {
    store.dispatch('myGameList')
  },
  methods: {
    popTip (id) {
      store.dispatch('generatePackage', {'ag_id': id})
    },
    storeQrcode () {
      store.commit('UPDATE_QRCODE_STATUS', {'qrCodeStatus': true})
    },
    downUp (num) {
      this.down = num
    },
    searchKey () {
      store.dispatch('myGameList', {keywords: this.searchKeyWords})
    },
    searchType () {
      store.dispatch('myGameList', {classify: this.searchClassify})
    },
    pushShowArray (num) {
      if (this.showArray.includes(num)) {
        this.showArray = this.showArray.filter(item => item !== num)
      } else {
        this.showArray.push(num)
      }
    },
    packStatus (num) {
      if (num * 1 === 0) {
        return '待审核'
      } else if (num * 1 === 1) {
        return '待出包'
      } else if (num * 1 === 3) {
        return '出包失败'
      }
    },
    copy (text) {
      let $text = text
      const input = document.createElement('input')
      input.setAttribute('readonly', 'readonly')
      input.setAttribute('value', $text)
      document.body.appendChild(input)
      input.select()
      input.setSelectionRange(0, 9999)
      if (document.execCommand('copy')) {
        document.execCommand('copy')
      }
      document.body.removeChild(input)
    }
  },
  mounted () {
    store.commit('UPDATE_SELECT_NUM', {'num': 1})
  }
}
</script>

<style lang="scss" scoped>
.myGame{
  .myGame_ul{
    margin-bottom: 0.16rem;
    background-color: #fff;
    &__li{
      padding: 0.35rem 0.3rem;
      display: flex;
      border-bottom: 1px solid #EEEEEE;
    }
  }
}
.gameImg{
  width: 1.62rem;
  height: 1.3rem;
  padding-right: 0.32rem;
  img{
    width: 1.3rem;
    height: 1.3rem;
  }
}
.gameDetail{
  flex: 1;
  &_p1{
    font-size:0.28rem;
    color: #333;
    img{
      width: 0.26rem;
      height: 0.3rem;
      vertical-align: middle;
    }
    span{
      font-size: 0.24rem;
      color:#FF3636;
    }
  }
  &_p2{
    font-size: 0.24rem;
    color: #777777;
    padding-top: 0.1rem;
  }
  &_p3{
    font-size: 0.24rem;
    color: #777777;
    padding-top: 0.1rem;
    .discounts{
      color:#FF3636;
    }
  }
}
.gameBtn{
  width: 2.8rem;
  position: relative;
  a{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.1rem;
    height: 0.6rem;
    color: #fff;
    text-align: center;
    font-size: 0.26rem;
    background-color: #67C23A;
    border-radius: 0.05rem;
  }
  .update{
    background-color: #409FFF;
    top:0;
    right: 0;
    top: auto;
    transform: translateY(0);
  }
  .storeCode, .cloneHttp{
    display: block;
    height: 0.54rem;
    line-height: 0.54rem;
    font-size: 0.22rem;
    color: #777;
    border: 1px solid #EEEEEE;
    background-color: #F7F7F7;
    position: absolute;
    top: auto;
    transform: translateY(0);
  }
  .storeCode{
    bottom: 0;
    left:0;
    width: 1.4rem;
  }
  .cloneHttp{
    right: 0;
    bottom: 0;
    width: 1.2rem;
  }
}
.proportion{
  padding: 0.26rem 0.3rem;
  div{
    display: flex;
    p{
      flex: 1;
      font-size: 0.24rem;
      color: #99A9BF;
      span{
        color: #333;
      }
      img{
        width: 0.18rem;
        height: 0.11rem;
      }
    }
  }
  div:nth-child(3), div:nth-child(2){
    padding-top: 0.3rem;
  }
}
</style>
