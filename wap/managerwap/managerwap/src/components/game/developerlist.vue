<template>
    <div class="home">
      <Header :left="left" :text="text" />
      <Search  />
      <div class="main">
        <ul class="developerList">
          <li class="developerList_li">
            <div class="developerList_li__div1">
              <p>火速</p>
              <p>CPID：1877288</p>
              <p>手机号：18225667777</p>
            </div>
            <div class="developerList_li__div2">
              <p>2018-01-25 15:22</p>
              <p>联系人：王思聪</p>
              <p>职位： 产品</p>
            </div>
          </li>
          <li class="edict">
            <div>更新时间：2018-01-01 11:00</div>
            <div>
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">冻结</a>
            </div>
          </li>
        </ul>
        <ul class="developerList">
          <li class="developerList_li">
            <div class="developerList_li__div1">
              <p>火速</p>
              <p>CPID：1877288</p>
              <p>手机号：18225667777</p>
            </div>
            <div class="developerList_li__div2">
              <p>2018-01-25 15:22</p>
              <p>联系人：王思聪</p>
              <p>职位： 产品</p>
            </div>
          </li>
          <li class="edict">
            <div>更新时间：2018-01-01 11:00</div>
            <div>
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">冻结</a>
            </div>
          </li>
        </ul>
        <ul class="developerList">
          <li class="developerList_li">
            <div class="developerList_li__div1">
              <p>火速</p>
              <p>CPID：1877288</p>
              <p>手机号：18225667777</p>
            </div>
            <div class="developerList_li__div2">
              <p>2018-01-25 15:22</p>
              <p>联系人：王思聪</p>
              <p>职位： 产品</p>
            </div>
          </li>
          <li class="edict">
            <div>更新时间：2018-01-01 11:00</div>
            <div>
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">冻结</a>
            </div>
          </li>
        </ul>
        <ul class="developerList">
          <li class="developerList_li">
            <div class="developerList_li__div1">
              <p>火速</p>
              <p>CPID：1877288</p>
              <p>手机号：18225667777</p>
            </div>
            <div class="developerList_li__div2">
              <p>2018-01-25 15:22</p>
              <p>联系人：王思聪</p>
              <p>职位： 产品</p>
            </div>
          </li>
          <li class="edict">
            <div>更新时间：2018-01-01 11:00</div>
            <div>
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">冻结</a>
            </div>
          </li>
        </ul>
        <ul class="developerList">
          <li class="developerList_li">
            <div class="developerList_li__div1">
              <p>火速</p>
              <p>CPID：1877288</p>
              <p>手机号：18225667777</p>
            </div>
            <div class="developerList_li__div2">
              <p>2018-01-25 15:22</p>
              <p>联系人：王思聪</p>
              <p>职位： 产品</p>
            </div>
          </li>
          <li class="edict">
            <div>更新时间：2018-01-01 11:00</div>
            <div>
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">冻结</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="addBtn">
        <a href="javascript:;">
          <img src="../../assets/images/gl_add.png" alt="">
        </a>
      </div>
    </div>
</template>

<script>
import Header from '../public/header.vue'
import Search from '../public/search.vue'
export default {
  components: {
    'Header': Header,
    'Search': Search
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      left: 1,
      text: '开发者列表'
    }
  },
  created () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
      flex: 1;
    }
  }
  .developerList{
    background-color: #fff;
    margin-bottom: 0.16rem;
    &_li{
      padding: 0.37rem 0.3rem;
      border-bottom: 1px solid #eee;
      display: flex;
      div{
        flex: 1;
        p{
          font-size: 0.24rem;
          color: #777;
        }
        p:nth-child(2){
          padding-top: 0.32rem;
        }
        p:nth-child(3){
          padding-top: 0.23rem;
        }
      }
      &__div1{
        p:nth-child(1){
          font-size: 0.3rem;
          color: #000;
        }
      }
      &__div2{
        p:nth-child(1){
          text-align: right;
        }
      }
    }
  }
  .main{
    background-color: #f5f6ff;
  }
  .edict{
    padding: 0 0.3rem;
    height: 1rem;
    display: flex;
    div:nth-child(1){
      color: #7C7C7C;
      font-size: 0.26rem;
      flex: 1;
      display: flex;
      align-items: center;
    }
    div:nth-child(2){
      width: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a{
        display: inline-block;
        width: 1.1rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.26rem;
        color: #fff;
        text-align: center;
        border-radius: 0.05rem;
      }
      a:nth-child(1){
        background-color: #409FFF;
      }
      a:nth-child(2){
        background-color: #19BE6B;
      }
    }
  }
</style>
