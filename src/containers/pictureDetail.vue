<template>
	<div>
		<!--头部-->
		<header class="W_title">
			<ul class="clearfix">
				<li class="wb_back">
					<a href="//m.wbiao.cn" class="icon-d-back02"></a>
				</li>
				<li class="wb_title_middle wb_title">图文详情</li>
			</ul>
		</header>
		<div class="pr_upMore" @click="picture">
			<span class="pr_upMore_ico icon-a-goods-upper"></span>
			<span>点击返回详情</span>
		</div>
		<img v-for="t in pictures" :src="t.pic" alt="" />
		<cfooter></cfooter>
	</div>

</template>

<script>
	import cfooter from '../carContainers/Cfooter.vue'
	export default {
		data() {
			return {
				pictures: [{
					pic: "../assets/picture1.jpg"
				}, {
					pic: "../assets/picture2.jpg"
				}, {
					pic: "../assets/picture3.jpg"
				}, {
					pic: "../assets/picture4.jpg"
				}, {
					pic: "../assets/picture5.jpg"
				}]
			}
		},
		components: {
			cfooter
		},
		methods:{
			picture(){
				location.href="#/shopDetail"
			}
		}
	}
</script>

<style scoped>
	.W_title {
		height: auto!important;
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
	
	.W_title ul {
		height: 44px;
		position: relative;
	}
	
	.W_title .wb_back {
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
	
	.W_title ul li.wb_title {
		position: absolute;
		top: 0;
		text-align: center;
		width: 100%;
		z-index: 1;
		margin-left: 0;
	}
	
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}
	/*上拉*/
	
	.pr_upMore {
		width: 94%;
		padding: 28px 3%;
		display: inline-block;
		background-color: #fff;
		text-align: center;
		line-height: 16px;
		z-index: 0;
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
	
	.W_detail .product .pr_upMore span {
		font-size: 12px;
		color: #666;
	}
	
	img {
		display: block;
		width: 100%!important;
		height: 100%!important;
		padding-bottom: 50px;
	}
</style>