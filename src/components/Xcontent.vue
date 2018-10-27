<template>
	<div class="all">
		<div class="channel-nine">
			<div class="title">
				<p class="title-text">品牌</p>
				<p class="title-line"></p>
			</div>
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(a,id) in arr" :key="id"><img :src="a.img" alt="" /></div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
			<!-- Add Arrows -->
		</div>
		<div v-for="(c,index) in caidan" :key="index" class="channel-eight">
			<div class="content clearfix">
				<a class="img fl" v-for="(b,idx) in c.caiDan" :key="idx"><img :src="b.cImg" alt=""></a>
			</div>
		</div>

		<!--闪购部分-->
		<div class="channel-nine">
			<div class="title">
				<p class="title-text">闪购</p>
				<p class="title-line"></p>
			</div>
			<div class="content">
				<router-link class="img" :to="{ path: '/shopDetail', query: { id: '1' }}">
					<img src="../assets/banner5.jpg" alt="">
				</router-link>
			</div>
		</div>
		<!--左右滑动轮播-->
		<lrbanner></lrbanner>

		<!--男士部分-->
		<div class="channel-nine">
			<div class="title">
				<p class="title-text">男士</p>
				<p class="title-line"></p>
			</div>
			<div class="content">
				<a class="img" href=""><img src="../assets/man.jpg" alt=""></a>
			</div>
		</div>
		<!--左右滑动轮播-->
		<lrbannerMan></lrbannerMan>

		<!--潮人部分-->
		<div class="channel-nine">
			<div class="title">
				<p class="title-text">潮人</p>
				<p class="title-line"></p>
			</div>
			<div class="content">
				<a class="img" href=""><img src="../assets/fashion.jpg" alt=""></a>
			</div>
		</div>
		<!--左右滑动轮播-->
		<lrbannerFashion></lrbannerFashion>

		<!--女士部分-->
		<div class="channel-nine">
			<div class="title">
				<p class="title-text">女士</p>
				<p class="title-line"></p>
			</div>
			<div class="content">
				<a class="img" href=""><img src="../assets/lady.jpg" alt=""></a>
			</div>
		</div>
		<!--左右滑动轮播-->
		<lrbannerLady></lrbannerLady>

		<!--专辑部分-->
		<div class="channel-nine">
			<div class="title">
				<p class="title-text">专辑</p>
				<p class="title-line"></p>
			</div>
		</div>
		<lrbannerZhuanji></lrbannerZhuanji>

		<!--尊享服务-->
		<div class="channel-nine">
			<div class="title">
				<p class="title-text">尊享服务</p>
				<p class="title-line"></p>
			</div>
		</div>
		<img v-for="(s,index) in share" :src="s.zunxiang" :key="index" alt="图片加载不成功" class="share" />

		<!--为你推荐-->
		<div class="Wb_tj_goods">
			<div class="tj_title">
				<p class="tj_text">为您推荐</p>
				<p class="tj_line"></p>
			</div>
			<div class="goods_list clearfix">
				<a v-for="(d,index) in detail" class="fl tj_a" :href="`#/detail?id=${index+1}`">
					<p class="g_img"><img :src="`${d.img}`" alt=""></p>
					<p class="p1" v-text="d.goodName">迪沃斯</p>
					<p class="p1" v-text="d.shoptype">Diving 潜水系列</p>
					<p class="p2">¥{{d.sale}}</p>
				</a>
			</div>
		</div>
		<div class="W_ending">这里是时间的尽头~</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import lrbanner from './l-r-banner.vue'
	import lrbannerZhuanji from './l-r-banner-zhuanji.vue'
	import lrbannerLady from './l-r-banner-lady.vue'
	import lrbannerMan from './l-r-banner-man.vue'
	import lrbannerFashion from './l-r-banner-fashion.vue'
	//swiper.js
	import Swiper from 'swiper'
	//swiper.css
	import "../../node_modules/swiper/dist/css/swiper.css"
	export default {
		data() {
			return {
				arr: [{
					img: require('../assets/c-banner1.jpg')
				}, {
					img: require('../assets/c-banner2.jpg')
				}, {
					img: require('../assets/c-banner3.jpg')
				}, {
					img: require('../assets/c-banner4.jpg')
				}],
				caidan: [{
					caiDan: [{
						cImg: require('../assets/caidan1.jpg')
					}, {
						cImg: require('../assets/caidan2.jpg')
					}, {
						cImg: require('../assets/caidan3.jpg')
					}]
				}, {
					caiDan: [{
						cImg: require('../assets/caidan1.jpg')
					}, {
						cImg: require('../assets/caidan2.jpg')
					}, {
						cImg: require('../assets/caidan3.jpg')
					}]
				}, {
					caiDan: [{
						cImg: require('../assets/caidan1.jpg')
					}, {
						cImg: require('../assets/caidan2.jpg')
					}, {
						cImg: require('../assets/caidan3.jpg')
					}]
				}],
				share: [{
					zunxiang: require('../assets/zunxiang1.jpg')
				}, {
					zunxiang: require('../assets/zunxiang2.jpg')
				}, {
					zunxiang: require('../assets/zunxiang3.jpg')
				}, {
					zunxiang: require('../assets/zunxiang4.jpg')
				}, ],
				detail:[]
			}
		},
		components: {
			lrbanner,
			lrbannerZhuanji,
			lrbannerLady,
			lrbannerMan,
			lrbannerFashion
		},
		mounted() {
			//请求数据库
			var self=this;
				$.ajax({
					type: "get",
					url: "http://localhost:9995/details",
					async: true,
					data: {
					},
					success(data) {
						self.detail=data;
					}
				});
			//轮播
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
	.all {
		padding-bottom: 50px;
	}
	
	.share {
		display: block;
	}
	
	.W_ending {
		font-size: 12px;
		color: #ccc;
		text-align: center;
		padding: 12px 0 30px 0;
		background: #fff;
	}
	
	.all {
		background: #fff;
	}
	
	.title {
		margin: 16px 0 14px 0;
	}
	
	* {
		font-family: Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", STXihei, STHeiti, Heiti, SimSun, sans-serif;
		margin: 0;
		padding: 0;
		font-size: 1em;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	
	user agent stylesheet div {
		display: block;
	}
	
	.title .title-text {
		font-size: 16px;
		color: #333;
		line-height: 16px;
		text-align: center;
		margin-bottom: 12px;
		font-weight: 700;
	}
	
	.title .title-line {
		width: 24px;
		height: 2px;
		background: #ccaa7a;
		margin: 0 auto;
	}
	
	p {
		display: block;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
	}
	/*轮播图样式*/
	
	
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: flex;
		align-items: center;
		width: 336px;
		height: 218px;
	}
	
	.swiper-slide>img {
		width: 100%;
		height: 100%;
	}
	/*第一行菜单*/
	
	.channel-eight {
		/*margin-bottom: 10px;*/
		height: 72px;
	}
	
	* {
		font-family: Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", STXihei, STHeiti, Heiti, SimSun, sans-serif;
		margin: 0;
		padding: 0;
		font-size: 1em;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	
	.channel-eight .content {
		width: 100%;
	}
	
	.channel-eight .content .img {
		width: 33.33%;
	}
	
	a {
		display: block;
	}
	
	.fl {
		float: left!important;
		height: 72px;
	}
	
	img {
		width: 100%;
	}
	
	main img {
		width: 100%;
		border: none;
		display: block;
	}
	/*为你推荐*/
	
	.Wb_tj_goods {
		background: #fff;
		padding-top: 12px;
	}
	
	.tj_title {
		height: 60px;
		line-height: 60px;
		position: relative;
		text-align: center;
	}
	
	.tj_text {
		display: inline-block;
		font-size: 12px;
		color: #999;
		letter-spacing: 5px;
		padding: 0 10px;
		background-color: #fff;
	}
	
	.tj_line {
		width: 90%;
		height: 1px;
		background-color: #efefef;
		margin: -42px auto 0;
	}
	
	.Wb_tj_goods .goods_list {
		padding: 0 8px;
		margin: 0 auto;
	}
	
	.Wb_tj_goods .goods_list .tj_a:nth-of-type(odd) {
		margin-right: 4%;
	}
	
	.Wb_tj_goods .tj_a {
		width: 48%;
		float: left;
		margin: 20px 0;
		height: 300px;
	}
	
	a {
		display: block;
	}
	
	.fl {
		float: left!important;
	}
	
	.Wb_tj_goods .goods_list .g_img {
		position: relative;
		overflow: hidden;
		height: 220px;
		margin-bottom: 14px;
	}
	
	.Wb_tj_goods .goods_list .g_img img {
		position: absolute;
		left: 50%;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-o-transform: translateX(-50%);
		transform: translateX(-50%);
		width: auto;
		height: 100%;
	}
	
	img {
		width: 100%;
	}
	
	main img {
		width: 100%;
		border: none;
		display: block;
	}
	
	.Wb_tj_goods .goods_list .p1 {
		font-size: 12px;
		color: #666;
		line-height: 18px;
		text-align: center;
	}
	
	.Wb_tj_goods .goods_list .p1 {
		font-size: 12px;
		color: #666;
		line-height: 18px;
		text-align: center;
	}
	
	.Wb_tj_goods .goods_list .p2 {
		letter-spacing: 1px;
		font-weight: 700;
		margin-top: 6px;
		font-size: 14px;
		color: #000;
		text-align: center;
		line-height: 14px;
		margin-bottom: 10px;
	}
</style>