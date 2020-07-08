<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight+'px'}"> </view>
			<!-- 导航栏 -->
			<view class="navbar_context" :style="{height:navbarHeight+'px',width:windowWidth+'px'}">
				<view class="navbar-search">
					<view class="navbar-search_iocn">
						<uni-icons type="search" size="18" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">
						uniapp、vue
					</view>
				</view>
			</view>

		</view>
		<view :style="{height:statusBarHeight+navbarHeight+'px'}">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navbarHeight: 45,
				windowWidth: 375
			};
		},
		created() {
			//获取手机系统信息
			const info = uni.getSystemInfoSync()
			//设置状态栏高度
			this.statusBarHeight = info.statusBarHeight
			console.log(info)
			this.windowWidth = info.windowWidth
			//获取胶囊的位置

			//#ifndef H5||APP-PLUS||MP-ALIPAY
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(menuButtonInfo)
			//(胶囊底部高度-状态栏高度)+(胶囊顶部高度-状态栏的高度)=导航栏的高度
			this.navbarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (
				menuButtonInfo.top - info.statusBarHeight)
				console.log(this.navbarHeight)
			this.windowWidth = menuButtonInfo.left
			//#endif
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icons.css';

	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;

			.navbar_context {
				//这个相当于图标和搜索框的 父元素
				height: 45px;
				padding: 0 15px;
				// 上下0  左右15px
				box-sizing: border-box; //盒内显示
				display: flex;
				justify-content: center;
				align-items: center;

				.navbar-search {
					display: flex;
					align-items: center;
					width: 100%;
					padding: 0 10px;
					height: 30px;
					border-radius: 30px;
					background-color: #fff;

					.navbar-search_iocn {
						margin-right: 10px;
					}

					.navbar-search_text {
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
</style>
