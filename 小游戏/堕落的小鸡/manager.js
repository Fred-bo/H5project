class Manager {
	constructor(arg) {
		Object.prototype.canvas=document.querySelector(arg);		
		Object.prototype.ctx =document.querySelector(arg).getContext("2d")
		
		this.land = new Land();
		this.cloud = new Cloud();
		this.bird = new Bird();
		this.pipes=new Pipes();
		this.rank=0;
	}
	play() {
		
		this.t1 = setInterval(() => {
			this.land.show()
			this.cloud.show()
			this.bird.show()
			this.pipes.show()
			this.isBoom()
			this.showRank()
		}, 17)

		this.t2 = setInterval(() => {
			this.land.move()
			this.cloud.move()
			this.bird.move()
			this.bird.down()
			this.pipes.move()
		}, 34)

		this.t3 = setInterval(() => {
			this.bird.move()
		}, 200)
		//添加水管
		 this.t4=setInterval(()=>{
			this.pipes.randomPosition()
		
		},2000)
		
		this.t5=setInterval(()=>{
			this.pipes.move()
		},8)
		
	}
	quiet() {
		this.land.show()
		this.cloud.show()
		this.bird.show()
	}
	jump(){
		this.bird.up()
	}
	
	stop(){
		clearInterval(this.t1)
		clearInterval(this.t2)
		clearInterval(this.t3)
		clearInterval(this.t4)
		clearInterval(this.t5)
	}
	//判断碰撞
	isBoom(){
		this.pipes.pipePositions.forEach((e,index)=>{
			if((Math.abs(this.bird.ch+(this.bird.ih+17)/2-e.top.y-e.top.h/2)<=(e.top.h+this.bird.ih)/2)&&
			(Math.abs(this.bird.cw+(this.bird.cx-20)/2-e.top.x-e.top.w/2-5)<=(e.top.w+this.bird.cx)/2)){
				this.stop()
				// this.gameOver()
			}else if((Math.abs(this.bird.ch+this.bird.cy/2-e.bottom.y-e.bottom.h/2-8)<=(e.bottom.h+this.bird.cy)/2)&&
			(Math.abs(this.bird.cw+(this.bird.iw-18)/2-e.bottom.x-e.bottom.w/2+10)<=(e.bottom.w+this.bird.iw)/2)){
				this.stop()
				this.gameOver()
			}
			
		})
		if(this.bird.ch>=461){
			this.stop()
			this.gameOver()
		}
	}
	
	//游戏结束
	gameOver(){
		gameB=true;
		this.getRank()
		this.ctx.font="30px 微软雅黑"
		this.ctx.fillStyle="red"
		this.ctx.fillText(`游戏结束，您的得分是${this.rank}分`,250,250)
		//保存最高rank分
		let oldrank = localStorage.getItem("rank")
		if (!oldrank) {
			oldrank = 0
		}
		this.ctx.fillText(`历史最高分是${oldrank}分`,300,290)
		if (this.rank > Number(oldrank)) {
			localStorage.setItem("rank", this.rank)
		}
		this.ctx.fill()
		this.bool=false
	
	}
	
	//判断过了几个水管
	getRank(){
		for (let i = 0; i < this.pipes.pipePositions.length; i++) {
			let el = this.pipes.pipePositions[i]
			if (this.bird.cw < (el.top.x + el.top.w)) {
				this.rank = i
				break;
			}
		}
	}
	
	showRank(){
		this.getRank()
		this.ctx.font="18px 微软雅黑"
		this.ctx.fillText(`${this.rank}分`,750,20)
	}
}
