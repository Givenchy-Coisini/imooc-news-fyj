'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
const dbCmd = db.command
exports.main = async (event, context) => {

	const {
		user_id, //用户id
		article_id, //文章id
		content, //内容
		comment_id = '', //评论id
		reply_id = "", //子回复id
		is_reply = false //是否子回复
	} = event
	let user = await db.collection('user').doc(user_id).get()
	user = user.data[0]
	//获取当前文章信息
	const article = await db.collection('article').doc(article_id).get()
	//获取文章的所有评论
	const comments = article.data[0].comments
	let commentObj = {
		comment_id: getId(5), //评论id
		comment_content: content, //评论内容
		create_time: new Date().getTime(), //创建时间
		is_reply: is_reply, //区分当前是子回复还是主回复
		author: {
			author_id: user._id, //作者id
			author_name: user.author_name, //作者名字
			avatar: user.avatar, //作者头像
			professional: user.professional //专业
		},
		replys: []
	}

	if (comment_id === '') {
		//评论文章
		commentObj.replys = []
		commentObj = dbCmd.unshift(commentObj)
	} else {
		//对回复进行评论
		//huoqu 评论的索引
		let commentIndex = comments.findIndex(item => item.comment_id === comment_id)

		let commentAuthor = ''
		if (is_reply) {
			//子回复
			commentAuthor=comments[commentIndex].replys.find(item=>item.comment_id===reply_id)
		} else {
			//主回复
			//获取作者信息
			commentAuthor = comments.find(item => item.comment_id === comment_id)
		}
		commentAuthor = commentAuthor.author.author_name
		commentObj.to = commentAuthor

		//更新回复
		commentObj = {
			[commentIndex]: {
				replys: dbCmd.unshift(commentObj)
			}
		}

	}
	await db.collection('article').doc(article_id).update({
		comments: commentObj
	})
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据返回成功'
	}
};


//由于数据库中的id是自动生成的，但是在我们自己设定的一条记录里面是不会自动生成的，所以需要我们手动生成
function getId(length) {
	return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
}
