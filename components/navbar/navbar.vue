<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight+'px'}"> </view>
			<!-- 导航栏 -->
			<view class="navbar_context" :style="{height:navbarHeight+'px',width:windowWidth+'px'}" @click.stop="open" :class="{search:isSearch}">
				<view  v-if="isSearch" class="navbar_content_search_icons" @click="bick">
					<uni-icons type="back" size="22" color="#fff"></uni-icons>
				</view>
				<view v-if="!isSearch" class="navbar-search">
					<view class="navbar-search_iocn">
						<uni-icons type="search" size="18" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">
						uniapp、vue
					</view>
				</view>
				<view v-else class="navbar-search">
					<!-- 搜索页面显示 -->
					<input class="navbar-search_text" type="text" v-bind:value="val" placeholder="请输入您要搜索的内容" @input="inputChange" />
					<!-- 	 <input class="navbar-search_text" type="text" v-model="val"
					  placeholder="请输入您要搜索的内容" />{{val}} -->
				</view>
			</view>

		</view>
		<view :style="{height:statusBarHeight+navbarHeight+'px'}">

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isSearch: { //判断这个组件是在搜索页还是在首页
				type: Boolean,
				default: false
			},
			value:{
				type:[String,Number],
				default:''
			}
		},
		data() {
			return {
				statusBarHeight: 20,
				navbarHeight: 45,
				windowWidth: 375,
				val: ''
			};
		},
		watch:{
			value(newVal){
				this.val=newVal
			}
		},
		created() {
			//获取手机系统信息
			const info = uni.getSystemInfoSync()
			//设置状态栏高度
			this.statusBarHeight = info.statusBarHeight
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
		},
		methods: {
			open() {
				if (this.isSearch) return
				uni.navigateTo({
					url: '/pages/home-search/home-search'
				})
			},
			inputChange(e) {
				const {
					value
				} = e.detail
				//input 是子组件中的input
				this.$emit('input', value)
			},
			bick(){
				// uni.navigateBack({
				
				// })
				uni.switchTab({
					url:'/pages/tabbar/index/index'
				})
			}
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
						width: 100%;
						font-size: 14px;
						color: #999;
					}
				}

				&.search {
					padding-left: 0;

					.navbar_content_search_icons {
						margin-left: 10px;
						margin-right: 10px;
					}

					.navbar-search {
						border-radius: 5px;
					}
				}
			}
		}
	}
</style>
