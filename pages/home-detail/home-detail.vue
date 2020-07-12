<template>
	<view class="detail">
		<view class="detail-title">
			我是前端开发者，我要不要学习nodejs开发
		</view>
		<view class="detail-header">
			<view class="detail-header_logo">
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="detail-header_content">
				<view class="detail-header_content_title">
					me号天
				</view>
				<view class="detail-header_content_info">
					<text>2020-03-21 12:21:21</text>
					<text>123浏览</text>
					<text>345关注</text>
				</view>
			</view>
		</view>
		<view class="detail_content">
			详情数据
		</view>
		<view class="detail-bottom">
			<view class="detail-bottom-input">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#f07373"></uni-icons>
			</view>
			<view class="detail-bottom-icons">
				<view class="detail-bottom-icons_box">
					<uni-icons type="chat" size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detail-bottom-icons_box">
					<uni-icons type="heart" size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detail-bottom-icons_box">
					<uni-icons type="hand-thumbsup" size="22" color="#f07373"></uni-icons>
				</view>
			</view>
		</view>
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

<style lang="scss">
	.detail {
		padding: 15px 0;
		padding-bottom: 54px;
	}

	.detail-title {
		padding: 0 15px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}

	.detail-header {
		display: flex;
		align-items: center;
		margin-top: 10px;
		padding: 0 15px;

		.detail-header_logo {
			flex-shrink: 0; //图片不压缩
			width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.detail-header_content {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			font-size: 12px;
			padding-left: 10px;

			.detail-header_content_title {
				font-size: 14px;
				color: #333;
			}

			.detail-header_content_info {
				color: #999;

				text {
					margin-right: 10px;
				}
			}
		}
	}

	.detail_content {
		height: 1000px;
		border: 1px red solid;

	}

	.detail-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 44px;
		border-top: 1px red solid;
		background-color: #fff;
		box-sizing: border-box;
		.detail-bottom-input{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-left: 10px;//里面的子元素的边距 也就是item之间的
			padding: 0 10px;
			width: 100%;
			height: 30px;
			border: 1px #ddd solid;
			border-radius: 5px;
			text{
				color: #999;
				font-size: 14px;
			}
		}
		.detail-bottom-icons{
			display: flex;
			flex-shrink: 0;
			padding: 0 10px;
			.detail-bottom-icons_box{
				position: relative;
				display: flex;
				justify-content: center;
				width: 44px;
				align-items: center;
			}
		}
	}
</style>
