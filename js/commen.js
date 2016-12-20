(function (doc, win) {
var docEl = doc.documentElement,
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc = function () {
var clientWidth = docEl.clientWidth;
if (!clientWidth) return;
if(clientWidth>=1025){
docEl.style.fontSize = '10px';
}else{
	if(clientWidth == 414){
		docEl.style.fontSize = (clientWidth / 100) + 'px';
	}else if(clientWidth == 375){
		docEl.style.fontSize = (clientWidth / 100) + 'px';
	}else if(clientWidth == 320){
		docEl.style.fontSize = (clientWidth / 100) + 'px';
	}else if(clientWidth == 412){
		docEl.style.fontSize = (clientWidth / 100) + 'px';
	}else if(clientWidth == 360){
		docEl.style.fontSize = (clientWidth / 100) + 'px';
	}else if(clientWidth == 736){
		docEl.style.fontSize = (clientWidth / 150) + 'px';
	}else if(clientWidth == 769){
		docEl.style.fontSize = (clientWidth / 100) + 'px';
	}
}
};
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
/*window.onload=function(){ 
if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) { 
bodyTag = document.getElementsByTagName('body')[0]; 
bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px'; 
} 
setTimeout(function() { 
window.scrollTo(0, 1) 
}, 0); 
}; 
*/
/**/
//window.open('./TelFaxHelp.aspx?SupplierCode=' + strSupplierCode +'&LeadClassCode=' + strLeadClassCode,'_Help', 'height=150,WIDTH=250,left=200,top=200,toolbar=no,scrollbars=no,menubar=no,resizable=yes',1);