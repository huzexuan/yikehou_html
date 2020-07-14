<style>
	#AboutUsIndex .AboutUsTitle {
		padding: 55rpx 0 52rpx;
		font-size: 30rpx;
		color: #000;
		font-weight: bold;
		text-align: center;
	}

	#AboutUsIndex .AboutUsCoverImg {
		width: 574rpx;
		height: 450rpx;
		display: block;
		background: #000;
		margin: auto;
	}

	#AboutUsIndex .AboutUsDetail {
		margin: 53rpx 0 15rpx;
	}

	#AboutUsIndex .AboutUsPartner {
		width: 100%;
		box-sizing: border-box;
		padding: 0 22rpx;
		display: flex;
		flex-wrap: wrap;
	}

	#AboutUsIndex .AboutUsPartner li {
		width: 268rpx;
		margin-left: 94rpx;
	}

	#AboutUsIndex .AboutUsPartner li:nth-child(2n+1) {
		margin: 0;
	}

	#AboutUsIndex .AboutUsPartner li image {
		width: 100%;
		height: 132rpx;
		box-shadow: 0px 0px 20rpx #ececec;
	}

	#AboutUsIndex .AboutUsPartner li p {
		text-align: center;
		margin: 27rpx 0 46rpx;
	}
</style>
<template>
	<view id="AboutUsIndex">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="bg_height"></view>
		<view class="content">
			<p class="AboutUsTitle">{{AboutUs.title}}</p>
			<image :src="AboutUs.img" mode="" class="AboutUsCoverImg"></image>
			<view class="AboutUsDetail" v-html="AboutUs.content">{{AboutUs.content}}</view>
			<p class="AboutUsTitle">合作伙伴</p>
			<ul class="AboutUsPartner">
				<li v-for="(item,index) in partnerList" :key="index">
					<image :src="item.img" mode=""></image>
					<p class="ellipse">{{item.title}}</p>
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
				AboutUs: {},
				partnerList:[]
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "益课后-关于我们"
			})
			this.init()
			this.partner()
		},
		methods: {
			async init() {
				let _res = await API.postJson('Article', {
					"cate": 1,
					"limit": 1
				})
				if (_res.code == 0) {
					this.AboutUs = _res.data.data[0];
				}
			},
			async partner() {
				let _res = await API.postJson('advertising', {
					"position_id": 2
				})
				if (_res.code == 0) {
					this.partnerList = _res.data;
				}
			}
		}
	}
</script>
