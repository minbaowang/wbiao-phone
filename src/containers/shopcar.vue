<template>
	<div>
		<div class="W-cart-head" id="W-cart-head">
			<header class="W_title">
				<ul class="clearfix">
					<li class="wb_back">
						<!--<router-link class="icon-d-back02" :a="'/wanbiao'"></router-link>-->
						<a href="javascript:window.history.back();" class="icon-d-back02"></a>
					</li>
					<li class="wb_title_middle wb_title">购物车</li>
					<li class="rewrite_right">
						<a href="javascript:void(0);" class="" id="w-editAll">编辑全部</a>
						<a href="javascript:void(0);" class="h" id="w-editFinish">完成</a>
					</li>
				</ul>
			</header>
			<div class="login-tips">登录后购物车的商品将保存到您账号中，
				<a href="#/login">现在登录</a>
			</div>
		</div>
		<!--商品-->
		<main>
			<div class="W-cart paddingTop80" id="W-cart" :class="{'h':bool}">
				<div class="empty-status">
					<div class="icon icon-a-empty-cart"></div>
					<p>购物车是空的</p>
					<div class="btns-wrap">
						<div class="btns left">
							<a href="#/wanbiao">逛逛首页</a>
						</div>
						<div class="btns right">
							<a href="javascript:0">查看收藏</a>
						</div>
					</div>
				</div>
			</div>
			<div class="shopping">

				<div class="shop-group-item" v-for="(s,index) in goodarr" :key="index" :data-guid="s.id">
					<div class="shop-name">
						<input type="checkbox" class="check goods-check shopCheck">
						<h4><a href="#" v-text="s.trade">苹果专卖店</a></h4>
						<div class="coupons">
							<span>领券</span>
							<em>|</em>
							<span class="btn-close">删除</span>
						</div>
					</div>
					<ul>
						<li>
							<div class="shop-info">
								<input type="checkbox" class="check goods-check goodsCheck">
								<div class="shop-info-img">
									<a href="#"><img :src="s.img" /></a>
								</div>
								<div class="shop-info-text">
									<h4 v-text="s.name">Apple MacBook Pro 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/128GB SSD闪存/Retina屏 MF839CH/A)</h4>
									<div class="shop-brief"><span v-text="s.intro"></span></div>
									<div class="shop-price">
										<div class="shop-pices">￥<b class="price" v-text="s.sale">100.00</b></div>
										<div class="shop-arithmetic">
											<a href="javascript:;" class="minus">-</a>
											<span class="num" v-text="s.qty">1</span>
											<a href="javascript:;" class="plus">+</a>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<div class="shopPrice">本店总计：￥<span class="shop-total-amount ShopTotal">0.00</span></div>
				</div>
			</div>

			<div class="payment-bar">
				<div class="all-checkbox"><input type="checkbox" class="check goods-check" id="AllCheck">全选</div>
				<div class="shop-total">
					<strong>总价：<i class="total" id="AllTotal">0.00</i></strong>
					<span>减免：123.00</span>
				</div>
				<a href="#" class="settlement">结算</a>
			</div>
		</main>
		<xfooter :type="4" />
	</div>

</template>

<script>
	import common from '../lib/common.js';
	var Cookie = common.Cookie;
	import "../lib/base.css";
	import "../lib/module.css";
	import $ from 'jquery';
	window.$ = $;
	import xheader from '../components/Xheader.vue';
	import xfooter from '../components/xfooter.vue';
	export default {
		data() {
			return {
				bool: false,
				goodarr: []

			}
		},
		components: {
			xheader,
			xfooter
		},
		mounted() {
			var self = this;
			//获取cookie
			var goodslist, userdata;
			goodslist = Cookie.get('goodslist'); //
			userdata = Cookie.get('userdata');
			if(goodslist === '') {
				goodslist = [];
			} else {
				goodslist = JSON.parse(goodslist);
				this.goodarr = goodslist;
				if(goodslist.length > 0) {
					self.bool = !self.bool
				}
			}
			//获取用户信息
			if(userdata === '') {
				userdata = [];
			} else {
				userdata = JSON.parse(userdata);
				var username = userdata[0].username;
				if(username.length > 0) {
					$(".login-tips").css("display", "none");
				}
			}

			$(function() {
				// 数量减
				$(".minus").click(function() {
					var t = $(this).parent().find('.num');
					t.text(parseInt(t.text()) - 1);
					if(t.text() <= 1) {
						t.text(1);
					}
					TotalPrice();
				});
				// 数量加
				$(".plus").click(function() {
					var t = $(this).parent().find('.num');
					t.text(parseInt(t.text()) + 1);
					if(t.text() <= 1) {
						t.text(1);
					}
					TotalPrice();
				});
				/******------------分割线-----------------******/
				//点击删除按钮
				$(".shopping").click(function(e) {
					e = e || window.event;
					var target = e.target || e.srcElement;
					if(target.className === 'btn-close') {
						// 获取当前li
						var currentDiv = target.parentNode.parentNode.parentNode;

						var guid = currentDiv.getAttribute('data-guid');
						
						// 找出与guid相同的商品
						for(var i = 0; i < goodslist.length; i++) {
							if(goodslist[i].id == guid) {
								// 从数组中删除
								goodslist.splice(i, 1);								
								break;
							}
						}
						// 重写cookie
						Cookie.set('goodslist', JSON.stringify(goodslist));
//						self.goodarr = goodslist;
					}
				});
				/******------------分割线-----------------******/
				// 点击商品按钮
				$(".goodsCheck").click(function() {
					var goods = $(this).closest(".shop-group-item").find(".goodsCheck"); //获取本店铺的所有商品
					var goodsC = $(this).closest(".shop-group-item").find(".goodsCheck:checked"); //获取本店铺所有被选中的商品
					var Shops = $(this).closest(".shop-group-item").find(".shopCheck"); //获取本店铺的全选按钮
					if(goods.length == goodsC.length) { //如果选中的商品等于所有商品
						Shops.prop('checked', true); //店铺全选按钮被选中
						if($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
							$("#AllCheck").prop('checked', true); //全选按钮被选中
							TotalPrice();
						} else {
							$("#AllCheck").prop('checked', false); //else全选按钮不被选中 
							TotalPrice();
						}
					} else { //如果选中的商品不等于所有商品
						Shops.prop('checked', false); //店铺全选按钮不被选中
						$("#AllCheck").prop('checked', false); //全选按钮也不被选中
						// 计算
						TotalPrice();
						// 计算
					}
				});
				// 点击店铺按钮
				$(".shopCheck").click(function() {
					if($(this).prop("checked") == true) { //如果店铺按钮被选中
						$(this).parents(".shop-group-item").find(".goods-check").prop('checked', true); //店铺内的所有商品按钮也被选中
						if($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
							$("#AllCheck").prop('checked', true); //全选按钮被选中
							TotalPrice();
						} else {
							$("#AllCheck").prop('checked', false); //else全选按钮不被选中
							TotalPrice();
						}
					} else { //如果店铺按钮不被选中
						$(this).parents(".shop-group-item").find(".goods-check").prop('checked', false); //店铺内的所有商品也不被全选
						$("#AllCheck").prop('checked', false); //全选按钮也不被选中
						TotalPrice();
					}
				});
				// 点击全选按钮
				$("#AllCheck").click(function() {
					if($(this).prop("checked") == true) { //如果全选按钮被选中
						$(".goods-check").prop('checked', true); //所有按钮都被选中
						TotalPrice();
					} else {
						$(".goods-check").prop('checked', false); //else所有按钮不全选
						TotalPrice();
					}
					$(".shopCheck").change(); //执行店铺全选的操作
				});
				//计算
				function TotalPrice() {
					var allprice = 0; //总价
					$(".shop-group-item").each(function() { //循环每个店铺
						var oprice = 0; //店铺总价
						$(this).find(".goodsCheck").each(function() { //循环店铺里面的商品
							if($(this).is(":checked")) { //如果该商品被选中
								var num = parseInt($(this).parents(".shop-info").find(".num").text()); //得到商品的数量
								var price = parseFloat($(this).parents(".shop-info").find(".price").text()); //得到商品的单价
								var total = price * num; //计算单个商品的总价
								oprice += total; //计算该店铺的总价
							}
							$(this).closest(".shop-group-item").find(".ShopTotal").text(oprice.toFixed(2)); //显示被选中商品的店铺总价
						});
						var oneprice = parseFloat($(this).find(".ShopTotal").text()); //得到每个店铺的总价
						allprice += oneprice; //计算所有店铺的总价
					});
					$("#AllTotal").text(allprice.toFixed(2)); //输出全部总价
				}
			})

		}
	}
</script>

<style scoped>
	/*头部*/
	
	.W-cart-head {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
	}
	
	.W_title {
		position: relative;
		width: 100%;
		height: 44px;
		line-height: 44px;
		max-width: 640px;
		margin: 0 auto;
		background: #fff;
		border-bottom: 1px solid #ddd;
	}
	
	ul {
		overflow: hidden;
	}
	
	.W_title ul li.wb_title {
		position: absolute;
		top: 0;
		text-align: center;
		width: 100%;
		z-index: 1;
		margin-left: 0;
	}
	
	.W_title ul li {
		display: block;
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		color: #444;
	}
	
	header .W_title .rewrite_right {
		right: 12px;
		font-size: 12px;
		width: auto;
	}
	
	.W_title .rewrite_right,
	.W_title .wb_more,
	.W_title .wb_right {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 2;
	}
	
	.W_title .rewrite_right a {
		display: block;
	}
	
	a {
		text-decoration: none;
		outline: 0;
		color: #666;
		border: none;
	}
	
	.h {
		display: none;
	}
	
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.W-cart-head .login-tips {
		font-size: 12px;
		line-height: 28px;
		text-align: center;
		height: 28px;
		max-width: 640px;
		margin: 0 auto;
		background-color: #fff9ce;
	}
	
	.W-cart-head .login-tips a {
		color: #5781b4;
	}
	/*购物车*/
	
	main {
		display: block;
		position: relative;
		overflow: hidden!important;
		width: 100%;
		max-width: 640px;
	}
	
	.shopping {
		padding-top: 50px;
	}
	/*空购物车时候的页面css*/
	
	.W-cart.paddingTop80 {
		padding-top: 60px;
	}
	
	.W-cart {
		padding-bottom: 130px;
	}
	
	.W-cart .empty-status {
		padding-top: 43px;
		text-align: center;
	}
	
	.h {
		display: none!important;
	}
	
	.W-cart .empty-status .icon {
		margin: 0 auto;
	}
	
	.icon-a-empty-cart {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -89px -89px;
		background-size: 443px;
		width: 82px;
		height: 84px;
	}
	
	.W-cart .empty-status>p {
		font-size: 14px;
		line-height: 20px;
		padding-top: 16px;
	}
	
	.W-cart .empty-status>p {
		font-size: 14px;
		line-height: 20px;
		padding-top: 16px;
	}
	
	.W-cart .empty-status .btns-wrap {
		margin-top: 60px;
		text-align: center;
	}
	
	.W-cart .empty-status .btns-wrap .btns:first-child {
		margin-right: 18px;
		background-color: #d90000;
		color: #fff;
	}
	
	.W-cart .empty-status .btns-wrap .btns {
		display: inline-block;
		width: 100px;
		height: 32px;
		line-height: 32px;
		border: 1px solid #d90000;
		color: #d90000;
		font-size: 12px;
		-webkit-border-radius: 16px;
		-moz-border-radius: 16px;
		border-radius: 16px;
	}
	
	.W-cart .empty-status .btns-wrap .btns:first-child a {
		color: #fff;
	}
	
	.W-cart .empty-status .btns-wrap .btns a {
		color: #d90000;
	}
	
	.wb_back {
		position: absolute;
		left: 0;
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
	
	.icon-d-back02 {
		display: block;
		background-image: url(../assets/dl.png);
		background-position: -196px -186.5px;
		background-size: 428.5px;
		width: 44px;
		height: 44px;
	}
</style>