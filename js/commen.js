// (function (doc, win) {
// var docEl = doc.documentElement,
// resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
// recalc = function () {
// var clientWidth = docEl.clientWidth;
// if (!clientWidth) return;
// if(clientWidth>=1025){
// docEl.style.fontSize = '10px';
// }else{
// 	if(clientWidth == 414){
// 		docEl.style.fontSize = (clientWidth / 100) + 'px';
// 	}else if(clientWidth == 375){
// 		docEl.style.fontSize = (clientWidth / 100) + 'px';
// 	}else if(clientWidth == 320){
// 		docEl.style.fontSize = (clientWidth / 100) + 'px';
// 	}else if(clientWidth == 412){
// 		docEl.style.fontSize = (clientWidth / 100) + 'px';
// 	}else if(clientWidth == 360){
// 		docEl.style.fontSize = (clientWidth / 100) + 'px';
// 	}else if(clientWidth == 736){
// 		docEl.style.fontSize = (clientWidth / 150) + 'px';
// 	}else if(clientWidth == 769){
// 		docEl.style.fontSize = (clientWidth / 100) + 'px';
// 	}
// }
// };
// if (!doc.addEventListener) return;
// win.addEventListener(resizeEvt, recalc, false);
// doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);

/*//页面进入加载底部footer top位置
;(function(){
	var foot = $("#fter"),
	topf = window.innerHeight;
	foot.css({"top":(topf-55)+"px"});
}());
//页面切换分辨率时改变底部footer 得top位置
;(function (doc, win) {
	//底部footer标签
	//判断是否支持orientationchange 不支持使用resize
	//定义监听事件recalc
var foot = $("#fter"),
 docEl = doc.documentElement,
 h = foot.css("height"),
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc = function () {
	var topf = win.innerHeight;
	foot.css({"top":(topf-55)+"px"});
};
//如果不支持二级监听返回
if (!doc.addEventListener) return;
//调用监听事件
win.addEventListener(resizeEvt, recalc, false);
})(document, window);*/

window.onload=function(){ 
if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) { 
bodyTag = document.getElementsByTagName('body')[0]; 
bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px'; 
} 
setTimeout(function() { 
window.scrollTo(0, 1) 
}, 0); 
}; 

/**/
//window.open('./TelFaxHelp.aspx?SupplierCode=' + strSupplierCode +'&LeadClassCode=' + strLeadClassCode,'_Help', 'height=150,WIDTH=250,left=200,top=200,toolbar=no,scrollbars=no,menubar=no,resizable=yes',1);