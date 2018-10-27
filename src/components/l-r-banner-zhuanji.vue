<template>
	<div class="top_menu_bar ">
		<div class="top_menu_list">
			<a v-for="(i,index) in arr" :key="index" href="javascript:void(0)" class="btn cur" ><img :src="i.img" alt="" /></a>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				img: require("../assets/icon_tabbar.png"),
				//开始绿的选项卡
				page: 0,
				arr: [{
					isShowDot: false,
					img:require('../assets/zhuanji1.jpg')
				}, {
					isShowDot: false,
					img:require('../assets/zhuanji2.jpg')
				}, {
					isShowDot: true,
					img:require('../assets/zhuanji3.jpg')
				}, {
					isShowDot: false,
					img:require('../assets/zhuanji4.jpg')
				}, {
					isShowDot: false,
					img:require('../assets/zhuanji4.jpg')
				}]
			}
		}
	}
</script>

<style scoped>
	img{width: 138px;height: 186px;}
	.top_menu_list{
		background: #fff;
	}
	.top_menu_bar::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		/*background-image: -webkit-linear-gradient(top, transparent, transparent 40%, #ddd 40%);*/
		background-size: 100% 1px;
		background-position: bottom;
		background-repeat: no-repeat;
	}
	
	.top_menu_bar {
		top: 88px;
		margin-top:10px;
	}
	
	.top_menu_bar {
		top: 88px;
	}
	
	.top_menu_bar {
		height: 74px;
	}
	
	.top_menu_bar {
		top: 44px;
	}
	
	.top_menu_bar {
		background: #f4f5f6;
		height: 200px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 100%;
		z-index: 999;
		top: 44px;
	}
	
	.top_menu_bar .top_menu_more {
		float: right;
		position: relative;
	}
	
	.top_menu_bar .top_menu_list {
		overflow: hidden;
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
		white-space: nowrap;
	}
	
	.top_menu_bar .top_menu_list .btn.cur {
		color: #000;
	}
	
	.top_menu_bar .top_menu_list .btn {
		margin-bottom: 10px;
	}
	
	.top_menu_bar .top_menu_list .btn {
		margin-top: 10px;
	}
	
	.top_menu_bar .top_menu_list .btn {
		margin-left: 10px;
	}
	
	.top_menu_bar .top_menu_list .btn {
		height: 52px;
	}
	
	.top_menu_bar .top_menu_list .btn {
		line-height: 52px;
	}
	
	.top_menu_bar .top_menu_list .btn {
		font-size: 34px;
	}
	
	.top_menu_bar .top_menu_list .btn {
		padding-right: 20px;
	}
	
	.top_menu_bar .top_menu_list .btn {
		padding-left: 20px;
	}
	
	.top_menu_bar .top_menu_list .btn {
		white-space: nowrap;
		display: inline-block;
		padding-left: 10px;
		padding-right: 10px;
		color: #000;
		text-decoration: none;
		font-size: 14px;
		/*line-height: 26px;*/
		height: 200px;
		margin-left: 5px;
		margin-top: 5px;
		margin-bottom: 5px;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
	}
</style>