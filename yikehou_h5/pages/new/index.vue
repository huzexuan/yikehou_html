<style>
#newIndex .newTabBox{
	text-align: center;
	margin: 55rpx 0 33rpx;
}
#newIndex .newTabBox li:nth-child(1){
	display: inline-block;
	margin-right: 109rpx;
}
#newIndex .newTabBox li>p:last-child{
	width: 81rpx;
	height: 3rpx;
	background: #fff;
	margin:11rpx auto 0;
}
#newIndex .newTabBox li.active p{
	color: #0168b7;
}
#newIndex .newTabBox li.active>p:last-child{
	background: #0168b7;
}
#newIndex .newListBox{
	padding-bottom: 30rpx;
}
#newIndex .newListBox li{
	display: block;
	padding: 27rpx 0;
	border-bottom: 1rpx solid #e9e9e9;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
#newIndex .newListBox li .newItemImg{
	width: 222rpx;
	height: 140rpx;
	background: #000;
}
#newIndex .newListBox li .newItemContent{
	width: calc(100% - 235rpx);
}
#newIndex .newListBox li .newItemContent .newItemContentTitle{
	line-height: 40rpx;
}
#newIndex .newListBox li .newItemContent .newItemContentTime{
	color: #999;
	font-size: 22rpx;
	margin: 10rpx 0 27rpx;
}
</style>
<template>
	<view id="newIndex">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="bg_height"></view>
		<view class="content">
			<ul class="newTabBox">
				<li class="active">
					<p>最新公告</p>
					<p></p>
				</li>
				<li>
					<p>公司新闻</p>
					<p></p>
				</li>
			</ul>
			<ul class="newListBox">
				<li>
					<image src="" mode="" class="newItemImg"></image>
					<view class="newItemContent">
						<p class="newItemContentTitle ellipse2">烁炎文化传播有限公司是一家专注于烁炎文化传播有限公司是一家专注于烁炎文化传播有限公司是一家专注于</p>
						<p class="newItemContentTime">2020-06-20</p>
					</view>
				</li>
				<li>
					<image src="" mode="" class="newItemImg"></image>
					<view class="newItemContent">
						<p class="newItemContentTitle ellipse2">烁炎文化传播有限公司是一家专注于烁炎文化传播有限公司是一家专注于烁炎文化传播有限公司是一家专注于</p>
						<p class="newItemContentTime">2020-06-20</p>
					</view>
				</li>
				<li>
					<image src="" mode="" class="newItemImg"></image>
					<view class="newItemContent">
						<p class="newItemContentTitle ellipse2">烁炎文化传播有限公司是一家专注于烁炎文化传播有限公司是一家专注于烁炎文化传播有限公司是一家专注于</p>
						<p class="newItemContentTime">2020-06-20</p>
					</view>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

