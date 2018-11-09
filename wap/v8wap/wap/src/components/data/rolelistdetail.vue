<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text" :rightText="rightText" :toUrl="toUrl"/>
    <div class="main" v-if="list">
      <div class="role">
        <ul class="rolelist">
          <li class="rolelist_li">
            <p class="rolelist_li__p1">订单编号</p>
            <p class="rolelist_li__p2">s78979njkndjks</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">创建时间</p>
            <p class="rolelist_li__p2">{{list.create_time}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">更新时间</p>
            <p class="rolelist_li__p2">{{list.update_time}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">玩家账号</p>
            <p class="rolelist_li__p2">{{list.username}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">渠道</p>
            <p class="rolelist_li__p2">{{list.user_nicename}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">游戏</p>
            <p class="rolelist_li__p2">{{list.gamename}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">等级</p>
            <p class="rolelist_li__p2">{{list.level}}</p>
          </li>
          <li class="rolelist_li">
            <p class="rolelist_li__p1">充值金额</p>
            <p class="rolelist_li__p2">{{list.money}}</p>
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
export default {
  components: {
    'Header': header,
    'Search': search
  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '玩家角色列表',
      rightText: '',
      toUrl: ''
    }
  },
  computed: {
    list: {
      get () {
        return store.state.playerRoleList[this.$route.query.num]
      },
      set (val) {

      }
    }
  },
  created () {
    store.dispatch('playerRoleList')
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #fff ;
  width: 100%;
  height: 100%;
}
.rolelist{
  padding: 0 0.31rem;
  border-bottom: 1px solid #EEEEEE;
  background-color: #fff ;
  &_li{
    display: flex;
    p{
      padding: 0.26rem 0;
      flex: 1;
      span{
        color: #FF0000;
      }
    }
    &__p1{
      font-size: 0.28rem;
      color: #999;
    }
    &__p2{
      font-size: 0.26rem;
      color: #333;
      text-align: right;
    }
  }
}
</style>
