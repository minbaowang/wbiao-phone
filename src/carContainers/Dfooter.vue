<template>
	<div class="detail_footer">
		<div class="detail_footer_content">
			<li>
				<p class="detail_footer_ico icon-a-ntalk-goods CUSTOMER-SERVICE" service-code="wx_1000_1515726307656"></p>
				<p class="p2">客服</p>
			</li>
			<li>
				<a class="detail_footer_ico detail_footer_ico2"></a>
				<a class="p2" href="/shop/23">店铺</a>
			</li>
			<li>
				<a class="detail_footer_ico icon-d-goodscart"><i :style="{display: failed}" v-text="number"></i></a>
				<a class="p2" href="#/shopcar">购物车</a>
			</li>
			<li class="detail_footer_cart js_cart" @click="amimate">加入购物车</li>
			<li class="detail_footer_purchase js_purchase">立即购买</li>

			<!--添加购物车成功-->
			<div class="mui-popup mui-popup-in" :style="{display: zhuangtai}">
				<div class="mui-popup-inner">
					<div class="mui-popup-title">添加购物车成功</div>
					<div class="mui-popup-text">是否继续浏览商品</div>
				</div>
				<div class="mui-popup-buttons">
					<span class="mui-popup-button" @click="remove">取消</span>
					<a class="mui-popup-button mui-popup-button-bold" href="/wanbiao">继续浏览</a>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import common from '../lib/common.js';
	var Cookie = common.Cookie;
	//	alert(Cookie)
	export default {
		data() {
			return {
				zhuangtai:"none",
				failed: "none",
				number: 0
			}
		},
		methods: {
			amimate() {
				//点击加入购物车，购物车小图标变亮，并生成cookie
				this.number++;
				this.failed = "block";
				//ajax请求数据
				var self = this;
				//获取url上的参数
				var _id = this.$route.query.id;
				//写cookie
				var goodslist = Cookie.get('goodslist'); //[{},{}], ''
				if(goodslist === '') {
					goodslist = [];
				} else {
					goodslist = JSON.parse(goodslist);
				}
				//通过id发起ajax请求获取数据库
				$.ajax({
					type: "get",
					url: "http://localhost:9995/Detail",
					async: true,
					data: {
						id: _id
					},
					success(data) {
						var id = data[0].id;
						var trade = data[0].trade;
						var img = data[0].img;
						var intro = data[0].intro;
						var sale = data[0].sale;
						var name = data[0].name;
						var num = data[0].num;
						for(var i = 0; i < goodslist.length; i++) {
							if(goodslist[i].id === id) {
								// 如果goodslist中有一个商品跟当前id一样，说明为多次添加
								goodslist[i].qty++;
								break;
							}
						}
						// 循环跑完，无法找到相同id，说明为第一次添加
						// 如何判断循环跑完
						if(i === goodslist.length) {

							// 获取商品信息，并写入对象
							var mygoods = {
								id: id, //guid商品唯一标识
								name: name,
								img: img,
								intro: intro,
								sale: sale,
								trade: trade,

								// 商品数量：第一次天添加（为1），多次添加（在原来基础上+1）
								qty: num
							}

							// 把当前商品写入数组
							goodslist.push(mygoods);
						}
						Cookie.set('goodslist', JSON.stringify(goodslist));

					}
				});

				//购物车弹框
				this.zhuangtai="block";
			},
			remove(){
				this.zhuangtai="none";
			}
		},
	}
</script>

<style scoped>
	.detail_footer {
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: #fff;
		z-index: 5;
		max-width: 640px;
		border: .5px solid #f1f1f1;
	}
	
	.detail_footer>.detail_footer_content {
		width: 100%;
		position: relative;
	}
	
	.detail_footer>.detail_footer_content li {
		float: left;
		width: 13%;
		text-align: center;
	}
	
	.detail_footer>.detail_footer_content .detail_footer_ico {
		width: 21px;
		height: 21px;
		display: block;
		margin: 8px auto 0 auto;
		position: relative;
	}
	
	.icon-a-ntalk-goods {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -418px -199.5px;
		background-size: 443px;
		width: 21px;
		height: 21px;
	}
	
	.detail_footer>.detail_footer_content .p2 {
		font-size: 10px;
		color: #666;
		line-height: 20px;
		display: block;
	}
	
	.detail_footer>.detail_footer_content .detail_footer_ico2 {
		background-image: url(../assets/icon-a-goods-store.png);
		background-repeat: no-repeat;
		background-size: contain;
	}
	
	.icon-d-goodscart {
		display: block;
		background-image: url(../assets/dl.png);
		background-position: -29px -358.5px;
		background-size: 428.5px;
		width: 21px;
		height: 21px;
	}
	/*购物车上的小红点*/
	
	.detail_footer>.detail_footer_content .detail_footer_ico i {
		width: 14px;
		height: 14px;
		line-height: 14px;
		text-align: center;
		font-size: 10px;
		color: #fff;
		background: #d90000;
		border-radius: 50%;
		border: 1px solid #fff;
		position: absolute;
		top: -3px;
		right: -8px;
		/* display: none; */
	}
	/*加入购物车*/
	
	.detail_footer>.detail_footer_content .detail_footer_cart {
		width: 30%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 14px;
		color: #666;
		border-left: 1px solid #f1f1f1;
	}
	
	.detail_footer>.detail_footer_content li {
		float: left;
		width: 13%;
		text-align: center;
	}
	
	.detail_footer>.detail_footer_content .detail_footer_purchase {
		width: 30%;
		float: right!important;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 14px;
		color: #fff;
		background: #d90000;
		border-top: .5px solid #d90000;
	}
	
	/*提示框*/
	.mui-popup.mui-popup-in {
		display: none;
		-webkit-transition-duration: .4s;
		transition-duration: .4s;
		-webkit-transform: translate3d(-50%, -50%, 0) scale(1);
		transform: translate3d(-50%, -50%, 0) scale(1);
		opacity: 1;
	}
	
	.mui-popup {
		position: fixed;
		z-index: 1000000;
		top: 50%;
		left: 50%;
		display: none;
		overflow: hidden;
		width: 270px;
		-webkit-transition-property: -webkit-transform, opacity;
		transition-property: transform, opacity;
		-webkit-transform: translate3d(-50%, -50%, 0) scale(1.185);
		transform: translate3d(-50%, -50%, 0) scale(1.185);
		text-align: center;
		opacity: 0;
		color: #000;
		border-radius: 13px;
	}
	
	.mui-popup-inner {
		position: relative;
		padding: 15px;
		border-radius: 13px 13px 0 0;
		background: rgba(255, 255, 255, .95);
	}
	
	.mui-popup-title {
		font-style: "微软雅黑";
		font-size: 17px;
		font-weight: 500;
		text-align: center;
	}
	
	.mui-popup-title+.mui-popup-text {
		font-family: inherit;
		font-size: 14px;
	}
	
	.mui-popup-inner:after {
		position: absolute;
		z-index: 15;
		top: auto;
		right: auto;
		bottom: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		-webkit-transform-origin: 50% 100%;
		transform-origin: 50% 100%;
		background-color: rgba(0, 0, 0, .2);
	}
	
	.mui-popup-buttons {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		height: 44px;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
	}
	
	.mui-popup-button:first-child {
		border-radius: 0 0 0 13px;
	}
	
	.mui-popup-button.mui-popup-button-bold {
		font-weight: 600;
	}
	
	.mui-popup-button:last-child {
		border-radius: 0 0 13px 0;
	}
	
	.mui-popup-button {
		font-size: 17px;
		line-height: 44px;
		position: relative;
		display: block;
		overflow: hidden;
		box-sizing: border-box;
		width: 100%;
		height: 44px;
		padding: 0 5px;
		cursor: pointer;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #007aff;
		background: rgba(255, 255, 255, .95);
		-webkit-box-flex: 1;
	}
</style>