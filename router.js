define(["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			home: "home",
			market: "market",
			order: "order",
			mine: "mine"
		},
		home: function(){
			require(["modules/home/home.js"],function(home1){
				home1.innit();
			});
		},
		market: function(){
			require(["modules/market/market.js"],function(shansong){
				shansong.innit();
			});
		},
		order: function(){
			require(["modules/order/order.js"],function(car){
				car.innit();
			});
		},
		mine: function(){
			require(["modules/mine/mine.js"],function(wode){
				wode.innit();
			});
		},
	});
	return new Router();
});