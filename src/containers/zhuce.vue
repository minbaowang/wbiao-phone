<template>
	<div>
		<header class="W_title">
			<ul class="clearfix">
				<li class="wb_back">
					<a href="javascript:window.history.back();" class="icon-d-back02"></a>
				</li>
				<li class="wb_title_middle wb_title">注册</li>
			</ul>
		</header>

		<!--内容区-->
		<div class="W_content">
			<p class="phone"><input oninput="if(value.length>11)value=value.slice(0,11)" type="number" placeholder="请填写注册手机号" id="phone" v-model="usn"></p>
			<p class="phone none"><input oninput="if(value.length>11)value=value.slice(0,11)" type="number" placeholder="输入密码" id="referrer_phone" v-model="psd"></p>
			<p class="word">点击注册意味着您同意
				<a href="/member/protocol">《万表用户协议》</a>
			</p>
			<button @click="regCode" class="nextBtn on" id="nextBtn">注册</button>
			<p class="kf">遇到问题？你可以
				<a href="javascript:void(0);" class="CUSTOMER-SERVICE">联系客服</a>
			</p>
		</div>

		<!--错误提示-->
		<!--已经被注册-->
		<div class="mui-popup mui-popup-in" :style="{display: failed}">
			<div class="mui-popup-inner">
				<div class="mui-popup-title">手机号已被绑定</div>
				<div class="mui-popup-text">请更换其他手机号或直接登录！</div>
			</div>
			<div class="mui-popup-buttons">
				<span class="mui-popup-button" @click="falied">取消</span>
				<span class="mui-popup-button mui-popup-button-bold">登录</span>
			</div>
		</div>
		<!--账号输入不正确-->
		<div class="mui-popup mui-popup-in" :style="{display: zhuangtai}">
			<div class="mui-popup-inner">
				<div class="mui-popup-title">账号为11位手机号码</div>
				<div class="mui-popup-text">请重新输入</div>
			</div>
			<div class="mui-popup-buttons">
				<span class="mui-popup-button" @click="remove">取消</span>
				<span class="mui-popup-button mui-popup-button-bold">登录</span>
			</div>
		</div>
		<!--注册成功-->
			<div class="mui-popup mui-popup-in" :style="{display: tiao}">
				<div class="mui-popup-inner">
					<div class="mui-popup-title">注册成功</div>
					<div class="mui-popup-text">是否跳转登录页面</div>
				</div>
				<div class="mui-popup-buttons">
					<span class="mui-popup-button" @click="ind">前往主页</span>
					<a class="mui-popup-button mui-popup-button-bold" href="#/login">跳转</a>
				</div>
			</div>
	</div>
</template>

<script>
	import code  from '../lib/base64.js'
	var  codemi = code.hex_sha1;
	import $ from "jquery";
	export default {
		data() {
			return {
				failed: "none",
				zhuangtai: "none",
				tiao:"none",
				usn: "",
				psd: ""
			}
		},
		methods: {
						
			regCode() {
				var self = this;
				if(this.usn.length >= 11) {
					$.ajax({
						url: "http://localhost:9995/reg",
						type: "POST",
						data: {
							username: this.usn,
							password: codemi(this.psd)
						},
						success(data) {
							
							if(data == "yes") {
								self.tiao = "block";
//								location.href="#/login"
							} else {
//								有错,显示错误框
								self.failed = "block";
							}
						}
					});
				} else {
					self.zhuangtai = "block";
				}

			},
//			点击取消去除弹出框
			remove() {
				this.zhuangtai = "none";
			},
			falied(){
				this.failed = "none";
			},
			ind(){
				location.href="#/wanbiao"
			}
		}
	}
</script>

<style scoped>
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
	
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
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
		background-image: url(../assets/d.png);
		background-position: -99px -131.5px;
		background-size: 330.5px;
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
	/*注册内容样式*/
	
	.W_content .phone {
		margin-top: 22px;
		height: 44px;
		background: #fff;
		border: 1px solid #dcdcdc;
		font-size: 14px;
		color: #ccc;
	}
	
	.W_content .phone input,
	.W_content .phone span {
		width: 100%;
		height: 100%;
		border: none;
		padding-left: 2.6%;
		outline: 0;
	}
	
	.W_content .none {
		margin-top: 0;
	}
	
	.W_content .phone input,
	.W_content .phone span {
		width: 100%;
		height: 100%;
		border: none;
		padding-left: 2.6%;
		outline: 0;
	}
	
	.W_content p.word {
		font-size: 12px;
		padding-left: 2.6%;
		margin: 20px 0;
	}
	
	.W_content p.word a {
		color: #e60000;
	}
	
	.W_content .nextBtn.on {
		background: #e60000;
	}
	
	.W_content .nextBtn {
		height: 44px;
		background: #ccc;
		width: 90%;
		display: block;
		margin: 0 auto;
		border-radius: 10px;
		text-align: center;
		line-height: 44px;
		font-size: 14px;
		color: #fff;
	}
	
	.W_content .kf {
		padding-left: 2.6%;
		font-size: 12px;
		color: #9e9e9e;
		margin-top: 18px;
	}
	
	.W_content .kf a {
		color: #707070;
		text-decoration: underline;
	}
	/*错误提示*/
	
	.mui-popup.mui-popup-in {
		display: none;
		-webkit-transition-duration: .4s;
		transition-duration: .4s;
		-webkit-transform: translate3d(-50%, -50%, 0) scale(1);
		transform: translate3d(-50%, -50%, 0) scale(1);
		/*opacity: 1;*/
	}
	
	.mui-popup {
		position: fixed;
		z-index: 1000000;
		top: 50%;
		left: 50%;
		display: none;
		overflow: hidden;
		width: 270px;
		-webkit-transition-property: -webkit-transform, opacity;
		transition-property: transform, opacity;
		-webkit-transform: translate3d(-50%, -50%, 0) scale(1.185);
		transform: translate3d(-50%, -50%, 0) scale(1.185);
		text-align: center;
		/*opacity: 0;*/
		color: #000;
		border-radius: 13px;
	}
	
	.mui-popup-inner {
		position: relative;
		padding: 15px;
		border-radius: 13px 13px 0 0;
		background: rgba(255, 255, 255, .95);
	}
	
	.mui-popup-title {
		font-style: "微软雅黑";
		font-size: 17px;
		font-weight: 500;
		text-align: center;
	}
	
	.mui-popup-title+.mui-popup-text {
		font-family: inherit;
		font-size: 14px;
	}
	
	.mui-popup-inner:after {
		position: absolute;
		z-index: 15;
		top: auto;
		right: auto;
		bottom: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		-webkit-transform-origin: 50% 100%;
		transform-origin: 50% 100%;
		background-color: rgba(0, 0, 0, .2);
	}
	
	.mui-popup-buttons {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		height: 44px;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
	}
	
	.mui-popup-button:first-child {
		border-radius: 0 0 0 13px;
	}
	
	.mui-popup-button.mui-popup-button-bold {
		font-weight: 600;
	}
	
	.mui-popup-button:last-child {
		border-radius: 0 0 13px 0;
	}
	
	.mui-popup-button {
		font-size: 17px;
		line-height: 44px;
		position: relative;
		display: block;
		overflow: hidden;
		box-sizing: border-box;
		width: 100%;
		height: 44px;
		padding: 0 5px;
		cursor: pointer;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #007aff;
		background: rgba(255, 255, 255, .95);
		-webkit-box-flex: 1;
	}
</style>