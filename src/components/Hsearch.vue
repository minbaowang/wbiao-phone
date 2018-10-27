<template>
	<div>
		<li class="wb_back">
			<!--<router-link class="icon-d-back02" :a="'/wanbiao'"></router-link>-->
			<a href="javascript:window.history.back();" class="icon-d-back02"></a>
		</li>
		<div class="weui-search-bar" :class="{
		'weui-search-bar_focusing':isSearch
	}" id="searchBar">
			<form class="weui-search-bar__form">
				<div class="weui-search-bar__box">
					<i class="weui-icon-search"></i>
					<input @keyup="dis" type="search" v-model="searchText" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
					<a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
				</div>
				<label @click="toggle" class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
			</form>
			<a @click="toggle" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
		</div>
		<!--//内容区-->
		<div class="weui-panel weui-panel_access">
			<div class="weui-panel__hd">搜索推荐</div>
			<div class="weui-panel__bd">
				<div class="weui-media-box weui-media-box_text" v-for="(h,index) in computedArrs" :class="{'weui-panel-dis':searchValue}">
					<h4 class="weui-media-box__title" v-text="`${h.goodName}${h.shoptype}`"></h4>
					<p class="weui-media-box__desc" v-text="h.name"></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				searchValue: true,
				isSearch: false,
				searchText: "",
				searchData: []
			}
		},
		methods: {
			toggle() {
				this.isSearch = !this.isSearch;
			},
			//让搜索商品显示或者隐藏
			dis() {
				if(this.searchText !== "") {
					this.searchValue = !this.searchValue;
				} else {
					this.searchValue = true;
				}

			}
		},
		mounted() {
			//发起ajax请求
			var self = this;
			//获取输入框输入的值
			$.ajax({
				type: "get",
				url: "http://localhost:9995/search",
				async: true,
				data: {},
				success(data) {
					if(data.length > 0) {
						//alert(self.arr[idx])
						//item就是数组的每一个元素
						self.searchData = data;
					}
				}
			});

		},
		computed: {
			computedArrs() {
				//var self = this;
				var newArr = this.searchData.filter(function(a) {
					//					console.log(a.name.indexOf(this.searchText) != -1)
					//真
					//					console.log(a.name, this.searchText)
					return a.name.indexOf(this.searchText) != -1
					//return 
				}.bind(this))
				//				console.log(newArr);
				return newArr
			}
		}
	}
</script>

<style scoped>
	.weui-panel-dis {
		display: none;
	}
	
	.wb_back {
		position: absolute;
		left: 0;
		z-index: 2;
	}
	
	ul li {
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
	
	.weui-search-bar__form {
		margin-left: 44px;
	}
</style>