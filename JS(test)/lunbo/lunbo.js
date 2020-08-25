function Swiper(speed){
	this.img=document.querySelectorAll(".swiper-img img");
	this.dot=document.querySelectorAll(".dot li");
	this.left=document.querySelector(".left");
	this.right=document.querySelector(".right");
	
	this.speed=speed;
	this.index=0;
	
	this.show = function() {
		for(let i=0;i<this.img.length;i++) {
			this.img[i].style.display="none";
			this.dot[i].style.backgroundColor ="royalblue"
		}
		this.img[this.index%this.img.length].style.display="block"
		this.dot[this.index%this.dot.length].style.backgroundColor="red"
	}
	
}
//自动轮播
Swiper.prototype.autoplay = function() {
	var that = this;
	setInterval(function(){
		that.index++;
		that.show();
	},that.speed);
}
Swiper.prototype.leftPage =function() {//上一张
	var that=this;
	that.left.onclick=function() {
		if(that.index==0){
			that.index=that.img.length-1
		}else{
			that.index--
		}
			that.show();
	}
}

Swiper.prototype.rightPage=function() {//下一张
	var that =this;
	that.right.onclick=function() {
		that.index++;
		that.show();
	}
}
Swiper.prototype.dotPage=function() {
	var that=this;
	
	for(let j=0;j<that.dot.length;j++) {
		that.dot[j].onclick=function() {
			that.index=j;
			
			that.show()
		}
	}
}