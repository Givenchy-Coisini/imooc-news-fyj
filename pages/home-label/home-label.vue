<template>
	<view class="label">
		<view class="label_box">
			<view class="label-header">
				<view class="label-title">
					我的标签
				</view>
				<view class="label-edit" @click="edit">
					{{isEdit?'完成':'编辑'}}
				</view>
			</view>
			<uni-load-more v-if="loading" iconType="snow" status="loading"></uni-load-more>
			<view v-if="!loading" class="label-content">
				<view v-for="(item,index) in labelList" :key="item._id" class="label-content-item">
					{{item.name}}
					<uni-icons @click="close(index)" v-if="isEdit" class="icons-close" type="clear" size="20" color="red"></uni-icons>
				</view>
			</view>
			<view v-if="labelList.length===0&&!loading" class="no-data">
				当前没有数据
			</view>
		</view>
		<!-- 推荐标签 -->
		<view class="label_box">
			<view class="label-header">
				<view class="label-title">
					标签推荐
				</view>
			</view>
			<uni-load-more v-if="loading" iconType="snow" status="loading"></uni-load-more>
			<view v-if="!loading" class="label-content">
				<view v-for="(item,index) in list" :key="item._id" class="label-content-item" @click="add(index)">
					{{item.name}}
				</view>
			</view>
			<view v-if="list.length===0&&!loading" class="no-data">
				当前没有数据
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEdit: false,
				labelList: [],
				list: [],
				loading: true
			}
		},
		onLoad() {
			//自定义事件
			// /this.$emit()->uni.$emit()
			//自定义事件只能 在打开的页面触发  
			this.getLabel()
		},
		methods: {
			edit() {

				if (this.isEdit) {
					this.isEdit = false
					this.setUpdateLabel(this.labelList)
				} else {
					this.isEdit = true
				}
			},
			setUpdateLabel(label) {
				let newArrayIds = []
				label.forEach(item => {
					newArrayIds.push(item._id)
				})
				uni.showLoading()
				console.log(newArrayIds)
				this.$api.update_label({
					label: newArrayIds
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: '更新成功',
						icon: 'none'
					})
					uni.$emit('labelChange')
				})
			},
			getLabel() {
				this.loading = true
				this.$api.get_label({
					type: 'all'
				}).then((res) => {
					const {
						data
					} = res
					this.labelList = data.filter(item => item.current) //遍历来过滤，只显示current为true的数据
					this.list = data.filter(item => !item.current)
					this.loading = false
					console.log(res)
				})
			},
			add(index) {
				if (!this.isEdit) return
				this.labelList.push(this.list[index])
				this.list.splice(index, 1)
			},
			close(index) {
				this.list.push(this.labelList[index])
				this.labelList.splice(index, 1)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;

	}

	.label {
		.label_box {
			background-color: #fff;
			margin-bottom: 10px;

			.label-header {
				display: flex;
				font-size: 14px;
				justify-content: space-between;
				color: #666;
				padding: 10px 15px; //内边距
				border-bottom: 1px #f5f5f5 solid;

				.label-edit {
					color: #30b33a;
					font-weight: bold;
				}
			}

			.label-content {
				display: flex;
				flex-wrap: wrap;
				padding: 15px 15px; //子元素内容和这个父亲元素边框的距离(内边距)
				padding-top: 0;

				.label-content-item {
					position: relative;
					padding: 2px 5px;
					margin-top: 12px; //每一个item之间的外边距
					margin-right: 10px;
					border: 1px #666 solid;
					font-size: 14px;
					color: #666;
					border-radius: 5px;

					.icons-close {
						position: absolute; //子绝父相  定位
						right: -8px;
						top: -8px;
						background-color: #fff;
						border-radius: 50%;
					}
				}
			}
		}
	}

	.no-data {
		text-align: center;
		padding: 50px 0;
		color: #999;
		font-size: 14px;
		width: 100%;
	}
</style>
