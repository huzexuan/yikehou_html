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

	#informationBox .user_name {
		text-align: center;
		margin: 37rpx 0 89rpx;
		color: #fff;
		font-size: 26rpx;
		font-weight: bold;
	}

	#informationBox .user_delBox {
		width: 100%;
		box-sizing: border-box;
		padding: 0 70rpx;
	}

	#informationBox .user_delBox>p {
		color: #fff;
		padding-bottom: 57rpx;
	}

	#informationBox .user_delBox p span {
		color: #fff;
		display: inline-block;
		margin-right: 132rpx;
	}

	#informationBox .userCourseBox {
		width: 100%;
		min-height: 304rpx;
		box-sizing: border-box;
		padding: 40rpx 0 40rpx 30rpx;
		background: url(images/userCourse_bg.png)no-repeat 100% 100%;
		background-size: 100% 100%;
	}

	#informationBox .userCourseBox_title {
		color: #fff;
		margin-bottom: 50rpx;
	}

	#informationBox .userCourseList li {
		color: #fff;
		margin: 0 47rpx 30rpx 0;
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
					<image :src="item.img" mode="" class="user_img"></image>
				</view>
				<p class="user_name">{{item.nickname}}</p>
				<view class="user_delBox">
					<p>
						<span>性别：{{item.sex == 1 ?'男':'女'}}</span>
						<span>年龄：{{item.age}}</span>
					</p>
					<p>班级：{{item.nianji}}{{item.class}} </p>
					<p>家长电话：{{item.phone}}</p>
					<p>身份证号：{{item.card_number}}</p>
					<p>家庭住址：{{item.address}}</p>
					<view class="userCourseBox" v-if="item.has_course > 0">
						<p class="userCourseBox_title">所报课程</p>
						<ul class="userCourseList">
							<li v-for="(i,index) in item.course" :key="index">{{i.title}}</li>
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
	import API from "../../config/api.js"
	export default {
		data() {
			return {
				item: {}
			}
		},
		onLoad(option) {
			this.init(option.id)
		},
		methods: {
			async init(id) {
				let _res = await API.postJson('getStudentDetail', {
					"id": id,
					"token": uni.getStorageSync('user').token
				});
				if (_res.code == 0) {
					this.item = _res.data
				}
			}
		}
	}
</script>
