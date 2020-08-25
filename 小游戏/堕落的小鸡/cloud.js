let cloudImg=new Image();
cloudImg.src="./img/sky.png"
class Cloud{
	constructor(arg) {
	    this.ctx=this.canvas.getContext("2d")
		this.img=cloudImg
		
		this.ix=0
		this.iy=0
		this.iw=800
		this.ih=569
		this.cx=0
		this.cy=0
		this.cx2=804
		this.cw=804
		this.ch=492
	}
	show(){
		//绘制天空
		this.ctx.drawImage(this.img,this.ix,this.iy,this.iw,this.ih,this.cx,this.cy,this.cw,this.ch)
		this.ctx.drawImage(this.img,this.ix,this.iy,this.iw,this.ih,this.cx2,this.cy,this.cw,this.ch)
	}
	move(){
		this.cx-=3
		this.cx2-=3
		if(this.cx<=-804){
			this.cx=0
			this.cx2=804
		}
	}
}