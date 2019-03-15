import * as api from '../api'
import router from '../router'

export const userLogin = ({ commit }, data) =>{
	api.userLogin(data, res => {

	}, err =>{
		console.log(err)
	})
}
export const updateLoadingStatus = ({ commit }, data) =>{
	
	commit('updateLoadingStatus', data)
}

export const connectSocket =({ commit }, data) =>{
	if(!WebSocket){
    alert("您的浏览器不支持WebSocket")
      
  } else{
    //连接 socket 服务器
    var socket = new WebSocket('ws://localhost:8080');
    commit('updateSocket', socket);
  	//监听服务端断开
    socket.onclose = function(){
      router.push('/login');
      alert("服务已断开"); 
      commit('updateSocket', null);
    };
    //监听服务端异常
    socket.onerror = function(){
      router.push('/login');
      alert("服务错误");
      commit('updateSocket', null);
    }
  }
}