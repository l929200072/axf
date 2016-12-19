require.config({
	// "./"：代表目前所在的目录  "../"：代表上一层目录  以"/"开头：代表根目录
	paths: {
		"jquery": "js/jquery-1.11.0",
		"text": "js/text",
		"backbone": "js/backbone",
		"underscore": "js/underscore",
		"css": "js/css",
		"swiper":"js/swiper.min",
		"lazyload":"js/jquery.lazyload",
	},
	shim : {
		  	'lazyload' : {
		  		 deps: ['jquery']
		  	}
  }
});

require(['jquery','backbone','router.js','swiper','js/baiduTemplate','lazyload'],function($,Backbone){
    Backbone.history.start();
 });
