let imgtop = new Image()
let imgbottom = new Image()
imgtop.src = "./img/pipeUp.png"
imgbottom.src = "./img/pipeDown.png"
class Pipes {
	constructor(arg) {					
		this.imgtop =imgtop
		this.imgbottom = imgbottom
		this.x=400+this.random(50,100);
		this.h=50+this.random(50,150)
		this.pipePositions = []
	}
	show() {
		this.pipePositions.forEach((el) => {
			this.ctx.drawImage(el.top.img, el.top.x, el.top.y, el.top.w, el.top.h)
			this.ctx.drawImage(el.bottom.img, el.bottom.x, el.bottom.y, el.bottom.w, el.bottom.h)
		})
	}
	
	random(min, max) {
		return Math.round(Math.random() * (max - min) + min)
	}
	//调用一次在地图最右边添加一对水管
	randomPosition() {
		let minHeight = 60, // 柱子最小的高度
			gap = 150, // 中间的间隙
			maxHeight = 492-60-150; //天顶与大地的距离是488
		let topH= this.random(minHeight, maxHeight) //上柱子高度
		let bottomH = 492 - gap - topH //下柱子高度
		let top = {
			img: this.imgtop,			
			x: 800,
			y: 0,
			w: 52,
			h: topH
		}
		let bottom = {
			img: this.imgbottom,
			x: 800,
			y: 492 - bottomH,
			w: 52,
			h: bottomH
		};
		this.pipePositions.push({
			top,
			bottom
		})
	}
	move() {
		this.pipePositions.forEach((el) => {
			el.top.x -= 1;
			el.bottom.x -= 1
		})
	}
	
}
