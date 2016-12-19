define(["text!./order.html","css!./order.css"], function(homePage){
	return {
			innit:function(){
				if($(".order").html(homePage)){
					$(".order").show().siblings("div").hide();
				}else{
					$(".order").html(homePage).show().siblings("div").hide();
				}
			}
		}
});