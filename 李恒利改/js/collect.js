// var inner=document.querySelector(".inner");
function Waterfall(param){
    this.id = typeof param.container == 'string' ? document.getElementById(param.container) : param.container;
    this.colWidth = param.colWidth;
    this.colCount = param.colCount || 2;
    this.cls = param.cls && param.cls != '' ? param.cls : 'inner';
    this.init();
}
Waterfall.prototype = {
    getByClass:function(cls,p){
        var arr = [],reg = new RegExp("(^|\\s+)" + cls + "(\\s+|$)","g");
        var nodes = p.getElementsByTagName("*"),len = nodes.length;
        for(var i = 0; i < len; i++){
            if(reg.test(nodes[i].className)){
                arr.push(nodes[i]);
                reg.lastIndex = 0;
            }
        }
        return arr;
    },
    maxArr:function(arr){
        var len = arr.length,temp = arr[0];
        for(var ii= 1; ii < len; ii++){
            if(temp < arr[ii]){
                temp = arr[ii];
            }
        }
        return temp;
    },
    getMar:function(node){
        var dis = 0;
        if(node.currentStyle){
            dis = parseInt(node.currentStyle.marginBottom);
        }else if(document.defaultView){
            dis = parseInt(document.defaultView.getComputedStyle(node,null).marginBottom);
        }
        return dis;
    },
    getMinCol:function(arr){
        var ca = arr,cl = ca.length,temp = ca[0],minc = 0;
        for(var ci = 0; ci < cl; ci++){
            if(temp > ca[ci]){
                temp = ca[ci];
                minc = ci;
            }
        }
        return minc;
    },
    init:function(){
        var _this = this;
        var col = [],//列高
            iArr = [];//索引
        var nodes = _this.getByClass(_this.cls,_this.id),len = nodes.length;
        for(var i = 0; i < _this.colCount; i++){
            col[i] = 0;
        }
        for(var i = 0; i < len; i++){
            nodes[i].h = nodes[i].offsetHeight + _this.getMar(nodes[i]);
            iArr[i] = i;
        }
         
        for(var i = 0; i < len; i++){
            var ming = _this.getMinCol(col);
            nodes[i].style.left = ming * _this.colWidth + "rem";
            nodes[i].style.top = col[ming] + "rem";
            col[ming] += nodes[i].h;
        }
         
        _this.id.style.height = _this.maxArr(col) + "rem";
    }
};
new Waterfall({
    "container":"wf-main",
    "colWidth":3.4,
    "colCount":0.2
});