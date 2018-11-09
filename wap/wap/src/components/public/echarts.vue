<template>
  <div style="width: 100%;overflow-y: hidden;">
    <div id="myChart" :style="{width: widthLength, height: '300px'}"></div>
  </div>
</template>

<script>
import 'zrender/lib/svg/svg'
import { mapGetters } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: '',
      str1: '{b0}<br/>{a0}:￥{c0}<br/>{a1}:￥{c1}',
      str2: '{b0}<br/>{a0}:￥{c0}'
    }
  },
  created () {

  },
  props: [
    'widthLength'
  ],
  watch: {
    detail (curVal, oldVal) {
      this.drawLine(this.str2)
    },
    incomeList (curVal, oldVal) {
      this.drawLine(this.str1)
    },
    payList (curVal, oldVal) {
      this.drawLine(this.str1)
    },
    weekWater (curVal, oldVal) {
      this.drawLine(this.str2)
    }
  },
  computed: {
    ...mapGetters([
      'commonTimeList',
      'detail',
      'incomeList',
      'payList',
      'weekWater'
    ])
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine (str) {
      const self = this
      let myChart = this.$echarts.init(document.getElementById('myChart'), null, {renderer: 'svg'})
      // 绘制图表
      myChart.setOption({
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          formatter: str
        },
        legend: {
          data: []
        },
        grid: {
          left: '2%',
          top: '3%',
          right: '28',
          bottom: '2%',
          containLabel: true
        },
        toolbox: {
          feature: {

          },
          x: '950'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: self.commonTimeList,
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '流水',
            type: 'line',
            data: self.detail
          },
          {
            name: '收入',
            type: 'line',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#4d445a'
                }
              }
            },
            data: self.incomeList
          },
          {
            name: '支出',
            type: 'line',
            data: self.payList,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#fa7d0a'
                }
              }
            }
          },
          {
            name: '流水',
            type: 'line',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#E7B10E'
                }
              }
            },
            data: self.weekWater
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss">
</style>
