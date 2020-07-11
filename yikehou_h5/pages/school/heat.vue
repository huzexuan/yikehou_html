<style>
#heatBox .heatClassBox{
	width: 100%;
	box-sizing: border-box;
	padding: 0 18rpx;
}
#heatBox .heatClassBox ul{
	display: flex;
	flex-wrap: wrap;
}
#heatBox .heatClassBox ul li{
	width: 136rpx;
	height: 47rpx;
	background: #f4f4f4;
	color: #666;
	display: block;
	margin:36rpx 0 14rpx 30rpx;
	text-align: center;
	line-height: 47rpx;
}
#heatBox .heatClassBox ul li.active{
	color: #fff;
	background: #0168b7;
}
#heatBox .heatClassBox ul li:nth-child(4n+1){
	margin-left:0 ;
}
#heatBox .heatListBox{
	min-height: 726rpx;
}
#heatBox .heatListBox .heatItem{
	width: 100%;
	height: 77rpx;
	box-sizing: border-box;
	padding: 0 60rpx 0 14rpx;
	box-shadow: 0px 0px 20rpx #ececec;
	border-radius: 10rpx;
	margin-top: 26rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
#heatBox .heatListBox .heatItem:last-child{
	margin-bottom: 150rpx;
}
#heatBox .heatListBox .heatItem .heatItemIcon{
	width: 50rpx;
	height: 54rpx;
	box-sizing: border-box;
	background:url(images/heat02.png)no-repeat 100% 100%;
	background-size: 100% 100%;
	font-size: 22rpx;
	text-align: center;
	font-weight: bold;
	color: #fff;
}
#heatBox .heatListBox .heatItem:nth-child(1) .heatItemIcon,#heatBox .heatListBox .heatItem:nth-child(2) .heatItemIcon,#heatBox .heatListBox .heatItem:nth-child(3) .heatItemIcon{
	background: url(images/heat01.png) no-repeat 100% 100%;
	background-size: 100% 100%;
}

#heatBox .heatListBox .heatItem:nth-child(1) .heatItemR,#heatBox .heatListBox .heatItem:nth-child(2) .heatItemR,#heatBox .heatListBox .heatItem:nth-child(3) .heatItemR{
	color:#f41c21;
}

#heatBox .heatListBox .heatItem .heatItemL{
	display: flex;
	align-items: center;
}
#heatBox .heatListBox .heatItem .heatItemL p{
	font-size: 26rpx;
	margin-left: 16rpx;
}
#heatBox .heatListBox .heatItem .heatItemR{
		font-size: 22rpx;
		color: #666;
}
</style>
<template>
	<view id="heatBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="bg_height"></view>
		<view class="content">
			<view class="heatClassBox">
				<ul>
					<li class="active">一年级</li>
					<li>一年级</li>
					<li>一年级</li>
					<li>一年级</li>
					<li>一年级</li>
					<li>一年级</li>
				</ul>
			</view>
			<view class="heatListBox">
				<view class="heatItem">
					<view class="heatItemL">
						<view class="heatItemIcon">1</view>
						<p>英语</p>
					</view>
					<view class="heatItemR">报名人数：68</view>
				</view>
				<view class="heatItem">
					<view class="heatItemL">
						<view class="heatItemIcon">1</view>
						<p>英语</p>
					</view>
					<view class="heatItemR">报名人数：68</view>
				</view>
				<view class="heatItem">
					<view class="heatItemL">
						<view class="heatItemIcon">1</view>
						<p>英语</p>
					</view>
					<view class="heatItemR">报名人数：68</view>
				</view>
				<view class="heatItem">
					<view class="heatItemL">
						<view class="heatItemIcon">1</view>
						<p>英语</p>
					</view>
					<view class="heatItemR">报名人数：68</view>
				</view>
				<view class="heatItem">
					<view class="heatItemL">
						<view class="heatItemIcon">1</view>
						<p>英语</p>
					</view>
					<view class="heatItemR">报名人数：68</view>
				</view>
			</view>
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


