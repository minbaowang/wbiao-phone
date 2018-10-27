<template>
	<section class="W_head">
		<header class="W_title">
			<ul class="clearfix">
				<li class="wb_back user_custom">
					<a href="/" class="head-logo"><img :src="head" alt=""></a>
				</li>
				<li class="wb_title_middle wb_index_srearch all_search">
					<a href="#/search" class="to_search esp1">建行信用卡专享全场12期免息</a><span class="srh_icon icon-a-search01"></span></li>
				<li class="wb_right wb_right_kf CUSTOMER-SERVICE">
					<a href="javascript:void(0);" class="icon-a-ntalk"><img :src="img" alt="" /></a>
				</li>
			</ul>
		</header>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				head:'../assets/head-logo.png',
				img: require('../assets/header.png')
			}
		}
	}
</script>

<style scoped>
	.W_head {
		width: 100%;
		background: #fff;
		max-width: 640px;
		position: fixed;
		top: 0;
		z-index: 997;
		box-shadow: 2px 2px 1px #f2f2f2;
	}
	
	* {
		/*font-family: Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", STXihei, STHeiti, Heiti, SimSun, sans-serif;*/
		margin: 0;
		padding: 0;
		font-size: 1em;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	
	user agent stylesheet article,
	aside,
	footer,
	header,
	hgroup,
	main,
	nav,
	section {
		display: block;
	}
	
	.W_register a {
		position: relative;
		display: block;
		height: 50px;
		width: 100%;
		background-color: #4a3131;
	}
	
	.W_head .W_title {
		border-bottom: 0;
	}
	
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
		height: 50px!important;
		position: relative;
	}
	
	.bxt,
	dd,
	dl,
	dt,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	header,
	input,
	li,
	ol,
	ul {
		overflow: hidden;
	}
	
	.W_head .W_title .wb_back {
		width: 71px;
	}
	
	.W_title .user_custom {
		width: 71px;
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
	
	dd,
	dl,
	dt,
	li,
	ol,
	ul {
		list-style: none;
	}
	
	.W_head .W_title li.wb_index_srearch {
		margin-top: 10px!important;
		margin-right: 45px;
	}
	
	.W_head .W_title .wb_index_srearch {
		margin-right: 6px;
		margin-left: 71px;
	}
	
	.W_title li.all_search {
		margin-left: 71px;
	}
	
	.W_title li.wb_index_srearch {
		height: 28px;
		margin-top: 8px;
		margin-right: 45px;
	}
	
	.W_title .wb_title_middle {
		width: auto;
		position: relative;
		margin-left: 44px;
	}
	
	.W_title ul li {
		display: block;
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		color: #444;
	}
	
	.W_title .wb_right_kf {
		text-align: center;
		color: #333;
		font-size: 10px;
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
	
	.W_head .W_title .head-logo {
		margin: 10px auto 0;
		display: block;
		width: 48px;
		height: 24px;
	}
	
	.W_title .head-logo {
		margin: 6px auto 0;
		display: block;
		width: 48px;
		height: 24px;
	}
	
	.W_title li.wb_index_srearch .to_search {
		border: 0!important;
	}
	
	.W_title li.wb_index_srearch .to_search {
		display: block;
		height: 26px;
		line-height: 26px;
		background: #f1f1f1;
		border-radius: 13px;
		font-size: 12px;
		color: #999;
		padding-left: 32px;
	}
	
	.esp1 {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
	.icon-a-ntalk {
		display: block;
		background-image: url(/public/sprites/a/a.png?153121322);
		background-position: -255px -247px;
		background-size: 443px;
		width: 44px;
		height: 44px;
	}
	
	.W_head .W_title .head-logo img {
		width: 100%;
		display: block;
	}
	
	.W_title .head-logo img {
		width: 100%;
	}
	
	.icon-a-ntalk>img {
		width: 30px;
		height: 30px;
		margin-top: 10px;
	}
</style>