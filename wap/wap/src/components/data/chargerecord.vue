<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl"/>
    <div class="main">
      <div class="chargeList">
        <ul class="chargeList_list" v-if="chargeRecordList">
          <li class="chargeList_list__li list" v-for="(item, index) in chargeRecordList" :key="index"  @click="toDetail('/chargerecorddetail', index)">
            <div class="list_div1">
              <p class="list_div1__p1">{{item.mem_name}}</p>
              <p class="list_div1__p2">{{item.create_time}}</p>
            </div>
            <div class="list_div2">
              <p class="list_div2__p1">+{{item.coin_cnt}}</p>
              <p class="list_div2__p2">充值金额</p>
              <i></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import header from '../public/header.vue'
import search from '../public/search.vue'
import store from '../../store'
import { mapGetters } from 'vuex'
export default {
  components: {
    'Header': header,
    'Search': search
  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '代充记录',
      rightText: '',
      toUrl: ''
    }
  },
  created () {
    store.dispatch('chargeRecord', {mem_id: this.$route.query.memId, agent_id: this.$route.query.agentId})
  },
  computed: {
    ...mapGetters([
      'chargeRecordList'
    ])
  },
  methods: {
    toDetail (url, num) {
      this.$router.push({path: url, query: {memId: this.$route.query.memId, agentId: this.$route.query.agentId, index: num}})
    }
  }
}
</script>

<style lang="scss" scoped>
.chargeList_list{
  padding: 0 0.3rem;
  background-color: #fff;
  &__li{
    display: flex;
    justify-content: space-between;
  }
}
.list{
  height: 1.44rem;
  border-bottom: 1px solid #EEEEEE;
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &_div1{
    &__p1{
      font-size: 0.3rem;
      color: #000;
    }
    &__p2{
      font-size: 0.24rem;
      color: #7C7C7C;
      padding-top: 0.23rem;
    }
  }
  &_div2{
    position: relative;
    &__p1{
      font-size: 0.56rem;
      color: #FF3D59;
      font-weight: bold;
    }
    &__p2{
      font-size: 0.24rem;
      color: #888;
    }
    i{
      width: 1px;
      height: 0.5rem;
      background-color: #EEE;
      position: absolute;
      left: -0.5rem;
      top: 50%;
      margin-top: -0.25rem;

    }
  }

}
</style>
