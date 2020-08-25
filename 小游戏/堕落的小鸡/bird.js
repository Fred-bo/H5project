let birdImg=new Image()
birdImg.src="./img/bird.png"	
class Bird{
	constructor(arg) {
	    this.ctx=this.canvas.getContext("2d")
		this.img=birdImg;
		this.i=0
		this.y=0
		this.ix=52
		this.iy=0
		this.iw=52
		this.ih=45
		this.cx=180
		this.cy=0
		this.cw=52
		this.ch=45
		this.speed=0
		this.a=1
	}
	show(){
		this.ctx.drawImage(this.img,this.ix,this.iy,this.iw,this.ih,this.cx,this.cy,this.cw,this.ch)

	}
	move(){
		this.i++;
		this.i=this.i%3
		this.ix=this.i*52
		
		
	}
	down(){
		this.speed+=this.a
		this.cy+=this.speed
		if(this.cy>=461){
			this.cy=461
		}else if(this.cy<=0){
			this.cy=0
		}

	}
	up(){
		this.speed=-13
	}
}