<style>
	#feedbackBox .conditionScreen{
		margin: 40rpx 0 35rpx;
		display: flex;
		align-items: center;
		justify-content:space-between;
	}
	#feedbackBox .inp{
		width: 153rpx;
		height: 53rpx;
		box-sizing: border-box;
		border: 1rpx solid #bfbfbf;
		padding:0 8rpx;
	}
	#feedbackBox .picker_style{
		line-height: 53rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #666;
		overflow: hidden;
	}
	#feedbackBox .uni-input{
		text-align: center;
		line-height: 53rpx;
	}
	#feedbackBox .conditionListBox{
		min-height: 818rpx;
	}
	#feedbackBox .conditionItem {
		width: 100%;
		box-sizing: border-box;
		border-radius: 10rpx;
		box-shadow: 0px 0px 20rpx #ececec;
		margin-bottom: 32rpx;
	}
	#feedbackBox .conditionItem:last-child {
		margin-bottom: 65rpx;
	}
	#feedbackBox .conditionItem_bottom{
		padding: 20rpx 20rpx 27rpx 8rpx;
		display: flex;
	}
	#feedbackBox .conditionItem_img{
		width: 103rpx;
		height: 103rpx;
		margin-right: 22rpx;
	}
	#feedbackBox .conditionItem_userBox{
		width:527rpx;
		display: flex;
		justify-content: space-between;
		margin: 16rpx 0;
	}
	#feedbackBox .conditionItem_userBox p span{
			font-size: 22rpx;
			color: #999;
	}
	#feedbackBox .conditionItem_userBox p span:nth-child(1){
		display: inline-block;
		margin-right: 40rpx;
		font-size: 26rpx;
		color: #000;
		font-weight: bold;
	}
	#feedbackBox .conditionItem_flag{
		padding:0 26rpx;
		height: 38rpx;
		line-height: 38rpx;
		border-radius: 50rpx;
		background: #ff0000;
		color: #fff;
	}
	.evaluate {
		width: 527rpx;
	}
	.evaluate_l,
	.evaluate_r {
	  display: flex;
	  align-items: center;
	  margin-bottom: 36rpx;
	}
	.evaluate_l image,
	.evaluate_r image {
		width: 30rpx;
		height: 30rpx;
	  margin-left: 15rpx;
	}
	.evaluate_l span,
	.evaluate_r span {
	  color: #ffc600;
	  display: inline-block;
	  margin-left:  25rpx;
	}
	#feedbackBox .leave{
		display: flex;
	}
	#feedbackBox .leave p:last-child{
		width: 440rpx;
		line-height: 40rpx;
	}
</style>
<template>
	<view id="feedbackBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="bg_height"></view>
		<view class="content">
			<view class="conditionScreen">
				<picker class="inp" @change="nianjiPickerChange" :value="nianji_index" :range="nianjiarray" range-key="title">
					<view class="uni-input picker_style" v-if="nianji_text">{{nianji_text}}<span class="iconfont iconxiangxiajiantoushixin"></span></view>
					<view class="picker_style" v-else>
						年级<span class="iconfont iconxiangxiajiantoushixin"></span>
					</view>
				</picker>
				<input class="inp" type="text" v-model="banji" placeholder="班级" />
				<picker class="inp" @change="kechengPickerChange" :value="kecheng_index" :range="kechengarray" range-key="course_name">
					<view class="uni-input picker_style" v-if="kecheng_text">{{kecheng_text}}<span class="iconfont iconxiangxiajiantoushixin"></span></view>
					<view class="picker_style" v-else>
						课程<span class="iconfont iconxiangxiajiantoushixin"></span>
					</view>
				</picker>
				<picker class="inp" @change="timePickerChange" :value="time_index" :range="timearray" range-key="title">
					<view class="uni-input picker_style" v-if="time_text">{{time_text}}<span class="iconfont iconxiangxiajiantoushixin"></span></view>
					<view class="picker_style" v-else>
						顺序<span class="iconfont iconxiangxiajiantoushixin"></span>
					</view>
				</picker>
			</view>
			<view class="conditionListBox">
				<view class="conditionItem" v-for="(item,index) in li_list" :key="index">
					<view class="conditionItem_bottom">
						<image :src="item.student_info.img" mode="" class="conditionItem_img"></image>
						<view class="conditionItem_bottom-r">
							<view class="conditionItem_userBox">
								<p>
									<span>{{item.student_info.nickname}}</span>
									<span>{{item.nianji_text}}{{item.class}}</span>
								</p>
								<view class="conditionItem_flag">{{item.course_text}}</view>
							</view>
							<div class="evaluate">
								<div class="evaluate_l">
									课程评价：
									<image :src="item.course_star >= 1 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.course_star >= 2 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.course_star >= 3 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.course_star >= 4 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.course_star >= 5 ?'./images/star_active.png':'./images/star.png'" alt />
									<span>{{item.course_star}}星</span>
								</div>
								<div class="evaluate_r">
									教师评价：
									<image :src="item.teacher_star >= 1 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.teacher_star >= 2 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.teacher_star >= 3 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.teacher_star >= 4 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.teacher_star >= 5 ?'./images/star_active.png':'./images/star.png'" alt />
									<span>{{item.teacher_star}}星</span>
								</div>
							</div>
							<view class="leave">
								<p>留言：</p>
								<p>{{item.content}}</p>
							</view>
						</view>
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
				nianjiarray: [],
				nianji_index: 0,
				nianji_text: '',
				timearray: [{
						id: 'asc',
						title: "正序"
					},
					{
						id: 'desc',
						title: "倒序"
					}
				],
				time_index: 0,
				time_text: '',
				kechengarray: [],
				kecheng_index: 0,
				kecheng_text: '',
				banji: '',
				li_list: []
			}
		},
		onLoad() {
			this.init()
			this.MyCoursePluck()
			this.list()
		},
		methods: {
			// 年级分类
			async init() {
				let _res = await API.postJson('NianjiList', {});
				if (_res.code == 0) {
					this.nianjiarray = _res.data;
				}
			},
			// 课程
			async MyCoursePluck() {
				let _res = await API.postJson('getMyCoursePluck', {
					"token": uni.getStorageSync('user').token
				});
				if (_res.code == 0) {
					this.kechengarray = _res.data;
				}
			},
			async list() {
				let _res = await API.postJson('getFeedBack', {
					"token": uni.getStorageSync('user').token,
					"nianji": this.nianji_id,
					"class": this.bianji_id,
					"sort": this.time_id,
					"kecheng_id": this.kecheng_id
				});
				if (_res.code == 0) {
					this.li_list = _res.data.data;
				}
			},
			timePickerChange(e) {
				this.time_index = e.detail.value
				this.time_text = this.timearray[e.detail.value].title
				this.time_id = this.timearray[e.detail.value].id
				this.list()
			},
			nianjiPickerChange(e) {
				this.nianji_index = e.detail.value
				this.nianji_text = this.nianjiarray[e.detail.value].title
				this.nianji_id = this.nianjiarray[e.detail.value].id
				this.list()
			},
			kechengPickerChange(e) {
				this.kecheng_index = e.detail.value
				this.kecheng_text = this.kechengarray[e.detail.value].course_name
				this.kecheng_id = this.kechengarray[e.detail.value].course_id
				this.list()
			}
		}
	}
</script>
