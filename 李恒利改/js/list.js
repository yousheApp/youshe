
	var sort=document.querySelector('.yy_sort');
	var person=document.querySelector('.yy_person');
	var cover=document.querySelector('.yy_cover');
	var wenzhang=document.querySelector('.yy_wenzhang');
	var zuopin=document.querySelector('.yy_zuopin');
	var dongxiao=document.querySelector('.yy_dongxiao');
	var jiaocheng=document.querySelector('.yy_jiaocheng');
	var center=document.querySelector('.yy_center');
	sort.onclick=function(){
		cover.style.display="block";
		animate(cover,{opacity:1},1000);
		animate(wenzhang,{top:0,left:0},1000);
		animate(zuopin,{top:0,left:136},1000);
		animate(dongxiao,{top:136,left:0},1000);
		animate(jiaocheng,{top:136,left:136},1000);
	}
	cover.onclick=function(){
		animate(this,{opacity:0},1000,function(){
			this.style.display="none"
		})
		animate(wenzhang,{top:-50,left:-50},1000)
		animate(zuopin,{top:-50,left:186},1000)
		animate(dongxiao,{top:186,left:-50},1000)
		animate(jiaocheng,{top:186,left:186},1000)
	}

