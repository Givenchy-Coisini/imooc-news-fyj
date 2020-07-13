'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
const dbCmd = db.command
exports.main = async (event, context) => {

	const {
		user_id, //用户id
		article_id, //文章id
		content //内容
	} = event
	let user = await db.collection('user').doc(user_id).get()
	user=user.data[0]
	let commentObj={
		comment_id:getId(5),//评论id
		comment_content:content,//评论内容
		create_time:new Date().getTime(),//创建时间
		author:{
			author_id:user_id,//作者id
			author_name:user.author_name,//作者名字
			avatar:user.avatar,//作者头像
			professional:user.professional//专业
		},
		replys:[]
	}
	
	await db.collection('article').doc(article_id).update({
		comments:dbCmd.unshift(commentObj)
	})
	//返回数据给客户端
	return {
		code:200,
		msg:'数据返回成功'
	}
};


//由于数据库中的id是自动生成的，但是在我们自己设定的一条记录里面是不会自动生成的，所以需要我们手动生成
function getId(length){
	return Number(Math.random().toString().substr(3,length)+Date.now()).toString(36)
}