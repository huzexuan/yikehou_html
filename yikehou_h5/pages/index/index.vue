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
		border: 1rpx solid #0168b7;
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
	.index_menu ul li p{
		text-align: center;
		line-height: 1;
		margin-top: 26rpx;
	}
	.index_menu_icon{
		width: 121rpx;
		height: 121rpx;
	}
	/* 关于我们 */
	.AboutUsBox{
		padding: 42rpx 0 ;
	}
	.AboutUs_bg{
		width: 100%;
		height: 368rpx;
		background: url(./images/AboutUsBox_bg.jpg) no-repeat 100% 100%;
		background-size: 100% 100%;
	}
	.AboutUs_content{
		width: 527rpx;
		height: 368rpx;
		box-sizing: border-box;
		padding: 116rpx 80rpx 0 87rpx;
		margin: auto;
		background: url(./images/AboutUs_contentBg.png) no-repeat 100% 100%;
		background-size: 100% 100%;
	}
	.AboutUsTitle{
		font-size: 28rpx;
		color: #000;
		font-weight: bold;
		text-align: center;
	}
	.AboutUsText{
		font-size: 22rpx;
		margin:18rpx 0 20rpx;
		line-height: 36rpx;
	}
	.AboutUsBtn{
		width: 117rpx;
		height: 35rpx;
		box-sizing: border-box;
		border: 1rpx solid #7d7d7d;
		font-size: 20rpx;
		text-align: center;
		line-height: 35rpx;
		margin: auto;
	}
	.courseBoxTitle{
		display:flex;
		align-items: center;
		justify-content:space-between;
		padding:46rpx 0 60rpx
	}
	.courseBoxTitle>view{
		font-weight:bold
	}
	.courseBoxTitle>view span:nth-child(1){
		font-size:32rpx;
		color:#000;
		display:inline-block;
		margin-right:14rpx;
	}
	.courseBoxTitle>view span:nth-child(2){
		font-size:24rpx;
		color:#666;
	}
	.courseAllBtn{
		width:108rpx;
		height:38rpx;
		text-align:center;
		font-size:22rpx;
		color:#666;
		line-height:38rpx;
		border:1rpx solid #7d7d7d;
		box-shadow:inset  0 0 1px 1px rgba(0,0,0,0.3)
	}
	.courseList li{
		display:block;
		overflow: hidden;
		margin-bottom:60rpx;
	}
	.courseItem_img{
		width:100%;
		height:438rpx;
		margin-bottom:54rpx;
	}
	.courseItemTitle{
		display:flex;
		align-items: center;
		margin-bottom:40rpx;
	}
	.courseItemTitle span{
		display:inline-block;
	}
	.courseItemTitle span:nth-child(1){
		font-size:28rpx;
		color:#000;
		margin-right:24rpx;
		font-weight:bold;
	}
	.courseItemTitle span:nth-child(2){
		width:68rpx;
		height:1rpx;
		background:#5e5e5e;
	}
	.courseItemBrief p:nth-child(1){
		font-size:26rpx;
	}
	.courseItemBrief p:nth-child(2){
		width:88rpx;
		height:2rpx;
		background:#626262;
		margin:17rpx 0 33rpx;
	}
	.courseItemDetails{
		font-size:24rpx;
		color:#666;
		line-height:40rpx;
		margin-bottom:46rpx;
	}
	.courseItemBtn{
		width:198rpx;
		height:53rpx;
		background:#0168b7;
		color:#fff;
		text-align:center;
		line-height:53rpx;
		float:right;
	}
</style>
<template>
	<view class="indexBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="index_banner">
			<view class="searchBox">
				<image src="./images/search_icon.png" mode="" class="search_icon"></image>
				<input type="text" class="searchInput" :value="search" placeholder="你想学的课程" ></input>
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
			<navigator hover-class="none" url="../login/student_login" class="loginBtn" open-type="navigate">
				<view>学生登录</view>
			</navigator>
			<navigator hover-class="none" url="../login/school_login" class="loginBtn" open-type="navigate">
				<view>学校登录</view>
			</navigator>
		</view>
		<view class="content noticeBox">
			<image src="./images/noticeTitle.png" class="noticeTitle_img"></image>
			<swiper class="noticeswiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :vertical="vertical" :interval="interval" :duration="duration">
				<swiper-item>
					<p class="noticeText ellipse">1课程开始15分钟前不能更换和取消课程课程开始15分钟前不能更换和取消课程</p>
				</swiper-item>
				<swiper-item>
					<p class="noticeText ellipse">2课程开始15分钟前不能更换和取消课程课程开始15分钟前不能更换和取消课程</p>
				</swiper-item>
			</swiper>
			<navigator url="" hover-class="none" class="noticeBtn" open-type="navigate">
				更多<span style="font-size: 22rpx;" class="iconfont iconiconset0420"></span>
			</navigator>
		</view>
		<view class="index_menu">
			<ul>
				<li>
					<navigator url="" class="noticeBtn" hover-class="none" open-type="navigate">
						<image src="./images/menu01.png" class="index_menu_icon"></image>
						<p>全部课程</p>
					</navigator>
				</li>
				<li>
					<navigator url="" class="noticeBtn" hover-class="none" open-type="navigate">
						<image src="./images/menu01.png" class="index_menu_icon"></image>
						<p>全部课程</p>
					</navigator>
				</li>
				<li>
					<navigator url="" class="noticeBtn" hover-class="none" open-type="navigate">
						<image src="./images/menu01.png" class="index_menu_icon"></image>
						<p>全部课程</p>
					</navigator>
				</li>
				<li>
					<navigator url="" class="noticeBtn" hover-class="none" open-type="navigate">
						<image src="./images/menu01.png" class="index_menu_icon"></image>
						<p>全部课程</p>
					</navigator>
				</li>
			</ul>
		</view>
		<view class="bg_height"></view>
		<view class="AboutUsBox">
			<view class="AboutUs_bg">
				<view class="AboutUs_content">
					<p class="AboutUsTitle">
						课后服务一站式平台
					</p>
					<p class="AboutUsText ellipse2">烁炎文化传播有限公司是一家专注于招生领域的教育服务平烁炎文化传播有限公司是一家专注于招生领域的教育服务平</p>
					<navigator url="" class="AboutUsBtn" hover-class="none" open-type="navigate">MORE</navigator>
				</view>
			</view>
		</view>
		<view class="bg_height"></view>
		<view class="content">
			<view class="courseBoxTitle">
				<view>
					<span>课程中心</span>
					<span>COURES</span>
				</view>
				<navigator url="" class="courseAllBtn" hover-class="none" open-type="navigate">MORE</navigator>
			</view>
			<ul class="courseList">
				<li>
					<image src="./images/course_bg.jpg" class="courseItem_img"></image>
					<p class="courseItemTitle">
						<span>无人机主题课程</span>
						<span></span>
					</p>
					<view class="courseItemBrief">
						<p>3D打印将理想的无人机 打印出来</p>
						<p></p>
					</view>
					<p class="courseItemDetails ellipse2">通过3D打印将理想的无人机 打印出来，帮你实现翱翔天际的梦想通过3D打印将理想的无人机 打印出来，帮你实现翱翔天际的梦想</p>
					<navigator url="" class="courseItemBtn" hover-class="none" open-type="navigate">MORE</navigator>
				</li>
				<li>
					<image src="./images/course_bg.jpg" class="courseItem_img"></image>
					<p class="courseItemTitle">
						<span>无人机主题课程</span>
						<span></span>
					</p>
					<view class="courseItemBrief">
						<p>3D打印将理想的无人机 打印出来</p>
						<p></p>
					</view>
					<p class="courseItemDetails ellipse2">通过3D打印将理想的无人机 打印出来，帮你实现翱翔天际的梦想通过3D打印将理想的无人机 打印出来，帮你实现翱翔天际的梦想</p>
					<navigator url="" class="courseItemBtn" hover-class="none" open-type="navigate">MORE</navigator>
				</li>
				<li>
					<image src="./images/course_bg.jpg" class="courseItem_img"></image>
					<p class="courseItemTitle">
						<span>无人机主题课程</span>
						<span></span>
					</p>
					<view class="courseItemBrief">
						<p>3D打印将理想的无人机 打印出来</p>
						<p></p>
					</view>
					<p class="courseItemDetails ellipse2">通过3D打印将理想的无人机 打印出来，帮你实现翱翔天际的梦想通过3D打印将理想的无人机 打印出来，帮你实现翱翔天际的梦想</p>
					<navigator url="" class="courseItemBtn" hover-class="none" open-type="navigate">MORE</navigator>
				</li>
			</ul>
		</view>
		<view class="bg_height"></view>
		<page_footer></page_footer>
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


