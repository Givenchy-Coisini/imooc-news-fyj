<template>
	<view class="list-author">
		<view class="list-author_image">
			<image :src="item.avatar" mode="aspectFill"></image>
		</view>
		<view class="list-author_content">
			<view class="list-author_title">
				{{item.author_name}}
			</view>
			<view class="list-author_content_Des">
				<view class="list-author_content_des_label">
					{{item.professional}}
				</view>
				<view class="list-author-content_des_info">
					<text>发帖 {{item.article_ids.length}}</text>
					<text>粉丝{{item.fans_count}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
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
	.list-author {
		display: flex;
		padding: 10px 0;
		margin: 0 15px;//大盒子和外面的距离
		border-radius: 5px;
		box-sizing: border-box;
		border-bottom: 1px #f5f5f5 solid;

		.list-author_image {
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			overflow: hidden;

			image {
				height: 100%;
				width: 100%;
			}
		}

		.list-author_content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;//内边距 大盒子里面的小盒子之间的距离
			width: 100%;
			.list-author_title{
				position: relative;
				padding-right: 30px;
				font-size: 14px;
				color: #333;
				font-weight: bold;
				line-height: 1.2;
			}
			.list-author_content_Des{
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.list-author_content_des_label{
					color: #666;
				}
				.list-author-content_des_info{
					color: #999;
					line-height: 1.5;
					text:first-child{
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
