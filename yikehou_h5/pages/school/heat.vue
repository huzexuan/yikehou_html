<style>
	#heatBox .heatClassBox {
		width: 100%;
		box-sizing: border-box;
		padding: 0 18rpx;
	}

	#heatBox .heatClassBox ul {
		display: flex;
		flex-wrap: wrap;
	}

	#heatBox .heatClassBox ul li {
		width: 136rpx;
		height: 47rpx;
		background: #f4f4f4;
		color: #666;
		display: block;
		margin: 36rpx 0 14rpx 30rpx;
		text-align: center;
		line-height: 47rpx;
	}

	#heatBox .heatClassBox ul li.active {
		color: #fff;
		background: #0168b7;
	}

	#heatBox .heatClassBox ul li:nth-child(4n+1) {
		margin-left: 0;
	}

	#heatBox .heatListBox {
		min-height: 726rpx;
	}

	#heatBox .heatListBox .heatItem {
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

	#heatBox .heatListBox .heatItem:last-child {
		margin-bottom: 150rpx;
	}

	#heatBox .heatListBox .heatItem .heatItemIcon {
		width: 50rpx;
		height: 54rpx;
		box-sizing: border-box;
		background: url(images/heat02.png)no-repeat 100% 100%;
		background-size: 100% 100%;
		font-size: 22rpx;
		text-align: center;
		font-weight: bold;
		color: #fff;
	}

	#heatBox .heatListBox .heatItem:nth-child(1) .heatItemIcon,
	#heatBox .heatListBox .heatItem:nth-child(2) .heatItemIcon,
	#heatBox .heatListBox .heatItem:nth-child(3) .heatItemIcon {
		background: url(images/heat01.png) no-repeat 100% 100%;
		background-size: 100% 100%;
	}

	#heatBox .heatListBox .heatItem:nth-child(1) .heatItemR,
	#heatBox .heatListBox .heatItem:nth-child(2) .heatItemR,
	#heatBox .heatListBox .heatItem:nth-child(3) .heatItemR {
		color: #f41c21;
	}

	#heatBox .heatListBox .heatItem .heatItemL {
		display: flex;
		align-items: center;
	}

	#heatBox .heatListBox .heatItem .heatItemL p {
		font-size: 26rpx;
		margin-left: 16rpx;
	}

	#heatBox .heatListBox .heatItem .heatItemR {
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
					<li v-for="(item,index) in gradeList" :key="index" :class="gradeId == item.id ?'active':''" @click="gradeTab(item.id)">{{item.title}}</li>
				</ul>
			</view>
			<view class="heatListBox">
				<view class="heatItem" v-for="(item,index) in reduList" :key="index">
					<view class="heatItemL">
						<view class="heatItemIcon">{{index+1}}</view>
						<p>{{item.title}}</p>
					</view>
					<view class="heatItemR">报名人数：{{item.number}}</view>
				</view>
			</view>
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
				gradeList: [],
				gradeId: '',
				reduList: []
			}
		},
		async onLoad() {
			await this.init()
			this.list()
		},
		methods: {
			async init() {
				let _res = await API.postJson('NianjiList', {
					"cate": 3,
					"limit": 4,
					"page": 1
				});
				if (_res.code == 0) {
					this.gradeList = _res.data;
					this.gradeId = _res.data[0].id;
				}
			},
			async list() {
				let _res = await API.postJson('seeDegree', {
					"token": JSON.parse(sessionStorage.getItem('user')).token,
					"nianji": this.gradeId
				});
				if (_res.code == 0) {
					this.reduList =_res.data[0] !== undefined  ? _res.data[0].list : []
				}
			},
			gradeTab(id) {
				this.gradeId = id
				this.list()
			},

		}
	}
</script>
