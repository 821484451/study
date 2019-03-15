var images = require("images");

images(200, 200).save("transparent.jpg",{
		quality: 50
});
 
images("input.jpg")                     //Load image from file 
                                        //加载图像文件
  	.size(100)                          //Geometric scaling the image to 400 pixels width
                                        //等比缩放图像到400像素宽
    .draw(images("transparent.jpg"), 50, 50)   //Drawn logo at coordinates (10,10)
                                        //在(10,10)处绘制Logo
    .save("output.jpg", {               //Save the image to a file, with the quality of 50
        quality: 50                    //保存图片到文件,图片质量为50
    });

