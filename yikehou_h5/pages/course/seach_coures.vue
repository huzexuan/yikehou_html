<style>
	#courseIndex .courseClassBox {
		padding: 27rpx 0 30rpx;
		background: #f4f4f4;
	}

	#courseIndex .courseClassBox>view {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#courseIndex .courseBox {
		padding-bottom: 68rpx;
		display: flex;
		justify-content: space-between;
	}
	#courseIndex .courseItem {
		box-sizing: border-box;
		padding: 34rpx 0 27rpx;
		border-bottom: 0.5rpx solid #ededed;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#courseIndex .courseItemImg {
		width: 175rpx;
		height: 175rpx;
		margin: 0 20rpx 0 10rpx;
	}

	#courseIndex .courseItemTitle {
		font-size: 26rpx;
		color: #000;
	}

	#courseIndex .btn_icon {
		width: 33rpx;
		height: 33rpx;
		float: right;
	}

	#courseIndex .courseItemContent {
		width: calc(100% - 205rpx);
	}

	#courseIndex .courseItemDetail {
		font-size: 22rpx;
		color: #999;
		margin: 34rpx 0 14rpx;
	}

	#courseIndex .courseScrollView {
		max-height: 960rpx;
	}

	#courseIndex .s_courseContent {
		width: 100%;
		height: 80rpx;
		background: #0168b7;
		color: #fff;
		text-align: center;
		line-height: 80rpx;
		position: relative;
	}

	#courseIndex .s_courseContent span {
		position: absolute;
		left: 35rpx;
	}

	#courseIndex .ClassListBox {
		width: 100%;
		box-sizing: border-box;
		padding: 55rpx 49rpx 34rpx;
		background: #fff;
		display: flex;
		flex-wrap: wrap;
	}

	#courseIndex .ClassListBox li {
		width: 136rpx;
		height: 50rpx;
		border: 1rpx solid #bfbfbf;
		text-align: center;
		line-height: 50rpx;
		border-radius: 50rpx;
		margin: 0 0 39rpx 27rpx;
		color: #999;

	}

	#courseIndex .ClassListBox li:nth-child(4n+1) {
		margin-left: 0;
	}

	#courseIndex .ClassListBox li.active {
		border: 1rpx solid #0168b7;
		color: #0168b7;
	}
</style>
<template>
	<view id="courseIndex">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="bg_height"></view>
		<view class="courseBox content">
			<scroll-view class="courseScrollView" scroll-y>
				<view class="courseItem" v-for="(item,index) in courseList_data" :key="index">
					<navigator :url="!item.course_info ? `/pages/course/details?id=${item.id}`: `/pages/course/details?id=${item.course_info.id}`"
					 hover-class="none">
						<image v-if="!item.course_info" :src="item.imgs_arr[0]" mode="" class="courseItemImg"></image>
						<image v-else :src="item.course_info.imgs_arr[0]" mode="" class="courseItemImg"></image>
					</navigator>
					<view class="courseItemContent">
						<p class="courseItemTitle">{{item.title || item.course_info.title}}</p>
						<p class="courseItemDetail ellipse2" v-html="item.description || item.course_info.description">{{item.description || item.course_info.description}}</p>
					</view>
				</view>
			</scroll-view>
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
				courseList_data: [],
				user: JSON.parse(sessionStorage.getItem('user')),
			};
		},
		async onLoad(option) {
			uni.setNavigationBarTitle({
				title: "益课后-搜索课程"
			})
			this.courseList(option.search)
		},
		methods: {
			// 课程列表
			async courseList(text) {
				if (this.user.bs == 2) {
					let _res = await API.postJson('studentCateList', {
						'title':text,
						'token':this.user.token
					});
					if (_res.code == 0) {
						this.courseList_data = _res.data.data;
					}
				} else if (this.user.bs == 1) {
					let _res = await API.postJson('CateList', {
						'title':text,
						'token':this.user.token
					});
					if (_res.code == 0) {
						this.courseList_data = _res.data.data;
					}
				} else {
					let _res = await API.postJson('CateList', {
						'title':text,
						'token':this.user.token
					});
					if (_res.code == 0) {
						this.courseList_data = _res.data.data;
					}
				}
			}
		}
	};
</script>
