<template>
  <div class="footer">
    <ul class="tab">
        <li class="tab_item">
          <router-link to="/" :class="flag == 'home' ? 'selected' : ''">
            <img v-if="flag != 'home'" class="default" src="../../assets/images/huosdk_tg_home.png" />
            <img v-if="flag == 'home'" class="selected" src="../../assets/images/huosdk_tg_home_002.png" />
            首页
          </router-link>
        </li>
        <li class="tab_item">
          <router-link to="/game" :class="flag == 'game' ? 'selected' : ''">
            <img  v-if="flag != 'game'" class="default" src="../../assets/images/huosdk_tg_game.png" />
            <img  v-if="flag == 'game'" class="selected" src="../../assets/images/huosdk_tg_game_002.png"/>
            游戏
          </router-link>
        </li>
        <li class="tab_item">
          <router-link to="/financial" :class="flag == 'financial' ? 'selected' : ''">
            <img v-if="flag != 'financial'" class="default" src="../../assets/images/huosdk_tg_caiwu.png"/>
            <img v-if="flag == 'financial'" class="selected" src="../../assets/images/huosdk_tg_caiwu_002.png"/>
            财务
          </router-link>
        </li>
        <li class="tab_item">
          <router-link to="/data" :class="flag == 'data' ? 'selected' : ''">
            <img v-if="flag != 'data'" class="default" src="../../assets/images/huosdk_tg_data.png" />
            <img v-if="flag == 'data'" class="selected" src="../../assets/images/huosdk_tg_data_002.png" />
            数据
          </router-link>
        </li>
        <li class="tab_item" >
          <router-link to="/promote" :class="flag == 'promote' ? 'selected' : ''" >
            <img v-if="flag != 'promote'" class="default" src="../../assets/images/huosdk_tg_tuiguang.png" />
            <img v-if="flag == 'promote'" class="selected" src="../../assets/images/huosdk_tg_tuiguang_002.png" />
            工具
          </router-link>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: ['flag'],
  methods: {
    selectTab (item) {
      this.flag1 = 1
      this.flag2 = 1
      this.flag3 = 1
      this.flag4 = 1
      this.flag5 = 1
      if (this[item] === 0) {
        this[item] = 1
      } else {
        this[item] = 0
      }
    }
  }
}
</script>
<style lang="scss">
  .footer{
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .tab{
    display: flex;
    border-top: 1px solid #EDEDED;
    height: 1.06rem;
    background-color: #fff;
    &_item{
      flex: 1;
      position: relative;
      font-size: 0.24rem;
      text-align:center;
      & > a{
        display: flex;
        justify-content: center;
        align-items:center;
        color: #666;
        flex-direction:column;
        width: 100%;
        height: 100%;
        & >img{
          margin: 0 auto;
          width: 0.52rem;
          height: 0.52rem;
          display: block;
        }
      }
      & > .selected{
        color: #108EE9;
      }
    }

  }
</style>
