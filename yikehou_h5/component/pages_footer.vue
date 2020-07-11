<template>
	<view class="footer_box">
        <view class="footerTopBox">
            <p>TOP<span class="iconfont iconxiangxiajiantoushixin" style="color: #fff;"></span></p>
        </view>
        <view class="footer_informationBox">
            <p>Copyright (C) 2020  Rights  烁炎文化传播有限公司 版权所有</p>
            <p>冀ICP备*******号</p>
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
			<navigator hover-class="none" url="/pages/school/me" class="footerNavBtn" open-type="navigate">
				<image style="height: 40rpx;" src="./images/footerIcon03.png"></image>
				<p>我的</p>
			</navigator>
			<!-- <navigator v-if="token" hover-class="none" url="" class="footerNavBtn" open-type="navigate">
				<image style="height: 40rpx;" src="./images/footerIcon03.png"></image>
				<p>我的</p>
			</navigator>
			<view class="footerNavBtn" v-else @click="uplogin">
				<image style="height: 40rpx;" src="./images/footerIcon03.png"></image>
				<p>我的</p>
			</view> -->
        </view>
	</view>
</template>

<script>
	export default {
		props: {
			},
		data() {
			return {
				token:''
			}
		},
		methods: {
			uplogin(){
				uni.showModal({
				    title: '我的',
				    content: '暂无信息，请登录',
					confirmText:'学生登录',
					cancelText:'学校登录',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('学生登录');
				        } else if (res.cancel) {
				            console.log('学校登录');
				        }
				    }
				});
			}
		}	
	}
</script>

<style>
	.footer_box{
		background: #fff;
	}
.footerTopBox {
    width:100%;
    height:45rpx;
	box-sizing: border-box;
    padding-right:38rpx;
    background:#0168b7;
    display:flex;
	align-items: center;
	justify-content:flex-end;
}
.footerTopBox p{
    color:#fff;
    display:flex;
	align-items: center;
}
.footerTopBox span{
	display:inline-block;
    margin-left:19rpx;
}
.footer_informationBox{
    margin:36rpx 0 11rpx;
}
.footer_informationBox p{
    margin-bottom:23rpx;
    font-size:22rpx;
    color:#666;
	text-align: center;
}
.footerNavBox{
    width:100%;
    height:97rpx;
    background:#0168b7;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.footerNavBtn image{
	width: 37rpx;
	height: 34rpx;
	display: block;
	margin:0 auto 10rpx;
}
.footerNavBtn p{
	font-size: 22rpx;
	color: #fff;
	text-align: center;
}
</style>
