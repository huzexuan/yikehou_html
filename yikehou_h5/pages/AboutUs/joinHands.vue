<style>
	#joinHandsBox .joinHandsTitle {
		padding: 42rpx 0 40rpx;
		font-size: 26rpx;
		color: #000;
		font-weight: bold;
	}

	#joinHandsBox .joinHandsTopContent_item {
		display: flex;
		align-items: center;
		margin-bottom: 55rpx;
	}

	#joinHandsBox .joinHandsTopContent_oneIcon {
		width: 45rpx;
		height: 45rpx;
		margin-right: 24rpx;
	}

	#joinHandsBox .joinHandsTopContent_item:nth-child(1) {
		align-items: flex-start;
	}

	#joinHandsBox .joinHandsTopContent_item:nth-child(1) .joinHandsTopContentRight>p:nth-child(1) {
		color: #000;
		font-weight: bold;
		margin-bottom: 29rpx;
	}

	#joinHandsBox .navigation_icon {
		width: 26rpx;
		height: 24rpx;
		margin-left: 22rpx;
	}
	#joinHandsBox .joinHandsBottomItem{
		display: flex;
		align-items: center;
		margin-bottom: 46rpx;
	}
	#joinHandsBox .joinHandsBottomItem:last-child{
		align-items:flex-start;
	}
	#joinHandsBox .joinHandsBottomItem:last-child .inputTitle{
		margin-top: 16rpx;
	}
	#joinHandsBox .inputTitle{
		width: 80rpx;
		text-align: right;
		font-size: 26rpx;
		color: #666;
		margin-right: 12rpx;
	}
	#joinHandsBox .input{
		width: 530rpx;
		height: 57rpx;
		box-sizing: border-box;
		border: 1rpx solid #bfbfbf;
		padding: 10rpx;
	}
	#joinHandsBox .textarea{
		height: 277rpx;
		
	}
	#joinHandsBox .joinHandsBottomContent{
		overflow: hidden;
	}
	#joinHandsBox .submitBtn{
		width: 366rpx;
		height: 87rpx;
		background: #0168b7;
		color: #fff;
		font-size: 30rpx;
		text-align: center;
		line-height: 87rpx;
		margin:45rpx auto 108rpx;
	}
</style>
<template>
	<view id="joinHandsBox">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="bg_height"></view>
		<view class="joinHandsTopBox content">
			<p class="joinHandsTitle">联系我们</p>
			<view class="joinHandsTopContent">
				<view class="joinHandsTopContent_item">
					<image src="./images/phone.png" class="joinHandsTopContent_oneIcon" mode=""></image>
					<view class="joinHandsTopContentRight">
						<p>益课后服务热线</p>
						<p>0312-88888888</p>
					</view>
				</view>
				<view class="joinHandsTopContent_item">
					<image src="./images/mailbox.png" class="joinHandsTopContent_oneIcon" mode=""></image>
					<view class="joinHandsTopContentRight">
						<p>aaaaaaa@126.com</p>
					</view>
				</view>
				<view class="joinHandsTopContent_item">
					<image src="./images/Url.png" class="joinHandsTopContent_oneIcon" mode=""></image>
					<view class="joinHandsTopContentRight">
						<p>aaaaaaa@126.com</p>
					</view>
				</view>
				<view class="joinHandsTopContent_item">
					<image src="./images/address.png" class="joinHandsTopContent_oneIcon" mode=""></image>
					<view class="joinHandsTopContentRight">
						aaaaaaa@126.com<image src="./images/navigation.png" class="navigation_icon"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="bg_height"></view>
		<view class="joinHandsBottomBox content">
			<p class="joinHandsTitle">在线留言</p>
			<view class="joinHandsBottomContent">
				<view class="joinHandsBottomItem">
					<p class="inputTitle">姓名</p>
					<input type="text" maxlength="5" class="input" v-model="name" />
				</view>
				<view class="joinHandsBottomItem">
					<p class="inputTitle">手机号</p>
					<input type="number" maxlength="11" class="input" v-model="phone" />
				</view>
				<view class="joinHandsBottomItem">
					<p class="inputTitle">邮箱</p>
					<input type="text" class="input" v-model="mail" />
				</view>
				<view class="joinHandsBottomItem">
					<p class="inputTitle">内容</p>
					<textarea class="textarea input" v-model="content"></textarea>
				</view>
			</view>
			<view class="submitBtn" @click="submit">
				提交
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
				name: '',
				phone: '',
				mail: '',
				content: ''
			}
		},
		methods: {
			submit() {
				const {
					name,
					phone,
					mail,
					content
				} = this
				if (!name.length) {
					uni.showToast({
						title: '请输入姓名',
						duration: 2000,
						icon: 'none',
					});
					return false;
				} else {
					if (name.length > 5 || name.length < 2) {
						uni.showToast({
							title: '姓名长度在 2 到 5 个字',
							duration: 2000,
							icon: 'none',
						});
						return false;
					}
				}
				if (!phone.length) {
					uni.showToast({
						title: '请输入手机号码',
						duration: 2000,
						icon: 'none',
					});
					return false;
				} else {
					if (!(/^1[3456789]\d{9}$/.test(phone))) {
						uni.showToast({
							title: '手机号码有误，请重填',
							duration: 2000,
							icon: 'none',
						});
						return false;
					}
				}
				if (!mail.length) {
					uni.showToast({
						title: '请输入邮箱号码',
						duration: 2000,
						icon: 'none',
					});
					return false;
				} else {
					if (!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(mail))) {
						uni.showToast({
							title: '邮箱号码有误，请重填',
							duration: 2000,
							icon: 'none',
						});
						return false;
					}
				}
				if (!content.length) {
					uni.showToast({
						title: '请输入留言内容',
						duration: 2000,
						icon: 'none',
					});
					return false;
				} else {
					if (content.length < 6) {
						uni.showToast({
							title: '留言内容最少6个字',
							duration: 2000,
							icon: 'none',
						});
						return false;
					}
				}
				// 提交
				
			}
		}
	}
</script>
