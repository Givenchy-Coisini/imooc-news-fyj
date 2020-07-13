<template>
	<view class="comment-box">
		<view class="comment-header">
			<view class="comment-header_logo">
				<image :src="comment.author.avatar" mode="aspectFill"></image>
			</view>
			<view class="conmment-header_info">
				<view class="title">
					{{comment.author.author_name}}
				</view>
				<view class="">
				{{comment.create_time}}
				</view>
			</view>
		</view>
		<view class="comment-content">
			<view class="">
				{{comment.comment_content}}
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			comment:{
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
.comment-box{
	margin: 15px 0;//外边距  
	.comment-header{
		display: flex;
		.comment-header_logo{
			flex-shrink: 0;
			width: 30px;
			height: 30px;
			border-radius: 5px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.conmment-header_info{
			display: flex;
			flex-direction: column;
			padding-left: 15px;
			font-size: 12px;
			color: #999;
			line-height: 1;
			.title{
				margin-bottom: 10px;
				font-size: 14px;
				color: #333;
			}
		}
	}
	.comment-content{
		margin-top: 10px;
		color: #000;
		font-size: 14px;
	}
}
</style>
