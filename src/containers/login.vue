<template>
	<div>
		<header class="W_title">
			<ul class="clearfix">
				<li class="wb_back">
					<a href="javascript:window.history.back();" class="icon-d-back02"></a>
				</li>
				<li class="wb_title_middle wb_title">登录</li>
				<li class="rewrite_right">
					<a href="#/zhuce" class="">注册</a>
				</li>
			</ul>
		</header>
		<!--内容区域-->
		<div class="contents">
			<div class="user_logins">
				<div class="box">
					<p class="phone"><em>手机号</em>
						<input v-model="username" maxlength="13" type="tel" onkeyup="value=value.replace(/[^\d\s]/g,'')" placeholder="请输入手机号" class="phone_num">
					</p>
					<p class="phone"><em>密码</em>
						<input v-model="password" maxlength="13" type="tel" onkeyup="value=value.replace(/[^\d\s]/g,'')" placeholder="请输入密码" class="phone_num">
					</p>
					<p class="note"> <em>验证码</em>
						<input maxlength="6" onkeyup="value=value.replace(/[^\d]/g,'')" type="tel" value="" class="note_code">
						<a href="javascript:void(0);" id="sendCode" @click="randomCode" v-text="code"></a>
					</p>
				</div>
				<a @click="logCode" class="login" id="mobile_login">立即登录</a>
				<a href="javascript:void(0);" class="login isLogin h"><img src="//static.wbiao.co/p/mu/images/1/loading@2x_1.gif" alt=""></a>
				<p class="user user_login"><i class="icon-a-user"></i>手机验证码登录</p>
			</div>
		</div>
		<!--错误提示-->
		<!--验证码错误-->
		<div class="mui-popup mui-popup-in" :style="{display: err}">
			<div class="mui-popup-inner">
				<div class="mui-popup-title">验证码输入错误</div>
				<div class="mui-popup-text">请重新输入验证码</div>
			</div>
			<div class="mui-popup-buttons">
				<span class="mui-popup-button" @click="falied">取消</span>
				<a href="#/zhuce" class="mui-popup-button mui-popup-button-bold">注册</a>
			</div>
		</div>
		<!--信息错误-->
		<div class="mui-popup mui-popup-in" :style="{display: no}">
			<div class="mui-popup-inner">
				<div class="mui-popup-title">信息输入有误</div>
				<div class="mui-popup-text">重新输入或者注册</div>
			</div>
			<div class="mui-popup-buttons">
				<span class="mui-popup-button" @click="quit">取消</span>
				<a href="#/zhuce" class="mui-popup-button mui-popup-button-bold">注册</a>
			</div>
		</div>
	</div>
</template>

<script>
	import code  from '../lib/base64.js'
	var  codemi = code.hex_sha1;

	import common from '../lib/common.js'
	import $ from 'jquery';
	var Cookie = common.Cookie;
	export default {
		data() {
			return {
				no: "none",
				err: "none",
				username: "",
				password: "",
				code: ""
			}
		},
		methods: {
			//发起ajax请求核对数据

			logCode() {
				var self = this;
				//				验证验证码是否输入正确
				var rancode = self.code;
				var numcode = $(".note_code").val();
				//写cookie
				var userdata = Cookie.get('userdata'); //[{},{}], ''
				if(userdata === '') {
					userdata = [];
				} else {
					userdata = JSON.parse(userdata);
				}
				if(numcode == rancode) {
					$.ajax({
						url: "http://localhost:9995/log",
						type: "POST",
						data: {
							username: self.username,
							password: codemi(self.password)
						},
						success(data) {
							if(data.length > 0) {
								var username = data[0].username;
								var password = data[0].password;

								// 获取人物信息，并写入对象
								var mydata = {
									username: username, //guid商品唯一标识
									password: password
								}

								// 把当前人物写入数组
								userdata.push(mydata);
								Cookie.set('userdata', JSON.stringify(userdata));
								location.href="#/person"
								
							} else {
								self.no = "block";
							}
						}
					});
				} else {
					self.err = "block";
				}

			},
			randomCode() {
				var mycode = '';
				for(var i = 0; i < 4; i++) {
					mycode += parseInt(Math.random() * 10);
				}

				this.code = mycode;
			},
			falied() {
				this.err = "none";
			},
			quit() {
				this.no = "none";
			}
		},
		mounted(){
				var mycode = '';
				for(var i = 0; i < 4; i++) {
					mycode += parseInt(Math.random() * 10);
				}

				this.code = mycode;
			},

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
	
	.W_title ul li {
		display: block;
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 16px;
		color: #444;
	}
	
	.W_title .rewrite_right,
	.W_title .wb_more,
	.W_title .wb_right {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 2;
	}
	
	.W_title .rewrite_right a {
		display: block;
	}
	/*内容*/
	
	.contents .box {
		margin-top: 31px;
		background: #fff;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}
	
	.contents .box p {
		height: 44px;
		border-bottom: 1px solid #eee;
		position: relative;
	}
	
	.contents .box p em {
		line-height: 44px;
		width: 17.6%;
		text-align: center;
		font-size: 14px;
		color: #333;
		float: left;
	}
	
	em,
	i {
		font-style: normal;
	}
	
	.contents .box p input {
		width: 82.4%;
	}
	
	.contents .box p input,
	.contents .box p span {
		font-size: 14px;
		height: 44px;
		border: none;
		outline: 0;
		float: left;
	}
	
	.contents a.login {
		width: 94.67%;
		margin: 20px auto 0;
		line-height: 44px;
		background: #e60000;
		font-size: 16px;
		color: #fff;
		text-align: center;
		border-radius: 10px;
		display: block;
		height: 44px;
	}
	
	.h {
		display: none!important;
	}
	
	.contents p.user {
		margin-right: 2.6%;
		text-align: right;
		margin-top: 13px;
		font-size: 14px;
		line-height: 14px;
		color: #666;
	}
	
	.contents p.user i {
		display: inline-block;
		margin-right: 5px;
	}
	
	.icon-a-user {
		display: block;
		background-image: url(../assets/a.png);
		background-position: -181px -349px;
		background-size: 443px;
		width: 10px;
		height: 11px;
	}
	
	.contents .box p {
		height: 44px;
		border-bottom: 1px solid #eee;
		position: relative;
	}
	
	.contents .box p input {
		width: 82.4%;
	}
	
	.contents .box p input,
	.W_container .contents .box p span {
		font-size: 14px;
		height: 44px;
		border: none;
		outline: 0;
		float: left;
	}
	
	.contents .box p.note a {
		width: 90px;
		border-left: 1px solid #eee;
		float: left;
		height: 44px;
		line-height: 44px;
		font-size: 13px;
		color: #999;
		text-align: center;
		position: absolute;
		top: 0;
		right: 0;
	}
	/*错误提示*/
	
	.mui-popup.mui-popup-in {
		display: none;
		-webkit-transition-duration: .4s;
		transition-duration: .4s;
		-webkit-transform: translate3d(-50%, -50%, 0) scale(1);
		transform: translate3d(-50%, -50%, 0) scale(1);
		opacity: 1;
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
		opacity: 0;
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