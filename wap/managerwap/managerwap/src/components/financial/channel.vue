<template>
  <div class="content">
    <Search/>
    <ul class="list">
      <li class="list_li">
        <div class="list_li__div1">
          <p>渠道001</p>
          <p>一级代理</p>
        </div>
        <div class="list_li__div2">
          <p>20.00</p>
          <p>账户金额</p>
        </div>
      </li>
      <li class="detail">
        <router-link to="/financial/income">收益明细</router-link>
        <router-link to="/financial/expend">支出明细</router-link>
      </li>
    </ul>
    <ul class="list">
      <li class="list_li">
        <div class="list_li__div1">
          <p>渠道001</p>
          <p>一级代理</p>
        </div>
        <div class="list_li__div2">
          <p>20.00</p>
          <p>账户金额</p>
        </div>
      </li>
      <li class="detail">
        <router-link to="/financial/income">收益明细</router-link>
        <router-link to="/financial/expend">支出明细</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../../store'
import Search from '../public/search.vue'
export default {
  components: {
    'Search': Search
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      num: []
    }
  },
  created () {
    store.commit('UPDATE_CHANNEL_SELECT', {'num': 3})
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
  position: relative;
  a{
    display: inline-block;
    width: 1.5rem;
    height: 0.56rem;
    color: #666;
    font-size: 0.24rem;
    background-color: #F6F6F8;
    text-align: center;
    line-height: 0.56rem;
    border-radius: 0.03rem;
    position: absolute;
    border: 1px solid #DEDEDE;
  }
  a:nth-child(1){
    right: 1.7rem;
    top: 50%;
    transform: translateY(-50%);
  }
  a:nth-child(2){
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
