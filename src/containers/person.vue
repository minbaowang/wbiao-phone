<template>
	<div>
		<main>
			<div class="W-member-index">
				<div class="member-top">
					<div class="member-head">
						<div class="W_register">
							<a href="/member/register" class="register h"><span class="sp1"><i>新用户福利</i><em>注册送50元现金券</em></span> <span class="sp2">立即注册</span></a>
						</div>
						<header class="W_title">
							<ul class="clearfix">
								<li class="rewrite_right">
									<a href="/member/setting/" class="icon-a-m-setting"></a>
								</li>
							</ul>
						</header>
						<a href="#/login" class="head-info"><span class="icon-a-m-head01"></span>
							<div class="head-login">
								<p class="p1">登录/注册</p>
								<p class="p2" @click="clearCookie">登录享优惠</p>
							</div>
						</a>
					</div>
					<div class="member-nav">
						<a href="/member/profile/"><i class="icon-a-m-write"></i> <span>个人资料</span></a>
						<a href="/member/consignee/"><i class="icon-a-m-place"></i> <span>收货地址</span></a>
						<a href="/member/collection/"><i class="icon-a-m-collection"></i> <span>我的收藏</span></a>
					</div>
				</div>
				<div class="profile">
					<p class="no-login">登录后将显示您的详细资料~
						<a href="/member/login">马上登录&gt;</a>
					</p>
				</div>
				<div class="modules-floor order-floor">
					<a href="/member/order/#?nav=0" class="floor-top to-my-order">我的订单<i class="icon-a-whole fr"></i></a>
					<div class="list-line clearfix">
						<a href="/member/order/#?nav=1"><i class="icon-a-m-pay"></i> 待付款</a>
						<a href="/member/order/#?nav=2"><i class="icon-a-m-ship"></i> 待发货</a>
						<a href="/member/order/#?nav=3"><i class="icon-a-m-receipt"></i> 待收货</a>
						<a href="/member/order/#?nav=4"><i class="icon-a-m-evaluate"></i> 待评价</a>
					</div>
				</div>
				<div class="modules-floor">
					<p class="floor-top my-service clearfix"> <span>我的服务</span> <span class="fr CUSTOMER-SERVICE">联系万表</span> <span class="fr img CUSTOMER-SERVICE"><img src="//static.wbiao.co/p/mu/images/1/contact.png" alt=""></span></p>
					<div class="list-line clearfix">
						<a href="/member/presale/list/"><i class="icon-a-m-presale"></i> 我的预售</a>
						<a href="/member/order/gift/list/"><i class="icon-d-gift"></i> 我的礼品单</a>
						<a href="/member/aftersale/list/"><i class="icon-a-m-aftersale"></i> 售后服务</a>
						<a href="/member/integral/"><i class="icon-a-m-integral"></i> 我的积分</a>
					</div>
					<div class="list-line clearfix">
						<a href="/member/invoice/manage/"><i class="icon-a-m-invoice"></i> 发票管理</a>
						<a href="/member/coupon/"><i class="icon-a-m-coupon"></i> 优惠券</a>
						<a href="/member/wallet/"><i class="icon-a-m-wallet"></i> 余额</a>
						<a href="/member/footprints/"><i class="icon-a-m-footprint"></i> 足迹</a>
					</div>
					<div class="list-line clearfix">
						<a href="/member/evaluate/list/"><i class="icon-a-m-comment"></i> 我的评论</a>
						<a href="/member/recommend/quantity/"><i class="icon-d-recommend"></i> 推荐</a>
						<a href="https://m.wbiao.cn/mingjiang/watch/seneschal"><i class="icon-d-repair"></i> 手表管家</a>
						<a href="https://m.wbiao.cn/mingjiang/order/list"><i class="icon-d-after-repair"></i> 维修订单</a>
					</div>
				</div>
			</div>
		</main>

		<xfooter :type="5" />
	</div>

</template>

<script>
	import common from '../lib/common.js'
	import $ from 'jquery';
	var Cookie = common.Cookie;
	import xheader from '../components/Xheader.vue';
	import xfooter from '../components/xfooter.vue';
	export default {
		data() {
			return {

			}
		},
		components: {
			xheader,
			xfooter
		},
		//		cookie传给登陆的用户
		mounted() {
			var userdata;
			userdata = Cookie.get('userdata'); //
			if(userdata === '') {
				userdata = [];
			} else {
				userdata = JSON.parse(userdata);
				var username = userdata[0].username;
				if(username.length > 0) {
					$(".p1").html(username);
					$(".p2").html("退出登录");
					$(".profile").css('display', 'none');
				}
			}
	},
	methods: {
		clearCookie() {
			Cookie.remove("userdata");
		}
	}
}
</script>

<style scoped>
	.W-member-index {
		padding-bottom: 50px;
		background: #CCCCCC;
	}
	
	* {
		font-family: Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", STXihei, STHeiti, Heiti, SimSun, sans-serif;
		margin: 0;
		padding: 0;
		font-size: 1em;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	
	.W-member-index .member-top {
		position: relative;
		width: 100%;
		height: 206px;
		background-image: url(//static.wbiao.co/p/m/images/1/member-bg.png);
		background-size: cover;
		background-color: #1e1e1e;
	}
	
	.W-member-index .member-top .member-head {
		position: relative;
		height: 154px;
	}
	
	.W_register a {
		display: block;
		height: 50px;
		width: 100%;
	}
	
	.h {
		display: none!important;
	}
	
	.W_register a span.sp1 {
		background: #383838;
		width: 70%;
	}
	
	.W_register a span {
		display: block;
		float: left;
		height: 100%;
	}
	
	.W_register a span.sp2 {
		width: 30%;
		background: #cda977;
		font-size: 16px;
		color: #fff;
		text-align: center;
		line-height: 50px;
	}
	
	.W_title {
		background: 0 0;
		border-bottom: 0;
		position: relative;
		width: 100%;
		height: 44px;
		line-height: 44px;
		max-width: 640px;
		margin: 0 auto;
	}
	
	.W-member-index .member-head .rewrite_right {
		margin-right: 9px;
	}
	
	.W_title .rewrite_right,
	.W_title .wb_more,
	.W_title .wb_right {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 2;
	}
	
	.W_title ul li {
		display: block;
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		color: #444;
	}
	
	.W-member-index .member-head .icon-a-m-setting {
		margin-top: 6px;
		margin-left: 11px;
	}
	
	.W_title .rewrite_right a {
		display: block;
	}
	
	.icon-a-m-setting {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -381px -37px;
		background-size: 443px;
		width: 32px;
		height: 32px;
	}
	
	.W-member-index .member-head .head-info {
		position: relative;
		width: 95%;
		margin-top: 5px;
	}
	
	.W-member-index .member-head .head-info .icon-a-m-head01,
	.W-member-index .member-head .head-info .icon-a-m-head02 {
		display: inline-block;
		margin: 0 13px 0 24px;
	}
	
	.icon-a-m-head01 {
		display: block;
		background-image: url(../assets/a.png);
		background-position: 0 -178px;
		background-size: 443px;
		width: 64px;
		height: 64px;
	}
	
	.W-member-index .member-head .head-info .head-login {
		display: inline-block;
		color: #fff;
		font-size: 12px;
		vertical-align: top;
		margin-top: 13px;
	}
	
	.W-member-index .member-head .head-info .head-login .p1 {
		font-size: 16px;
		margin-bottom: 2px;
	}
	/*收货地址*/
	
	.W-member-index .member-top .member-nav {
		width: 100%;
		height: 52px;
		background: rgba(0, 0, 0, .4);
	}
	
	.W-member-index .member-top .member-nav a {
		position: relative;
		width: 33.33%;
		height: 100%;
		display: block;
		float: left;
		color: #fff;
		font-size: 12px;
		text-align: center;
		line-height: 17px;
	}
	
	.W-member-index .member-top .member-nav a i {
		margin: 8px auto 4px;
	}
	
	.icon-a-m-write {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -371px -392.5px;
		background-size: 443px;
		width: 16px;
		height: 16px;
	}
	
	.icon-a-m-place {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -202px -368px;
		background-size: 443px;
		width: 16px;
		height: 16px;
	}
	
	.icon-a-m-collection {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -42px -417.5px;
		background-size: 443px;
		width: 16px;
		height: 16px;
	}
	/*马上登陆*/
	
	.W-member-index .profile {
		width: 91.47%;
		margin: 0 auto;
		padding: 18px 0 10px;
	}
	
	.W-member-index .profile p.no-login {
		background: #cc3d3d;
		color: #fff;
	}
	
	.W-member-index .profile p {
		height: 28px;
		line-height: 28px;
		font-size: 12px;
		text-align: center;
	}
	
	.W-member-index .profile p.no-login a {
		color: #fff;
	}
	
	.W-member-index .profile p a {
		text-decoration: underline;
		padding-bottom: 2px;
	}
	/*我的订单*/
	
	.W-member-index .modules-floor {
		margin-bottom: 8px;
		background: #fff;
	}
	
	.W-member-index .order-floor .to-my-order {
		display: block;
	}
	
	.W-member-index .modules-floor .floor-top {
		height: 44px;
		line-height: 44px;
		padding-right: 12px;
		margin-left: 12px;
		font-size: 14px;
		color: #333;
		border-bottom: 1px solid #f1f1f1;
		box-sizing: border-box;
	}
	
	.W-member-index .order-floor .to-my-order .icon-a-whole {
		margin-top: 14px;
	}
	
	.icon-a-whole {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -349px -368px;
		background-size: 443px;
		width: 16px;
		height: 16px;
	}
	
	.fr {
		float: right!important;
	}
	
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.W-member-index .modules-floor .list-line a {
		width: 25%;
		height: 80px;
		display: block;
		float: left;
		text-align: center;
		font-size: 12px;
		color: #333;
	}
	
	.W-member-index .modules-floor .list-line a i {
		position: relative;
		margin: 20px auto 6px;
	}
	
	.icon-a-m-pay {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -275px -392.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	
	.icon-a-m-ship {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -25px -392.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	
	.icon-a-m-receipt {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -300px -392.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	
	.icon-a-m-evaluate {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -125px -392.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	/*我的服务*/
	
	.W-member-index .modules-floor {
		margin-bottom: 8px;
		background: #fff;
	}
	
	.W-member-index .modules-floor .floor-top {
		height: 44px;
		line-height: 44px;
		padding-right: 12px;
		margin-left: 12px;
		font-size: 14px;
		color: #333;
		border-bottom: 1px solid #f1f1f1;
		box-sizing: border-box;
	}
	
	.fr {
		float: right!important;
	}
	
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.W-member-index .modules-floor .floor-top img {
		width: 14px;
		height: 14px;
		margin-top: 15px;
		margin-right: 5px;
	}
	
	.W-member-index .modules-floor .list-line a {
		width: 25%;
		height: 80px;
		display: block;
		float: left;
		text-align: center;
		font-size: 12px;
		color: #333;
	}
	
	.icon-a-m-presale {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -325px -392.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	
	.icon-d-gift {
		display: block;
		background-image: url(../assets/d.png);
		background-position: -298.5px -233px;
		background-size: 330.5px;
		width: 20px;
		height: 20px;
	}
	
	.icon-a-m-aftersale {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -418px -303.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	
	.icon-a-m-integral {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -225px -392.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	
	.icon-a-m-invoice {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -250px -392.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	
	.icon-a-m-coupon {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -100px -392.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	
	.icon-a-m-wallet {
		display: block;
		background-image: url(../assets/a.png);
		background-position: 0 -392.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	
	.icon-a-m-footprint {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -150px -392.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	
	.icon-a-m-comment {
		display: block;
		background-image: url(../assets/d.png);
		background-position: -75px -392.5px;
		background-size: 443px;
		width: 20px;
		height: 20px;
	}
	
	.icon-d-recommend {
		display: block;
		background-image: url(../assets/d.png);
		background-position: -298.5px -208px;
		background-size: 330.5px;
		width: 20px;
		height: 20px;
	}
	
	.icon-d-repair {
		display: block;
		background-image: url(../assets/d.png);
		background-position: 0 -267px;
		background-size: 330.5px;
		width: 20px;
		height: 20px;
	}
	
	.icon-d-after-repair {
		display: block;
		background-image: url(../assets/d.png);
		background-position: -25px -267px;
		background-size: 330.5px;
		width: 20px;
		height: 20px;
	}
</style>