<template>
	<view class="tab">
		<scroll-view class="tab_scroll" scroll-x="true">
			<view class="tab_scroll_box">
				<view v-for="(item,index) in list" :key="index" class="tab_scroll_item">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<!-- 图标不能滚动所以在scroll-view之外写 -->
		<view class="tab_icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return[]
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
	.tab {
		display: flex;
		background-color: white;
		border-bottom: 1px #f5f5f5 solid;
		width: 100%;
		box-sizing: border-box;

		.tab_scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;

			.tab_scroll_box {
				display: flex;
				align-items: center;
				height: 45px;
				flex-wrap: nowrap;//控制tab_scroll_item的内容是否换行
				box-sizing: border-box;

				.tab_scroll_item {
					flex-shrink: 0;
					padding: 0 10px;
					color: #333;
					font-size: 14px;
				}
			}
		}

		.tab_icons {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
			&::after{
				content: '';
				position: absolute;
				top:12px;
				bottom: 12px;
				left:0;
				width: 1px;
				background-color: #ddd;
			}
		}
	}
</style>
