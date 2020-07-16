<template>
	<view class="follow">
		<!-- 导航切换 -->
		<view class="follow-tab">
			<view class="follow-tab_box">
				<!-- 动态去添加这个类 -->
				<view class="follow-tab-item " :class="{active:activeIndex===0}" @click="tab(0)">
					文章
				</view>
				<view class="follow-tab-item" :class="{active:activeIndex===1}" @click="tab(1)">
					作者
				</view>
			</view>
		</view>
		<view class="follow-list">
			<swiper class="follow-list_swiper" :current="activeIndex" @change="change">
				<swiper-item>
					<list-scroll>
						<uni-load-more v-if="lists.length===0&&!articleShow" iconType="snow" status="loading"></uni-load-more>
						<list-card v-for="item in lists" :key="item._id" types="follow" :item="item"></list-card>
						<view class="no-data" v-if="articleShow">
							没有收藏文章
						</view>
					</list-scroll>
				</swiper-item>
				<swiper-item>
					<list-scroll>
						<list-author v-for="item in authorLists" :key="item.id" :item="item"></list-author>
					<view class="no-data" v-if="followShow">
						没有关注作者
					</view>
					</list-scroll>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				lists: [],
				articleShow: false,
				authorLists: [],
				followShow:false
			}
		},
		onLoad() {
			//自定义事件只能在打开的页面触发
			uni.$on('update_article', () => {
				console.log('guanzhu')
				this.getFollow()
			})
			uni.$on('update_author',()=>{
				this.getAuthor()
			})
			this.getFollow()
			this.getAuthor()
		},
		methods: {
			change(e) {
				const current = e.detail.current
				this.activeIndex = current
			},
			tab(index) {
				console.log(index)
				this.activeIndex = index
			},
			getFollow() {
				this.$api.get_follow().then(res => {
					console.log(res)
					const {
						data
					} = res
					this.lists = data
					this.articleShow = this.lists.length === 0 ? true : false
				})
			},
			getAuthor() {
				this.$api.get_author().then(res => {
					console.log(res)
					const {
						data
					} = res
					this.authorLists = data
					this.followShow=this.authorLists.length===0?true:false
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		display: flex;
		height: 100%;
	}

	.follow {
		// height: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;
		box-sizing: border-box;

		.follow-tab {
			height: 30px;
			padding: 10px 20px;
			border-bottom: 1px #f5f5f5 solid;

			.follow-tab_box {
				display: flex;
				width: 100%;
				height: 100%;
				border-radius: 5px;
				border: 1px $mk-base-color solid;

				.follow-tab-item {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 14px;
					color: #666;

					&:first-child {
						border-right: 1px $mk-base-color solid;
					}

					&.active {
						color: $mk-base-color;
					}
				}
			}
		}

		.follow-list {
			flex: 1;

			.follow-list_swiper {
				height: 100%;

				.swiper-item {
					height: 100%;
				}
			}
		}
	}

	.no-data {
		font-size: 14px;
		padding: 50px;
		color: #999;
		text-align: center;
	}
</style>
