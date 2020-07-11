<style>
	#courseDetails .bannerswiper {
		width: 100%;
		height: 403rpx;
	}

	#courseDetails .bannerswiper image {
		width: 100%;
		height: 100%;
		display: block;
	}

	#courseDetails .title {
		font-size: 26rpx;
		color: #000;
		margin: 30rpx auto 50rpx;
	}

	#courseDetails .DetailsItem li {
		margin-right: 50rpx;
		color: #666;
	}

	#courseDetails .item_title {
		font-size: 26rpx;
		color: #000;
		margin: 64rpx 0 40rpx;
	}
	#courseDetails .content{
		padding-bottom: 200rpx;
	}
	#courseDetails .as_tokenBox .as_tokenBoxTop{
		padding: 30rpx 0;
		background: #ecf6ff;
		display: flex;
		align-items: center;
		margin: 42rpx 0 52rpx;
	}
	#courseDetails .as_tokenBox .as_tokenBoxTop .as_tokenBoxTop_item{
		width: 33%;
		border-right: 1rpx solid #fff;
	}
	#courseDetails .as_tokenBox .as_tokenBoxTop .as_tokenBoxTop_item:last-child{
		border: 0;
	}
	#courseDetails .as_tokenBox .as_tokenBoxTop .as_tokenBoxTop_item p{
		text-align: center;
		color: #0168b7;
	}
	#courseDetails .as_tokenBox .as_tokenBoxTop .as_tokenBoxTop_item>p:nth-child(1){
		font-size: 22rpx;
		color: #333;
		margin-bottom: 30rpx;
	}
	#courseDetails .as_courseBtn{
		width: 100%;
		height: 63rpx;
		color: #fff;
		text-align: center;
		line-height: 63rpx;
		border-radius: 50rpx;
		background: #0168b7;
	}
</style>

<template>
	<view id="courseDetails">
		<view class="top_height"></view>
		<page_head></page_head>
		<swiper class="bannerswiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<image src="../index/images/banner2.png" mode="" class="index_banner_img"></image>
			</swiper-item>
			<swiper-item>
				<image src="../index/images/banner1.png" mode="" class="index_banner_img"></image>
			</swiper-item>
		</swiper>
		<view class="content">
			<p class="title ellipse">英语</p>
			<ul class="DetailsItem">
				<li>所属分类：语言</li>
				<li>年级：五年级</li>
				<li>上课老师：张老师</li>
			</ul>
			<view class="as_tokenBox">
				<view class="as_tokenBoxTop">
					<view class="as_tokenBoxTop_item">
						<p>上课地点</p>
						<p>1年级3班</p>
					</view>
					<view class="as_tokenBoxTop_item">
						<p>上课地点</p>
						<p>1年级3班</p>
					</view>
					<view class="as_tokenBoxTop_item">
						<p>上课地点</p>
						<p>1年级3班</p>
					</view>
				</view>
				<view class="as_courseBtn">立即选课</view>
			</view>
			<p class="item_title">课程简介</p>
			<p>少儿英语培训是一种针对3到12岁儿童的英语培训课程或项目</p>
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
				vertical: true,
			}
		},
		methods: {

		}
	}
</script>
