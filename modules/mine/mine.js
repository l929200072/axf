
define(["text!./mine.html","css!./mine.css"], function(homePage){
	return {
			innit:function(){
				if($(".mine").children().size()>0){
					$(".mine").show().siblings("div").hide();
				}else{
					$(".mine").html(homePage).show().siblings("div").hide();
				}
			}
		}
});


















/*//页面进入加载底部footer top位置
;(function(){
	var foot = $("#fter"),
	topf = window.innerHeight;
	foot.css({"top":(topf-70)+"px"});
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
	foot.css({"top":(topf-70)+"px"});
};
console.log(foot.css("height"));
//如果不支持二级监听返回
if (!doc.addEventListener) return;
//调用监听事件
win.addEventListener(resizeEvt, recalc, false);
})(document, window);*/