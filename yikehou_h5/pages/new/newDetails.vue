<style>
	#newDetails .content {
		min-height: 750rpx;
	}

	#newDetails .newTitle {
		font-size: 30rpx;
		font-weight: bold;
		color: #000;
		text-align: center;
		padding: 50rpx 0 20rpx;
	}

	#newDetails .newTime {
		color: #999;
		text-align: center;
		margin-bottom: 50rpx;
	}
</style>
<template>
	<view id="newDetails">
		<view class="top_height"></view>
		<page_head></page_head>
		<view class="bg_height"></view>
		<view class="content">
			<p class="newTitle ellipse">{{detail.title}}</p>
			<p class="newTime">{{detail.author ? ' 文章作者：'+ detail.author:''}} 发布时间：{{detail.updated_at}}</p>
			<view v-html="detail.content">{{detail.content}}</view>
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
				detail: {}
			}
		},
		onLoad(option) {
			this.init(option.id)
		},
		methods: {
			async init(id) {
				let _res = await API.postJson('ArticleDetail', {
					"id": id
				});
				if (_res.code == 0) {
					this.detail = _res.data;
				}
			}
		}
	}
</script>
