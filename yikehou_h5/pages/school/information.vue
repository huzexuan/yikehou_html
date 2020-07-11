<style>
	#informationBox .informationBox {
		width: 100%;
		min-height: 800rpx;
		box-sizing: border-box;
		padding: 81rpx 0 66rpx;
		background: url(./images/information_bg.jpg) no-repeat 100% 100%;
		background-size: 100% 100%;
	}

	#informationBox .user_imgBox {
		width: 281rpx;
		height: 281rpx;
		background: url(images/user_img_bg.png) no-repeat 100% 100%;
		background-size: 100% 100%;
		margin: auto;
	}

	#informationBox .user_img {
		width: 222rpx;
		height: 222rpx;
		border-radius: 50%;
		margin: 30rpx 32rpx;

	}
	#informationBox .user_name{
		text-align: center;
		margin: 37rpx 0 89rpx;
		color: #fff;
		font-size: 26rpx;
		font-weight: bold;
	}
	#informationBox .user_delBox{
		width: 100%;
		box-sizing: border-box;
		padding:0 70rpx;
	}
	#informationBox .user_delBox>p{
		color: #fff;
		padding-bottom: 57rpx;
	}
	#informationBox .user_delBox p span{
		color: #fff;
		display: inline-block;
		margin-right: 132rpx;
	}
	#informationBox .userCourseBox{
		width: 100%;
		min-height:304rpx;
		box-sizing: border-box;
		padding: 40rpx 0 40rpx 30rpx;
		background: url(images/userCourse_bg.png)no-repeat 100% 100%;
		background-size: 100% 100%;
	}
	#informationBox .userCourseBox_title{
		color: #fff;
		margin-bottom: 50rpx;
	}
	#informationBox .userCourseList li{
		color: #fff;
		margin:0 47rpx 30rpx 0;
	}
</style>
<template>
	<view id="informationBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="bg_height"></view>
		<view class="informationBox">
			<view class="content">
				<view class="user_imgBox">
					<image src="" mode="" class="user_img"></image>
				</view>
				<p class="user_name">张甜甜</p>
				<view class="user_delBox">
					<p>
						<span>性别：女</span>
						<span>年龄：10</span>
					</p>
					<p>班级：二年级三班 </p>
					<p>家长电话：15003128899 </p>
					<p>身份证号：123456789000000000 </p>
					<p>家庭住址：河北省保定市竞秀区高新园1-3-401</p>
					<view class="userCourseBox">
						<p class="userCourseBox_title">所报课程</p>
						<ul class="userCourseList">
							<li>英语英语英语英语英语英语</li>
							<li>英语英语</li>
							<li>英语</li>
							<li>英语</li>
							<li>英语</li>
							<li>英语</li>
							<li>英语</li>
						</ul>
					</view>
				</view>
			</view>
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

		}
	}
</script>
