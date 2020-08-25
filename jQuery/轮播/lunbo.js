$(function() {
	let index = 0;
	let img = $(".img-con img")
	let dot = $("li")

	// console.log(dot)
	function render() {
		img.eq(index % img.length).show().siblings().hide()
		
		dot.eq(index % dot.length).css({
			"background-color": "lightcoral"
		}).siblings().css({
			"background-color": "lightblue"
		})
	}
	
	let timer = setInterval(function() {
		index++;
		render()
	}, 1000)
	$(".left").click(function(){
		index--;
		if(index<0){
			index=img.length-1
		}
		render();	
	})
	$(".right").click(function(){
		index++
		render()
	})
	$(".con").mouseenter(function(){
		clearInterval(timer)
	}).mouseleave(function(){
	timer=setInterval(function() {
			index++;
			render()
		}, 1000)
	})
})
