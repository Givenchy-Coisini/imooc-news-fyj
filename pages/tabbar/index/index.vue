<template>
	<view class="home">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<!--自定义选项卡-->
		<tab :list="tabList" @tab="tab" :tabIndex="tabIndex"></tab>
		<view class="home-list">
			<list :tab="tabList" @change="change" :activeIndex="activeIndex"></list>
			<!-- :tab是要传过去的值，tablist是data中的值 -->
		</view>
	</view>
</template>

<script>
	// easyCom   components/组件名/组件名.vue 局部引入
	// import navbar from '@/components/navbar/navbar.vue'
	export default {
		// components:{
		// 	navbar
		// },
		data() {
			return {
				tabList: [],
				tabIndex: 0,
				activeIndex: 0
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			change(current) {
				this.tabIndex = current //list组件传过来的current 传给tab组件
				this.activeIndex = current
			},
			tab({
				data,
				index
			}) { //传过来是一个对象
				this.activeIndex = index //tab组件传过来的index传给list组件
			},
			getLabel() {
				this.$api.get_label().then(res => {
					const {
						data
					} = res //里面没有result了 只有data
					data.unshift({
						name: '全部'
					})
					this.tabList = data
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;

		.home-list {
			flex: 1;
			box-sizing: border-box;
		}
	}
</style>
