openComLanguage () {
	// 是否存在展开的contents
	var expansion = null;
	var container = document.querySelectorAll('.swiperight');
	for (var index = 0; index < container.length; index++) {
		var x, y, X, Y, swipeX, swipeY;
		// 监听左滑盒子的触摸事件
		container[index].addEventListener('touchstart', function (event) {
			//获取触摸点的坐标targetTouches[0].pageX,Y;
			x = event.changedTouches[0].pageX;
			y = event.changedTouches[0].pageY;
			swipeX = true;
			swipeY = true;
			if (expansion) {
				// 判断是否展开，如果展开则收起
				// expansion.classList.add("swiperight")
				event.stopPropagation();
			}
		});
		// 监听左滑盒子在屏幕上的滑动事件 touchmove事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可阻止滚动。
		container[index].addEventListener('touchmove', function (event) {
			X = event.changedTouches[0].pageX;
			Y = event.changedTouches[0].pageY;
			// 判断左右滑
			 if (swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
				// 阻止事件冒泡
				event.stopPropagation();
				if (X - x > 10){    // 右滑
					event.preventDefault();  //取消事件的默认动作
					this.classList.remove("swipeleft");
					this.classList.add("swiperight"); 
				}
				if (x - X > 10) {   // 左滑
					if(expansion) {
						// 判断是否展开，如果展开则收起
						event.stopPropagation();
						expansion.classList.add("swiperight");
					}
					event.preventDefault();
					this.classList.remove("swiperight");
					this.classList.add("swipeleft");   // 左滑展开
					expansion = this;
				}
				swipeY = false;
			}
			// 上下滑动
			if (swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
				swipeX = false;
			}
			
		})
	}
}