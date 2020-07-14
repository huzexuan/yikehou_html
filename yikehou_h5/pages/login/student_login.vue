<style>
	#loginBox{
		width: 100%;
		height:100vh;
		background: url(./images/studentBg.jpg) no-repeat 100% 100%;
		background-size: 100% 100%;
		position: relative;
	}
	.form_box {
	  position: absolute;
	  right: 50%;
	  top: 515rpx;
	  width: 499rpx;
	  height: 484rpx;
	  margin-right: -249rpx;
	  color: #fff !important;
	  background: url(./images/form_bg.png) no-repeat 100% 100%;
	  background-size:100% 100%;
	}
	.title {
	  font-size: 38rpx;
	  text-align: center;
	  margin: 54rpx 0 50rpx;
	  color: #fff;
	}
	#loginBox .inp {
	  width: 100%;
	  height: 56rpx;
	  box-sizing: border-box;
	  padding-left: 120rpx;
	  background: #1b1f51;
	  border: 2rpx solid #0b3968;
	  border-radius: 10rpx;
	  color: #fff !important;
	}
	#loginBox .inp_box {
	  width: 403rpx;
	  height: 56rpx;
	  position: relative;
	  margin: 0 auto 32rpx;
	}
	#loginBox .icon {
	  position: absolute;
	  top: 0;
	  line-height: 56rpx;
	  display: flex;
	  align-items: center;
	  font-size: 20rpx;
	}
	#loginBox .icon image {
	  margin: 0 20rpx;
	}
	#loginBox .icon span{
		color: #fff;
	}
	#loginBox .inp:focus {
	  border: 2rpx solid #0b8ab9 !important;
	}
	#loginBox .operation {
	  width: 403rpx;
	  margin: auto;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	}
	#loginBox .no_password {
	  color: #00b8ff;
	  font-size: 16rpx;
	}
	#loginBox .register_btn {
	  width: 403rpx;
	  margin: 20rpx auto 0;
	}
	#loginBox .register {
	  width: 100%;
	  height: 56rpx;
	  padding: 0;
	  margin: 0;
	  font-size: 26rpx;
	  color: #fff;
	  background: linear-gradient(#00b7fe, #0178e5);
	  border: 0;
	  border-radius: 10rpx;
	  line-height: 56rpx;
	}
	.input_icon{
		width: 21rpx;
		height: 23rpx;
	}
</style>
<template>
	<view id="loginBox">
		<view class="form_box">
			<p class="title">学生登录</p>
			<view class="inp_box">
				<input type="text" class="inp" v-model="user_name" autocomplete="off" />
				<view class="icon">
					<image src="./images/account.png" class="input_icon" alt />
					<span>账号</span>
				</view>
			</view>
			<view class="inp_box">
				<input type="password" v-model="password" class="inp" />
				<view class="icon">
					<image src="./images/password.png" class="input_icon" alt />
					<span>密码</span>
				</view>
			</view>
			<view class="operation">
				<checkbox-group @change="checkBox($event)">
					<label>
						<checkbox :checked="checked" />记住密码
					</label>
				</checkbox-group>
				<view class="no_password" @click="up_pas">修改密码</view>
			</view>
			<view class="register_btn">
				<button type="submit" class="register" :plain="true" @click="submit">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import API from "../../config/api.js"
	export default {
		data() {
			return {
				checked: false,
				user_name: '',
				password: '',
				has_pas: false
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: "益课后-学生登录"
			})
			this.init()
			this.has_pas = option.pas
		},
		onShow() {
			if (this.has_pas) {
				uni.showToast({
					title: "修改成功,请重新登录",
					duration: 2000,
					icon: 'none',
				});
			}
		},
		methods: {
			init() {
				let user = JSON.parse(sessionStorage.getItem('userInfo'))
				if (user) {
					if (user.userName && user.userPsw) {
						this.user_name = user.userName
						this.password = user.userPsw
						this.checked = true
					}
				}
			},
			checkBox(e) {
				this.checked = !this.checked
			},
			up_pas() {
				uni.navigateTo({
					url: "/pages/login/password?type=2"
				})
			},
			async submit() {
				let _res = await API.postJson('studentLogin', {
					"card_number": this.user_name,
					"password": this.password
				});
				if (_res.code == 0) {
					if (this.checked) {
						let user = {
							userName: this.user_name,
							userPsw: this.password
						}
						sessionStorage.setItem('userInfo', JSON.stringify(user));
						sessionStorage.setItem('user', JSON.stringify(_res.data));
						uni.showToast({
							title: '登录成功',
							duration: 2000,
							icon: 'none',
							success() {
								uni.navigateTo({
									url: '/pages/index/index'
								})
							}
						});
					} else {
						sessionStorage.removeItem('userInfo')
						sessionStorage.setItem('user', JSON.stringify(_res.data));
						uni.showToast({
							title: '登录成功',
							duration: 2000,
							icon: 'none',
							success() {
								uni.navigateTo({
									url: '/pages/index/index'
								})
							}
						});
					}
				} else {
					uni.showToast({
						title: _res.message,
						duration: 2000,
						icon: 'none',
					});
				}
			},
		}
	}
</script>
