<template>

	<view class="footer_box">
		<view class="bg_height"></view>
		<view class="footerTopBox">
			<p @click="top">TOP<span class="iconfont iconxiangxiajiantoushixin" style="color: #fff;"></span></p>
		</view>
		<view class="footer_informationBox">
			<p>{{item.copyright}}</p>
			<p>{{item.icp}}</p>
		</view>
		<view class="footerNavBox">
			<navigator hover-class="none" url="/pages/index/index" class="footerNavBtn" open-type="navigate">
				<image src="./images/footerIcon01.png"></image>
				<p>首页</p>
			</navigator>
			<navigator hover-class="none" url="/pages/course/index" class="footerNavBtn" open-type="navigate">
				<image src="./images/footerIcon02.png"></image>
				<p>课程中心</p>
			</navigator>
			<block v-if="user">
				<navigator v-if="user.bs == 1" hover-class="none" url="/pages/school/me" class="footerNavBtn" open-type="navigate">
					<image style="height: 40rpx;" src="./images/footerIcon03.png"></image>
					<p>我的</p>
				</navigator>
				<navigator v-else="user.bs == 2" hover-class="none" url="/pages/student/me" class="footerNavBtn" open-type="navigate">
					<image style="height: 40rpx;" src="./images/footerIcon03.png"></image>
					<p>我的</p>
				</navigator>
			</block>
			<block v-else>
				<view class="footerNavBtn" @click="uplogin">
					<image style="height: 40rpx;" src="./images/footerIcon03.png"></image>
					<p>我的</p>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import API from "../config/api.js"
	export default {
		props: {},
		data() {
			return {
				item: uni.getStorageSync('setItem'),
				user: JSON.parse(sessionStorage.getItem('user'))
			}
		},
		created() {
			this.user = JSON.parse(sessionStorage.getItem('user'))
		},
		methods: {
			uplogin() {
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
			},
			top() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			}
		}
	}
</script>

<style>
	.footer_box {
		width: 100%;
		background: #fff;
		position: absolute;
		bottom: 0;
	}

	.footerTopBox {
		width: 100%;
		height: 45rpx;
		box-sizing: border-box;
		padding-right: 38rpx;
		background: #0168b7;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.footerTopBox p {
		color: #fff;
		display: flex;
		align-items: center;
	}

	.footerTopBox span {
		display: inline-block;
		margin-left: 19rpx;
	}

	.footer_informationBox {
		margin: 36rpx 0 11rpx;
	}

	.footer_informationBox p {
		margin-bottom: 23rpx;
		font-size: 22rpx;
		color: #666;
		text-align: center;
	}

	.footerNavBox {
		width: 100%;
		height: 97rpx;
		background: #0168b7;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.footerNavBtn image {
		width: 37rpx;
		height: 34rpx;
		display: block;
		margin: 0 auto 10rpx;
	}

	.footerNavBtn p {
		font-size: 22rpx;
		color: #fff;
		text-align: center;
	}
</style>
