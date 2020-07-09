<template>
	<swiper :current="activeIndex" class="home-swiper" @change="change">
		<!-- @change事件 监听滑动-->
		<swiper-item v-for="(item,index) in tab" :key="index" class="swiper-item">
			<list-item :list="listCatchData[index]"></list-item>
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
				list: [],
				listCatchData: {} //缓存
			};
		},
		watch: {
			tab(newVal) {//监听tab
				if (newVal.length === 0) return
				this.getList(this.activeIndex)
			}
		},
		//onLoad只能在页面中写  组件中用的是created 组件中是不能用onLoad的
		created() {
			//tab还没有赋值 因为另外一个也要请求云函数

		},
		methods: {
			change(e) {
				const {
					current
				} = e.detail
				this.$emit('change', current)
				if(!this.listCatchData[current]||this.listCatchData[current].length===0){
				this.getList(current)
				}
			},
			//是个空数组  外面传进来的  也是请求云函数回来的，list组件渲染的时候，tab可能还没有拿到
			getList(current) {
				this.$api.get_list({
					name: this.tab[current].name
				}).then(res => {
					
					console.log(res)
					const {
						data
					} = res
					//data是云函数请求回来的值，赋给了this.list,这样的话我们就还能看到旧的值
					// this.list=data
					//获取current直接传进来
					// this.listCatchData[current] = data
					//数据的懒加载 发生了变化，去帮我刷新一下
					this.$set(this.listCatchData, current, data)
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
