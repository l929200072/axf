<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx255b91dc43b0f548", "fc82f0f7f1a6075af3f98eec0294a272");
$signPackage = $jssdk->GetSignPackage();
?>
 <!DOCTYPE html>
<html style="font-size:4.14px;">
	<head>
		<title>爱鲜蜂</title>
		<meta charset = "utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<script type = "text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<link rel ="stylesheet" href= "css/commen.css">
		<link rel ="stylesheet" href= "css/swiper.min.css">
		<script type = "text/javascript" src="js/jquery-1.11.0.js"></script>
		<!-- data-main指定主程序入口 通常指定当前目录下的js文件 其他模块中的路径会参照主程序入口路径 -->
		<script data-main ="app.js"  type = "text/javascript" src="js/require.js"></script>
	</head>
	<body>
		<!--<input type= "button" value = "weidu" id ="inp1"> -->
		 <div class="main">
			<div class = "home"></div>
			<div class = "market"></div>
			<div class = "order"></div>
			<div class = "mine"></div>
		</div>
		<div id = "container"></div>

	 =============末尾空白DIV================ -->
			 <div class="kongbai">
			</div>
		<div class="footer" id ="fter">
			<ul>
				<li>
					<a href = "#home" class="picas"></a>
					<div class="f_div1"><a href ="#home">首页</a></div>
				</li>
				<li>
					<a href = "#market" class="pica2"></a>
					<div class="f_div1"><a href ="#market">闪送超市</a></div>
				</li>
				<li>
					<a href = "#order" class="pica3"></a>
					<div class="f_div1"><a href ="#order">购物车</a></div>
				</li>
				<li>
					<a href = "#mine" class="pica4"></a>
					<div class="f_div1"><a href ="#mine">我的</a></div>
				</li>
			</ul>
		</div> 
	</body>
		<script type = "text/javascript" src="js/commen.js"></script>
		<script>
/*		document.getElementById("inp1").onclick = function(){
			wx.getLocation({
    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: function (res) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
        alert("X"+latitude);
        alert("X"+longitude);
    }
});
		}*/
  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        'checkJsApi',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });

	
</script>
</html>