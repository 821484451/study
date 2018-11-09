<template>
  <div class="home">
    <Header :left="left" :right="right" :text="text"/>
    <div class="main">
      <h4>中国游客真的怒了</h4>
      <p class="time"><span>发表2018-06-08</span> <i></i></p>
      <div class="content">
        引领中国经济行稳致远，我们有底气和定力。党的十八大以来，面对十分复杂的国际形势和艰巨繁重的国内改革发展稳定任务，以习近平同志为核心的党中央提出了适应把握引领经济发展新常态的重大论断，作出我国经济已由高速增长阶段转向高质量发展阶段的重大判断，形成以新发展理念为指导、以供给侧结构性改革为主线的政策体系，有效应对重大挑战、抵御重大风险、克服重大阻力、解决重大矛盾。6年来，经济运行始终保持在合理区间，6000多万贫困人口稳定脱贫，新动能对经济增长的贡献率超过三分之一，推动了多年想实现而没有实现的重大结构性变革，经济社会发展呈现出预期稳、人心稳、大局稳的良好局面，充分说明党中央对经济形势作出的判断、对经济工作作出的决策、对发展思路作出的调整是完全正确的。有党中央的坚强领导，有习近平新时代中国特色社会主义思想的科学引领，我们一定能推动中国经济爬坡过坎、闯关夺隘。
        引领中国经济行稳致远，我们有条件和能力。今天的中国，稳居世界第二大经济体，连续多年对世界经济增长贡献率超过30%，拥有13亿多人口的巨大市场和世界最大规模的中等收入群体……总体来看，我国经济发展长期向好的基本面没有变，经济韧性好、潜力足、回旋余地大的基本特征没有变，经济持续增长的良好支撑基础和条件没有变，经济结构调整优化的前进态势没有变，而且正在向形态更高级、分工更优化、结构更合理阶段演进。虽然外部环境发生明显变化，但不会改变经济全球化的历史大势，不会改变我国发展的历史机遇，不会改变我们坚定发展壮大自己的决心。以中国经济持续健康发展的确定性，有效应对世界经济的不确定性，确保实现经济社会发展目标任务，我们有这个条件，也有这个能力。
        不安于小成，然后足以成大器；不诱于小利，然后可以立远功。无论潮平岸阔，还是急流险滩，只要我们紧密团结在以习近平同志为核心的党中央周围，在埋头苦干中积聚实力，在积极进取中开拓新局，在改革创新中挖掘潜能，新时代中国经济航船定能战胜各种风险挑战，乘风破浪，行稳致远。
      </div>
    </div>
  </div>
</template>

<script>
import header from '../public/header.vue'
export default {
  components: {
    'Header': header
  },
  computed: {

  },
  watch: {

  },
  data () {
    return {
      left: 1,
      right: 0,
      text: '消息详情'
    }
  },
  created () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.main{
  padding: 0 0.3rem;
  padding: 0.42rem;
  h4{
    color: #010101;
    font-size: 0.42rem;
    text-align: center;
    padding-bottom: 0.35rem;
  }
  .time{
    color: #868686;
    font-size: 0.24rem;
    text-align: center;
    position: relative;
    height: 0.3rem;
    span{
      padding: 0 0.2rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 100;
      background-color: #fff;
    }
    i{
      display: block;
      width: 100%;
      height: 0.02rem;
      background-color: #EEEEEE;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .content{
    padding-top: 0.56rem;
    font-size: 0.28rem;
    color: #333;
  }
}

</style>
