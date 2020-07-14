<style>
	#conditionBox .conditionScreen{
		margin: 40rpx 0 35rpx;
		display: flex;
		align-items: center;
		justify-content:space-between;
	}
	#conditionBox .inp{
		width: 203rpx;
		height: 53rpx;
		box-sizing: border-box;
		border: 1rpx solid #bfbfbf;
		padding:0 8rpx;
	}
	#conditionBox .picker_style{
		line-height: 53rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #666;
	}
	#conditionBox .uni-input{
		text-align: center;
		line-height: 53rpx;
	}
	#conditionBox .conditionListBox{
		min-height: 818rpx;
	}
	#conditionBox .conditionItem {
		width: 100%;
		box-sizing: border-box;
		border-radius: 10rpx;
		box-shadow: 0px 0px 20rpx #ececec;
		margin-bottom: 32rpx;
	}
	#conditionBox .conditionItem:last-child {
		margin-bottom: 65rpx;
	}
	#conditionBox .conditionItem .conditionItem_title{
		padding: 32rpx 20rpx;
	}
	#conditionBox .conditionItem .conditionItem_title span{
		font-size: 28rpx;
		font-weight: bold;
		color: #ff0000;
	}
	#conditionBox .conditionItem_bottom{
		padding: 0 20rpx 27rpx 8rpx;
		display: flex;
	}
	#conditionBox .conditionItem_img{
		width: 103rpx;
		height: 103rpx;
		margin-right: 22rpx;
		border-radius: 50%;
	}
	#conditionBox .conditionItem_userBox{
		width:527rpx;
		display: flex;
		justify-content: space-between;
		margin-bottom: 16rpx;
	}
	#conditionBox .conditionItem_userBox p span{
			font-size: 22rpx;
			color: #999;
	}
	#conditionBox .conditionItem_userBox p span:nth-child(1){
		display: inline-block;
		margin-right: 40rpx;
		font-size: 26rpx;
		color: #000;
		font-weight: bold;
	}
	#conditionBox .conditionItem_userBox .iconiconset0420{
		font-size: 24rpx;
		color: #000;
	}
	#conditionBox .conditionItem_courseList{
		width:527rpx;
		box-sizing: border-box;
		
	}
	#conditionBox .conditionItem_courseList li{
		 margin:25rpx 20rpx 0 0;
	}
	
</style>
<template>
	<view id="conditionBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="bg_height"></view>
		<view class="content">
			<view class="conditionScreen">
				<picker class="inp" @change="nianjiPickerChange" :value="nianji_index" :range="nianjiarray" range-key='title'>
					<view class="uni-input picker_style" v-if="nianji_text">{{nianji_text}}<span class="iconfont iconxiangxiajiantoushixin"></span></view>
					<view class="picker_style" v-else>
						请选择年级<span class="iconfont iconxiangxiajiantoushixin"></span>
					</view>
				</picker>
				<input class="inp" type="text" v-model="banji" placeholder="请填写班级" />
				<picker class="inp" @change="studentPickerChange" :value="student_index" :range="studentarray" range-key='nickname'>
					<view class="uni-input picker_style" v-if="student_text">{{student_text}}<span class="iconfont iconxiangxiajiantoushixin"></span></view>
					<view class="picker_style" v-else>
						请选择学生<span class="iconfont iconxiangxiajiantoushixin"></span>
					</view>
				</picker>
			</view>
			<view class="conditionListBox">
				<navigator v-for="(item,index) in studentlist" :key="index" hover-class="none" :url="`/pages/school/information?id=${item.id}`" class="conditionItem">
					<p class="conditionItem_title">报课数：<span>{{item.has_course}}</span></p>
					<view class="conditionItem_bottom">
						<image :src="item.img" mode="" class="conditionItem_img"></image>
						<view class="conditionItem_bottom-r">
							<view class="conditionItem_userBox">
								<p>
									<span>{{item.nickname}}</span>
									<span>{{item.nianji}}{{item.class}}</span>
								</p>
								<p class="iconfont iconiconset0420"></p>
							</view>
							<ul class="conditionItem_courseList" v-if="item.has_course > 0" >
								<li v-for="(i,num) in item.course" :key="num">{{i.title}}</li>
							</ul>
						</view>
					</view>
				</navigator>
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
				nianjiarray: [],
				nianji_index: 0,
				nianji_text: '',
				nianji_id: '',
				studentarray: [],
				student_index: 0,
				student_text: '',
				student_id: '',
				banji: '',
				studentlist:[]
			}
		},
		onLoad() {
			this.init()
			this.student()
			this.list()
		},
		methods: {
			// 年级
			async init() {
				let _res = await API.postJson('NianjiList', {});
				if (_res.code == 0) {
					this.nianjiarray = _res.data;
				}
			},
			// 学生
			async student() {
				let _res = await API.postJson('studentPullDownList', {
					"token": JSON.parse(sessionStorage.getItem('user')).token
				});
				if (_res.code == 0) {
					this.studentarray = _res.data;
				}
			},
			// 列表
			async list() {
				let _res = await API.postJson('getStudentList', {
					"token": JSON.parse(sessionStorage.getItem('user')).token,
					"nianji": this.nianji_id,
					"class": this.banji,
					"id": this.student_id
				});
				if (_res.code == 0) {
					this.studentlist = _res.data.data;
				}
			},
			studentPickerChange(e) {
				this.student_index = e.detail.value
				this.student_text = this.studentarray[e.detail.value].nickname
				this.student_id = this.studentarray[e.detail.value].id
				this.list()
			},
			nianjiPickerChange(e) {
				this.nianji_index = e.detail.value
				this.nianji_text = this.nianjiarray[e.detail.value].title
				this.nianji_id = this.nianjiarray[e.detail.value].id
				this.list()
			}
		}
	}
</script>
