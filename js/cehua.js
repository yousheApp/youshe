

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