<template>
	<view class="comment-box">
		<view class="comment-header">
			<view class="comment-header_logo">
				<image :src="comments.author.avatar" mode="aspectFill"></image>
			</view>
			<view class="conmment-header_info">
				<view class="title">
					{{comments.author.author_name}}
				</view>
				<view class="">
					{{comments.create_time}}
				</view>
			</view>
		</view>
		<view class="comment-content">
			<view>
				{{comments.comment_content}}
			</view>
			<view class="comment-info">
				<view class="comments-button" @click="commentsReply(comments)">
					回复
				</view>
			</view>
			<view class="comment-reply" v-for="item in comments.replys" :key="item.comment_id">
				<comments-box :comments="item"></comments-box>
			</view>
		</view>

	</view>
</template>

<script>
	//递归组件的用法
	import commentsBox from '@/components/comments-box/comments-box.vue'
	export default {
		name: "comments-box",
		components: {
			commentsBox
		},
		props: {
			comments: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			commentsReply(comment) {
				this.$emit('reply', comment)
			}
		}
	}
</script>

<style lang="scss">
	.comment-box {
		margin: 15px 0; //外边距  

		.comment-header {
			display: flex;

			.comment-header_logo {
				flex-shrink: 0;
				width: 30px;
				height: 30px;
				border-radius: 5px;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.conmment-header_info {
				display: flex;
				flex-direction: column;
				padding-left: 15px;
				font-size: 12px;
				color: #999;
				line-height: 1;

				.title {
					margin-bottom: 10px;
					font-size: 14px;
					color: #333;
				}
			}
		}

		.comment-content {
			margin-top: 10px;
			color: #000;
			font-size: 14px;

			.comment-info {
				margin-top: 15px;
				display: flex;

				.comments-button {
					padding: 2px 10px;
					font-size: 12px;
					color: #999;
					border-radius: 20px;
					border: 1px #ccc solid;
				}
			}

			.comment-reply {
				display: flex;
				margin: 15px 0;
				padding: 0 10px;
				border: 1px #eee solid;
			}
		}
	}
</style>
