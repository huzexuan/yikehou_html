<style>
	
#AboutUsIndex .AboutUsTitle{
	padding: 55rpx 0 52rpx;
	font-size: 30rpx;
	color: #000;
	font-weight: bold;
	text-align: center;
}
#AboutUsIndex .AboutUsCoverImg{
	width: 574rpx;
	height: 450rpx;
	display: block;
	background: #000;
	margin: auto;
}
#AboutUsIndex .AboutUsDetail{
	margin: 53rpx 0 15rpx;
}
	
#AboutUsIndex .AboutUsPartner{
	width: 100%;
	box-sizing: border-box;
	padding: 0 22rpx;
	display: flex;
	flex-wrap: wrap;
}
#AboutUsIndex .AboutUsPartner li{
	width: 268rpx;
	margin-left: 94rpx;
}
#AboutUsIndex .AboutUsPartner li:nth-child(2n+1){
	margin: 0;
}
#AboutUsIndex .AboutUsPartner li image{
	width: 100%;
	height: 132rpx;
	box-shadow: 0px 0px 20rpx #ececec;
}
#AboutUsIndex .AboutUsPartner li p{
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
			<p class="AboutUsTitle">关于我们</p>
			<image src="" mode="" class="AboutUsCoverImg"></image>
			<p class="AboutUsDetail">为教育培训机构搭建自媒体招生平台为教育培训机构搭建</p>
			<p class="AboutUsTitle">合作伙伴</p>
			<ul class="AboutUsPartner">
				<li>
					<image src="" mode=""></image>
					<p class="ellipse">保定市高开区小学保定市高开区小学保定市高开区小学</p>
				</li>
				<li>
					<image src="" mode=""></image>
					<p class="ellipse">保定市高开区小学保定市高开区小学保定市高开区小学</p>
				</li>
				<li>
					<image src="" mode=""></image>
					<p class="ellipse">保定市高开区小学保定市高开区小学保定市高开区小学</p>
				</li>
			</ul>
		</view>
		<view class="bg_height"></view>
		<page_footer></page_footer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "益课后-关于我们"
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
		}
	};
</script>
