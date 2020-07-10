<style>
	.courseClassBox{
		padding: 27rpx 0 30rpx;
		background: #f4f4f4;
	}
	.courseClassBox>view{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.courseBox{
		padding-bottom: 68rpx;
		display: flex;
		justify-content: space-between;
	}
	.courseClassify li{
		display: block;
		width: 154rpx;
		height: 94rpx;
		box-sizing: border-box;
		border-left: 8rpx solid #f4f4f4;
		background: #f4f4f4;
		margin-bottom: 2px;
		font-size: 26rpx;
		text-align: center;
		line-height: 94rpx;
		margin-right: 23rpx;
	}
	.courseClassify li.active{
		background: #fff;
		border-left: 8rpx solid #0168b7;
		color: #0168b7;
	}		
	.courseItem{
		width: 95%;
		box-sizing: border-box;
		padding: 34rpx 0 27rpx;
		border-bottom: 0.5rpx solid #ededed;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.courseItemImg{
		width: 175rpx;
		height: 175rpx;
		margin: 0 20rpx 0 10rpx;
	}
	.courseItemTitle{
		font-size: 26rpx;
		color: #000;
	}
	.btn_icon{
		width: 33rpx;
		height: 33rpx;
		float: right;
	}
	.courseItemContent{
		width:calc(100% - 205rpx);
	}
	.courseItemDetail{
		font-size: 22rpx;
		color: #999;
		margin: 34rpx 0 14rpx;
	}
	.courseScrollView{
		max-height: 960rpx;
	}
</style>
<template>
	<view class="courseIndexBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="courseClassBox">
			<view class="content">
				<span>请选择年级</span>
				<span style="font-size:24rpx;color: #000;font-weight: bold;" class="iconfont iconiconset0420"></span>
			</view>
			<view class="as_courseClassBox">
				
			</view>
		</view>
		<view class="courseBox">
			<ul class="courseClassify">
				<li class="active">启智</li>
				<li>启智</li>
				<li>启智</li>
			</ul>
			<scroll-view class="courseScrollView" scroll-y>
				<view class="courseItem">
					<image src="./images/item_img.jpg" mode="" class="courseItemImg"></image>
					<view class="courseItemContent">
						<p class="courseItemTitle">英语</p>
						<p class="courseItemDetail ellipse2">英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语C</p>
						<image src="./images/btn_icon.png" class="btn_icon" mode=""></image>
					</view>
				</view>
				<view class="courseItem">
					<image src="./images/item_img.jpg" mode="" class="courseItemImg"></image>
					<view class="courseItemContent">
						<p class="courseItemTitle">英语</p>
						<p class="courseItemDetail ellipse2">英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语C</p>
						<image src="./images/btn_icon.png" class="btn_icon" mode=""></image>
					</view>
				</view>
				<view class="courseItem">
					<image src="./images/item_img.jpg" mode="" class="courseItemImg"></image>
					<view class="courseItemContent">
						<p class="courseItemTitle">英语</p>
						<p class="courseItemDetail ellipse2">英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语C</p>
						<image src="./images/btn_icon.png" class="btn_icon" mode=""></image>
					</view>
				</view>
				<view class="courseItem">
					<image src="./images/item_img.jpg" mode="" class="courseItemImg"></image>
					<view class="courseItemContent">
						<p class="courseItemTitle">英语</p>
						<p class="courseItemDetail ellipse2">英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语C</p>
						<image src="./images/btn_icon.png" class="btn_icon" mode=""></image>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="bg_height"></view>
		<page_footer></page_footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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


