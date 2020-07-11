<style>
	#studentMeBox .studentMeBanner{
	width: 100%;
	height:230rpx;
	background: url(images/me_bg.jpg)no-repeat;
	background-size: 100% 100%;
	margin-bottom: 12rpx;
}
#studentMeBox .studentMeBanner_top{
	display: flex;
	justify-content: space-between;
	padding-top: 44rpx;
}
#studentMeBox .studentMeBanner_topl{
	display: flex;
}
#studentMeBox .studentMeBanner_topl .user_img{
	width: 96rpx;
	height: 96rpx;
	margin: 0 23rpx 0 43rpx;
}
#studentMeBox .studentMeBanner_user p{
	color: #fff;
	font-size: 16rpx;
	line-height: 1;
}
#studentMeBox .studentMeBanner_user p:nth-child(1){
	font-size: 24rpx;
	margin: 14rpx 0 23rpx;
}
	
#studentMeBox .studentMeBanner_topr{
	padding: 0;
	width: 124rpx;
	height: 44rpx;
	box-sizing: border-box;
	border: 1rpx solid #fff;
	color: #fff;
	font-size: 20rpx;
	text-align: center;
	line-height: 44rpx;
	background:none;
	margin: 8rpx;
}
#studentMeBox .studentMeBanner_bottom{
	margin-top: 25rpx;
	text-align: center;
}
#studentMeBox .studentMeBanner_bottom li{
	color: #fff;
	font-size: 20rpx;
}
#studentMeBox .studentMeBanner_bottom li span{
	color: #fff;
	display: inline-block;
	font-size: 30rpx;
	font-weight: bold;
	margin-left: 18rpx;
}
#studentMeBox .studentMeBanner_bottom li:nth-child(1){
	margin-right: 107rpx;
}
#studentMeBox .studentMeMenu{
	min-height: 712rpx;
}
#studentMeBox .studentMeMenu_item{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 42rpx 0 20rpx 0;
	border-bottom: 1rpx solid #e8e8e8;
}
#studentMeBox .studentMeMenu_item .studentMeMenu_l{
	display: flex;
	align-items: center;
	font-size: 26rpx;
}
#studentMeBox .studentMeMenu_item .studentMeMenu_l .meIcon{
	width: 35rpx;
	height: 40rpx;
	margin: 0 18rpx 0 3rpx;
}
</style>
<template>
	<view id="studentMeBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="studentMeBanner">
			<view class="content">
				<view class="studentMeBanner_top">
					<view class="studentMeBanner_topl">
						<image src="./images/user_img.png" mode="" class="user_img"></image>
						<view class="studentMeBanner_user">
							<p>张甜甜</p>
							<p>河北保定高开区小学 五年级六班</p>
						</view>
					</view>
					<button type="primary" class="studentMeBanner_topr"  @click="upload">选择照片</button>
				</view>
				<ul class="studentMeBanner_bottom">
					<li>已选课程<span>4</span></li>
					<li>剩余可选课程<span>2</span></li>
				</ul>
			</view>
		</view>
		<view class="content studentMeMenu">
			<navigator class="studentMeMenu_item" hover-class="none" url="/pages/student/course">
				<view class="studentMeMenu_l">
					<image src="./images/meIcon02.png" mode="" class="meIcon"></image>我的课程
				</view>
				<view class="iconfont iconiconset0420"></view>
			</navigator>
			<navigator class="studentMeMenu_item" hover-class="none" url="/pages/student/feedback">
				<view class="studentMeMenu_l">
					<image src="./images/meIcon01.png" mode="" class="meIcon"></image>我要反馈
				</view>
				<view class="iconfont iconiconset0420"></view>
			</navigator>
		</view>
		<view class="bg_height"></view>
		<page_footer></page_footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			upload: function() {
				uni.chooseImage({
					count: 1,
					sizeType: ['copressed'],
					success(res) {
						var imgFiles = res.tempFilePaths[0]
						console.log(imgFiles)
						// var uper = uni.uploadFile({
						// 	url: 'http://demo.hcoder.net/index.php?c=uperTest',
						// 	filePath: imgFiles,
						// 	name: 'file',
						// 	success(res1) {
						// 		console.log(res1)
						// 	}
						// });
					}
				})
			}
		}
	}
</script>
