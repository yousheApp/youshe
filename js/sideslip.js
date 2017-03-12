

//侧边栏滑动出现效果
//
var myself = document.querySelector(".self");
var mask = document.querySelector(".mask");
var side = document.querySelector(".left-box");

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

more.addEventListener("touchstart",function(){
	moreMask.style.display="block";
	setTimeout(function(){
		hidden.setAttribute("class","hidden-box active");
	},1)
})

moreMask.addEventListener("touchstart",function(){
	moreMask.style.display="none";
	hidden.removeAttribute("class","active");
})