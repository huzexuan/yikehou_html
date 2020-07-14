<style>
	#indexBox .index_banner {
		width: 100%;
		height: 630rpx;
		position: relative;
	}

	#indexBox .bannerswiper {
		width: 100%;
		height: 535rpx;
	}

	#indexBox .index_banner_img {
		width: 100%;
		height: 100%;
	}

	#indexBox .searchBox {
		width: 666rpx;
		height: 70rpx;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.7);
		position: absolute;
		top: 30rpx;
		left: 50%;
		margin-left: -333rpx;
		z-index: 1;
		border-radius: 50rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#indexBox .searchInput {
		width: 100%;
		height: 100%;
		font-size: 24rpx;
		color: #666
	}

	#indexBox .search_icon {
		width: 26rpx;
		height: 26rpx;
		margin: 0 28rpx 0 38rpx
	}

	#indexBox .banner_bg {
		width: 100%;
		height: 220rpx;
		position: absolute;
		top: 406rpx
	}
	#indexBox .loginBox{
		padding:44rpx 0;
		display:flex;
		align-items: center;
		justify-content: space-evenly;
	}
	#indexBox .loginBtn{
		width: 240rpx;
		height: 74rpx;
		padding: 4rpx;
		border: 1rpx solid #0168b7;
	}
	#indexBox .loginBtn>view{
		width: 100%;
		height: 100%;
		margin: auto;
		background: #0168b7;
		font-size: 26rpx;
		color: #fff;
		text-align: center;
		line-height: 74rpx;
	}
	#indexBox .noticeBox{
		height: 95rpx;
		box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
	}
	#indexBox .noticeTitle_img{
		width: 104rpx;
		height: 25rpx;
		margin-left: 30rpx;
	}
	#indexBox .noticeswiper{
		width: 430rpx;
		height: 95rpx;
		margin: 0 10rpx 0 27rpx;
	}
	#indexBox .noticeText{
		line-height: 95rpx;
	}
	#indexBox .noticeBtn{
		font-size: 22rpx;
		color: #999;
	}
	
	/* 关于我们 */
	#indexBox .AboutUsBox{
		padding: 42rpx 0 ;
	}
	#indexBox .AboutUs_bg{
		width: 100%;
		height: 368rpx;
		background: url(./images/AboutUsBox_bg.jpg) no-repeat 100% 100%;
		background-size: 100% 100%;
	}
	#indexBox .AboutUs_content{
		width: 527rpx;
		height: 368rpx;
		box-sizing: border-box;
		padding: 116rpx 80rpx 0 87rpx;
		margin: auto;
		background: url(./images/AboutUs_contentBg.png) no-repeat 100% 100%;
		background-size: 100% 100%;
	}
	#indexBox .AboutUsTitle{
		font-size: 28rpx;
		color: #000;
		font-weight: bold;
		text-align: center;
	}
	#indexBox .AboutUsText{
		font-size: 22rpx;
		margin:18rpx 0 20rpx;
		line-height: 36rpx;
	}
	#indexBox .AboutUsBtn{
		width: 117rpx;
		height: 35rpx;
		box-sizing: border-box;
		border: 1rpx solid #7d7d7d;
		font-size: 20rpx;
		text-align: center;
		line-height: 35rpx;
		margin: auto;
	}
	#indexBox .courseBoxTitle{
		display:flex;
		align-items: center;
		justify-content:space-between;
		padding:46rpx 0 60rpx
	}
	#indexBox .courseBoxTitle>view{
		font-weight:bold
	}
	#indexBox .courseBoxTitle>view span:nth-child(1){
		font-size:32rpx;
		color:#000;
		display:inline-block;
		margin-right:14rpx;
	}
	#indexBox .courseBoxTitle>view span:nth-child(2){
		font-size:24rpx;
		color:#666;
	}
	#indexBox .courseAllBtn{
		width:108rpx;
		height:38rpx;
		text-align:center;
		font-size:22rpx;
		color:#666;
		line-height:38rpx;
		border:1rpx solid #7d7d7d;
		box-shadow:inset  0 0 1px 1px rgba(0,0,0,0.3)
	}
	#indexBox .courseList li{
		display:block;
		overflow: hidden;
		margin-bottom:60rpx;
	}
	#indexBox .courseItem_img{
		width:100%;
		height:438rpx;
		margin-bottom:54rpx;
	}
	#indexBox .courseItemTitle{
		display:flex;
		align-items: center;
		margin-bottom:40rpx;
	}
	#indexBox .courseItemTitle span{
		display:inline-block;
	}
	#indexBox .courseItemTitle span:nth-child(1){
		font-size:28rpx;
		color:#000;
		margin-right:24rpx;
		font-weight:bold;
	}
	#indexBox .courseItemTitle span:nth-child(2){
		width:68rpx;
		height:1rpx;
		background:#5e5e5e;
	}
	#indexBox .courseItemBrief p:nth-child(1){
		font-size:26rpx;
	}
	#indexBox .courseItemBrief p:nth-child(2){
		width:88rpx;
		height:2rpx;
		background:#626262;
		margin:17rpx 0 33rpx;
	}
	#indexBox .courseItemDetails{
		font-size:24rpx;
		color:#666;
		line-height:40rpx;
		margin-bottom:46rpx;
	}
	#indexBox .courseItemBtn{
		width:198rpx;
		height:53rpx;
		background:#0168b7;
		color:#fff;
		text-align:center;
		line-height:53rpx;
		float:right;
	}
</style>
<template>
	<view id="indexBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="index_banner">
			<view class="searchBox">
				<image src="./images/search_icon.png" mode="" class="search_icon"></image>
				<input type="text" class="searchInput" v-model="search" @change="searchInp" placeholder="你想学的课程"></input>
			</view>
			<swiper class="bannerswiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in bannerSwiper" :key="index">
					<image :src="item.img" mode="" class="index_banner_img"></image>
				</swiper-item>
			</swiper>
			<image src="./images/banner_bg.png" mode="" class="banner_bg"></image>
		</view>
		<view class="loginBox" v-if="user.bs == 0">
			<navigator hover-class="none" url="../login/student_login" class="loginBtn" open-type="navigate">
				<view>学生登录</view>
			</navigator>
			<navigator hover-class="none" url="../login/school_login" class="loginBtn" open-type="navigate">
				<view>学校登录</view>
			</navigator>
		</view>
		<view class="content noticeBox">
			<image src="./images/noticeTitle.png" class="noticeTitle_img"></image>
			<swiper class="noticeswiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :vertical="vertical" :interval="interval"
			 :duration="duration">
				<swiper-item v-for="(item,index) in noticeList" :key="index">
					<p class="noticeText ellipse">{{item.title}}</p>
				</swiper-item>
			</swiper>
			<navigator url="" hover-class="none" class="noticeBtn" open-type="navigate">
				更多<span style="font-size: 22rpx;" class="iconfont iconiconset0420"></span>
			</navigator>
		</view>
		<indexNav></indexNav>
		<view class="bg_height"></view>
		<view class="AboutUsBox">
			<view class="AboutUs_bg">
				<view class="AboutUs_content">
					<p class="AboutUsTitle">
						{{AboutUs.title}}
					</p>
					<p class="AboutUsText ellipse2" v-html="AboutUs.description">{{AboutUs.description || ''}}</p>
					<navigator url="/pages/AboutUs/index" class="AboutUsBtn" hover-class="none" open-type="navigate">MORE</navigator>
				</view>
			</view>
		</view>
		<view class="bg_height"></view>
		<view class="content">
			<view class="courseBoxTitle">
				<view>
					<span>课程中心</span>
					<span @click="courseListBtn">COURES</span>
				</view>
				<navigator url="/pages/course/index" class="courseAllBtn" hover-class="none" open-type="navigate">MORE</navigator>
			</view>
			<ul class="courseList">
				<li v-for="(item,index) in courseList" :key="index">
					<image v-if="item.imgs_arr" :src="item.imgs_arr[0]" class="courseItem_img"></image>
					<image v-else :src="item.course_info.imgs_arr[0]" class="courseItem_img"></image>
					<p class="courseItemTitle">
						<span>{{item.title || item.course_info.title}}</span>
						<span></span>
					</p>
					<view class="courseItemBrief">
						<p v-if="item.description">{{item.description || item.course_info.description}}</p>
						<p></p>
					</view>
					<p class="courseItemDetails ellipse2" v-if="item.conten" v-html="item.content || item.course_info.content">{{item.content || item.course_info.content}}</p>
					<navigator v-if="!item.course_info" :url="`/pages/course/details?id=${item.id}`" class="courseItemBtn" hover-class="none"
					 open-type="navigate">MORE</navigator>
					<navigator v-else :url="`/pages/course/details?id=${item.course_info.id}`" class="courseItemBtn" hover-class="none"
					 open-type="navigate">MORE</navigator>
				</li>
			</ul>
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
				indicatorDots: false,
				autoplay: true,
				interval: 3000,
				duration: 300,
				vertical: true,
				search: '',
				noticeList: [],
				bannerSwiper: [],
				AboutUs: {},
				courseList: [],
				user: JSON.parse(sessionStorage.getItem('user')),
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "益课后-首页"
			})
			this.init()
			this.banner()
			this.About()
			this.set()
		},
		onShow() {
			var obj = {
				bs:0
			}
			this.user = JSON.parse(sessionStorage.getItem('user'))
			if(this.user == null){
				sessionStorage.setItem('user',JSON.stringify(obj) )
			}
			this.course()
		},
		methods: {
			async set() {
				let _res = await API.postJson('setting', {});
				if (_res.code == 0) {
					uni.setStorageSync('setItem', _res.data)
				}
			},
			async init() {
				let _res = await API.postJson('Article', {
					"cate": 4,
				});
				if (_res.code == 0) {
					this.noticeList = _res.data.data;
				}
			},
			async banner() {
				let _res = await API.postJson('advertising', {
					"position_id": 1
				});
				if (_res.code == 0) {
					this.bannerSwiper = _res.data;
				}
			},
			async About() {
				let _res = await API.postJson('Article', {
					"cate": 1,
				});
				if (_res.code == 0) {
					this.AboutUs = _res.data.data[0];
				}
			},
			async course() {
				if (this.user) {
					if (this.user.bs == 2) {
						let _res = await API.postJson('studentCateList', {
							"cate": this.courseMenu_id,
							"nianji": this.user.nianji_id,
							"token": this.user.token,
							"limit": 3,
						});
						if (_res.code == 0) {
							this.courseList = _res.data.data;
						}
					} else if (this.user.bs == 1) {
						let _res = await API.postJson('CateList', {
							"cate": this.courseMenu_id,
							"nianji": this.gradeId,
							"token": this.user.token,
							"limit": 3,
						});
						if (_res.code == 0) {
							this.courseList = _res.data.data;
						}
					}
				} else {
					let _res = await API.postJson('CateList', {
						"cate": this.courseMenu_id,
						"nianji": this.gradeId,
						"limit": 3,
					});
					if (_res.code == 0) {
						this.courseList = _res.data.data;
					}
				}
			},
			courseListBtn() {
				uni.navigateTo({
					url: "/pages/course/index",
				});
			},
			searchInp() {
				uni.navigateTo({
					url: '/pages/course/seach_coures?search=' + this.search
				})
			}
		}
	};
</script>
