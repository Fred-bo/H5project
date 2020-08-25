window.onload = function() {
	let imgList = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg"]
	let index = 0;
	let con=document.querySelector(".container")
	let img=document.querySelector("img")
	let left = document.querySelector(".left");
	let right = document.querySelector(".right");
	let dot = document.querySelector(".dot");
	let li = document.querySelectorAll(".dot li");
	let bool=true;

	left.addEventListener("click",f1);
	right.addEventListener("click",f1);
	dot.addEventListener("click",f1)
	setInterval(autoPlay,1000);
	con.addEventListener("mouseenter",f2)
	con.addEventListener("mouseleave",f2)
	
	function f1(e) {
		if (this == left) {
			console.log(this)
			index--;
			
			if (index < 0) {			
				index = imgList.length - 1;
			} 
			}else if (this == right) {								
			console.log(this)
				index++;			
			}
			for (let i = 0; i < li.length; i++) {
				li[i].style.backgroundColor = "lightcoral"
				if (e.target == li[i]) {
					index = i;
				}
			}
			li[index % imgList.length].style.backgroundColor = "rgb(255,255,255)";
			img.src = imgList[index % imgList.length];
		}
	
	
	function autoPlay(){
		if(bool){
			index++;
			for(let i=0;i<li.length;i++){
				li[i].style.backgroundColor = "lightcoral"
			}
				li[index % imgList.length].style.backgroundColor = "rgb(255,255,255)";		
				img.src = imgList[index % imgList.length];
		}
	}
	function f2(e){
		if(e.type=="mouseenter"){
			bool=false
		}else{
			bool=true
		}
	}

}








