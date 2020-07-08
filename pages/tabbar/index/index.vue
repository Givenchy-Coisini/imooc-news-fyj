<template>
	<view class="home">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<!--自定义选项卡-->
		<tab :list="tabList" @tab="tab"></tab>
		
		<list-scroll>
			<list-card mode="base"></list-card>
			<list-card mode="image"></list-card>
			<list-card mode="column"></list-card>
		</list-scroll>
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
				tabList: []
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			tab({
				data,
				index
			}) { //传过来是一个对象
				console.log(data, index)
			},
			getLabel() {
				this.$api.get_label({
					name: 'get_label',
				}).then(res => {
					const {
						data
					} = res //里面没有result了 只有data
					this.tabList = data
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	display: flex;
}
.home{
	display: flex;
	flex-direction: column;
	flex:1;
	overflow: hidden;
}
</style>
