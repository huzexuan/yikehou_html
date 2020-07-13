<style>
	#newIndex .newTabBox {
		text-align: center;
		margin: 55rpx 0 33rpx;
	}

	#newIndex .newTabBox li:nth-child(1) {
		display: inline-block;
		margin-right: 109rpx;
	}

	#newIndex .newTabBox li>p:last-child {
		width: 81rpx;
		height: 3rpx;
		background: #fff;
		margin: 11rpx auto 0;
	}

	#newIndex .newTabBox li.active p {
		color: #0168b7;
	}

	#newIndex .newTabBox li.active>p:last-child {
		background: #0168b7;
	}

	#newIndex .newListBox {
		padding-bottom: 30rpx;
		min-height: 732rpx;
	}

	#newIndex .newListBox li {
		display: block;
		padding: 27rpx 0;
		border-bottom: 1rpx solid #e9e9e9;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#newIndex .newListBox li .newItemImg {
		width: 222rpx;
		height: 140rpx;
		background: #000;
	}

	#newIndex .newListBox li .newItemContent {
		width: calc(100% - 235rpx);
	}

	#newIndex .newListBox li .newItemContent .newItemContentTitle {
		line-height: 40rpx;
	}

	#newIndex .newListBox li .newItemContent .newItemContentTime {
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
				<li v-for="(item,index) in tabList" :key="index" @click="newTab(item.id)" :class="item.id == tabId ?'active':''">
					<p>{{item.title}}</p>
					<p></p>
				</li>
			</ul>
			<ul class="newListBox">
				<li v-for="(item,index) in list" :key="index" @click="newDelBtn(item.id)">
					<image :src="item.img" mode="" class="newItemImg"></image>
					<view class="newItemContent">
						<p class="newItemContentTitle ellipse2" v-html="item.description">{{item.description}}</p>
						<p class="newItemContentTime">{{item.updated_at.substring(0,10)}}</p>
					</view>
				</li>
			</ul>
		</view>
		<view class="bg_height"></view>
		<page_footer></page_footer>
	</view>
</template>

<script>
	import API from "../../config/api.js"
	export default {
		data() {
			return {
				tabId: 4,
				tabList: [{
						id: 4,
						title: "最新公告"
					},
					{
						id: 5,
						title: "公司新闻"
					}
				],
				list:[]
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "益课后-新闻资讯"
			})
			this.init()
		},
		methods: {
			async init() {
				let _res = await API.postJson('Article', {
					"cate": this.tabId
				});
				if (_res.code == 0) {
					this.list = _res.data.data;
				}
			},
			newTab(id) {
				this.tabId = id
				this.init()
			}
		}
	}
</script>
