<template>
  <div class="main">
    <Search/>
    <ul class="list">
      <li class="list_li">
        <div class="list_li__div1"><img src="../../assets/images/huo_wap_1.png" alt=""></div>
        <div class="list_li__div2">
          <p>绝地求生</p>
          <p>付费人数：5820&nbsp;&nbsp;&nbsp;&nbsp;付费率：23%</p>
        </div>
        <div class="list_li__div3">
          <p>208</p>
          <p>付费金额</p>
        </div>
      </li>
      <li class="list_li">
        <div class="list_li__div1"><img src="../../assets/images/huo_wap_2.png" alt=""></div>
        <div class="list_li__div2">
          <p>植物大战僵尸</p>
          <p>付费人数：5820&nbsp;&nbsp;&nbsp;&nbsp;付费率：23%</p>
        </div>
        <div class="list_li__div3">
          <p>208</p>
          <p>付费金额</p>
        </div>
      </li>
      <li class="list_li">
        <div class="list_li__div1"><img src="../../assets/images/huo_wap_3.png" alt=""></div>
        <div class="list_li__div2">
          <p>楚乔传</p>
          <p>付费人数：5820&nbsp;&nbsp;&nbsp;&nbsp;付费率：23%</p>
        </div>
        <div class="list_li__div3">
          <p>208</p>
          <p>付费金额</p>
        </div>
      </li>
      <li class="list_li">
        <div class="list_li__div1">4</div>
        <div class="list_li__div2">
          <p>绝地求生</p>
          <p>付费人数：5820&nbsp;&nbsp;&nbsp;&nbsp;付费率：23%</p>
        </div>
        <div class="list_li__div3">
          <p>208</p>
          <p>付费金额</p>
        </div>
      </li>
      <li class="list_li">
        <div class="list_li__div1">5</div>
        <div class="list_li__div2">
          <p>绝地求生</p>
          <p>付费人数：5820&nbsp;&nbsp;&nbsp;&nbsp;付费率：23%</p>
        </div>
        <div class="list_li__div3">
          <p>208</p>
          <p>付费金额</p>
        </div>
      </li>
      <li class="list_li">
        <div class="list_li__div1">6</div>
        <div class="list_li__div2">
          <p>绝地求生</p>
          <p>付费人数：5820&nbsp;&nbsp;&nbsp;&nbsp;付费率：23%</p>
        </div>
        <div class="list_li__div3">
          <p>208</p>
          <p>付费金额</p>
        </div>
      </li>
      <li class="list_li">
        <div class="list_li__div1">7</div>
        <div class="list_li__div2">
          <p>绝地求生</p>
          <p>付费人数：5820&nbsp;&nbsp;&nbsp;&nbsp;付费率：23%</p>
        </div>
        <div class="list_li__div3">
          <p>208</p>
          <p>付费金额</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Search from '../public/search.vue'
import store from '../../store'
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

    }
  },
  created () {
    store.commit('UPDATE_CHANNEL_SELECT', {'num': 4})
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.list{
  padding: 0 0.3rem;
  background-color: #fff;
  &_li{
    border-bottom: 1px solid #EEE;
    display: flex;
    height: 1.44rem;
    &__div1{
      color: #FFA63D;
      font-size: 0.3rem;
      width: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 0.3rem;
      img{
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    &__div2{
      flex: 1;
      padding-top: 0.27rem;
      p:nth-child(1){
        color: #000;
        font-size: 0.3rem;
      }
      p:nth-child(2){
        padding-top: 0.15rem;
        color: #888;
        font-size: 0.24rem;
      }
    }
    &__div3{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-item: center;
      p:nth-child(1){
        color: #FF3D59;
        font-size: 0.56rem;
        text-align: center;
      }
      p:nth-child(2){
        color: #888;
        font-size: 0.24rem;
        text-align: center;
      }
    }
  }
}
</style>
