<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view class="navbar-search">
				<view class="navbar-search_iocn">
			
				</view>
				<view class="navbar-search_text">
					uniapp、vue
				</view>
			</view>
		</view>
		<view style="height: 45px;">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.navbar {
		.navbar-fixed{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding: 0 15px;
			// 上下0  左右15px
			height: 45px;
			box-sizing: border-box; //盒内显示
			background-color: $mk-base-color;
			
			.navbar-search {
				display: flex;
				align-items: center;
				width: 100%;
				padding: 0 10px;
				height: 30px;
				border-radius: 30px;
				background-color: #fff;
			
				.navbar-search_iocn {
					width: 10px;
					height: 10px;
					border: 1px red solid;
					margin-right: 10px;
				}
			
				.navbar-search_text {
					font-size: 12px;
					color: #999;
				}
			}
		}
		
	}
</style>
