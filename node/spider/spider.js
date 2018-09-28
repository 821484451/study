var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var https = require('https');
var i = 0;
var url = "https://weibo.com/?category=1760"; 
//初始url 

function fetchPage(x) {     //封装了一层函数
    startRequest(x); 
}


function startRequest(x) {
     //采用http模块向服务器发起一次get请求    
     console.log(666)  
    https.get(x, function (res) {     
        var html = '';        //用来存储请求网页的整个html内容
        var titles = [];        
        res.setEncoding('utf-8'); //防止中文乱码
     //监听data事件，每次取一块数据
        res.on('data', function (chunk) {   
            html += chunk;
            console.log(html)
        });
     //监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
        res.on('end', function () {
            var $ = cheerio.load(html); //采用cheerio模块解析html

            savedImg($);    //存储每篇文章的图片及图片标题

        });

    }).on('error', function (err) {
        console.log(err);
    });

}
//该函数的作用：在本地存储所爬取到的图片资源
function savedImg($) {
    $('.UG_list_b').each(function (index, item) {
        var img_title = $(item).find('.list_title_b a').text();
        console.log(index, item)
        var img_filename = index + '.jpg';

        var img_src = $(item).find('.pic.W_piccut_v  img').attr('src'); //获取图片的url
          console.log(img_src)
//采用request模块，向服务器发起一次请求，获取图片资源
        request.head(img_src,function(err,res,body){
            if(err){
                console.log(err);
            }
        });
        request(img_src).pipe(fs.createWriteStream('./image/'+ img_filename));     //通过流的方式，把图片写到本地/image目录下，并用新闻的标题和图片的标题作为图片的名称。
    })
}
fetchPage(url);      //主程序开始运行