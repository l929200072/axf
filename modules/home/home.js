define(["text!./home.html","css!./home.css"], function(homePage,temp){

		/*$.ajax({
				type:"get",
				url:"./json/getCate.json",
				success:function(data){
				//引出传回参数
				var a = data;
				console.log(a);
				//加载图片轮播模板
				}
			});
			//首页ajax请求*/

		$.ajax({
				type:"get",
				url:"./json/home.json",
				success:function(data){
				//引出传回参数
				var a = data;
				//加载图片轮播模板
				


					$("#container").load("template/temp.html",function(){
						;(function(){
						var ban = $("#sy_ban"),//图片轮播模块ban

						limg = a.data.act_info[0];//从JSON扒出轮播图所需数据lb

						//使用模板取出百度模板数据,传入模板所需数据limg
						var tempData = baidu.template("tmp1",limg);
						//将模板数据放进页面
							ban.html(tempData);
							
						}());

						//banner栏模块
						;(function(){
						//banner栏模块数据
						var data = a.data.act_info[1];

						var tempData = baidu.template("tmp2",data);
							
						$("#sy_nav").html(tempData);

						}());

						//热销榜下的优选水果模块
						;(function(){

						var data = a.data.act_info[1];

						var tempData = baidu.template("tmp2",data);
							
						$("#sy_nav").html(tempData);

						}());


						//第3个模块
						;(function(){
						var modle = $("#m_ul1");
						var data = a.data.act_info[3];

						var tempData = baidu.template("tmp3",data);
							
						modle.html(tempData);

						}());


						//第4个模块
						;(function(){
						var modle = $("#more");
						var data = a.data.act_info[4].act_rows[2];
						var tempData = baidu.template("tmp4",data);
							
						modle.html(tempData);

						}());

						//第5个模块
						;(function(){
						var modle = $("#drink");
						var data = a.data.act_info[4].act_rows[3];
						var tempData = baidu.template("tmp5",data);
							
						modle.html(tempData);

						}());


						//第6个模块
						;(function(){
						var modle = $("#drink");
						var data = a.data.act_info[4].act_rows[3];
						var tempData = baidu.template("tmp5",data);
							
						modle.html(tempData);

						}());

						//第7个模块
						;(function(){
						var modle = $("#rDivFirst");
						var data = a.data.act_info[5].act_rows[0];
						var tempData = baidu.template("tmp6",data);
							
						modle.html(tempData);

						}());

						//第8个模块
						;(function(){
						var modle = $("#rDivSecond");
						var data = a.data.act_info[5].act_rows[1];
						var tempData = baidu.template("tmp6",data);
							
						modle.html(tempData);

						}());

						//第9个模块
						;(function(){
						var modle = $("#rDivThird");
						var data = a.data.act_info[5].act_rows[2];
						var tempData = baidu.template("tmp6",data);
							
						modle.html(tempData);

						}());

						//第10个模块
						;(function(){
						var modle = $("#rDivFour");
						var data = a.data.act_info[5].act_rows[3];
						var tempData = baidu.template("tmp6",data);
							
						modle.html(tempData);

						}());

						//第10个模块
						;(function(){
						var modle = $("#rDivFive");
						var data = a.data.act_info[5].act_rows[4];
						var tempData = baidu.template("tmp6",data);
							
						modle.html(tempData);

						}());

						//第11个模块
						;(function(){
						var modle = $("#rDivSix");
						var data = a.data.act_info[5].act_rows[5];
						var tempData = baidu.template("tmp6",data);
							
						modle.html(tempData);

						}());

						//第12个模块
						;(function(){
						var modle = $("#rDivFirstList1");
						var data = a.data.act_info[5].act_rows[0].category_detail;
						var tempData = baidu.template("tmp7",data);
						modle.html(tempData);

						}());

						//第13个模块
						;(function(){
						var modle = $("#rDivFirstList2");
						var data = a.data.act_info[5].act_rows[1].category_detail;
						var tempData = baidu.template("tmp7",data);
						modle.html(tempData);

						}());

						//第14个模块
						;(function(){
						var modle = $("#rDivFirstList3");
						var data = a.data.act_info[5].act_rows[2].category_detail;
						var tempData = baidu.template("tmp7",data);
						modle.html(tempData);

						}());

						//第15个模块
						;(function(){
						var modle = $("#rDivFirstList4");
						var data = a.data.act_info[5].act_rows[3].category_detail;
						var tempData = baidu.template("tmp7",data);
						modle.html(tempData);

						}());

						//第16个模块
						;(function(){
						var modle = $("#rDivFirstList5");
						var data = a.data.act_info[5].act_rows[4].category_detail;
						var tempData = baidu.template("tmp7",data);
						modle.html(tempData);

						}());

						//第17个模块
						;(function(){
						var modle = $("#rDivFirstList6");
						var data = a.data.act_info[5].act_rows[5].category_detail;
						var tempData = baidu.template("tmp7",data);
						modle.html(tempData);

						}());

						$(".lazy").lazyload();
						//Swiper插件
						var mySwiper = new Swiper('.swiper-container', {
							autoplay: 2000,//可选选项，自动滑动(时间:毫秒)
							loop : true,//循环
							autoplayDisableOnInteraction:false,
							pagination : '.swiper-pagination',//分页器
						});

					})
				
				}
			});
	
		//定位
		console.log($("#position").get());
		$("#position").on("click",function(){
			wx.getLocation({
			    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
			    success: function (res) {
			        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
			        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
			        var speed = res.speed; // 速度，以米/每秒计
			        var accuracy = res.accuracy; // 位置精度
			    }
			});
			alert("经度"+longitude);
			alert("纬度"+latitude);
		});
	
	return {
		innit:function(){
			if($(".home").children().size()>0){
				$(".home").show().siblings("div").hide();
			}else{
				$(".home").html(homePage).show().siblings("div").hide();
			}
			// 	//开场动画
			var t = setTimeout(time1, 2000);
			function time1(){
				$("#wl").css({"display":"none"});
			}

		}
	}
});



