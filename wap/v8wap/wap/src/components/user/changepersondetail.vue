<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <ul>
        <li @click="popBox(1)">
          <div class="lab">头像</div>
          <div class="content"><img src="../../assets/images/huosdk_tg_juese.png" alt=""><i class="back"></i></div>
        </li>
        <li>
          <div class="lab">账号</div>
          <div class="content"><input type="text" disabled="disabled" style="background-color: #fff" v-model="account"></div>
        </li>
        <li>
          <div class="lab">昵称</div>
          <div class="content"><input type="text" v-model="nickName" ></div>
        </li>
        <li>
          <div class="lab">性别</div>
          <div class="content"><input type="text" v-model="gender" ></div>
        </li>
        <li>
          <div class="lab">签名</div>
          <div class="content"><input type="text" v-model="sign"></div>
        </li>
      </ul>
      <div class="btn"><a href="javascript:;">确认修改</a></div>
      <div class="btn" style="margin-top: 0.3rem;"><a href="javascript:;" @click="unLogin()" style="background-color: #fff;color: #E71616;">退出登录</a></div>
    </div>
    <div class="popBox" v-if="pop === 1" >
      <ul class="popBox_ul">
        <li class="popBox_ul__li" @click="getCamera()">拍照</li>
        <li class="popBox_ul__li">从相册选择图片</li>
        <li class="popBox_ul__li" @click="popBox(0)">取消</li>
      </ul>
    </div>
  </div>
</template>

<script>
import header from '../public/header.vue'
export default {
  components: {
    'Header': header

  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '修改个人资料',
      pop: 0,
      account: 123123,
      nickName: '木兰家人',
      gender: '女',
      sign: '此用户很懒什么都没留下'
    }
  },
  created () {
  },
  methods: {
    popBox (num) {
      this.pop = num
    },
    unLogin () {
      this.$store.dispatch('loginOut')
    },
    getCamera () {
      function getUserMedia (constraints, success, error) {
        if (navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error)
        } else if (navigator.webkitGetUserMedia) {
          navigator.webkitGetUserMedia(constraints, success, error)
        } else if (navigator.mozGetUserMedia) {
          navigator.mozGetUserMedia(constraints, success, error)
        } else if (navigator.getUserMedia) {
          navigator.getUserMedia(constraints, success, error)
        }
      }
      function success (stream) {
        console.log(stream)
      }
      function error (error) {
        console.log(`访问用户媒体设备失败${error.name}, ${error.message}`)
        console.log(error)
      }
      if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
        getUserMedia({video: {width: 480, height: 320}}, success, error)
      } else {
        alert('不支持访问用户媒体')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #f5f6ff;
  height: 100%;
}
.main{
  padding-top: 0.16rem;
  ul{
    li{
      height: 1rem;
      line-height: 1rem;
      font-size: 0.3rem;
      color: #333;
      display: flex;
      border-bottom: 1px solid #e3e3e3;
      background-color: #fff;
      .lab{
        width: 1.91rem;
        padding-left: 0.31rem;
      }
      .content{
        position:relative;
        flex: 1;
        img{
          width: 0.9rem;
          height: 0.9rem;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          margin-top: -0.45rem;
          left:0;
        }
        .back{
          background:url('../../assets/images/huosdk_tg_back_002.png') no-repeat;
          background-size: 100% 100%;
          display: block;
          width: 0.15rem;
          height: 0.27rem;
          position: absolute;
          right: 0.3rem;
          top: 50%;
          margin-top: -0.135rem;
        }
      }
    }
    li:nth-child(1){
      height: 1.2rem;
      line-height: 1.2rem;
    }
    li:nth-child(2){
      border: none;
    }
    li:nth-child(3){
      margin-top: 0.16rem;
    }
    li:nth-child(5){
      border: none;
      .content{
        color: #bbb;
      }
    }
  }
}
.popBox{
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  &_ul{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3.16rem;
    background-color: #E9ECF1;
    &__li{
      height: 1rem;
      line-height: 1rem;
      font-size: 0.3rem;
      text-align: center;
      background-color: #fff;
      color: #000;
    }
    &__li:nth-child(1){
      border-bottom: 1px solid #DEDEDE;
    }
    &__li:nth-child(3){
      margin-top: 0.16rem;
    }
  }
}
</style>
