<style>
	.header_box {
		width: 100%;
		height: 87rpx;
		box-sizing: border-box;
		padding: 0 26rpx 0 28rpx;
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 111;
	}

	.logo_img {
		width: 91rpx;
		height: 44rpx;
	}

	.icon_img {
		width: 37rpx;
		height: 28rpx;
	}

	.headerNav {
		position: absolute;
		top: 0;
		right: 26rpx;
		width: 220rpx;
		display: none;
	}

	.headerNav ul li {
		display: block;
		background: #1758a3;
		height: 74rpx;
		width: 100%;
		box-sizing: border-box;
		padding: 0 10rpx 0 16rpx;
		border-bottom: 1rpx solid #7199c7;
		color: #FFF;
		line-height: 74rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.headerNav ul li:nth-child(1) {
		height: 87rpx;
		line-height: 87rpx;
		border: 0;
		font-size: 28rpx;
		font-weight: bold;
	}

	.headerNav ul li:last-child {
		border: 0;
	}

	.headerNav ul li span {
		color: #fff;
	}
</style>
<template>
	<view class="header_box">
		<image src="./images/logo.png" class="logo_img"></image>
		<image src="./images/icon.png" class="icon_img" @click="up_navBtn"></image>
		<view class="headerNav ">
			<ul>
				<li>
					导航<span class="iconfont iconchahao" @click='no_navBtn'></span>
				</li>
				<li @click="harderNavBtn('/pages/index/index')">
					首页<span class="iconfont iconiconset0420"></span>
				</li>
				<li @click="harderNavBtn('/pages/AboutUs/index')">
					关于我们<span class="iconfont iconiconset0420"></span>
				</li>
				<li @click="harderNavBtn('/pages/course/index')">
					课程中心<span class="iconfont iconiconset0420"></span>
				</li>
				<li @click="harderNavBtn('/pages/new/index')">
					新闻资讯<span class="iconfont iconiconset0420"></span>
				</li>
				<li @click="harderNavBtn('/pages/AboutUs/joinHands')">
					合作共赢<span class="iconfont iconiconset0420"></span>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		props: {},
		data() {
			return {

			}
		},
		methods: {
			up_navBtn() {
				$('.headerNav').removeClass('fadeOutUp animated').addClass('fadeInDown animated').css('display', 'block')
			},
			no_navBtn() {
				$('.headerNav').removeClass('fadeInDown animated').addClass('fadeOutUp animated')
			},
			harderNavBtn(url) {
				
				uni.navigateTo({
					url: url
				});
			}
		}
	}
</script>
