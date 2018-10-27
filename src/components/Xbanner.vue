<template>
	<!--HTML-->
	<!-- Swiper -->
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img :src="bannerImg[0]" alt="" /></div>
				<div class="swiper-slide"><img :src="bannerImg[1]" alt="" /></div>
				<div class="swiper-slide"><img :src="bannerImg[2]" alt="" /></div>
				<div class="swiper-slide"><img :src="bannerImg[3]" alt="" /></div>
				<div class="swiper-slide"><img :src="bannerImg[4]" alt="" /></div>
				<div class="swiper-slide"><img :src="bannerImg[5]" alt="" /></div>
				<div class="swiper-slide"><img :src="bannerImg[6]" alt="" /></div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
			<!-- Add Arrows -->
		</div>
		<div class="toolbar clearfix">
			<a class="fl" href="javascript:void(0);">
				<div class="img"><img :src="navImg[0]" alt=""></div>
				<div class="txt">新品</div>
			</a>
			<a class="fl" href="javascript:void(0);">
				<div class="img"><img :src="navImg[1]" alt=""></div>
				<div class="txt">男表</div>
			</a>
			<a class="fl" href="javascript:void(0);">
				<div class="img"><img :src="navImg[2]" alt=""></div>
				<div class="txt">限时购</div>
			</a>
			<a class="fl" href="javascript:void(0);">
				<div class="img"><img :src="navImg[3]" alt=""></div>
				<div class="txt">奢品共享</div>
			</a>
		</div>
	</div>
</template>

<script>
	//swiper.js
	import Swiper from 'swiper'
	//swiper.css
	import "../../node_modules/swiper/dist/css/swiper.css"
	export default {
		data() {
			return {
				bannerImg: [require('../assets/banner1.jpg'),
					require('../assets/banner2.jpg'),
					require('../assets/banner3.jpg'),
					require('../assets/banner4.jpg'),
					require('../assets/banner5.jpg'),
					require('../assets/banner6.jpg'),
					require('../assets/banner7.jpg')
				],
				navImg: [require('../assets/nav1.png'),
					require('../assets/nav2.png'),
					require('../assets/nav3.png'),
					require('../assets/nav4.png'),
				]

			}
		},
		mounted() {
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
	/*CSS*/
	
	html,
	body {
		position: relative;
		width: 336px;
		height: 224px;
		margin-top: 50px;
		/*height: 100%;*/
	}
	
	body {
		background: #eee;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		font-size: 14px;
		color: #000;
		margin: 0;
		padding: 0;
	}
	
	.swiper-container {
		padding-top:50px!important;
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
	/*这是导航的样式*/
	
	.toolbar {
		width: 100%;
		height: 75px;
		padding: 12px 0;
		background-image: linear-gradient(90deg, #fff 0, #f5f5f5 100%);
		box-shadow: inset 0 0 0 0 #ddd;
	}
	
	body {
		width: 100%;
		max-width: 640px;
		min-width: 320px;
		background-color: #f1f1f1;
		color: #666;
		padding: 0;
		margin: 0 auto;
	}
	
	.toolbar a {
		width: 25%;
		padding: 7px 0;
	}
	
	a {
		display: block;
	}
	
	.fl {
		float: left!important;
		height: 75px;
	}
	
	.toolbar a .img {
		width: 44px;
		margin: 0 auto;
	}
	
	* {
		font-family: Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", STXihei, STHeiti, Heiti, SimSun, sans-serif;
		margin: 0;
		padding: 0;
		font-size: 1em;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	
	img {
		width: 100%;
	}
	
	main img {
		width: 100%;
		border: none;
		display: block;
	}
	
	.toolbar a .txt {
		font-size: 11px;
		color: #666;
		letter-spacing: 0;
		text-align: center;
		line-height: 12px;
		margin-top: 5px;
	}
</style>