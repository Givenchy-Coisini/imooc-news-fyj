'use strict';
const db = uniCloud.database()
//操作符
const dbCmd = db.command
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {
		user_id,
		article_id
	} = event
	const userinfo = await db.collection('user').doc(user_id).get()
	const article_id_ids = userinfo.data[0].article_likes_ids
	let dbCmdFuns=null
	if(article_id_ids.includes(article_id)){//如果包含的话就删除
		dbCmdFuns=dbCmd.pull(article_id)
	}else{//不包含就添加
		dbCmdFuns=dbCmd.addToSet(article_id)
	}
	await db.collection('user').doc(user_id).update({
		article_likes_ids: dbCmdFuns
	})
	//返回数据给客户端
	return {
		code:200,
		msg:'数据返回成功',
		data:userinfo.data[0]
	}
};
