class Swiper {
	constructor() {
		this.img = document.querySelectorAll(".swiper-img img");
		this.dot = document.querySelectorAll(".dot li");
		this.left = document.querySelector(".left");
		this.right = document.querySelector(".right");
		this.index = 0;

		this.init();
		this.render();
		this.autoPlay();
		this.leftPage();
		this.rightPage();
	}
	//为小圆点设置监听事件
	init() {
		console.log(this.dot);
		for (let i = 0; i < this.dot.length; i++) {
			this.dot[i].onclick = () => {
				this.index = i;
				this.render();
			}
		}
	}
	//渲染
	render() {
		//排他设计
		for (let i = 0; i < this.img.length; i++) {
			this.img[i].style.display = "none";
			this.dot[i].style.backgroundColor = "#ff0000";
		}
		this.img[this.index % this.img.length].style.display = "block";
		this.dot[this.index % this.dot.length].style.backgroundColor = "#0000ff";
	}
	//自动轮播
	autoPlay() {
		setInterval(() => {
			this.index++;
			this.render();
		}, 2000);
	}

	leftPage() {
		this.left.onclick = () => {
			if (this.index <= 0) {
				this.index = this.img.length - 1
			} else {
				this.index--
			}
			this.render();
		}
	}

	rightPage() {
		this.right.onclick = () => {	
				// this.img.length++;
				this.index++;
				// document.write("你好")
		}
		this.render();
	}
}

export default Swiper;
