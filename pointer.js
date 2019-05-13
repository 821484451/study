function pointer (boxNum){
		this.boxNum = boxNum;
		this.appendDom = function(callBack){
			
			for(var k =0; k< boxNum; k++) {
				var b  = document.createElement('div')
				b.setAttribute("class","smallBox");
				document.getElementsByTagName('body')[0].appendChild(b);
			}
			
			callBack();
			return this;
		};
		this.initStyle =  function(){
			var domArr = document.getElementsByClassName('smallBox');
			for (var i=0,len=domArr.length; i<len; i++) {
				domArr[i].style.background = this.randomColor();
				domArr[i].style.position = 'absolute';
				domArr[i].style.left = 0;
				domArr[i].style.top = 0;
				domArr[i].style.width = '30px';
				domArr[i].style.height = '30px';
			} 
			return this;
		};
		this.randomColor = function(){
		  return 'rgb('+randomNumber(0,255)+','+randomNumber(0,255)+','+randomNumber(0,255)+')';	    
		};
		this.movePointer = function(e){
			document.onmousemove = function(e){
				var e = e || window.event;
				var x = e.clientX;
				var y = e.clientY;
				var boxArr = document.getElementsByClassName('smallBox');
				for(var j = 0, len = boxArr.length; j < len; j++ ) {
					a(boxArr[j], j);
				}
				function a (dom, num){
					setTimeout(function(){
						dom.style.left = x + 'px';
						dom.style.top = y + 'px';
					},10 * num)
				}
			}
			return this;
		};
		this.init = function(){
			var self = this;
			this.appendDom(function(){
				self.initStyle();
			}).movePointer();
			return this;
		}
	}