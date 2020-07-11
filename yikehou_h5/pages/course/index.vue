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
			<view class="content" @click="up_courseClass">
				<span>请选择年级</span>
				<span style="font-size:24rpx;color: #000;font-weight: bold;" class="iconfont iconiconset0420"></span>
			</view>
			<view @click="no_courseClass" class="as_courseClassBox flex_bg" style="display: none;">
				<view class="top_height"></view>
				<view class="bg_height"></view>
				<view class="s_courseContent">
					<span style="font-size:24rpx;color:#fff;font-weight: bold;" class="iconfont iconxiangzuojiantou"></span>请选择年级
				</view>
				<ul class="ClassListBox">
					<li class="active" @click="classItem">一年级</li>
					<li>一年级</li>
					<li>一年级</li>
					<li>一年级</li>
					<li>一年级</li>
					<li>一年级</li>
				</ul>
			</view>
		</view>
		<view class="courseBox">
			<ul class="courseClassify">
				<li class="active">启智</li>
				<li>启智</li>
				<li>启智</li>
				<li>启智</li>
				<li>启智</li>
				<li>启智</li>
				<li>启智</li>
				<li>启智</li>
				<li>启智</li>
				<li>启智</li>
			</ul>
			<scroll-view class="courseScrollView" scroll-y>
				<navigator class="courseItem" url="./details" hover-class="none">
					<image src="./images/item_img.jpg" mode="" class="courseItemImg"></image>
					<view class="courseItemContent">
						<p class="courseItemTitle">英语</p>
						<p class="courseItemDetail ellipse2">英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语C</p>
						<image src="./images/btn_icon.png" class="btn_icon" mode=""></image>
					</view>
				</navigator>
				<navigator class="courseItem" url="./details" hover-class="none">
					<image src="./images/item_img.jpg" mode="" class="courseItemImg"></image>
					<view class="courseItemContent">
						<p class="courseItemTitle">英语</p>
						<p class="courseItemDetail ellipse2">英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语C</p>
						<image src="./images/btn_icon.png" class="btn_icon" mode=""></image>
					</view>
				</navigator>
				<navigator class="courseItem" url="./details" hover-class="none">
					<image src="./images/item_img.jpg" mode="" class="courseItemImg"></image>
					<view class="courseItemContent">
						<p class="courseItemTitle">英语</p>
						<p class="courseItemDetail ellipse2">英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语C</p>
						<image src="./images/btn_icon.png" class="btn_icon" mode=""></image>
					</view>
				</navigator>
				<navigator class="courseItem" url="./details" hover-class="none">
					<image src="./images/item_img.jpg" mode="" class="courseItemImg"></image>
					<view class="courseItemContent">
						<p class="courseItemTitle">英语</p>
						<p class="courseItemDetail ellipse2">英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语C</p>
						<image src="./images/btn_icon.png" class="btn_icon" mode=""></image>
					</view>
				</navigator>
				<navigator class="courseItem" url="./details" hover-class="none">
					<image src="./images/item_img.jpg" mode="" class="courseItemImg"></image>
					<view class="courseItemContent">
						<p class="courseItemTitle">英语</p>
						<p class="courseItemDetail ellipse2">英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语英语C</p>
						<image src="./images/btn_icon.png" class="btn_icon" mode=""></image>
					</view>
				</navigator>
			</scroll-view>
		</view>
		<view class="bg_height"></view>
		<page_footer></page_footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "益课后-课程中心"
			})
			this.init()
		},
		onReachBottom() {
			/* 到底部加载 */
		},
		onPullDownRefresh() {
			// 下拉刷新
		},
		methods: {
			async init() {
				// let _res = await API.postJson('Article', {
				// 	"cate": 3,
				// 	"limit": 4,
				// 	"page": 1
				// });
				// console.log(_res)
			},

			up_courseClass() {
				$('.as_courseClassBox').removeClass('fadeOutRightBig animated').addClass('fadeInRight animated').css('display',
					'block')
			},
			no_courseClass() {
				$('.as_courseClassBox').removeClass('fadeInRight animated').addClass('fadeOutRightBig animated')
			},
			classItem() {
				console.log('一年级')
			}
		}
	};
</script>
