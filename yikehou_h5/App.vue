<script>
	import WOW from './static/wow.js'
	import $ from './static/jquery.min.js'
	export default {
		onLaunch: function() {
			console.log("App Launch");
		},
		onShow: function() {
			console.log("App Show");
		},
		onHide: function() {
			console.log("App Hide");
		}
	};
</script>

<style lang="scss">
	@import "./static/iconfont.css";
	@import "./static/animate.min.css";

	#loginBox .uni-input-input {
		color: #fff;
	}

	#loginBox uni-checkbox .uni-checkbox-input {
		width: 20rpx;
		height: 20rpx;
		background: #14184b;
		border: 1rpx solid #0498db;
	}

	#loginBox uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:before {
		font-size: 20rpx;
	}

	#loginBox .uni-label-pointer {
		color: #fff;
		font-size: 20rpx;
	}

	* {
		font-size: 24rpx;
		color: #333;
	}

	.content {
		width: 680rpx;
		margin: auto;
	}

	/* 顶部高度 */
	.top_height {
		width: 100%;
		height: 87rpx;
	}

	// 有背景色的撑高
	.bg_height {
		width: 100%;
		background: #f4f4f4;
		height: 10rpx;
	}

	.ellipse {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.ellipse2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	input {
		outline: none;
		border: none;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
	}

	.flex_bg {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 1;
	}
</style>
