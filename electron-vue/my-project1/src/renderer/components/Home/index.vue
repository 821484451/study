<template>
  <div class="home">
    <div class="head">欢迎<span>{{userName}}</span>进入星哥聊天室</div>
    <div class="content">
      <p class="leave" v-if="leavePerson.length > 0" v-for="(item, index) in leavePerson" :key="index">
        {{item.nickName}}离开了
      </p>
      <div class="contentContainer" v-for="(item, index) in chatContent" :key="index">
        <div class="contentContainer-other" v-if="item.nickname != userName">
          <span >{{item.nickname}}&nbsp;&nbsp;{{item.time}}：{{item.message}}</span>
        </div>
        <div class="contentContainer-self" v-else>
          <span >{{item.nickname}}&nbsp;&nbsp;{{item.time}}：{{item.message}}</span>
        </div>
      </div>
    </div>
    <div class="btn">
      <div class="btn-text">
        <input type="text" v-model="chatText" placeholer="请输入消息" name="">
      </div>
      <div class="btn-c">
          <a-button type="primary" @click="sendMessage" >发送</a-button>
      </div>
      
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        userName: '',
        chatText: '',
        chatContent: [],
        leavePerson: []
      }
    },
    computed:{
      ...mapGetters([
        'Socket'
      ])
    },
    methods:{
      sendMessage(){
        console.log(this.Socket)
        if(this.Socket.readyState){
          
          let self = this;
          var myDate = new Date();
          var now = myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();       
          if (self.chatText.trim().length == 0 ){
            this.$message.warning('输入内容不能为空！')
            return;
          }
          var mesObj = {
              nickname: localStorage.getItem('userName'),
              message: self.chatText,
              time: now
          }
          //向服务端发送消息
          this.Socket.send(JSON.stringify(mesObj));
          this.chatText = '';
        }else{
          this.$router.push('/login');
          localStorage.removeItem('userName')
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      if (!localStorage.getItem('userName')){
        next('/login')
      }else{
        next()
      }
    },
    mounted(){
      let self = this;
      this.userName = localStorage.getItem('userName');
      if (this.Socket) {
        this.Socket.onmessage = function(msg){
          var msgObj = JSON.parse(msg.data);
          console.log(msgObj);
          if(msgObj.status == 0){
            self.leavePerson.push(msgObj);
          } else{
            self.chatContent.push(msgObj); 
          }
        } 
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .head{
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    background-color: blue;
    font-size: 40px;
    span{
      color: red;
    }
  }
  .leave{
    color: #666;
    text-align: center;
    padding-top: 20px;
  }
  .content{
    background: url(../../assets/images/chatbg.gif) no-repeat;
    background-size: 100% 100%;
    flex: 1;
    overflow-x: hidden;
    .contentContainer{
      &-other{
        padding: 30px;
        display: flex;
        span{
          background-color: blue;
          color: #fff;
          padding: 10px;
          border-radius: 20px;
        }
      }
      &-self{
        padding: 30px;
        display: flex;
        justify-content: flex-end;
        span{
          background-color: rgba(0,200,200,1);
          color: #fff;
          padding: 10px;
          border-radius: 20px;
        }
      }
    }
  }
  .btn{
    height: 60px;
    border-top:1px solid #ccc;
    display: flex;
    &-text{
      flex: 1;
      padding: 10px;
      box-sizing: border-box;
      input{
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
      }

    }
    &-c{
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
