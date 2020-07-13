<style>
	#feedbackBox .feedbackTitle {
		font-size: 26rpx;
		color: #000;
		padding: 37rpx 0;
	}

	#feedbackBox .feedbackListBox li {
		padding: 0 44rpx;
		border-radius: 50rpx;
		border: 1rpx solid #bfbfbf;
		color: #666;
		height: 47rpx;
		line-height: 47rpx;
		margin: 10rpx 32rpx 10rpx 0;
	}

	#feedbackBox .feedbackListBox li.active {
		color: #0168b7;
		border: 1rpx solid #0168b7;
		background: #d1e4f2;
	}

	#feedbackBox .evaluate_box {
		display: flex;
		align-items: center;
		margin-top: 56rpx;
	}

	#feedbackBox .evaluate_box .feedback_title {
		margin-right: 78rpx;
	}

	#feedbackBox .evaluate_box .evaluate span {
		display: inline-block;
		width: 30rpx;
		height: 30rpx;
		background: url(./images/star.png) no-repeat 100% 100%;
		background-size: 100% 100%;
		cursor: pointer;
		margin-right: 15rpx;
	}

	#feedbackBox .active_evaluate {
		background: url(./images/star_active.png) no-repeat 100% 100% !important;
	}

	#feedbackBox .evaluate_box .evaluate span.evaluate_active {
		background: url(./images/star_active.png) no-repeat 100% 100%;
		background-size: 100% 100%;
	}

	#feedbackBox .evaluate_box .star_num {
		color: #ffc600;
		font-size: 18rpx;
		margin-left: 45rpx;
	}

	#feedbackBox .feedbackTitle2 {
		padding: 76rpx 0 36rpx;
	}

	#feedbackBox textarea {
		width: 100%;
		height: 443rpx;
		box-sizing: border-box;
		border: 1rpx solid #d1d1d1;
		padding: 23rpx 15rpx;
		margin-bottom: 65rpx;
	}

	#feedbackBox .submitBtn {
		width: 200rpx;
		height: 60rpx;
		background: #0168b7;
		color: #fff;
		font-size: 26rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 10rpx;
		margin: 0 auto 36rpx;
	}
</style>

<template>
	<view id="feedbackBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="bg_height"></view>
		<view class="content">
			<p class="feedbackTitle">选择评价的课程</p>
			<ul class="feedbackListBox">
				<li v-for="(item,index) in MyCourse" :key="index" :class=" MyCourse_id == item.id ? 'active' :''">{{item.title}}</li>
			</ul>
			<view class="evaluate_box">
				<p class="feedback_title">评价课程</p>
				<view class="evaluate evaluate1">
					<span @click="mouseOver1(1)"></span>
					<span @click="mouseOver1(2)"></span>
					<span @click="mouseOver1(3)"></span>
					<span @click="mouseOver1(4)"></span>
					<span @click="mouseOver1(5)"></span>
				</view>
				<p class="star_num">{{courseNum}} 星</p>
			</view>
			<view class="evaluate_box">
				<p class="feedback_title">评价老师</p>
				<view class="evaluate evaluate2">
					<span @click="mouseOver(1)"></span>
					<span @click="mouseOver(2)"></span>
					<span @click="mouseOver(3)"></span>
					<span @click="mouseOver(4)"></span>
					<span @click="mouseOver(5)"></span>
				</view>
				<p class="star_num">{{teacherNum}} 星</p>
			</view>
			<p class="feedbackTitle feedbackTitle2">留言反馈</p>
			<textarea v-model="feedbackContent" placeholder="请填写您的反馈意见..."></textarea>
			<view class="submitBtn" @click="submit">提交</view>
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
				courseNum: 0,
				teacherNum: 0,
				feedbackContent: '',
				MyCourse: [],
				MyCourse_id: ''
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			async init() {
				let _res = await API.postJson('getMyCourse', {
					"result": 2,
					"token": uni.getStorageSync('user').token
				});
				if (_res.code == 0) {
					this.MyCourse = _res.data;
					this.MyCourse_id = _res.data[0].id;
				}
			},
			//   评价课程
			mouseOver1(index) {
				this.courseNum = index;
				$(".evaluate1 span").removeClass("active_evaluate");
				for (var i = 0; i < index; i++) {
					$(".evaluate1 span")
						.eq(i)
						.addClass("active_evaluate");
				}
			},
			//   评价老师
			mouseOver(index) {
				this.teacherNum = index;
				$(".evaluate2 span").removeClass("active_evaluate");
				for (var i = 0; i < index; i++) {
					$(".evaluate2 span")
						.eq(i)
						.addClass("active_evaluate");
				}
			},
			async submit() {
				let _res = await API.postJson('FeedBack', {
					"token": uni.getStorageSync('user').token,
					"course_id": this.MyCourse_id,
					"course_star": this.courseNum,
					"teacher_star": this.teacherNum,
					"content": this.feedbackContent
				});
				if (_res.code == 0) {
					uni.showToast({
						title: '评价成功',
						duration: 2000,
						icon: 'none'
					});
				}else{
					uni.showToast({
						title: _res.message,
						duration: 2000,
						icon: 'none'
					});
				}
			}
		}
	}
</script>
