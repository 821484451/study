<template>
  <div class="home">
    <Header :left="left" :text="text"/>
    <div class="main">
      <ul class="list">
        <li class="list_li">
          <div class="list_li__div1">
            <p>申请时间：2018-02-01 15:30</p>
            <p>状态：<span>已结算</span></p>
          </div>
          <div class="list_li__div2">
            <p>20.00</p>
            <p>结算金额</p>
          </div>
        </li>
        <li class="detail">
          <div>审核时间：<span>2018-08-08 10:42</span></div>
          <div>结算时间：<span>2018-08-08 10:42</span></div>
        </li>
      </ul>
      <ul class="list">
        <li class="list_li">
          <div class="list_li__div1">
            <p>申请时间：2018-02-01 15:30</p>
            <p>状态：<span>已结算</span></p>
          </div>
          <div class="list_li__div2">
            <p>20.00</p>
            <p>结算金额</p>
          </div>
        </li>
        <li class="detail">
          <div>审核时间：<span>2018-08-08 10:42</span></div>
          <div>结算时间：<span>2018-08-08 10:42</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../public/header.vue'
export default {
  components: {
    'Header': Header
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      left: 1,
      text: '支出明细',
      num: []
    }
  },
  created () {
  },
  methods: {
    changeNum (num) {
      let self = this
      if (this.num.includes(num)) {
        this.num.splice(self.num.indexOf(num), 1)
      } else {
        this.num.push(num)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    overflow-x: hidden;
    background-color: #f5f6ff;
  }
}
.list{
  background-color: #fff;
  padding: 0 0.3rem;
  margin-bottom: 0.16rem;
  &_li{
    height: 1.44rem;
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    &__div1{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p:nth-child(1){
        color: #000;
        font-size: 0.3rem;
        span{
          color: #7C7C7C;
          font-size: 0.24rem;
        }
      }
      p:nth-child(2){
        color: #7C7C7C;
        font-size: 0.24rem;
        padding-top: 0.16rem;
        span{
          color: #FF3636;
        }
      }
    }
    &__div2{
      width: 1.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-direction: column;
      p:nth-child(1){
        color: #FF3D59;
        font-size: 0.56rem;
      }
      p:nth-child(2){
        color: #888;
        font-size: 0.24rem;
      }
      img{
        position: absolute;
        width: 0.23rem;
        height: 0.12rem;
        right: 0;
        bottom: 0.11rem;
      }
    }
  }
}
.detail{
  height: 0.9rem;
  display: flex;
  div{
    flex: 1;
    font-size: 0.24rem;
    color: #99A9BF;
    display: flex;
    align-items: center;
    span{
      color: #555555;
    }
  }
}
</style>
