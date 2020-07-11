<style>
	.loginBox{
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
	  color: #fff;
	  background: url(./images/form_bg.png) no-repeat 100% 100%;
	  background-size:100% 100%;
	}
	.title {
	  font-size: 38rpx;
	  text-align: center;
	  margin: 54rpx 0 50rpx;
	  color: #fff;
	}
	.inp {
	  width: 100%;
	  height: 56rpx;
	  box-sizing: border-box;
	  padding-left: 120rpx;
	  background: #1b1f51;
	  border: 2rpx solid #0b3968;
	  border-radius: 10rpx;
	  color: #fff;
	}
	.inp_box {
	  width: 403rpx;
	  position: relative;
	  margin: 0 auto 32rpx;
	}
	.icon {
	  position: absolute;
	  top: 50%;
	  margin-top: -12rpx;
	  display: flex;
	  align-items: center;
	  font-size: 20rpx;
	}
	.icon image {
	  margin: 0 20rpx;
	}
	.icon span{
		color: #fff;
	}
	input:focus {
	  border: 2rpx solid #0b8ab9;
	}
	.operation {
	  width: 403rpx;
	  margin: auto;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	}
	.no_password {
	  cursor: pointer;
	  color: #00b8ff;
	  font-size: 16rpx;
	}
	.register_btn {
	  width: 403rpx;
	  margin: 40rpx auto 0;
	}
	.register {
	  width: 100%;
	  height: 56rpx;
	  padding: 0;
	  margin: 0;
	  font-size: 26rpx;
	  color: #fff;
	  background: linear-gradient(#00b7fe, #0178e5);
	  border: 0;
	  border-radius: 10rpx;
	  cursor: pointer;
	}
	.input_icon{
		width: 21rpx;
		height: 23rpx;
	}
</style>
<template>
	<view class="loginBox">
		<view class="form_box">
			<p class="title">学生登录</p>
			<view class="inp_box">
				<input type="text" class="inp" autocomplete="off" />
				<view class="icon">
					<image src="./images/account.png" class="input_icon" alt />
					<span>账号</span>
				</view>
			</view>
			<view class="inp_box">
				<input type="password" class="inp" />
				<view class="icon">
					<image src="./images/password.png" class="input_icon" alt />
					<span>密码</span>
				</view>
			</view>
			<!-- view class="operation">
		        <view class="inp_check">
		          <checkbox v-model="" style="color:#fff;" >记住密码</checkbox>
		        </view>
		        <view class="no_password" @click="password_btn">修改密码</view>
		      </view>
		      <view class="register_btn">
		        <button type="submit" class="register" :plain="true" @click="submit">登录</button>
		      </view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>
