<template>
	<view class="icons" @click.stop="likeTap">
		<!-- 阻止冒泡 -->
		<uni-icons :type="like?'heart-filled':'heart'" size="20" color="#f07373"></uni-icons>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			},
			types:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				like: false
			};
		},
		watch:{
			item(newVal){
				this.like=this.item.is_like
			}
		},
		created() {
			this.like=this.item.is_like
		},
		methods: {
			likeTap() {
				this.like = !this.like
				this.setUpdateLike()
			},
			setUpdateLike() {
				uni.showLoading()
				this.$api.update_like({
					user_id: '5f04415c3057830001878b3c',
					article_id: this.item._id
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title:this.like?'收藏成功':'取消收藏',
						icon:'none'
					})
					uni.$emit('update_article',this.types)
					console.log(res)
				}).catch(()=>{
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
	.icons {
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;

	}
</style>
