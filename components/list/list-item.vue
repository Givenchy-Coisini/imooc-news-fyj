<template>
	<list-scroll class="list-scroll">
	<list-card  :item="item" v-for="(item,index) in list" :key="item._id">
		
	</list-card>
	<uni-load-more iconType="snow" status="noMore"></uni-load-more>
	</list-scroll>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.list-scroll{
		height: 100%;
	}
</style>
