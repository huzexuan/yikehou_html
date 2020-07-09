<style>
	.index_banner {
		width: 100%;
		height: 630rpx;
		position: relative;
	}

	.bannerswiper {
		width: 100%;
		height: 535rpx;
	}

	.index_banner_img {
		width: 100%;
		height: 100%;
	}

	.searchBox {
		width: 666rpx;
		height: 70rpx;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.6);
		position: absolute;
		top: 30rpx;
		left: 50%;
		margin-left: -333rpx;
		z-index: 1;
		border-radius: 50rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.searchInput {
		width: 100%;
		height: 100%;
		font-size: 24rpx;
		color: #666
	}

	.search_icon {
		width: 26rpx;
		height: 26rpx;
		margin: 0 28rpx 0 38rpx
	}

	.banner_bg {
		width: 100%;
		height: 220rpx;
		position: absolute;
		top: 406rpx
	}
	.loginBox{
		padding:44rpx 0;
		display:flex;
		align-items: center;
		justify-content: space-evenly;
	}
	.loginBtn{
		width: 243rpx;
		height: 78rpx;
		box-sizing: border-box;
		padding: 2rpx;
		border: 0.5rpx solid #0168b7;
	}
	.loginBtn>view{
		width: 100%;
		height: 100%;
		background: #0168b7;
		font-size: 26rpx;
		color: #fff;
		text-align: center;
		line-height: 70rpx;
	}
	.noticeBox{
		height: 95rpx;
		box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
	}
	.noticeTitle_img{
		width: 104rpx;
		height: 25rpx;
		margin-left: 30rpx;
	}
	.noticeswiper{
		width: 430rpx;
		height: 95rpx;
		margin: 0 10rpx 0 27rpx;
	}
	.noticeText{
		line-height: 95rpx;
	}
	.noticeBtn{
		font-size: 22rpx;
		color: #999;
	}
	/* 菜单 */
	.index_menu{
		padding: 50rpx 0;
	}
	.index_menu ul{
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.index_menu_icon{
		width: 121rpx;
		height: 121rpx;
	}
</style>
<template>
	<view class="indexBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="index_banner">
			<view class="searchBox">
				<image src="./images/search_icon.png" mode="" class="search_icon"></image>
				<input type="text" class="searchInput" :value="search" placeholder="你想学的课程" />
			</view>
			<swiper class="bannerswiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<image src="./images/banner1.png" mode="" class="index_banner_img"></image>
				</swiper-item>
				<swiper-item>
					<image src="./images/banner2.png" mode="" class="index_banner_img"></image>
				</swiper-item>
			</swiper>
			<image src="./images/banner_bg.png" mode="" class="banner_bg"></image>
		</view>
		<view class="loginBox">
			<navigator url="../login/student_login" class="loginBtn" open-type="navigate">
				<view>学生登录</view>
			</navigator>
			<navigator url="../login/school_login" class="loginBtn" open-type="navigate">
				<view>学校登录</view>
			</navigator>
		</view>
		<view class="content noticeBox">
			<image src="./images/noticeTitle.png" class="noticeTitle_img"/>
			<swiper class="noticeswiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :vertical="vertical" :interval="interval" :duration="duration">
				<swiper-item>
					<p class="noticeText ellipse">1课程开始15分钟前不能更换和取消课程课程开始15分钟前不能更换和取消课程</p>
				</swiper-item>
				<swiper-item>
					<p class="noticeText ellipse">2课程开始15分钟前不能更换和取消课程课程开始15分钟前不能更换和取消课程</p>
				</swiper-item>
			</swiper>
			<navigator url="" class="noticeBtn" open-type="navigate">
				更多<span style="font-size: 22rpx;" class="iconfont iconiconset0420"></span>
			</navigator>
		</view>
		<view class="index_menu">
			<ul>
				<li>
					<image src="./images/menu01.png" class="index_menu_icon"/>
					<p>全部课程</p>
				</li>
				<li>
					<image src="./images/menu01.png" class="index_menu_icon"/>
					<p>全部课程</p>
				</li>
				<li>
					<image src="./images/menu01.png" class="index_menu_icon"/>
					<p>全部课程</p>
				</li>
				<li>
					<image src="./images/menu01.png" class="index_menu_icon"/>
					<p>全部课程</p>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 3000,
				duration: 300,
				vertical:true,
				search: ''
			};
		},
		onLoad() {},
		onReachBottom() {
			/* 到底部加载 */
		},
		onPullDownRefresh() {
			// 下拉刷新
		},
		methods: {

		}
	};
</script>


