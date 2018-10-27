<template>
	<div class="main">
		<!--轮播-->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div v-for="(b,index) in bannerImg" class="swiper-slide"><img :src="b.imgurl" alt="" /></div>
				<!--<div class="swiper-slide"><img :src="bannerImg[1]" alt="" /></div>
				<div class="swiper-slide"><img :src="bannerImg[2]" alt="" /></div>
				<div class="swiper-slide"><img :src="bannerImg[3]" alt="" /></div>-->
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
			<!-- Add Arrows -->
		</div>

		<!--内容部分-->
		<div class="pr_title">
			<div class="price">
				<div class="price_a"> <span class="price_a_jiage">¥<i class="wbPrice">3120</i></span> <span class="price_b_jiage">¥4200</span> <span class="price_a_flash">一口价</span> <span class="price_a_bargain fr"><p class="ico icon-d-goods-xin detail_footer_ico3 " data-index=""></p><p class="txt">收藏</p></span></div>
			</div>
			<div class="title"> <span class="title_b share_text">【天梭原装正品，全球联保两年】天梭TISSOT-力洛克系列 T006.407.16.033.00 自动机械男表</span></div>
			<div class="lead">机芯稳定性、精度、动力储存全面提升 力洛克T41.1.423.33全新升级版</div>
			<div class="price">
				<div class="price_b"><span class="price_b_ico icon-a-goods-logo h"></span> <span class="price_text">顺丰包邮</span> <span class="price_b_sale fr">销售：3898</span></div>
			</div>
		</div>
		<!--选择样式-->
		<div class="pr_coice">
			<div class="coice_content clearfix">
				<div class="coice_content_title fl">已选</div>
				<div class="coice_content_cont fl"> <span class="coice_content_cont_cont">真皮 银色</span> <span class="coice_content_cont_num">1</span>个</div>
				<div class="icon-a-goods-more fr"></div>
			</div>
		</div>
		<!--分期-->
		<div class="pr_coupons">
			<div class="coupons_stages clearfix">
				<div class="coupons_stages_title fl">分期</div>
				<div class="coupons_stages_contnet fl">每月<span class="coupons_stages_contnet_price">260</span>元x12期</div>
				<div class="coupons_stages_more icon-a-goods-more fr"></div>
			</div>
		</div>
		<!--商标-->
		<div class="pr_distribution">
			<div class="distribution clearfix">
				<div class="distribution_title fl">配送</div>
				<div class="distribution_content fl">
					<div class="distribution_content_a"> <span>有现货</span> <span class="black">免运费</span></div>
					<div class="distribution_content_b">下单后16:45前支付，预计1-3个工作日内发货</div>
				</div>
			</div>
			<div class="brand clearfix" id="brand">
				<a class="fl"><span class="brand_ico icon-d-goods-service2"></span> <span class="brand_text brand_textTwo">正规发票</span></a>
				<a class="fl"><span class="brand_ico icon-d-goods-service2"></span> <span class="brand_text brand_textTwo">假一赔三</span></a>
				<a class="fl"><span class="brand_ico icon-d-goods-service2"></span> <span class="brand_text brand_textTwo">7天质量退换</span></a>
				<a class="fl"><span class="brand_ico icon-d-goods-service2"></span> <span class="brand_text brand_textTwo">全球联保</span></a>
				<a class="fl"><span class="brand_ico icon-d-goods-service2"></span> <span class="brand_text brand_textTwo">免息分期</span></a>
				<a class="fl"><span class="brand_ico icon-d-goods-service2"></span> <span class="brand_text brand_textTwo">正品保障</span></a>
				<a class="fl"> <span class="brand_ico icon-a-goods-service"></span> <span class="brand_text ">实体店体验</span></a>
				<a class="fl"> <span class="brand_ico icon-a-goods-service"></span> <span class="brand_text ">闪电发货</span></a>
				<a class="fl"> <span class="brand_ico icon-a-goods-service"></span> <span class="brand_text ">货到付款</span></a>
			</div>
		</div>
		<!--搭配更多-->
		<div class="W_popularity">
			<p class="with">人气搭配 <span>搭配购买更优惠</span></p>
			<div class="W_combination">
				<a href="javascript:void(0);">
					<p class="p1"><img src="../assets/dapei1.jpg" alt=""></p>
					<p class="p2">￥3120</p>
				</a> <span class="fl">+</span>
				<a href="/goods/70810">
					<p class="p1"><img src="../assets/dapei2.jpg" alt=""></p>
					<p class="p2">￥143</p>
					<p class="p3">优惠￥95</p>
				</a> <span class="fl">+</span> <span class="fl more">搭配更多</span></div>
		</div>
		<!--评论-->
		<div class="pr_evaluate">
			<div class="evaluate_title">
				<span class="evaluate_title_a fl">评价(213)</span>
				<span class="evaluate_title_d icon-a-goods-more fr"></span>
				<span class="evaluate_title_c fr">98%</span>
				<span class="evaluate_title_b fr">好评</span>
			</div>
			<div class="evaluate_content">
				<div class="evaluate_content_a clearfix">
					<div class="evaluate_content_a_head fl"> <img src="../assets/dapei2.jpg" alt=""></div>
					<div class="evaluate_content_a_name fl">二**子</div>
					<div class="evaluate_content_grade fl" style="background-color:#FFBF80">金卡会员</div>
					<div class="evaluate_content_grade"></div>
					<div class="evaluate_content_a_ico fr" data-index="5"><span class="icon-a-goods-wuxing"></span><span class="icon-a-goods-wuxing"></span><span class="icon-a-goods-wuxing"></span><span class="icon-a-goods-wuxing"></span><span class="icon-a-goods-wuxing"></span></div>
				</div>
				<div class="evaluate_content_b">手表外观还可以，表带有点硬，总体感觉还是蛮好的。不知道走时准不准，过二天就知道啦！</div>
				<div class="evaluate_content_c">
					<li class="lazy-load"> <img src="../assets/dapei2.jpg" alt=""></li>
					<li class="lazy-load"> <img src="../assets/dapei2.jpg" alt=""></li>
					<li class="lazy-load"> <img src="../assets/dapei2.jpg" alt=""></li>
				</div>
				<div class="evaluate_content_d">
					<span></span>
					<span>真皮 银色</span>
					<span>共3张图</span>
				</div>

			</div>
			<div class="evaluate_more">
				<li class="evaluate_more_whole">全部评价(213)</li>
				<li class="CUSTOMER-SERVICE" service-code="wx_1000_1515726307656">咨询客服</li>
			</div>
		</div>
		<!--商店信息-->
		<div class="pr_shop">
			<a href="/shop/13" class="shop_title clearfix" data-index="13">
				<div class="shop_title_logo fl"> <img src="../assets/trade.jpg" alt=""></div>
				<div class="shop_title_txt fl">
					<div class="shop_title_txt_a"> <span class="trade">天梭TISSOT</span> <span>自营</span> </div>
					<div class="shop_title_txt_b">销量143754</div>
				</div>
			</a>
			<a href="/shop/13" class="shop_content">
				<div class="shop_content_text clearfix">
					<li class="allShop shop_content_text_a fl">“325”</li>
					<li class="allVermicalli shop_content_text_a fl">“41120”</li>
				</div>
				<div class="shop_content_text clearfix">
					<li class="shop_content_text_b fl">全部商品</li>
					<li class="shop_content_text_b fl">关注粉丝数</li>
				</div>
			</a>
			<div class="shop_more">
				<li><span class="shop_more_ico icon-a-goods-classify"></span> <span class="shop_more_text CUSTOMER-SERVICE" data-index="wx_1000_1515726307656">联系商家</span></li>
				<li><span class="shop_more_ico icon-a-goods-store"></span> <span class="shop_more_text"><a href="/shop/13">进店逛逛</a></span></li>
			</div>
			<div class="pr_upMore" @click="picture">
				<span class="pr_upMore_ico icon-a-goods-upper"></span> 
				<span>点击进入商品信息</span>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	//swiper.js
	import Swiper from 'swiper'
	//swiper.css
	import "../../node_modules/swiper/dist/css/swiper.css"
	export default {
		data() {
			return {
				bannerImg: [{
						imgurl: '../assets/banner1.jpg'
					},
					{
						imgurl: '../assets/banner2.jpg'
					},
					{
						imgurl: '../assets/banner3.jpg'
					},
					{
						imgurl: '../assets/banner4.jpg'
					}
				]
			}
		},
		methods:{
			picture(){
				location.href="#/picture"
			}
		},
		mounted() {
			var self = this;
			//获取url上的参数
			var _id = this.$route.query.id;
			//通过id发起ajax请求获取数据库
			$.ajax({
				type: "get",
				url: "http://localhost:9995/shopDetail",
				async: true,
				data: {
					id: _id
				},
				success(data) {
					//拿到了数据
					//改变轮播图
					var imgarr = data[0].imgurl;
					//					alert(typeof(imgarr))
					imgarr.forEach(function(i, idx) {
						self.bannerImg[idx].imgurl = i;
					});
					//改变价格
					$(".wbPrice").html(data[0].sale);
					$(".price_b_jiage").html('￥' + data[0].price);
					//改变内容
					$(".share_text").html(data[0].name);
					$(".lead").html(data[0].intro);
					$(".coice_content_cont_cont").html(data[0].type);
					var everySale = (data[0].sale / 12).toFixed(2)
					$(".coupons_stages_contnet_price").html(everySale);
					$(".trade").html(data[0].trade);
					$(".allShop").html(data[0].allShop);
					$(".allVermicalli").html(data[0].Vermicalli);
					$(".evaluate_content_b").html(data[0].comment[0]);
				}
			});

			//轮播的js
			new Swiper('.swiper-container', {
				spaceBetween: 30,
				centeredSlides: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		}
	}
</script>

<style scoped>
	/*轮播的样式*/
	/*CSS*/
	
	.main {
		padding-bottom: 50px;
	}
	
	.swiper-container {
		margin-top: 45px;
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		width: 350px;
		height: 350px;
	}
	
	.swiper-slide>img {
		width: 100%;
		height: 100%;
	}
	/*价格区域样式*/
	
	.pr_title {
		width: 100%;
		background-color: #fff;
		margin-bottom: 12px;
		padding: 8px 0 0 0;
	}
	
	.pr_title>.price {
		padding-top: 8px;
		width: 94%;
		margin-left: 3%;
		margin-right: 3%;
	}
	
	.pr_title>.price>.price_a {
		display: inline-block;
		width: 100%;
		vertical-align: middle;
		margin-bottom: 5px;
	}
	
	.pr_title>.price>.price_a .price_a_jiage {
		font-size: 28px;
		color: #d90000;
		margin-right: 5px;
		font-weight: 700;
	}
	
	.pr_title>.price>.price_a .price_b_jiage {
		font-size: 14px;
		color: #ccc;
		text-decoration: line-through;
		line-height: 25px;
	}
	
	.pr_title>.price>.price_a>span {
		display: inline-block;
		vertical-align: middle;
	}
	
	.pr_title>.price>.price_a .price_a_flash {
		border-radius: 100px;
		padding: 3px;
		font-size: 10px;
		color: #d90000;
		border: 1px solid #ddd;
	}
	
	.pr_title>.price>.price_a .price_a_bargain {
		background: #fff;
		font-size: 10px;
		color: #999;
		text-align: center;
	}
	
	.pr_title>.price>.price_a .price_a_bargain .ico {
		margin: 0 auto;
	}
	
	.icon-d-goods-xin {
		display: block;
		background-image: url(../assets/dl.png);
		background-position: -144px -112px;
		background-size: 428.5px;
		width: 14px;
		height: 14px;
	}
	
	.pr_title>.title,
	.brand,
	.lead,
	.price {
		width: 94%;
		margin-left: 3%;
		margin-right: 3%;
	}
	
	.pr_title>.title>.title_b {
		font-size: 16px;
		color: #666;
		line-height: 20px;
		font-weight: 700;
		white-space: normal;
		word-break: break-all;
		word-wrap: break-word;
	}
	
	.pr_title>.lead {
		font-size: 12px;
		color: #666;
		padding: 2px 0;
		line-height: 20px;
	}
	
	.pr_title>.price>.price_b {
		margin-bottom: 2px;
		width: 100%;
		display: inline-block;
		vertical-align: middle;
	}
	
	.pr_title>.price>.price_b .price_b_ico {
		display: inline-block;
		vertical-align: middle;
	}
	
	.icon-a-goods-logo {
		display: block;
		background-image: url(/public/sprites/a/a.png?153121322);
		background-position: 0 -368px;
		background-size: 443px;
		width: 38px;
		height: 19.5px;
	}
	
	.h {
		display: none!important;
	}
	
	.pr_title>.price>.price_b .price_text {
		font-size: 14px;
		color: #ccc;
		line-height: 25px;
	}
	
	.pr_title>.price>.price_b .price_b_sale {
		font-size: 14px;
		color: #ccc;
		line-height: 25px;
	}
	
	.fr {
		float: right!important;
	}
	/*选样式*/
	
	.pr_coice {
		width: 94%;
		padding-left: 3%;
		padding-right: 3%;
		background-color: #fff;
		margin-bottom: 12px;
	}
	
	.pr_coice>.coice_content {
		width: 100%;
		padding-top: 5px;
		padding-bottom: 3px;
		line-height: 32px;
	}
	
	.pr_coice>.coice_content>.coice_content_cont {
		width: 70%;
		font-size: 14px;
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 700;
	}
	
	.pr_coice>.coice_content>.coice_content_title {
		width: 12%;
		font-size: 14px;
		color: #666;
	}
	
	.fl {
		float: left!important;
	}
	
	.pr_coice>.coice_content>.coice_content_title {
		width: 12%;
		font-size: 14px;
		color: #666;
	}
	
	.fl {
		float: left!important;
	}
	
	.icon-a-goods-more {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -381px -74px;
		background-size: 443px;
		width: 32px;
		height: 32px;
	}
	
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}
	/*分期*/
	
	.pr_coupons {
		width: 94%;
		padding-left: 3%;
		padding-right: 3%;
		background-color: #fff;
		margin-bottom: 12px;
	}
	
	.pr_coupons>.coupons_stages {
		width: 100%;
		padding-top: 5px;
		padding-bottom: 5px;
		line-height: 32px;
	}
	
	.pr_coupons>.coupons_stages>.coupons_stages_title {
		width: 12%;
		font-size: 14px;
		color: #666;
	}
	
	.pr_coupons>.coupons_stages>.coupons_stages_contnet {
		width: 50%;
		font-size: 14px;
		color: #333;
		font-weight: 700;
	}
	
	.pr_coupons>.coupons_stages>.coupons_stages_contnet {
		width: 50%;
		font-size: 14px;
		color: #333;
		font-weight: 700;
	}
	
	.pr_coupons>.coupons_stages>.coupons_stages_more {
		display: inline-block;
	}
	
	.icon-a-goods-more {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -381px -74px;
		background-size: 443px;
		width: 32px;
		height: 32px;
	}
	/*商标*/
	
	.pr_distribution {
		width: 94%;
		padding-left: 3%;
		padding-right: 3%;
		background-color: #fff;
		margin-bottom: 12px;
	}
	
	.pr_distribution>.distribution {
		width: 100%;
		padding-top: 12px;
		padding-bottom: 8px;
		display: inline-block;
		border-bottom: 1px solid #f1f1f1;
	}
	
	.pr_distribution>.distribution>.distribution_title {
		width: 12%;
		font-size: 14px;
		color: #666;
		margin-top: 2px;
	}
	
	.pr_distribution>.distribution>.distribution_content {
		width: 80%;
		font-size: 14px;
		margin-top: 2px;
	}
	
	.pr_distribution>.distribution>.distribution_content>.distribution_content_a {
		font-size: 14px;
		color: #d90000;
		margin-bottom: 10px;
		font-weight: 700;
	}
	
	.pr_distribution>.distribution>.distribution_content>.distribution_content_a>.black {
		color: #333;
		margin-left: 5px;
	}
	
	.pr_distribution>.distribution>.distribution_content>.distribution_content_b {
		font-size: 11px;
		color: #999;
	}
	
	.pr_distribution>.brand {
		width: 88%;
		padding-left: 8%;
		padding-top: 0;
		padding-bottom: 12px;
	}
	
	.brand a {
		display: block;
	}
	
	.pr_distribution>.brand .brand_ico {
		display: inline-block;
		margin-left: 7px;
		margin-right: 2px;
		vertical-align: middle;
	}
	
	.icon-d-goods-service2 {
		display: block;
		background-image: url(../assets/dl.png);
		background-position: -17px -387.5px;
		background-size: 428.5px;
		width: 12px;
		height: 12px;
	}
	
	.pr_distribution>.brand .brand_textTwo {
		color: #ccc;
	}
	
	.pr_distribution>.brand .brand_text {
		font-size: 12px;
		color: #999;
		line-height: 12px;
		vertical-align: middle;
	}
	
	.icon-a-goods-service {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -240px -417.5px;
		background-size: 443px;
		width: 12px;
		height: 12px;
	}
	/*搭配*/
	
	.W_popularity {
		background: #fff;
		margin-bottom: 12px;
		width: 94%;
		padding: 16px 3% 12px;
	}
	
	.W_popularity p.with {
		font-size: 14px;
		color: #999;
		line-height: 16px;
		padding-bottom: 16px;
	}
	
	.W_popularity p.with span {
		font-size: 12px;
		color: #ccaa7a;
		margin-left: 7px;
	}
	
	.W_popularity .W_combination {
		overflow: hidden;
	}
	
	.W_popularity .W_combination a {
		float: left;
		width: 80px;
		position: relative;
	}
	
	.W_popularity .W_combination a p.p1 {
		width: 80px;
		height: 80px;
		padding: 5px;
		box-sizing: border-box;
		border: 1px solid #ededed;
	}
	
	.W_detail img {
		width: 100%;
	}
	
	body img {
		display: block;
	}
	
	.W_popularity .W_combination a p.p2 {
		font-size: 12px;
		color: #666;
		line-height: 14px;
		text-align: center;
		margin-top: 11px;
	}
	
	.W_popularity .W_combination span {
		font-size: 22px;
		line-height: 22px;
		margin: 29px 4%;
	}
	
	.W_popularity .W_combination a p.p3 {
		position: absolute;
		height: 14px;
		background: #ccaa7a;
		top: 66px;
		font-size: 10px;
		color: #fff;
		width: 100%;
		text-align: center;
		line-height: 14px;
	}
	
	.W_popularity .W_combination span.more {
		border: 1px solid #666;
		height: 20px;
		line-height: 20px;
		font-size: 12px;
		color: #333;
		padding: 0 8px;
		margin: 29px 0;
		cursor: pointer;
	}
	/*评价*/
	
	.pr_evaluate {
		width: 94%;
		padding-left: 3%;
		padding-right: 3%;
		display: inline-block;
		background-color: #fff;
		margin-bottom: 15px;
	}
	
	.pr_evaluate>.evaluate_title {
		width: 100%;
		border-bottom: 1px solid #f1f1f1;
		height: 32px;
		padding: 5px 0;
		line-height: 32px;
		position: relative;
	}
	
	.pr_evaluate>.evaluate_title span {
		font-size: 14px;
		color: #333;
	}
	
	.pr_evaluate>.evaluate_title span {
		font-size: 14px;
		color: #333;
	}
	
	.icon-a-goods-more {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -381px -74px;
		background-size: 443px;
		width: 32px;
		height: 32px;
	}
	
	.pr_evaluate>.evaluate_title .evaluate_title_c {
		color: #d90000;
		font-weight: 700;
		margin-right: 5px;
	}
	
	.pr_evaluate>.evaluate_title .evaluate_title_b {
		font-weight: 700;
		margin-right: 5px;
	}
	
	.pr_evaluate>.evaluate_content {
		width: 100%;
		display: inline-block;
		border-bottom: 1px solid #f1f1f1;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_a {
		width: 100%;
		padding-top: 5px;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_a .evaluate_content_a_head {
		display: inline-block;
		vertical-align: middle;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_a .evaluate_content_a_head img {
		width: 24px;
		height: 24px;
		border-radius: 24px;
		border: 1px solid #ccc;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_a .evaluate_content_a_name {
		font-size: 12px;
		color: #999;
		line-height: 24px;
		display: inline-block;
		margin-left: 5px;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_a .evaluate_content_grade {
		border-radius: 2px;
		padding: 0 4px;
		line-height: 16px;
		font-size: 10px;
		color: #fff;
		margin: 3px 0 0 5px;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_a .evaluate_content_a_ico {
		display: inline-block;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_b {
		width: 100%;
		padding: 5px 0;
		font-size: 12px;
		color: #333;
		line-height: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_c {
		width: 100%;
		padding-top: 5px;
		display: inline-block;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_c li {
		width: 31%;
		float: left;
		margin-right: 5px;
		margin-bottom: 5px;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_c li img {
		width: 105px;
		height: 105px;
		max-width: 105px;
		display: block;
		padding: 1px;
		border: 1px solid #ddd;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_c li:last-child {
		margin-right: 0;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_d {
		width: 100%;
		padding-bottom: 5px;
	}
	
	.pr_evaluate>.evaluate_content .evaluate_content_d span {
		font-size: 10px;
		color: #999;
	}
	
	.pr_evaluate>.evaluate_more {
		width: 100%;
		display: inline-block;
		padding-top: 15px;
		padding-bottom: 11px;
	}
	
	.pr_evaluate>.evaluate_more li {
		width: 50%;
		float: left;
		text-align: center;
		font-size: 12px;
		color: #666;
	}
	
	.pr_evaluate>.evaluate_more li {
		width: 50%;
		float: left;
		text-align: center;
		font-size: 12px;
		color: #666;
	}
	/*商店信息*/
	
	.pr_shop {
		width: 94%;
		padding-left: 3%;
		padding-right: 3%;
		display: inline-block;
		background-color: #fff;
	}
	
	.pr_shop .shop_title {
		width: 100%;
		padding: 10px 0;
		border-bottom: 1px solid #f1f1f1;
	}
	
	a {
		display: block;
	}
	
	.pr_shop .shop_title .shop_title_logo {
		width: 48px;
		height: 48px;
		background: #fff;
		border: 1px solid #999;
		border-radius: 50%;
		display: block;
		overflow: hidden;
	}
	
	.shop_title_logo>img {
		width: 100%;
		height: 100%;
	}
	
	.pr_shop .shop_title .shop_title_txt {
		width: 80%;
		margin-left: 8px;
		display: inline-block;
	}
	
	.pr_shop .shop_title .shop_title_txt .shop_title_txt_a {
		width: 100%;
		margin-top: 3px;
	}
	
	.pr_shop .shop_title .shop_title_txt .shop_title_txt_a span {
		font-size: 14px;
		color: #333;
	}
	
	.pr_shop .shop_title .shop_title_txt .shop_title_txt_a span:last-child {
		border-radius: 100px;
		padding: 3px;
		font-size: 10px;
		color: #d90000;
		border: 1px solid #ddd;
		background-color: #f2f2f2;
	}
	
	.pr_shop .shop_title .shop_title_txt .shop_title_txt_b {
		width: 100%;
		font-size: 10px;
		color: #999;
		line-height: 16px;
		margin-top: 2px;
	}
	
	.pr_shop .shop_content>.shop_content_text li {
		width: 50%;
		text-align: center;
	}
	
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.pr_shop .shop_content>.shop_content_text .shop_content_text_a {
		font-size: 28px;
		color: #ccb97a;
	}
	
	.pr_shop .shop_content>.shop_content_text {
		width: 100%;
	}
	
	.pr_shop .shop_content>.shop_content_text .shop_content_text_b {
		font-size: 10px;
		color: #999;
	}
	
	.W_detail .product .pr_shop .shop_more {
		width: 100%;
		display: inline-block;
		padding-top: 11px;
		padding-bottom: 8px;
	}
	
	.pr_shop .shop_more li {
		width: 50%;
		float: left;
		text-align: center;
		vertical-align: middle;
		display: inline-block;
	}
	
	.pr_shop .shop_more li .shop_more_ico {
		display: inline-block;
		vertical-align: middle;
		margin-right: 3px;
	}
	
	.icon-a-goods-classify {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -370px -368px;
		background-size: 443px;
		width: 16px;
		height: 16px;
	}
	
	.pr_shop .shop_more li .shop_more_text {
		font-size: 12px;
		color: #666;
		display: inline-block;
		vertical-align: middle;
		line-height: 16px;
	}
	
	.icon-a-goods-store {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -286px -368px;
		background-size: 443px;
		width: 16px;
		height: 16px;
	}
	/*下拉框*/
	.pr_upMore {
    width: 94%;
    padding: 28px 3%;
    display: inline-block;
    background-color: #fff;
    text-align: center;
    line-height: 16px;
}
.pr_upMore .pr_upMore_ico {
    display: inline-block;
    vertical-align: middle;
    margin-right: 3px;
}
.pr_upMore span {
    font-size: 12px;
    color: #666;
}
.icon-a-goods-upper {
    display: block;
    background-image: url(../assets/a.png);
    background-position: -244px -368px;
    background-size: 443px;
    width: 16px;
    height: 16px;
}
.pr_upMore span {
    font-size: 12px;
    color: #666;
}
</style>