<template>
  <div id="app">
      <sliderDelete>
      </sliderDelete>
      <ul class="slide">
        <transition-group name="fade" :enter-class="flag==0 ? 'fade-in-enter' : 'fade-enter'" :leave-active-class="flag==0?'fade-out-active' : 'fade-leave-to' ">
          <li v-for="item in 10" :key="item" v-if="item == num">{{item}}</li>
        </transition-group>
      </ul>
      <button @click="changeNum(0)">点我</button>
      <button @click="changeNum(1)">点我1</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import sliderDelete from './components/slideDelete.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    sliderDelete
  },
  data(){
    return{
      num: 1,
      flag: 0,
    }
  },
  methods:{
    changeNum(flag){
      this.flag = flag;
      if (this.num < 10){
        this.num = this.num + 1;
      }else if(this.num <= 0) {
        this.num = this.num + 1
      }else if (this.num >=10){
        this.num = this.num -1
      }
      
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction:column;
}
html, body{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
.container{
  background-color: orange;
  height: 100%;
}
.rolldate-container .rolldate-wrapper>#undefined{
  display: none;
}
.slide{
  width: 100px;
  height: 30px;
  position: relative;
}
li{
  display: inline-block;
  width: 100px;
  text-align: center;
  transition: all 1s;
  position: absolute;
}
.left{
  transform: translateX(-100px);
}
.fade-enter{
  transform: translateX(-100px);
}
.fade-leave-to{ 
  transform: translateX(100px);
}
.fade-in-enter{
  transform: translateX(100px);
}
.fade-out-active{
  transform: translateX(-100px);
}
</style>
