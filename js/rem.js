var designWidth=750;
function resize(){
    var width=document.documentElement.clientWidth;
    var fontSize=width/designWidth;
    document.documentElement.style.fontSize=fontSize*100+"px";
}
resize();
window.addEventListener("resize",resize);

