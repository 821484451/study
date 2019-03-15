<template>
	<div class="login">
		<a-form id="components-form-demo-normal-login" class="login-form">
      <div class="title">
        星哥聊天室
      </div>
    <a-form-item>
      <a-input placeholder="Username" v-model="userName">
        <a-icon slot="prefix" type="user"  style="color: rgba(0,0,0,.25)"/>
         <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmpty" />
      </a-input>
    </a-form-item>
    <a-form-item class="pass">
      <a-input  type="password" placeholder="Password" v-model="password" >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox>
        记住账号
      </a-checkbox>
      <div class="buttonBox">
        <a-button type="primary" class="login-form-button" @click="login()">
        登陆
        </a-button>
        <a-button type="primary" class="login-form-button">
          注册
        </a-button>  
      </div>
      
    </a-form-item>
  </a-form>
	</div>
</template>

<script>
	export default{
		name: 'login',
		data(){
			return {
				userName: '',
        password: ''
			}
		},
		methods:{
			login(){
        let self = this;
				if (!this.userName){
          this.$message.warning('用户名不能为空！')
          return;
        }
        if (!this.password){
          this.$message.warning('密码不能为空！')
          return;
        }
        localStorage.setItem('userName', self.userName)
        this.$store.dispatch('connectSocket')
        this.$router.push({path: '/'})
			},
      emitEmpty () {
        this.$refs.userNameInput.focus()
        this.userName = ''
      }
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped>
  .pass{
    margin-bottom: 12px !important;
  }
	.login{
		width: 100%;
    height: 100%;
    position: relative;
    background: url('../../assets/images/bg.png') no-repeat center;
    background-size: cover;
	}
  .title{
    color: #fff;
    font-weight: 400;
    text-align: center;
    font-size: 40px;
  }
  #components-form-demo-normal-login{
    min-width: 400px;
    height: 260px;
    background-color: rgba(255,255,255,0.3);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 60px;
  }
  .ant-form-item label{
    display: block;
  }
  .buttonBox{
    display: flex;
    justify-content: space-around;
  }
</style>