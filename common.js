/**
 * [输出某个范围的随机正整数]
 * @param  {Number} min [最小值]
 * @param  {Number} max [最大值]
 * @return {Number}     [返回值]
 */
function randomNumber(min,max){
    return parseInt(Math.random()*(max-min+1)+min) ;

}
/**
 * [随机颜色]
 * @return {string} [返回值]
 */
function randomColor(){
    return 'rgb('+randomNumber(0,255)+','+randomNumber(0,255)+','+randomNumber(0,255)+')';
    
}
/**
 * [计算某个数的平方]
 * @param  {Number} num [参数]
 * @return {Number}     [返回值]
 */
function pf(num){
            return num*num;
        }
/**
 * [计算某个数的立方]
 * @param  {Number} n [参数]
 * @return {Number}   [返回值]
 */
 function lf(n){
            return n*n*n ;
        }
/**
  * [得到几行几列的表格]
  * @param  {Number} _row [表格的行]
  * @param  {Number} _col [表格的列]
  * @return {string}      [返回值]
  */
 function table(_row,_col){
    document.write('<table style="border-collapse:collapse;margin:50px auto;">');
        for(var i =1;i<=_row;i++){
            document.write('<tr>');
            for(var j=1;j<=_col;j++){
                document.write('<td style="border:1px solid #000;width:80px;height:50px;text-align:center;line-height:50px;">我是表格</td>');
            }
            document.write('</tr>');
        }
        document.write('</table>');
}
/**
 * [16进制随机颜色]
 * @return {string} [随机的16进制]
 */
function getColor(){
  var color='0123456789abcdef';
   var zhi ='#';
  for(var i=0;i<6;i++){
      zhi+=color.charAt(randomNumber(0,15));
  }
  return zhi;
}

/**
 * [时间的格式化]
 * @param  {string} time [时间]
 * @param  {string} format [时间的格式]
 * @return {string} [时间的格式化]
 */
function dateTransform (time, format) {
  console.log(time, format)
  var date = time ? new Date(time*1000) : new Date()
  console.log(date)
  format = format || 'yyyy/MM/dd hh:mm'
  var o = {
    'M+' : date.getMonth() + 1, //月份
    'd+' : date.getDate(), //日
    'h+' : date.getHours(), //小时
    'm+' : date.getMinutes(), //分
    's+' : date.getSeconds(), //秒
    'q+' : Math.floor((date.getMonth() + 3) / 3), //季度
    'S'  : date.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}
/**
 * 转盘
 */

$(function() {
  var $btn = $('.g-lottery-img');// 旋转的div
  var playnum = 100; //初始次数，由后台传入
  $('.playnum').html(playnum);//显示还剩下多少次抽奖机会
  var isture = 0;//是否正在抽奖
  var clickfunc = function() {
    var data = [1, 2, 3, 4, 5, 6];//抽奖
    //data为随机出来的结果，根据概率后的结果
    data = data[Math.floor(Math.random() * data.length)];//1~6的随机数
    switch(data) {
      case 1:
        rotateFunc(1, 0, '恭喜您获得2000元理财金');
        break;
      case 2:
        rotateFunc(2, 0, '恭喜您获得2000元理财金2');
        break;
      case 3:
        rotateFunc(3, 0, '恭喜您获得2000元理财金3');
        break;
      case 4:
        rotateFunc(4, -60, '谢谢参与4');
        break;
      case 5:
        rotateFunc(5, 120, '谢谢参与5');
        break;
      case 6:
        rotateFunc(6, 120, '谢谢参与6');
        break;
    }
  }
  $(".playbtn").click(function() {
    if(isture) return; // 如果在执行就退出
    isture = true; // 标志为 在执行
    if(playnum <= 0) { //当抽奖次数为0的时候执行
      alert("没有次数了");
      $('.playnum').html(0);//次数显示为0
      isture = false;
    } else { //还有次数就执行
      playnum = playnum - 1; //执行转盘了则次数减1
      if(playnum <= 0) {
        playnum = 0;
      }
      $('.playnum').html(playnum);
      clickfunc();
    }
  });
  var rotateFunc = function(awards, angle, text) {
    isture = true;
    $btn.stopRotate();
    $btn.rotate({
      angle: 0,//旋转的角度数
      duration: 4000, //旋转时间
      animateTo: angle + 1440, //给定的角度,让它根据得出来的结果加上1440度旋转
      callback: function() {
        isture = false; // 标志为 执行完毕

      }
    });
  };
});

/*
*无缝滚动
 */
$.fn.myScroll = function(options){
//默认配置
  var defaults = {
    speed:40,  //滚动速度,值越大速度越慢
    rowHeight:24 //每行的高度
  };

  var opts = $.extend({}, defaults, options),intId = [];

  function marquee(obj, step){

    obj.find("ul").animate({
      marginTop: '-=1'
    },0,function(){
        var s = Math.abs(parseInt($(this).css("margin-top")));
        if(s >= step){
          $(this).find("li").slice(0, 1).appendTo($(this));
          $(this).css("margin-top", 0);
        }
    });
  }

  this.each(function(i){
    var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
    intId[i] = setInterval(function(){
      if(_this.find("ul").height()<=_this.height()){
        clearInterval(intId[i]);
      }else{
        marquee(_this, sh);
      }
    }, speed);

    _this.hover(function(){
      clearInterval(intId[i]);
    },function(){
      intId[i] = setInterval(function(){
        if(_this.find("ul").height()<=_this.height()){
          clearInterval(intId[i]);
        }else{
          marquee(_this, sh);
        }
      }, speed);
    });

  });

}

$('.getPrizeList').myScroll({
  speed: 40, //数值越大，速度越慢
  rowHeight: 32 //li的高度
});
/**
 * 复制功能
 */
function copy(selector) {
    //复制礼包码
  var $text = $(selector).html()
  const input = document.createElement('input')
  input.setAttribute('readonly', 'readonly');
  input.setAttribute('value', $text );
  document.body.appendChild(input)
  input.select()
  input.setSelectionRange(0, 9999)
  if (document.execCommand('copy')) {
      document.execCommand('copy')
  }
    document.body.removeChild(input)

  $('.fuzhiSucess').css({'display':'block'}).html('复制成功')
    $(".getSucess").hide()
  setTimeout(function(){
    $(".fuzhiSucess").hide()
  },1000)
}
//轮播图函数
function banner(selector,time,width,height) {
  var $banner =  $(selector);
  var $ul = $banner.find('ul');
  var $li = $ul.find('li');
  var $img = $banner.find('img');
  var num = 0;
  var $width ;
  //样式初始化
  $banner.css({'height': height,'overflow': 'hidden','position':'relative','margin': '0 auto'});
  $ul.css({'height': height,'position' : 'absolute','left' : 0, 'top' : 0,'display': 'flex'});
  $li.css({'height': height});
  $img.css({'width' : '100%', 'height': "100%"});


  if(width === '100%'){
    $width = document.body.clientWidth;
    $(window).resize(function(){
      
        $width  =  document.body.clientWidth;
        console.log($width)
        initCss();
    });
  }else{
    $width = width;
    $(window).resize(function(){
        $width  =  document.body.clientWidth;
        console.log($width)
        initCss();
    });
  }
  function initCss() {
    $banner.css({'width': $width});
    $ul.css({'width': $width*$li.length });
    $li.css({'width' : $width});
    $img.css({'width' : '100%'});
  }

  initCss();
  //动画效果
  setInterval(function(){
    initCss();
    num++
    if(num >= $li.length ){
      num = 1;
      $ul.css({'left': '0'});

    }
    $ul.animate({'left': -document.body.clientWidth*num})
  },time)


}

 //服务端代理ajax 封装
function http(url, opt, type, callback){
  var parameStr = '' ;
  for(key in opt){
    parameStr += (key + ';' + opt[key] + ';')
  }
  console.log(parameStr)
  var parames = '&url=' + url +'&option=' + parameStr +'&type=' + type
  var status=[200,304]
    var xhr=new XMLHttpRequest();
    var option = JSON.stringify(parames)
    xhr.onload=function(){
        if(status.includes(xhr.status)){
          console.log(xhr.responseText)
            var data=JSON.parse(xhr.responseText);
            callback(data)
        }
    }
    
    xhr.open('post','http://localhost:85/webserver', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
    xhr.send(option);
}

//隐藏电话号码中间四位
function hidePhoneNum(phoneNum){
  var regExp = /^(\d{3})\d+(\d{4})$/;
  return phoneNum.replace(regExp, '$1****$2');
}
//对对象进行按照属性字母进行排序
function objKeySort(obj) {//排序的函数
    var newkey = Object.keys(obj).sort();
    //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newObj = {};//创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) {//遍历newkey数组
        newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
    }
    return newObj;//返回排好序的新对象
}