<template>
	<swiper :current="activeIndex" class="home-swiper" @change="change">
		<!-- @change事件 监听滑动-->
		<swiper-item v-for="(item,index) in tab" :key="index" class="swiper-item">
			<list-item :list="list"></list-item>
			<!--有几个tab就有几个  list-item -->
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		components: {
			listItem
		},
		props: {
			tab: { //在这里接收一下传过来的值
				type: Array,
				default () {
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				list: []
			};
		},

		//onLoad只能在页面中写  组件中用的是created 组件中是不能用onLoad的
		created() {
			this.getList()
		},
		methods: {
			change(e) {
				const {
					current
				} = e.detail
				this.$emit('change', current)
			},
			getList() {
				this.$api.get_list({
					name: 'get_list'
				}).then(res => {
					const {data} = res
					this.list=data
				})
			}
		}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;

			.list-scroll {
				height: 100%;
			}
		}
	}
</style>
