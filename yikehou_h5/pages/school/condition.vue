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
				<picker class="inp" @change="nianjiPickerChange":value="nianjiindex" :range="nianjiarray">
					<view class="uni-input picker_style" v-if="nianjiarray[nianjiindex]">{{nianjiarray[nianjiindex]}}<span class="iconfont iconxiangxiajiantoushixin"></span></view>
					<view class="picker_style" v-else>
						请选择年级<span class="iconfont iconxiangxiajiantoushixin"></span>
					</view>
				</picker>
				<input class="inp" type="text" v-model="nianji" placeholder="请填写班级" />
				<picker class="inp" @change="studentPickerChange" :value="studentindex" :range="studentarray">
					<view class="uni-input picker_style" v-if="studentarray[studentindex]">{{studentarray[studentindex]}}<span class="iconfont iconxiangxiajiantoushixin"></span></view>
					<view class="picker_style" v-else>
						请选择年级<span class="iconfont iconxiangxiajiantoushixin"></span>
					</view>
				</picker>
			</view>
			<view class="conditionListBox">
				<navigator hover-class="none" url="/pages/school/information" class="conditionItem">
					<p class="conditionItem_title">报课数：<span>8</span></p>
					<view class="conditionItem_bottom">
						<image src="./images/user_img.png" mode="" class="conditionItem_img"></image>
						<view class="conditionItem_bottom-r">
							<view class="conditionItem_userBox">
								<p>
									<span>张甜甜</span>
									<span>5年级4班</span>
								</p>
								<p class="iconfont iconiconset0420"></p>
							</view>
							<ul class="conditionItem_courseList">
								<li>英语</li>
								<li>英语</li>
								<li>英语</li>
								<li>英语</li>
								<li>英语</li>
								<li>英语</li>
								<li>英语</li>
								<li>英语</li>
								<li>英语</li>
								<li>英语</li>
							</ul>
						</view>
					</view>
				</navigator>
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
				nianjiarray: ['中国', '美国', '巴西', '日本'],
				studentarray: ['中国', '美国', '巴西', '日本'],
				studentindex: -1,
				nianjiindex:-1,
				nianji: ''
			}
		},
		methods: {
			studentPickerChange(e) {
				this.studentindex = e.detail.value
				console.log(e)
			},
			nianjiPickerChange(e) {
				this.nianjiindex = e.detail.value
				console.log(e)
			}
		}
	}
</script>
