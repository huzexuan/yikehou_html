<style>
	#password{
		width: 100%;
		height:100vh;
		background: url(./images/password.jpg) no-repeat 100% 100%;
		background-size: 100% 100%;
		box-sizing: border-box;
		padding-top: 594rpx;
	}
	#password .pas_box {
	  width: 100%;
	  color: #fff !important;
	}
	#password .pas_title{
		text-align: center;
		color: #d6f7fe;
		font-size: 30rpx;
		font-weight: bold;
	}
	#password .pas_inp{
		color: #fff;
	}
	.input_box {
	  display: flex;
	  align-items: center;
	  width: 430rpx;
	  margin: 38rpx auto 0;
	}
	.input_box image{
		width: 50rpx;
		height: 46rpx;
	}
	.inp {
	  width: 380rpx;
	  height: 46rpx;
	  box-sizing: border-box;
	  padding-left: 10rpx;
	  background: #051a3f;
	  color: #a4d6ef;
	  font-size: 20rpx;
	}
	.inp::placeholder {
	  color: #a4d6ef !important;
	}
	.register_btn {
	  width: 430rpx;
	  margin: 55rpx auto 0;
	}
	.register {
	  width: 100%;
	  height: 63rpx;
	  padding: 0;
	  margin: 0;
	  font-size: 24rpx;
	  line-height: 63rpx;
	  color: #64b5dd;
	  background: #093c66;
	  border: 1rpx solid #134b7e;
		border-radius: 0;
	}
</style>
<template>
	<view id="password">
		<view class="pas_box">
			<p class="pas_title">益课后平台系统 修改密码</p>
			<view class="input_box">
				<image src="./images/pass_icon01.jpg" alt />
				<input type="text" v-model="number" autocomplete="off" placeholder="请输入账号" class="inp" />
			</view>
			<view class="input_box">
				<image src="./images/pass_icon02.jpg" alt />
				<input type="text" v-model="Ypassword" placeholder="请输入原密码" class="inp" />
			</view>
			<view class="input_box">
				<image src="./images/pass_icon02.jpg" alt />
				<input type="password" v-model="pas" placeholder="请输入新密码" class="inp" />
			</view>
			<view class="input_box">
				<image src="./images/pass_icon03.jpg" alt />
				<input type="password" v-model="newpassword" placeholder="再次输入新密码" class="inp" />
			</view>
			<view class="register_btn">
				<button type="submit" @click="submit" class="register">确认修改</button>
			</view>
		</view>
	</view>
</template>

<script>
	import API from "../../config/api.js"
	export default {
		data() {
			return {
				number: '',
				Ypassword: '',
				pas: '',
				newpassword: '',
				type: 1
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: "益课后-修改密码"
			})
			this.type = option.type
		},
		methods: {
			async submit() {
				// 学校
				if (this.pas === this.newpassword) {
					if (this.type == 1) {
						let _res = await API.postJson('schoolPassword', {
							"name": this.number,
							"password": this.Ypassword,
							"new_password": this.newpassword
						});
						if (_res.code == 0) {
							sessionStorage.removeItem('userInfo')
							uni.navigateTo({
								url: "/pages/login/school_login?pas=1"
							})
						} else {
							uni.showToast({
								title: _res.message,
								duration: 2000,
								icon: 'none',
							});
						}
					} else {
						let _res = await API.postJson('studentPassword', {
							"card_number": this.number,
							"password": this.Ypassword,
							"new_password": this.newpassword
						});
						if (_res.code == 0) {
							uni.navigateTo({
								url: "/pages/login/student_login?pas=1"
							})
							sessionStorage.removeItem('userInfo')
						} else {
							uni.showToast({
								title: _res.message,
								duration: 2000,
								icon: 'none',
							});
						}
					}
				} else {
					uni.showToast({
						title: '两次密码不一致',
						duration: 2000,
						icon: 'none',
					});
				}
			},
		}
	}
</script>
