<template>
		<view class="scroll">
			<scroll-view class="list_scroll" scroll-y="true" @scrolltolower="loadmore">
				<view>
					<slot></slot>
				</view>
			</scroll-view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			loadmore(){
				this.$emit('loadmore')
			}
		}
	}
</script>

<style lang="scss">
.scroll{
		flex:1;
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
		.list_scroll{
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
