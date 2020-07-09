<template>
	<view>
		<!-- 基础卡片 -->
		<view  v-if="item.mode==='base'" class="list-card">
			<view class="listcard-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="list-card_title">
					<text>{{item.title}}</text>
				</view>
				<view class="list-card__des">
					<view class="list-card-content_des-label">
						<view class="list-card-content_des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="list-card-content_des-brower">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 多图卡片 -->
			<view  v-if="item.mode==='column'" class="list-card mode-column">
			<view class="listcard-content">
				<view class="list-card_title">
					<text>{{item.title}}</text>
				</view>
				<view class="listcard-image">
					<view  v-if="index<3" class="listcard-image__item" v-for="(item,index) in item.cover" :key="index">
						<image :src="item" mode="aspectFill"></image>
					</view>
				</view>
				<view class="list-card__des">
					<view class="list-card-content_des-label">
						<view class="list-card-content_des-label-item">
						{{item.classify}}
						</view>
					</view>
					<view class="list-card-content_des-brower">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>

		<!-- 大图卡片 -->
		<view v-if="item.mode==='image'"class="list-card mode-image">
			<view class="listcard-image">
				<image :src="item.cover[0]"mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="list-card_title">
					<text> {{item.title}}</text>
				</view>
				<view class="list-card__des">
					<view class="list-card-content_des-label">
						<view class="list-card-content_des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="list-card-content_des-brower">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.list-card {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color:#000000, $alpha:0.1);
		box-sizing: border-box;

		.listcard-image {
			width: 60px;
			height: 60px;
			overflow: hidden;
			border-radius: 5px;
			flex-shrink: 0;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.listcard-content {
			display: flex;
			flex-direction: column;
			padding-left: 10px;
			width: 100%;
			justify-content: space-between;

			.list-card_title {
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;

				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}

			.list-card__des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;

				.list-card-content_des-label {
					display: flex;

					.list-card-content_des-label-item {
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						color: $mk-base-color;
						border: 1px $mk-base-color solid;
					}
				}

				.list-card-content_des-brower {
					line-height: 1.5;
					color: #999;
				}
			}
		}

		&.mode-column {
			.listcard-content {
				width: 100%;
				padding-left: 0;
			}

			.listcard-image {
				display: flex;
				margin-top: 10px;
				height: 70px;
				width: 100%;

				.listcard-image__item {
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;

					&:first-child {
						margin-left: 0;
					}

					image {
						width: 100%;
						height: 100%;
					}
				}

			}

			.list-card__des {
				margin-top: 10px;
			}
		}

		&.mode-image {
			flex-direction: column;

			.listcard-image {
				width: 100%;
				height: 100px;
			}

			.listcard-content {
				padding-left: 0;
				margin-top: 10px;

				.list-card__des {
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>
