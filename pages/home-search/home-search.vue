<template>
	<view class="home">
		<navbar :isSearch="true"></navbar>
		<view class="home-list">
			<view class="label_box">
				<view class="label_header">
					<text class="label-title">搜索历史</text>
					<text class="label-clear">清空</text>
				</view>
				<view class="label-content">
					<view v-for="item in 10" class="label-content-item">
						{{item}}内容
					</view>
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
	page {
		display: flex;
		height: 100%;
		background-color: #f5f5f5;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		border: 1px red solid;

		.label_box {
			background-color: #fff;

			margin-bottom: 10px;

			.label_header {
				display: flex;
				justify-content: space-between;
				font-size: 16px;
				color: #666;
				padding: 10px 15px;
				border-bottom: 1px #f5f5f5 solid;

				.label-title {
					color: $mk-base-color;
				}

				.label-clear {
					color: #30b33a;
					font-weight: bold;
				}

			}

			.label-content {
				display: flex;
				flex-wrap: wrap;
				padding: 15px;
				padding-top: 0;
				.label-content-item{
				 padding: 2px 10px;
				 margin-top: 12px;
				 border: 1px #666 solid;
				 font-size: 14px;
				 color: #666;
				 margin-right: 10px;
				 border-radius: 5px;
			}}
		}
	}
</style>
