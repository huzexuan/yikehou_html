<template>
	<view class="header_box">
		<image src="./images/logo.png" class="logo_img"></image>
		<image src="./images/icon.png" class="icon_img"></image>
	</view>
</template>

<script>
	export default {
		props: {
			},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.header_box{
	width: 100%;
	height: 87rpx;
	box-sizing: border-box;
	padding: 0 26px 0 28px;
	background: #fff;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index:111;
}
.logo_img{
	width: 91rpx;
	height: 44rpx;
}
.icon_img{
	width: 37rpx;
	height: 28rpx;
}
</style>
