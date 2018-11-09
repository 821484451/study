<template>
    <div class="content">
      <div class="echart">
        <Echarts :widthLength="widthLength" :timeList="timeList" :test3="test3" :test4="test4" :test5="test5" :test6="test6" :title="title"/>
      </div>
      <div class="time">
        <div class="time_div">
          <a href="javascript:;" @click="selectNum(0)" :class="num === 0 ? 'active' : ''">一周内</a>
          <a href="javascript:;" @click="selectNum(1)" :class="num === 1 ? 'active' : ''">一月内</a>
          <a href="javascript:;" @click="selectNum(2)" :class="num === 2 ? 'active' : ''">一年内</a>
        </div>
      </div>
      <div class="dayData">
        <span class="dayData_span">每日数据</span>
        <img class="dayData_img" src="../../assets/images/huosdk_tg_rili.png" alt="">
      </div>
      <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>新增设备</th>
            <th>新增用户</th>
            <th>付费金额(￥)</th>
            <th>活跃用户</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>08-16</td>
            <td>5</td>
            <td>64</td>
            <td>18.32</td>
            <td>874</td>
          </tr>
          <tr>
            <td>08-16</td>
            <td>5</td>
            <td>64</td>
            <td>18.32</td>
            <td>874</td>
          </tr>
          <tr>
            <td>08-16</td>
            <td>5</td>
            <td>64</td>
            <td>18.32</td>
            <td>874</td>
          </tr>
          <tr>
            <td>08-16</td>
            <td>5</td>
            <td>64</td>
            <td>18.32</td>
            <td>874</td>
          </tr>
          <tr>
            <td>08-16</td>
            <td>5</td>
            <td>64</td>
            <td>18.32</td>
            <td>874</td>
          </tr>
          <tr>
            <td>08-16</td>
            <td>5</td>
            <td>64</td>
            <td>18.32</td>
            <td>874</td>
          </tr>
          <tr>
            <td>08-16</td>
            <td>5</td>
            <td>64</td>
            <td>18.32</td>
            <td>874</td>
          </tr>
          <tr>
            <td>08-16</td>
            <td>5</td>
            <td>64</td>
            <td>18.32</td>
            <td>874</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import Echarts from '../public/echarts.vue'
import store from '../../store'
export default {
  components: {
    'Echarts': Echarts
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      widthLength: '100%',
      timeList: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      test3: [50, 202, 200, 5, 100, 10, 200],
      test4: [4, 32, 423, 533, 10, 1, 200],
      test5: [10, 232, 100, 5, 110, 120, 200],
      test6: [100, 432, 70, 5, 150, 200, 200],
      title: [{name: '新增设备'}, {name: '新增用户'}, {name: '付费金额'}, {name: '活跃用户'}],
      num: 0
    }
  },
  created () {
    store.commit('UPDATE_CHANNEL_SELECT', {'num': 0})
  },
  methods: {
    selectNum (num) {
      this.num = num
    }
  }
}
</script>

<style lang="scss" scoped>
.echart{
  padding-top: 0.39rem;
  background-color: #fff;
}
.time{
  height: 1.06rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  &_div{
    width: 4.8rem;
    height: 0.66rem;
    border: 1px solid #108EE9;
    border-radius: 0.2rem;
    overflow: hidden;
    display: flex;
    a{
      display: inline-block;
      flex: 1;
      font-size: 0.26rem;
      color: #108EE9;
      text-align: center;
      line-height: 0.64rem;
    }
    .active{
      background-color: #108EE9;
      color: #fff;
    }
  }
}
.dayData{
  height: 0.8rem;
  padding: 0 0.3rem;
  margin-top: 0.16rem;
  position: relative;
  background-color: #fff;
  &_span{
    color: #333333;
    font-size: 0.3rem;
    line-height: 0.8rem;
    position: absolute;
    left: 0.3rem;
    top: 50%;
    transform: translateY(-50%);
  }
  &_img{
    width: 0.35rem;
    height: 0.34rem;
    position: absolute;
    right: 0.3rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
table{
  width: 100%;
  padding: 0 0.3rem;
  border-collapse:collapse;
  thead{
    width: 100%;
  }
  tbody{
    background-color: #fff;
  }
}
thead{
  color: #999;
}
td,th{
  font-size: 0.24rem;
  text-align: center;
  height: 0.7rem;
}
td{
  border-color: #fff;
}
tr{
  padding: 0 0.3rem;
}
</style>
