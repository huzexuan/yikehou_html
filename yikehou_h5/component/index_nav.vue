<template>
	<view class="index_menu">
		<ul>
			<li>
				<navigator url="/pages/course/index" class="noticeBtn" hover-class="none" open-type="navigate">
					<image src="./images/menu01.png" class="index_menu_icon"></image>
					<p>全部课程</p>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/AboutUs/index" class="noticeBtn" hover-class="none" open-type="navigate">
					<image src="./images/menu02.png" class="index_menu_icon"></image>
					<p>关于我们</p>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/new/index" class="noticeBtn" hover-class="none" open-type="navigate">
					<image src="./images/menu03.png" class="index_menu_icon"></image>
					<p>新闻资讯</p>
				</navigator>
			</li>
			<li>
				<navigator url="/pages/AboutUs/joinHands" class="noticeBtn" hover-class="none" open-type="navigate">
					<image src="./images/menu04.png" class="index_menu_icon"></image>
					<p>合作共赢</p>
				</navigator>
			</li>
		</ul>
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

<style>
	/* 菜单 */
	.index_menu {
		padding: 50rpx 0;
	}

	.index_menu ul {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.index_menu ul li p {
		text-align: center;
		line-height: 1;
		margin-top: 26rpx;
	}

	.index_menu_icon {
		width: 121rpx;
		height: 121rpx;
	}
</style>
