<template>
  <div class="hello">
    <textarea id="md-birthday" type="text"  name=""></textarea>
    <input type="text" id="trigger4" name="">
  </div>
</template>
<script>
    import rollDate from '../assets/js/rolldate.js';
    import PickerExtend from 'picker-extend'; 

    export default {
      name: 'HelloWorld',
      data () {
        return {
            birthday: ''
        }
      },
      mounted() {
        new Rolldate({
            el:'#md-birthday',
            format: 'YYYY-MM-DD am',
            beginYear: 2000,
            endYear: 2100,
            lang:{title:'请选择日期'},
            init: function() {
              console.log('插件开始触发');
            },
            moveEnd: function(scroll) {
              console.log('滚动结束');
            },
            confirm: function(date) {
                console.log(date);
                console.log('确定按钮触发');
            },
            cancel: function() {
              console.log('插件运行取消');
            }
        });
        var mobileSelect4 = new PickerExtend({
                trigger: "#trigger4",
                title: "单项选择",
                wheels: [
                    {data: ["周日","周一","周二","周三","周四","周五","周六","周日","周一","周二","周三","周四","周五","周六","周日","周一","周二","周三","周四","周五","周六"]}
                ],
                position: [8],
                callback:function(indexArr, data){
                    console.log(data);
                },
                transitionEnd: function(indexArr, data){
                    console.log(indexArr, data);
                    let index = indexArr[0]*1;
                    if (indexArr[0] >=16){
                        this.locatePosition(0,index - 14);
                        console.log('定位到4')
                    }else if(indexArr[0] <= 5){
                        this.locatePosition(0, index - 14);
                        console.log('定位到9')
                    }

                }
            });
      }
    }
</script>