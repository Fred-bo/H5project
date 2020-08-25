class Game {
	constructor(arg) {
		// Object.prototype.canvas = document.querySelector(arg)
		this.bool=false;
		this.m = new Manager(arg)
	}
	init() {
		this.m.quiet()
		window.onkeydown = (e) => {
			
			if(e.keyCode == 13) {
				this.bool=!this.bool;
				this.canvas.width = this.canvas.width
				this.m.play();
				// this.m.drop()
				}else if(e.keyCode==38){

				this.m.jump()
			}
		}
	}

}
