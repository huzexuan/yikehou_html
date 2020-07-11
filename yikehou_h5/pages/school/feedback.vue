<style>
	#feedbackBox .conditionScreen{
		margin: 40rpx 0 35rpx;
		display: flex;
		align-items: center;
		justify-content:space-between;
	}
	#feedbackBox .inp{
		width: 153rpx;
		height: 53rpx;
		box-sizing: border-box;
		border: 1rpx solid #bfbfbf;
		padding:0 8rpx;
	}
	#feedbackBox .picker_style{
		line-height: 53rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #666;
		overflow: hidden;
	}
	#feedbackBox .uni-input{
		text-align: center;
		line-height: 53rpx;
	}
	#feedbackBox .conditionListBox{
		min-height: 818rpx;
	}
	#feedbackBox .conditionItem {
		width: 100%;
		box-sizing: border-box;
		border-radius: 10rpx;
		box-shadow: 0px 0px 20rpx #ececec;
		margin-bottom: 32rpx;
	}
	#feedbackBox .conditionItem:last-child {
		margin-bottom: 65rpx;
	}
	#feedbackBox .conditionItem_bottom{
		padding: 20rpx 20rpx 27rpx 8rpx;
		display: flex;
	}
	#feedbackBox .conditionItem_img{
		width: 103rpx;
		height: 103rpx;
		margin-right: 22rpx;
	}
	#feedbackBox .conditionItem_userBox{
		width:527rpx;
		display: flex;
		justify-content: space-between;
		margin: 16rpx 0;
	}
	#feedbackBox .conditionItem_userBox p span{
			font-size: 22rpx;
			color: #999;
	}
	#feedbackBox .conditionItem_userBox p span:nth-child(1){
		display: inline-block;
		margin-right: 40rpx;
		font-size: 26rpx;
		color: #000;
		font-weight: bold;
	}
	#feedbackBox .conditionItem_flag{
		padding:0 26rpx;
		height: 38rpx;
		line-height: 38rpx;
		border-radius: 50rpx;
		background: #ff0000;
		color: #fff;
	}
	.evaluate {
		width: 527rpx;
	}
	.evaluate_l,
	.evaluate_r {
	  display: flex;
	  align-items: center;
	  margin-bottom: 36rpx;
	}
	.evaluate_l image,
	.evaluate_r image {
		width: 30rpx;
		height: 30rpx;
	  margin-left: 15rpx;
	}
	.evaluate_l span,
	.evaluate_r span {
	  color: #ffc600;
	  display: inline-block;
	  margin-left:  25rpx;
	}
	#feedbackBox .leave{
		display: flex;
	}
	#feedbackBox .leave p:last-child{
		width: 440rpx;
		line-height: 40rpx;
	}
</style>
<template>
	<view id="feedbackBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="bg_height"></view>
		<view class="content">
			<view class="conditionScreen">
				<picker class="inp" @change="nianjiPickerChange" :value="nianjiindex" :range="nianjiarray">
					<view class="uni-input picker_style" v-if="nianjiarray[nianjiindex]">{{nianjiarray[nianjiindex]}}<span class="iconfont iconxiangxiajiantoushixin"></span></view>
					<view class="picker_style" v-else>
						年级<span class="iconfont iconxiangxiajiantoushixin"></span>
					</view>
				</picker>
				<input class="inp" type="text" v-model="nianji" placeholder="班级" />
				<picker class="inp" @change="studentPickerChange" :value="studentindex" :range="studentarray">
					<view class="uni-input picker_style" v-if="studentarray[studentindex]">{{studentarray[studentindex]}}<span class="iconfont iconxiangxiajiantoushixin"></span></view>
					<view class="picker_style" v-else>
						年级<span class="iconfont iconxiangxiajiantoushixin"></span>
					</view>
				</picker>
				<picker class="inp" @change="studentPickerChange" :value="studentindex" :range="studentarray">
					<view class="uni-input picker_style" v-if="studentarray[studentindex]">{{studentarray[studentindex]}}<span class="iconfont iconxiangxiajiantoushixin"></span></view>
					<view class="picker_style" v-else>
						顺序<span class="iconfont iconxiangxiajiantoushixin"></span>
					</view>
				</picker>
			</view>
			<view class="conditionListBox">
				<view class="conditionItem">
					<view class="conditionItem_bottom">
						<image src="./images/user_img.png" mode="" class="conditionItem_img"></image>
						<view class="conditionItem_bottom-r">
							<view class="conditionItem_userBox">
								<p>
									<span>张甜甜</span>
									<span>5年级4班</span>
								</p>
								<view class="conditionItem_flag">英语</view>
							</view>
							<div class="evaluate">
								<div class="evaluate_l">
									课程评价：
									<image src="./images/star.png" mode=""></image>
									<image src="./images/star.png" mode=""></image>
									<image src="./images/star.png" mode=""></image>
									<image src="./images/star.png" mode=""></image>
									<image src="./images/star.png" mode=""></image>
								<!-- 	<image :src="item.course_star >= 1 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.course_star >= 2 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.course_star >= 3 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.course_star >= 4 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.course_star >= 5 ?'./images/star_active.png':'./images/star.png'" alt /> -->
									<span>1星</span>
								</div>
								<div class="evaluate_r">
									教师评价：
									<image src="./images/star.png" mode=""></image>
									<image src="./images/star.png" mode=""></image>
									<image src="./images/star.png" mode=""></image>
									<image src="./images/star.png" mode=""></image>
									<image src="./images/star.png" mode=""></image>
									<!-- <image :src="item.teacher_star >= 1 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.teacher_star >= 2 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.teacher_star >= 3 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.teacher_star >= 4 ?'./images/star_active.png':'./images/star.png'" alt />
									<image :src="item.teacher_star >= 5 ?'./images/star_active.png':'./images/star.png'" alt /> -->
									<span>1星</span>
								</div>
							</div>
							<view class="leave">
								<p>留言：</p>
								<p>课程很好，能学到正式课以外的东西，希望下学期还开此课。</p>
							</view>
						</view>
					</view>
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
				nianjiarray: ['中国', '美国', '巴西', '日本'],
				studentarray: ['中国', '美国', '巴西', '日本'],
				studentindex: -1,
				nianjiindex: -1,
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
