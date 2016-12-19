define(["text!./market.html","css!./market.css","lazyload"], function(homePage){
	return {
			innit:function(){
				if($(".market").children().size()>0){
					$(".market").show().siblings("div").hide();
				}else{
					$(".market").html(homePage).show().siblings("div").hide();
					 $(".ss_mright_in img.lazy").lazyload({
						container: $(".ss_mright_in")
					 });
				}
			}
		}
});