<template>
	<view class="content">
		<!-- 自定义组件 -->
		<navbar></navbar>
		<view class="content" v-for="item in 100">
			{{item}}
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
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.navbar{
		width: 100%;
		height: 45px;
		background-color:$mk-base-color ;
	}
</style>
 