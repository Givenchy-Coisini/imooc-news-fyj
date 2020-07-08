<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<!--自定义选项卡-->
		<tab :list="tabList"></tab>
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
				tabList:[]
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel() {
				uniCloud.callFunction({
					name: 'get_label',
				}).then(res=>{//回调的方式，或者promise的方式
					const{result} =res
					this.tabList=result.data
					console.log(this.tabList)
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
