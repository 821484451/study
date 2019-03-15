<template>
  <div id="app">
  	<router-view></router-view>
   	<a-spin tip="Loading..." :spinning="loadingStatus" ></a-spin>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex'
  export default {
    name: 'my-project1',
    data(){
    	return{
    	}
    },
    computed:{
    	...mapGetters([
    		'loadingStatus'
    	])
    },
    watch: {
    	loadingStatus(curVal, oldVal){
    		console.log(curVal);
    	}
    },
    methods: {

    },
    mounted(){
    	
    }
  }
</script>

<style lang="scss" scoped>
  #app{
    width: 100%;
    height: 100%;
  }
	.spin-content{
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
  .ant-spin-show-text{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
