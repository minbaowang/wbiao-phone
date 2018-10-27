<template>
	<div class="srh">
		<div class="W_reg_title">
			<header class="W_title">
				<ul class="clearfix">
					<li class="wb_title_middle wb_search_result"><i class="srh_icon icon-a-search01"></i>
						<a href="#/search" class="search_work esp1">搜索商品</a><span class="clean_search h"><i class="icon-a-close02"></i></span></li>
				</ul>
			</header>
		</div>

		<!--左边-->
		<div class="content">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<ul>
							<li v-for="(n,index) in cNav" :key="index" @click="black(index)">
								<a href="javascript:0" v-text="n.title" :class="{'becomeColor':num===index}"></a>
							</li>
						</ul>
					</div>
				</div>
				<!-- Add Scroll Bar -->
				<div class="swiper-scrollbar"></div>
			</div>
			<!--右边-->
			<div class="W_right_floor" id="W_right_floor" style="touch-action: none;">
				<div class="scroll_wrap" style="width: 259px; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
					<div class="W_gnTab_content" id="tabcon01">
						<div class="gnTabs_block" style="display: block;">
							<div class="act_img">
								<a href="/dynamic/18081448399/"><img src="//image7.wbiao.co/mall/d619b4cdcfd048a586b8f21b30dbfaf1.jpg" alt=""></a>
							</div>
							<p class="hot_tit">猜你喜欢</p>
							<div class="sort_list sort_list_01">
								<ul class="clearfix">
									<li>
										<a href="https://m.wbiao.cn/list-41.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/796e1ae174b144c09d0615cca66b7426.png" alt=""></p>
											<p class="p_txt">机械表</p>
										</a>
									</li>
									<li>
										<a href="https://m.wbiao.cn/list-42.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/824cd8f7feae4978b1f14b25ae5bf50c.png" alt=""></p>
											<p class="p_txt">石英表</p>
										</a>
									</li>
									<li>
										<a href="https://m.wbiao.cn/list-51.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/484db415cecb4cc39ab2cb334a62d0f2.png" alt=""></p>
											<p class="p_txt">钢带手表</p>
										</a>
									</li>
									<li>
										<a href="https://m.wbiao.cn/list-297.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/e491533b98964561af22ac11654722f3.png" alt=""></p>
											<p class="p_txt">商务休闲</p>
										</a>
									</li>
									<li>
										<a href="https://m.wbiao.cn/list-96.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/f75e6f9068484f63835c9777de06ac5d.png" alt=""></p>
											<p class="p_txt">男表 </p>
										</a>
									</li>
									<li>
										<a href="https://m.wbiao.cn/list-97.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/604c31a40d6140eba748f611387acd18.png" alt=""></p>
											<p class="p_txt">女表</p>
										</a>
									</li>
								</ul>
							</div>
							<p class="hot_tit">猜你喜欢</p>
							<div class="sort_list sort_list_01">
								<ul class="clearfix">
									<li>
										<a href="https://m.wbiao.cn/list-41.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/796e1ae174b144c09d0615cca66b7426.png" alt=""></p>
											<p class="p_txt">机械表</p>
										</a>
									</li>
									<li>
										<a href="https://m.wbiao.cn/list-42.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/824cd8f7feae4978b1f14b25ae5bf50c.png" alt=""></p>
											<p class="p_txt">石英表</p>
										</a>
									</li>
									<li>
										<a href="https://m.wbiao.cn/list-51.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/484db415cecb4cc39ab2cb334a62d0f2.png" alt=""></p>
											<p class="p_txt">钢带手表</p>
										</a>
									</li>
									<li>
										<a href="https://m.wbiao.cn/list-297.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/e491533b98964561af22ac11654722f3.png" alt=""></p>
											<p class="p_txt">商务休闲</p>
										</a>
									</li>
									<li>
										<a href="https://m.wbiao.cn/list-96.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/f75e6f9068484f63835c9777de06ac5d.png" alt=""></p>
											<p class="p_txt">男表 </p>
										</a>
									</li>
									<li>
										<a href="https://m.wbiao.cn/list-97.html">
											<p class="p_img"> <img src="//image7.wbiao.co/mall/604c31a40d6140eba748f611387acd18.png" alt=""></p>
											<p class="p_txt">女表</p>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<!--<div class="iScrollVerticalScrollbar iScrollLoneScrollbar" style="overflow: hidden; pointer-events: none;">
				<div class="iScrollIndicator" style="transition-duration: 0ms; display: block; height: 8px; transform: translate(0px, 0px) translateZ(0px); transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);"></div>
			</div>-->
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	//swiper.css
	import "../../node_modules/swiper/dist/css/swiper.css"
	export default {
		data() {
			return {
				//				开始黑的位置
				num: 0,
				cNav: [{
					title: '首页',
					ishow: true
				}, {
					title: '顶级品牌',
					ishow: false
				}, {
					title: '奢华品牌',
					ishow: false
				}, {
					title: '高级品牌',
					ishow: false
				}, {
					title: '轻奢时尚',
					ishow: false
				}, {
					title: '年轻潮牌',
					ishow: false
				}, {
					title: '国产智能',
					ishow: false
				}, {
					title: '表带',
					ishow: false
				}, {
					title: '维修保养',
					ishow: false
				}]
			}
		},
		methods: {
			black(index) {
				this.num = index;

			}
		},
		mounted() {
			new Swiper('.swiper-container', {
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: true,
				scrollbar: {
					el: '.swiper-scrollbar',
				},
				mousewheel: true,
			});
		}
	}
</script>

<style scoped>
	.srh {
		padding-bottom: 50px;
	}
	
	* {
		font-family: Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", STXihei, STHeiti, Heiti, SimSun, sans-serif;
		margin: 0;
		padding: 0;
		font-size: 1em;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
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
	
	.W_title ul li.wb_search_result {
		height: 28px;
		line-height: 28px;
		margin-top: 8px;
		margin-right: 6px;
		background: #f1f1f1;
		border-radius: 100px;
		font-size: 14px;
		color: #333;
	}
	
	.W_title .wb_title_middle {
		margin-left: 12px;
	}
	
	.W_title .wb_title_middle {
		margin-left: 12px;
	}
	
	.W_title .wb_title_middle {
		width: auto;
		position: relative;
	}
	
	.W_title ul li {
		display: block;
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		color: #444;
	}
	
	.W_title .wb_search_result .srh_icon,
	.W_title li.wb_index_srearch .srh_icon {
		position: absolute;
		top: 8px;
		left: 11px;
	}
	
	.icon-a-search01 {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -138px -417.5px;
		background-size: 443px;
		width: 12px;
		height: 12px;
	}
	
	em,
	i {
		font-style: normal;
	}
	
	.W_title .wb_search_result .search_work {
		position: relative;
		display: block;
		height: 100%;
		padding: 0 32px;
		font-size: 12px;
		color: #999;
	}
	
	.esp1 {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
	a {
		text-decoration: none;
		outline: 0;
		color: #666;
		border: none;
	}
	/*导航栏*/
	
	.swiper-container {
		float: left;
		width: 84px;
		height: 100%;
	}
	
	.swiper-slide {
		font-size: 18px;
		height: auto;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	
	.swiper-slide ul {
		width: 83px;
		height: 100%;
	}
	
	.swiper-slide ul li {
		height: auto;
		float: none;
		border-bottom: 1px solid #f0f0f0;
		border-right: 1px solid #f0f0f0;
	}
	
	.swiper-slide ul li {
		height: 44px;
		flex: 1;
		display: block;
		float: left;
		text-align: center;
	}
	
	.becomeColor {
		background: #515151;
		color: #fff;
		border-radius: 100px;
		border-bottom: 0;
	}
	
	.swiper-slide ul li a {
		width: 61px;
		display: block;
		line-height: 22px;
		font-size: 12px;
		margin: 13px 11px;
		padding: 0;
	}
	
	.W_right_floor {
		float: left;
	}
	/*右边区域*/
	
	.W_right_floor .scroll_wrap {
		/*width: 100%!important;*/
		position: absolute;
		z-index: 1;
		-webkit-tap-highlight-color: transparent;
		user-select: none;
		/*min-height: 101%;*/
	}
	.scroll_wrap{
		width: 236px!important;
	}
	.W_gnTab_content .gnTabs_block:first-child {
		display: block;
	}
	
	.W_gnTab_content .gnTabs_block {
		display: none;
	}
	
	.W_right_floor .act_img>a {
		display: block;
		margin: 9px 12px;
		width: 216px;
		height: 76px;
	}
	
	.W_right_floor .act_img>a img {
		width: 100%;
		height: 100%;
	}
	
	.p_img {
		width: 60px;
		height: 60px;
	}
	
	.p_img>img {
		width: 100%;
		height: 100%;
	}
	.gnTabs_block{
		width: 236px;
	}
	.W_gnTab_content .gnTabs_block .hot_tit {
		width: 236px;
		font-size: 12px;
		line-height: 36px;
		color: #999;
		text-align: center;
		margin-bottom: 8px;
	}
	
	.W_gnTab_content .sort_list>ul {
		width: 236px;
	}
	
	.W_gnTab_content .sort_list>ul li {
		display: block;
		float: left;
		width: 33.3%;
		text-align: center;
		margin-bottom: 26px;
	}
	
	.W_gnTab_content .sort_list>ul li a {
		width: 100%;
		display: inline-block;
	}
	.sort_list{
		max-width:236px ;
	}
	.W_gnTab_content .sort_list a .p_txt {
		width: 60px;
		height: 60px;
		text-align: center;
		color: #666;
		font-size: 12px;
		height: 18px;
	}
</style>