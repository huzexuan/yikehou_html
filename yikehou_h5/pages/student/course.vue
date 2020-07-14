<style>
	#studentCourseBox {
		width: 100%;
		min-height: 100vh;
		background: #001235;
	}

	#studentCourseBox .studentCourseBox_top {
		width: 100%;
		height: 729rpx;
		background: url(./images/studentCourse.jpg) no-repeat;
		background-size: 100% 100%;
		position: relative;
	}

	#studentCourseBox .user_evaluate {
		width: 179rpx;
		height: 155rpx;
		box-sizing: border-box;
		position: absolute;
		top: 40rpx;
		left: 104rpx;
		padding: 40rpx 20rpx 30rpx 25rpx;
		background: url(./images/evaluate_bg.png)no-repeat;
		background-size: 100% 100%;
	}

	#studentCourseBox .user_evaluate p {
		color: #fff;
		font-size: 22rpx;
		transform: rotate(-10deg);
	}

	#studentCourseBox .user_name {
		width: 154rpx;
		height: 60rpx;
		background: url(./images/name_bg.png) no-repeat;
		background-size: 100% 100%;
		box-sizing: border-box;
		text-align: center;
		color: #fff;
		padding-top: 8rpx;
		position: absolute;
		top: 46rpx;
		left: 296rpx;
	}

	#studentCourseBox .studentCourseListBox {
		position: relative;
		z-index: ;
		padding: 0 28rpx;
		margin-top: -73rpx;
	}

	#studentCourseBox .studentCourseTitle {
		font-size: 26rpx;
		color: #fff;
	}

	#studentCourseBox .studentCourseList>p {
		color: #fff;
		font-weight: bold;
		margin-top: 50rpx;
	}

	#studentCourseBox .studentCourseItem_list li {
		width: 100rpx;
		height: 44rpx;
		box-sizing: border-box;
		overflow: hidden;
		color: #fff;
		text-align: center;
		line-height: 44rpx;
		margin-top: 29rpx;
	}

	#studentCourseBox .studentCourseItem_list li:nth-child(odd) {
		background: #01d7fc;
	}

	#studentCourseBox .studentCourseItem_list li:nth-child(even) {
		background: #355daf;
	}

	#studentCourseBox .studentCourseSuggest {
		width: 100%;
		height: 175rpx;
		box-sizing: border-box;
		border: 1rpx solid #055798;
		background: #014481;
		border-radius: 10rpx;
		margin: 68rpx 0 80rpx;
		padding: 35rpx 12rpx;
		color: #fff;
		line-height: 40rpx;
	}
</style>

<template>
	<view id="studentCourseBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="studentCourseBox_top">
			<view class="user_evaluate">
				<p class="ellipse2">请耐心等待老师的评价</p>
			</view>
			<view class="user_name">{{user.nickname}}</view>
		</view>
		<view class="content">
			<view class="studentCourseListBox">
				<view class="studentCourseTitle">所报课程</view>
				<view class="studentCourseList" v-for="(item,index) in list" :key="index">
					<p>{{item.cate}}</p>
					<ul class="studentCourseItem_list">
						<li class="ellipse" v-for="(i,num) in item.list">{{i.title}}</li>
					</ul>
				</view>
			</view>
			<view class="studentCourseSuggest">
				课程建议：暂无建议
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
				list:[]
			}
		},
		onLoad() {
			this.MyCourse()
		},
		methods: {
			async MyCourse() {
				let _res = await API.postJson('getMyCourse', {
					"token": JSON.parse(sessionStorage.getItem('user')).token
				});
				if (_res.code == 0) {
				this.list = _res.data
				}
			},
		}
	}
</script>
