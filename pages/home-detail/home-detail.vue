<template>
	<view class="detail">
		<view class="detail-title">
			{{formData.title}}
		</view>
		<view class="detail-header">
			<view class="detail-header_logo">
				<image :src="formData.author.avatar" mode="aspectFill"></image>
			</view>
			<view class="detail-header_content">
				<view class="detail-header_content_title">
					{{formData.author.author_name}}
				</view>
				<view class="detail-header_content_info">
					<text>{{formData.create_time}}</text>
					<text>{{formData.browse_count}}浏览</text>
					<text>{{formData.thumbs_up_count}}点赞</text>
				</view>
			</view>

			<button type="default" class="detail-header-button" @click="follow(formData.author.id)">
				{{formData.is_author_like?'取消关注':'关注'}}
			</button>

		</view>
		<view class="detail_content">
			<view class="detail-html">
				<u-parse :content="formData.content" :noData="noData"></u-parse>
			</view>
			<view class="detail-comments">
				<view class="comment-title">
					最新评论
				</view>
				<view class="comment-content" v-for="item in commentsList" :key="item.comment_id">
					<comments-box :comments="item" @reply="reply"></comments-box>
				</view>
			</view>
		</view>
		<view class="detail-bottom">
			<view class="detail-bottom-input" @click="openComents">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#f07373"></uni-icons>
			</view>
			<view class="detail-bottom-icons">
				<view class="detail-bottom-icons_box" @click="open">
					<uni-icons type="chat" size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detail-bottom-icons_box" @click="likeTap(formData._id)">
					<uni-icons :type="formData.is_like?'heart-filled':'heart'" size="22" color="#f07373"></uni-icons>
				</view>
				<view class="detail-bottom-icons_box" @click="thumbupTap(formData._id)">
					<uni-icons :type="formData.is_thumbs_up?'hand-thumbsup-filled':'hand-thumbsup'" size="22" color="#f07373"></uni-icons>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" :maskClick="false">
			<!-- ref类似于document.getelementById-->
			<view class="popup-wrap">
				<view class="popup-header">
					<text class="popup-header_item" @click="closeComent">取消</text>
					<text class="popup-header_item" @click="submit">发布</text>
				</view>
				<view class="popup-content">
					<textarea class="popup-textarea" maxlength="200" fixed="true" v-model="comentsValue" placeholder="请输入评论内容" />
					<view class="popup-count">
						{{comentsValue.length}}/200
					</view>
					</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uParse from '../../components/feng-parse/parse.vue'
	
	export default {
		components: {
			uParse
		},
		onLoad(query) { //内容的预加载
			this.formData = JSON.parse(query.params) //字符串转对象
			console.log('xxxxxx', this.formData)
			this.getDetail()
			this.getComments()
		},
		data() {
			return {
				formData: {

				},
				noData: '<p style="text-align:center;color:#666">详情加载中...</p>',
				//输入框的值
				comentsValue:'',
				commentsList:[],
				replyFormData:{}
			}
		},
		methods: {
			open(){
				uni.navigateTo({
					url:'../detail-comments/detail-comments?id='+this.formData._id
				})		
					},
			openComents(){//打开评论发布窗口
				this.$refs.popup.open()
			},
			closeComent(){
				this.$refs.popup.close()
			},
			reply(e){
				this.replyFormData={
					"comment_id":e.comments.comment_id,
					"is_reply":e.is_reply
				}
				if(e.comments.reply_id){
					this.replyFormData.reply_id=e.comments.reply_id
				}
				console.log(this.replyFormData)
				this.openComents()
			},
			submit(){
				console.log('发布');
				if(!this.comentsValue){
					uni.showToast({
						title:'请输入评论内容',
						icon:'none'
					})
					return
				}
				this.setUpdateComment({content:this.comentsValue,...this.replyFormData})
			},
			setUpdateComment(content){//发布评论
			const formdata={
				article_id:this.formData._id,
				...content
			}
			// console.log(formdata)
			// return
			uni.showLoading()
				this.$api.update_coments(formdata).then(res=>{
					console.log(res)
					uni.hideLoading()
					uni.showToast({
						title:'评论发布成功',
						icon:'none'
					})
					this.getComments()
					this.closeComent()
					this.replyFormData={}
					this.comentsValue=''
				})
			},
			getDetail() {
				this.$api.get_detail({
					article_id: this.formData._id
				}).then(res => {
					const {
						data
					} = res
					this.formData = data
					console.log('sss',this.formData)
				})
			},
			//请求评论内容
			getComments(){
				this.$api.get_comments({
					article_id: this.formData._id
				}).then(res=>{
					console.log(res)
					const{data}=res
					this.commentsList=data
				})
			},
			follow(author_id){
				 this.setUpdateAuthor(author_id)
			},
			//关注作者
			setUpdateAuthor(author_id){
				uni.showLoading()
				this.$api.updata_author({
					author_id
				}).then(res=>{
					uni.hideLoading()
					this.formData.is_author_like=!this.formData.is_author_like
					uni.showToast({
						title:this.formData.is_author_like?'关注作者成功':'取消关注作者',
						icon:'none'
					})
				})
			},
			//收藏文章
			likeTap(article_id){
				this.setUpdateLike(article_id)
			},
			setUpdateLike(article_id){
				uni.showLoading()
				this.$api.update_like({
					article_id
				}).then(res=>{
					uni.hideLoading()
					this.formData.is_like=!this.formData.is_like
					uni.$emit('update_article')
					uni.showToast({
						title:this.formData.is_like?'收藏成功':'取消收藏',
						icon:'none'
					})
				})
			},
			//点赞
			thumbupTap(article_id){
				console.log('点赞成功')
				this.setUpdateThumb(article_id)
			},
			setUpdateThumb(article_id){
				uni.showLoading()
				this.$api.update_thumbup({
					article_id
				}).then(res=>{
					uni.hideLoading()
					this.formData.is_thumbs_up=true
					this.formData.thumbs_up_count++
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		padding: 15px 0;
		padding-bottom: 54px;
	}

	.detail-title {
		padding: 0 15px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}

	.detail-header {
		display: flex;
		align-items: center;
		margin-top: 10px;
		padding: 0 15px;

		.detail-header_logo {
			flex-shrink: 0; //图片不压缩
			width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.detail-header_content {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			font-size: 12px;
			padding-left: 10px;

			.detail-header_content_title {
				font-size: 14px;
				color: #333;
			}

			.detail-header_content_info {
				color: #999;

				text {
					margin-right: 10px;
				}
			}
		}
		.detail-header-button{
			flex-shrink: 0;
			height: 30px;
			font-size: 12px;
			background-color: $mk-base-color;
			color: #fff;
	}
}
	.detail_content {
		min-height: 500px;

		.detail-html {
			padding: 15px;
		}
		.detail-comments{
			margin-top: 30px;
			.comment-title{
				padding: 10px 15px;
				font-size: 14px;
				color: #666;
				border-bottom: 1px #f5f5ff solid;
			}
			.comment-content{
				padding: 0 15px;
				border-bottom:1px #eee solid ;
			}
		}
	}

	.detail-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 44px;
		border-top: 1px red solid;
		background-color: #fff;
		box-sizing: border-box;

		.detail-bottom-input {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-left: 10px; //里面的子元素的边距 也就是item之间的
			padding: 0 10px;
			width: 100%;
			height: 30px;
			border: 1px #ddd solid;
			border-radius: 5px;

			text {
				color: #999;
				font-size: 14px;
			}
		}

		.detail-bottom-icons {
			display: flex;
			flex-shrink: 0;
			padding: 0 10px;

			.detail-bottom-icons_box {
				position: relative;
				display: flex;
				justify-content: center;
				width: 44px;
				align-items: center;
			}
		}
	}
	.popup-wrap{
		background-color: #fff;
		.popup-header{
			display: flex;
			justify-content: space-between;
			font-size: 14px;
			color: #666;
			border-bottom: 1px #f5f5f5 solid;
			.popup-header_item{
				height: 50px;
				line-height: 50px;
				padding: 0 15px;
			}
		}
		.popup-content{
			width: 100%;
			padding: 15px 15px;
			box-sizing: border-box;
			.popup-textarea{
				width: 100%;
				height: 200px;
			}
			.popup-count{
				font-size: 12px;
				display: flex;
				justify-content: flex-end;
				color: #999;
			}
		}
	}
</style>
