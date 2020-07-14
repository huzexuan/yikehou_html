<style>
	#schoolMeBox .studentMeBanner{
	width: 100%;
	height:230rpx;
	background: url(images/me_bg.jpg)no-repeat;
	background-size: 100% 100%;
	margin-bottom: 12rpx;
}
#schoolMeBox .studentMeBanner_top{
	display: flex;
	justify-content: space-between;
	padding-top: 44rpx;
}
#schoolMeBox .studentMeBanner_topl{
	display: flex;
}
#schoolMeBox .studentMeBanner_topl .user_img{
	width: 96rpx;
	height: 96rpx;
	margin: 0 23rpx 0 43rpx;
	border-radius: 100%;
}
#schoolMeBox .studentMeBanner_user p{
	color: #fff;
	font-size: 26rpx;
	line-height: 1;
	margin: 14rpx 0 23rpx;
}
#schoolMeBox .studentMeBanner_topr{
	padding: 0;
	width: 200rpx;
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
#schoolMeBox .studentMeBanner_bottom{
	margin-top: 25rpx;
	text-align: center;
}
#schoolMeBox .studentMeBanner_bottom li{
	color: #fff;
	font-size: 20rpx;
}
#schoolMeBox .studentMeBanner_bottom li span{
	color: #fff;
	display: inline-block;
	font-size: 30rpx;
	font-weight: bold;
	margin-left: 18rpx;
}
#schoolMeBox .studentMeBanner_bottom li:nth-child(1){
	margin-right: 107rpx;
}
#schoolMeBox .studentMeMenu{
	min-height: 712rpx;
}
#schoolMeBox .studentMeMenu_item{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 42rpx 0 20rpx 0;
	border-bottom: 1rpx solid #e8e8e8;
}
#schoolMeBox .studentMeMenu_item .studentMeMenu_l{
	display: flex;
	align-items: center;
	font-size: 26rpx;
}
#schoolMeBox .studentMeMenu_item .studentMeMenu_l .meIcon{
	width: 35rpx;
	height: 40rpx;
	margin: 0 18rpx 0 3rpx;
}
</style>
<template>
	<view id="schoolMeBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="studentMeBanner">
			<view class="content">
				<view class="studentMeBanner_top">
					<view class="studentMeBanner_topl">
						<image :src="user.img" mode="" class="user_img"></image>
						<view class="studentMeBanner_user">
							<p>{{user.nickname}}</p>
						</view>
					</view>
					<button type="primary" class="studentMeBanner_topr" @click="upload">上传学校LOGO</button>
				</view>
				<ul class="studentMeBanner_bottom">
					<li>已选课程<span>{{CourseNum.course_number}}</span></li>
					<li>剩余可选课程<span>{{CourseNum.sheng_number}}</span></li>
				</ul>
			</view>
		</view>
		<view class="content studentMeMenu">
			<navigator class="studentMeMenu_item" hover-class="none" url="/pages/school/heat">
				<view class="studentMeMenu_l">
					<image src="./images/meIcon02.png" mode="" class="meIcon"></image>已选课程热度排名
				</view>
				<view class="iconfont iconiconset0420"></view>
			</navigator>
			<navigator class="studentMeMenu_item" hover-class="none" url="/pages/school/condition">
				<view class="studentMeMenu_l">
					<image src="./images/meIcon03.png" mode="" class="meIcon"></image>学生报课排名
				</view>
				<view class="iconfont iconiconset0420"></view>
			</navigator>
			<navigator class="studentMeMenu_item" hover-class="none" url="/pages/school/feedback">
				<view class="studentMeMenu_l">
					<image src="./images/meIcon01.png" mode="" class="meIcon"></image>学生反馈信息
				</view>
				<view class="iconfont iconiconset0420"></view>
			</navigator>
			<view class="studentMeMenu_item" @click="logout">
				<view class="studentMeMenu_l">
					<image src="./images/meIcon04.png" mode="" class="meIcon"></image>退出登录
				</view>
			</view>
		</view>

		<view class="bottom_height"></view>
		<page_footer></page_footer>
	</view>
</template>

<script>
	import API from "../../config/api.js"
	export default {
		data() {
			return {
				user: JSON.parse(sessionStorage.getItem('user')),
				CourseNum: {}
			}
		},
		onLoad() {
			this.CourseNumber()
		},
		methods: {
			async CourseNumber() {
				let _res = await API.postJson('SchoolcourseNumber', {
					"token": this.user.token
				});
				if (_res.code == 0) {
					this.CourseNum = _res.data;
				}
			},
			upload: function() {
				let _this = this
				uni.chooseImage({
					count: 1,
					sizeType: ['copressed'],
					success(res) {
						var imgFiles = res.tempFilePaths[0]
						uni.uploadFile({
							url: 'http://yikehou.132.chinaapp.cc/api/v1/school/updateLogo', //仅为示例，非真实的接口地址
							filePath: imgFiles,
							name: 'img',
							formData: {
								'token': _this.user.token
							},
							success: (res) => {
								let _res = JSON.parse(res.data)
								if (_res.code == 0) {
									_this.user.img = _res.data.img
									sessionStorage.setItem('user', JSON.stringify(_this.user));
									uni.showToast({
										title: '更改成功',
										duration: 2000,
										icon: 'none',
										success() {
						
										}
									});
								}
							}
						});
					}
				})
			},
			logout() {
				uni.showModal({
					title: '温馨提示',
					content: '是否确定退出登录',
					confirmText: '确定',
					cancelText: '取消',
					success: function(res) {
						if (res.confirm) {
								sessionStorage.removeItem('user')
								uni.navigateTo({
									url:"/pages/index/index"
								})
						}
					},
				
				});
			}
		}
	}
</script>
