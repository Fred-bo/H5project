let landImg=new Image()
landImg.src="./img/land.png"
class Land{
	constructor(arg) {
		this.ctx=this.canvas.getContext("2d")
		this.img=landImg
		this.ix=0
		this.iy=0
		this.iw=336
		this.ih=112
		this.cx=0
		this.cx2=804
		this.cy=492
		this.cw=804
		this.ch=112
	}
	show(){
		//绘制大地
		this.ctx.drawImage(this.img,this.ix,this.iy,this.iw,this.ih,this.cx,this.cy,this.cw,this.ch)
		this.ctx.drawImage(this.img,this.ix,this.iy,this.iw,this.ih,this.cx2,this.cy,this.cw,this.ch)
	}
	move(){
		this.cx-=5
		this.cx2-=5
		if(this.cx<=-804){
			this.cx=0
			this.cx2=804
		}
	}
}