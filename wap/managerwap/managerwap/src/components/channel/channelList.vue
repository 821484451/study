<template>
  <div class="playerList">
    <Search/>
    <div class="list">
      <div class="list_top">
        <div>
          <p>渠道001&nbsp;&nbsp;<span>禁用</span></p>
        </div>
        <div>
          <p>渠道名称：火渠道</p>
          <p>账号：13512331233</p>
        </div>
        <div>
          <p>等级：二级代理</p>
          <p>创建时间：2018-06-01 15:30</p>
        </div>
      </div>
      <div class="list_bottom">
        <a href="javascript:;">编辑</a>
        <a href="javascript:;">解冻</a>
        <a href="javascript:;">发币</a>
        <a href="javascript:;">扣币</a>
        <a href="javascript:;">余额统计</a>
      </div>
    </div>
    <div class="list">
      <div class="list_top">
        <div>
          <p>渠道002&nbsp;&nbsp;<span>正常</span></p>
        </div>
        <div>
          <p>渠道名称：渠道01</p>
          <p>账号：13412311231</p>
        </div>
        <div>
          <p>等级：二级代理</p>
          <p>创建时间：2018-06-01 15:35</p>
        </div>
      </div>
      <div class="list_bottom">
        <a href="javascript:;">编辑</a>
        <a href="javascript:;">冻结</a>
        <a href="javascript:;">发币</a>
        <a href="javascript:;">扣币</a>
        <a href="javascript:;">余额统计</a>
      </div>
    </div>
  </div>
</template>

<script>
import search from '../public/search.vue'
export default {
  components: {
    'Search': search
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {

    }
  },
  created () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.playerList{
  background-color: #f5f6ff;
}
.list{
  padding:0 0.3rem;
  background-color: #fff;
  margin-bottom: 0.16rem;
}
.list_top{
  border-bottom: 1px solid #EEEEEE;
  div{
    display: flex;
    p{
      flex: 1;
      font-size: 0.24rem;
      color: #7C7C7C;
    }
  }
  div:nth-child(1){
    padding-top: 0.34rem;
    p:nth-child(1){
      color: #000000;
      font-size: 0.3rem;
      span{
        color: #FF3636;
        font-size: 0.24rem;
      }
    }
    p:nth-child(2){
      text-align: right;
    }
  }
  div:nth-child(2){
    padding-top: 0.24rem;
  }
  div:nth-child(3){
    padding-top: 0.22rem;
    padding-bottom: 0.24rem;
  }
}
.list_bottom{
  padding: 0.2rem 0;
  display: flex;
  justify-content: space-between;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.1rem;
    height: 0.6rem;
    border-radius: 0.05rem;
    color: #fff;
    background-color: #67C23A;
    font-size: 0.26rem;

  }
  a:nth-child(5){
    width: 1.5rem;
  }
}
</style>
