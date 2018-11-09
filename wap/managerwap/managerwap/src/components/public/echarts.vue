<template>
  <div :style="{width: widthLength}">
    <div :class="className" :style="{width: widthLength, height: '200px'}"></div>
  </div>
</template>

<script>
import 'zrender/lib/svg/svg'
import { mapGetters } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: ''

    }
  },
  created () {

  },
  props: {
    'timeList': {
      default () { return [] }
    },
    'dataList': {
      default () { return [] }
    },
    'text': {default: ''},
    'className': {default: 'myChart'},
    'widthLength': {default: '300px'},
    'test3': {
      default () { return [] }
    },
    'test4': {
      default () { return [] }
    },
    'test5': {
      default () { return [] }
    },
    'test6': {
      default () { return [] }
    },
    'title': {
      default () { return [] }
    }
  },
  watch: {
    dataList1 (curVal, oldVal) {
      this.drawLine()
    }
  },
  computed: {
    ...mapGetters([
      'dataList1'
    ])
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine (str) {
      const self = this
      let myChart = this.$echarts.init(document.getElementsByClassName(self.className)[0], null, {renderer: 'svg'})
      // 绘制图表
      myChart.setOption({
        title: {
          text: self.text
        },
        tooltip: {
          trigger: 'axis'
        },
        color: ['#F5A722', '#30B95F', '#FB1D1D', '#1084F7'],
        legend: {
          data: self.title,
          icon: 'circle'
        },
        grid: {
          left: '2%',
          top: '20%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        toolbox: {
          feature: {

          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: self.timeList,
          axisLabel: {
            interval: 0
          },
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: 'value',
          name: '',
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: ''
          }
        },
        series: [
          {
            name: '新增设备',
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#F5A722'
                }
              }
            },
            data: self.test3
          },
          {
            name: '新增用户',
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#30B95F'
                }
              }
            },
            data: self.test4
          },
          {
            name: '付费金额',
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#FB1D1D'
                }
              }
            },
            data: self.test5
          },
          {
            name: '活跃用户',
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#1084F7'
                }
              }
            },
            data: self.test6
          },
          {
            name: '人数',
            type: 'bar',
            data: self.dataList,
            barWidth: 30,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#f39f60'}, {offset: 1, color: '#ffeaac'}])
              }
            }
          },
          {
            name: '入数',
            type: 'line',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: 'orange'
                }
              }
            },
            data: self.dataList
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss">
</style>
