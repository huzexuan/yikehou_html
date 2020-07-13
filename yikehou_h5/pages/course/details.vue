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

	#courseDetails .content {
		padding-bottom: 200rpx;
	}

	#courseDetails .as_tokenBox .as_tokenBoxTop {
		padding: 30rpx 0;
		background: #ecf6ff;
		display: flex;
		align-items: center;
		margin: 42rpx 0 52rpx;
	}

	#courseDetails .as_tokenBox .as_tokenBoxTop .as_tokenBoxTop_item {
		width: 33%;
		border-right: 1rpx solid #fff;
	}

	#courseDetails .as_tokenBox .as_tokenBoxTop .as_tokenBoxTop_item:last-child {
		border: 0;
	}

	#courseDetails .as_tokenBox .as_tokenBoxTop .as_tokenBoxTop_item p {
		text-align: center;
		color: #0168b7;
	}

	#courseDetails .as_tokenBox .as_tokenBoxTop .as_tokenBoxTop_item>p:nth-child(1) {
		font-size: 22rpx;
		color: #333;
	}

	#courseDetails .as_courseBtn {
		width: 100%;
		height: 63rpx;
		color: #fff;
		text-align: center;
		line-height: 63rpx;
		border-radius: 50rpx;
		background: #0168b7;
		margin-top: 30rpx;
	}
</style>

<template>
	<view id="courseDetails">
		<view class="top_height"></view>
		<page_head></page_head>
		<swiper class="bannerswiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in item.imgs_arr" :key="index">
				<image :src="item" mode="" class="index_banner_img"></image>
			</swiper-item>
		</swiper>
		<view class="content">
			<p class="title ellipse">{{item.title}}</p>
			<ul class="DetailsItem">
				<li>所属分类：{{item.cate_text}}</li>
				<li>年级：{{item.nianji_text}}</li>
				<li v-if="item.school_course && item.school_course.teacher !== null">上课老师：{{item.school_course.teacher }}</li>
			</ul>
			<view class="as_tokenBox" v-if="user.bs != 0 ">
				<view class="as_tokenBoxTop" v-if="item.school_course">
					<view class="as_tokenBoxTop_item">
						<p>上课地点</p>
						<p>{{item.school_course.place}}</p>
					</view>
					<view class="as_tokenBoxTop_item">
						<p>上课时间</p>
						<p>{{item.school_course.start_time}}</p>
					</view>
					<view class="as_tokenBoxTop_item">
						<p>监管老师</p>
						<p>{{item.school_course.jianguan}}</p>
					</view>
				</view>
				<block v-if="item.is_select == 1">
					<view class="as_courseBtn">已选课</view>
				</block>
				<block v-else>
					<view class="as_courseBtn" @click="schoolBtn(item.id)" v-if="user.bs == 1">立即选课</view>
					<view class="as_courseBtn" @click="studentBtn(item.id)" v-if="user.bs == 2">立即选课</view>
				</block>
			</view>
			<p class="item_title">课程简介</p>
			<p>少儿英语培训是一种针对3到12岁儿童的英语培训课程或项目</p>
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
				indicatorDots: false,
				autoplay: true,
				interval: 3000,
				duration: 300,
				vertical: true,
				id: "",
				item: {},
				user: uni.getStorageSync('user')
			}
		},
		onLoad(Option) {
			this.id = Option.id
			this.init()
		},
		methods: {
			async init() {
				let _res = await API.postJson('courseDetaill', {
					"id": this.id,
					"token": uni.getStorageSync('user').token
				});
				if (_res.code == 0) {
					this.item = _res.data
				}
			},
			async schoolBtn(id) {
				let _res = await API.postJson('schoolchooseCourse', {
					"token": uni.getStorageSync('user').token,
					"course_id": id
				});
				if (_res.code == 0) {
					uni.showToast({
						title: "成功添加课程",
						duration: 2000,
						icon: 'none',
					});
				}else{
					uni.showToast({
						title: _res.message,
						duration: 2000,
						icon: 'none',
					});
				}
			},
			async studentBtn(id) {
				let _res = await API.postJson('chooseCourse', {
					"token": uni.getStorageSync('user').token,
					"school_course_id": id
				});
				if (_res.code == 0) {
					uni.showToast({
						title: "成功添加课程",
						duration: 2000,
						icon: 'none',
					});
				}else{
					uni.showToast({
						title: _res.message,
						duration: 2000,
						icon: 'none',
					});
				}
			}
		}
	}
</script>
