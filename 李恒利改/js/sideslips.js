

//侧边栏滑动出现效果
//
var myself = document.querySelector(".self");
var mask = document.querySelector(".mask");
var side = document.querySelector(".left-box");
var links = document.querySelectorAll(".links")

myself.addEventListener("touchstart",function(){
	side.style.transition="left .5s";
	side.style.left=0;
	mask.style.display="block";
})

mask.addEventListener("touchstart",function(){
	side.style.transition="left .5s";
	side.style.left="-6.3rem";
	mask.style.display="none";
})

var more = document.getElementById("more");
var moreMask = document.querySelector(".more-mask");
var hidden = document.querySelector(".hidden-box");
var links = document.querySelectorAll(".links")

more.addEventListener("touchstart",function(){
	moreMask.style.display="block";
	setTimeout(function(){
		hidden.className="hidden-box active";
	},1)
})

moreMask.addEventListener("touchstart",function(e){
		hidden.className="hidden-box";
		this.style.display="none";
})

links.forEach(function(ele,i,arr){
	ele.addEventListener("touchstart",function(e){
		e.stopPropagation() 
	})
})