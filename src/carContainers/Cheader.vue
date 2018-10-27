<template>
	<div class="W_goods_detail_title">
		<header class="W_title">
			<ul class="clearfix">
				<li class="wb_back">
					<!--<router-link class="icon-d-back02" :a="'/wanbiao'"></router-link>-->
					<a href="#/wanbiao" class="icon-d-back02"></a>
				</li>
				<li class="wb_title_middle wb_goods_tab">
					<ul class="clearfix" id="wb_goods_tab">
						<li v-for="(p,index) in pageheader" :key="index" @click="black(index)">
							<a href="javascript:void(0);" :class="{'on':headerpage===index}" v-text="p.name">商品</a>
						</li>
					</ul>
				</li>
				<li class="wb_more">
					<a href="javascript:void(0);" class="to_more icon-a-nav02"></a>
				</li>
			</ul>
		</header>
		<div class="ol_show" style="display: none; top: 40px;">
			<div class="jiao"></div>
			<a href="/">首页</a>
			<a class="js_share">分享</a>
			<a href="https://mu.wbiao.cn/member/footprints">足迹</a>
		</div>
	</div>
</template>

<script>
	export default {
		//点击哪个，哪个就变黑
		data() {
			return {
				headerpage:0,
				pageheader:[{
					name:"商品"
				},{
					name:"详情"
				},{
					name:"评价"
				},{
					name:"门店"
				}]
			}
		},
		methods:{
			black(index){
				this.headerpage = index;
//				switch(index){
//					case 0:
//					location.href="#/wanbiao";
//					break;
//					case 1:
//					location.href="#/contact";
//					break;
//					case 2:
//					location.href="#/find";
//					break;
//					case 3:
//					location.href="#/shopcar";
//					break;
//				}
			}
		}
	}
</script>

<style>
	.W_goods_detail_title,
	.W_goods_detail_titleTwo {
		position: fixed!important;
		top: 0;
		z-index: 8;
		min-width: 320px;
		max-width: 640px;
		width: 100%;
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
	
	.W_title ul .wb_goods_tab {
		text-align: center;
		margin-left: 0;
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
	
	.W_title .wb_goods_tab ul li {
		width: 64px;
		display: inline-block;
	}
	
	.W_title .wb_goods_tab ul li a.on {
		font-weight: 700;
	}
	
	.W_title .wb_goods_tab ul li a.on {
		color: #333;
		border-bottom: 3px solid #333;
	}
	
	.W_title .wb_goods_tab ul li a {
		font-weight: 700;
	}
	
	.W_title .wb_goods_tab ul li a {
		display: inline-block;
		font-size: 14px;
		color: #666;
		line-height: 38px;
	}
	
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.W_title .rewrite_right,
	.W_title .wb_more,
	.W_title .wb_right {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 2;
	}
	
	.icon-a-nav02 {
		display: block;
		background-image: url(../assets/a.png);
		background-position: 0 -300px;
		background-size: 443px;
		width: 44px;
		height: 44px;
	}
	/*三个点隐藏*/
	.ol_show {
    position: fixed;
    z-index: 40;
    width: 90px;
    top: 90px;
    right: 5px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 0 5px;
    display: block;
}
.ol_show .jiao:before {
    content: "";
    width: 0;
    height: 0;
    display: block;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #ccc;
    position: absolute;
    right: 15px;
    top: -7px;
}
.ol_show .jiao:after {
    content: "";
    width: 0;
    height: 0;
    display: block;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fff;
    position: absolute;
    right: 16px;
    top: -6px;
    z-index: 1;
}
.ol_show a {
    height: 34px;
    line-height: 34px;
    display: block;
    text-align: center;
    color: #666;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
}
.ol_show a:last-child {
    border-bottom: 0;
}
</style>