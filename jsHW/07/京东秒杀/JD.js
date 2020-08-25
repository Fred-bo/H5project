window.onload=function count() {
var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");
var b3 = document.querySelector(".b3");
	var end = new Date("2020-7-24 22:00:00");

	setInterval(function() {
		var start = new Date();
		var time = end - start;

		var day = Math.floor(time / 1000 / 60 / 60 / 24);
		var hour = Math.floor(time / 1000 / 60 / 60 % 24);
		console.log(hour)
		var min = Math.floor(time / 1000 / 60 % 60);
		var second = Math.floor(time / 1000 % 60);
		b1.innerHTML = hour<10 ? '0'+hour:hour;
		b2.innerHTML = min < 10 ? '0' + min : min;
		b3.innerHTML = second < 10 ? '0' + second : second;
	}, 1000)
}
count();
// h1.innerHTML = `剩余时间：${day}天-${hour<10 ? '0'+hour:hour}:${min<10 ? '0'+min:min}:${second<10 ? '0'+second:second}`
