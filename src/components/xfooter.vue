<template>
	<div>
	<div class="weui-tabbar">
		<a @click="green(index)" v-for="(a,index) in arr" :key="index" href="javascript:;" class="weui-tabbar__item" :class="{
			'weui-bar__item_on':page===index
		}">
			<span style="display: inline-block;position: relative;">
				<img :src="a.img" alt="" class="weui-tabbar__icon">
			</span>
			<p class="weui-tabbar__label" v-text="a.title"></p>
		</a>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				img: require("../assets/icon_tabbar.png"),
				//开始绿的选项卡
				page:0,
				arr: [{
					title: "首页",
					img:require("../assets/icon1.png")
				}, {
					title: "分类",
					img:require("../assets/icon2.png")
				}, {
					title: "资讯",
					img:require("../assets/icon4.png")
				}, {
					title: "购物车",
					img:require("../assets/icon3.png")
				},{
					title: "个人中心",
					img:require("../assets/icon5.png")
				}]
			}
		},
		props:['type'],
		mounted(){
			switch(this.type){
				case 1:
					this.page = 0;
					break;
				case 2:
					this.page = 1;
					break;
				case 3:
					this.page = 2;
					break;
				case 4:
					this.page = 3;
					break;
				case 5:
					this.page = 4;
					break;
					
			}
		},
		methods:{
			green(index){
//				this.page = index;
				switch(index){
					case 0:
					location.href="#/wanbiao";
					break;
					case 1:
					location.href="#/contact";
					break;
					case 2:
					location.href="#/find";
					break;
					case 3:
					location.href="#/shopcar";
					break;
					case 4:
					location.href="#/person";
					break;
				}
			}
		}
	}
</script>

<style scoped>
	.weui-tabbar {
		position: fixed!important;
		bottom: 0;
		left: 0;
		width: 100%;
		height:50px;
		/*line-height: 50px;*/
	}
	.weui-tabbar__icon{
		width:20px;
		height: 20px;
	}
	.weui-tabbar__label{
		font-size:12px!important;
	}
</style>