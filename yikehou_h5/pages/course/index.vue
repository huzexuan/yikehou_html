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

	#courseIndex .courseClassify li {
		display: block;
		width: 154rpx;
		height: 94rpx;
		box-sizing: border-box;
		border-left: 8rpx solid #f4f4f4;
		background: #f4f4f4;
		margin-bottom: 2px;
		font-size: 26rpx;
		text-align: center;
		line-height: 94rpx;
		margin-right: 23rpx;
	}

	#courseIndex .courseClassify li.active {
		background: #fff;
		border-left: 8rpx solid #0168b7;
		color: #0168b7;
	}

	#courseIndex .courseItem {
		width: 95%;
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
		<view class="courseClassBox">
			<block v-if="user.bs == 1">
				<view class="content" @click="up_courseClass">
					<span>请选择年级:{{classtitle}}</span>
					<span style="font-size:24rpx;color: #000;font-weight: bold;" class="iconfont iconiconset0420"></span>
				</view>
				<view @click="no_courseClass" class="as_courseClassBox flex_bg" style="display: none;">
					<view class="top_height"></view>
					<view class="bg_height"></view>
					<view class="s_courseContent">
						<span style="font-size:24rpx;color:#fff;font-weight: bold;" class="iconfont iconxiangzuojiantou"></span>请选择年级
					</view>
					<ul class="ClassListBox">
						<li v-for="(item,index) in gradeList" :class="gradeId == item.id ?'active':''" @click="classItem(item.id,item.title)">{{item.title}}</li>
					</ul>
				</view>
			</block>
			<block v-else>
				<view class="content">
					<span>当前年级：{{user.nianjie}}</span>
				</view>
			</block>
		</view>
		<view class="courseBox">
			<ul class="courseClassify">
				<li v-for="(item,index) in courseMenu" :key="index" :class="courseMenu_id == item.id ?'active':''" @click="_courseMenu(item.id)">{{item.title}}</li>
			</ul>
			<scroll-view class="courseScrollView" scroll-y>
				<view class="courseItem" v-for="(item,index) in courseList_data" :key="index">
					<navigator :url="!item.course_info ? `/pages/course/details?id=${item.id}`: `/pages/course/details?id=${item.course_info.id}`"
					 hover-class="none">
						<image v-if="!item.course_info" :src="item.imgs_arr[0]" mode="" class="courseItemImg"></image>
						<image v-else :src="item.course_info.imgs_arr[0]" mode="" class="courseItemImg"></image>
					</navigator>
					<view class="courseItemContent">
						<p class="courseItemTitle">{{item.title || item.course_info.title}}</p>
						
						<block v-if="!item.course_info">
							<p class="courseItemDetail ellipse2" v-if="item.description !== null" v-html="item.description">{{item.description}}</p>
							<image v-if="item.bs_select == 0" src="./images/btn_icon.png" class="btn_icon" mode="" @click="up_course(item.id,item.title)"></image>
						</block>
						<block v-else>
							<p class="courseItemDetail ellipse2" v-if="item.course_info.description !== null" v-html="item.course_info.description">{{item.course_info.description}}</p>
							<image v-if="item.is_select == 0" src="./images/btn_icon.png" class="btn_icon" mode="" @click="up_course(item.id,item.course_info.title)"></image>
						</block>
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
				gradeList: [],
				gradeId: '',
				courseMenu: [],
				courseMenu_id: "",
				courseList_data: [],
				user: JSON.parse(sessionStorage.getItem('user')),
				classtitle: ''
			};
		},
		async onLoad() {
			uni.setNavigationBarTitle({
				title: "益课后-课程中心"
			})
			if (this.user.bs == 1) {
				await this.init()
			}
			await this.courseClassify()
			this.courseList()
		},
		methods: {
			async init() {
				let _res = await API.postJson('NianjiList', {
					"cate": 3,
					"limit": 4,
					"page": 1
				});
				if (_res.code == 0) {
					this.gradeList = _res.data;
					this.gradeId = _res.data[0].id;
					this.classtitle = _res.data[0].title
				}
			},
			// 课程分类
			async courseClassify() {
				let _res = await API.postJson('CateClassify');
				if (_res.code == 0) {
					this.courseMenu = _res.data;
					this.courseMenu_id = _res.data[0].id;
				}
			},
			// 课程列表
			async courseList() {
				if (this.user.bs == 2) {
					let _res = await API.postJson('studentCateList', {
						"cate": this.courseMenu_id,
						"nianji": this.user.nianji_id,
						"token": this.user.token
					});
					if (_res.code == 0) {
						this.courseList_data = _res.data.data;
					}
				} else if (this.user.bs == 1) {
					let _res = await API.postJson('CateList', {
						"cate": this.courseMenu_id,
						"nianji": this.gradeId,
						"token": this.user.token
					});
					if (_res.code == 0) {
						this.courseList_data = _res.data.data;
					}
				} else {
					let _res = await API.postJson('CateList', {
						"cate": this.courseMenu_id,
						"nianji": this.gradeId
					});
					if (_res.code == 0) {
						this.courseList_data = _res.data.data;
					}
				}
			},
			up_courseClass() {
				$('.as_courseClassBox').removeClass('fadeOutRightBig animated').addClass('fadeInRight animated').css('display',
					'block')
			},
			no_courseClass() {
				$('.as_courseClassBox').removeClass('fadeInRight animated').addClass('fadeOutRightBig animated')
			},
			classItem(id, title) {
				this.gradeId = id
				this.classtitle = title
				this.courseList()
			},
			_courseMenu(id) {
				this.courseMenu_id = id;
				this.courseList()
			},
			async schoolchoose(id) {
				let _res = await API.postJson('schoolchooseCourse', {
					"token": JSON.parse(sessionStorage.getItem('user')).token,
					"course_id": id
				});
				if (_res.code == 0) {
					uni.showToast({
						title: "成功添加课程",
						duration: 2000,
						icon: 'none',
					});
					this.courseList()
				} else {
					uni.showToast({
						title: _res.message,
						duration: 2000,
						icon: 'none',
					});
				}
			},
			async studentchoose(id) {
				let _res = await API.postJson('chooseCourse', {
					"token": JSON.parse(sessionStorage.getItem('user')).token,
					"school_course_id": id
				});
				if (_res.code == 0) {
					uni.showToast({
						title: "成功添加课程",
						duration: 2000,
						icon: 'none',
					});
					this.courseList()
				} else {
					uni.showToast({
						title: _res.message,
						duration: 2000,
						icon: 'none',
					});
				}
			},
			up_course(id, title) {
				let _this = this
				if (this.user) {
					if (this.user.bs == 1) {
						uni.showModal({
							title: '温馨提示',
							content: `是否选择${title}为${this.classtitle}课程`,
							confirmText: '确定',
							cancelText: '取消',
							success: function(res) {
								if (res.confirm) {
									_this.schoolchoose(id)
								} else if (res.cancel) {}
							},

						});
					} else {
						uni.showModal({
							title: '温馨提示',
							content: `是否学习${title}课程`,
							confirmText: '确定',
							cancelText: '取消',
							success: function(res) {
								if (res.confirm) {
									_this.studentchoose(id)
								} else if (res.cancel) {}
							},

						});
					}
				} else {
					uni.showModal({
						title: '温馨提示',
						content: '暂无信息，请登录',
						confirmText: '学生登录',
						cancelText: '学校登录',
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/login/student_login'
								})
							} else if (res.cancel) {
								uni.navigateTo({
									url: '/pages/login/school_login'
								})
							}
						},

					});
				}
			}
		}
	};
</script>
