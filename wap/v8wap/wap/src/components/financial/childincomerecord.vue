<template>
  <ul class="chargeList_list">
    <li class="chargeList_list__li list" v-for="(item, index) in playerIncomeList" :key="index" @click="toDetail('/childincomedetail', item.order_id)">
      <div class="list_div1">
        <p class="list_div1__p1">{{item.sub_agent_name}}</p>
        <p class="list_div1__p2">{{item.create_time}}</p>
      </div>
      <div class="list_div2">
        <p class="list_div2__p1">+{{item.agent_gain}}</p>
        <p class="list_div2__p2">渠道收益</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
export default {
  components: {

  },
  computed: {
    ...mapGetters([
      'playerIncomeList'
    ])
  },
  watch: {

  },
  data () {
    return {

    }
  },
  created () {
    store.commit('UPDATE_INCOME_FLAG', {'incomeTabFlag': false})
    store.dispatch('childIncomeRecord')
  },
  methods: {
    toDetail (url, index) {
      this.$router.push({path: url, query: {num: index}})
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
      font-size: 0.36rem;
      color: #FF3D59;
      font-weight: bold;
    }
    &__p2{
      font-size: 0.2rem;
      color: #888;
      text-align: center;
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
