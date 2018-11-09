// 引入模块以及插件
const gulp = require('gulp');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const auto = require('gulp-autoprefixer');

gulp.task('server',function(){
  gulp.src('./')
      .pipe(webserver({
         host:'localhost',
         port:'9000',
         livereload:true,
         directoryListing:false
       }))
})

gulp.task('sass',function(){
           //找到文件夹中所有的scss文件
          gulp.src('./scss/**/*.scss')

                  //编译scss文件为css文件

                 .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
                  //将上面编译后的多个css文件合并成index.css 

                 .pipe(concat('index.css'))

                 .pipe(auto({//处理兼容
                       browsers:['last 2 version'],
                       cascade:false
                  }))

                 //将处理完的css文件保存到项目的目录中
                 .pipe(gulp.dest('./css'))

})
  
gulp.task('watch:sass',function(){

  gulp.watch('./scss/**/*.scss',['sass'])

})

gulp.task('default',['sass','watch:sass','server'])