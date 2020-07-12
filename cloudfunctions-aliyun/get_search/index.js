'use strict';
const db = uniCloud.database() //获取数据库的引用
const $ =db.command.aggregate
exports.main = async (event, context) => {
	//接受分类通过分类去筛选数据
	const {
		user_id,value,
	} = event //解构赋值

	const userinfo= await db.collection('user').doc(user_id).get()
	const article_likes_ids=userinfo.data[0].article_likes_ids
	//聚合方式   更精细化的去进行处理数据，求和。分组，指定返回哪些操作
	const list = await db.collection('article').aggregate().addFields({
		is_like:$.in(['$_id',article_likes_ids])})
		.project({ //把指定的字段传递给下一个流水线
			content: false, //不去传递
		})
		.match({
			title:new RegExp(value)
		})
		//要跳过多少数据
		.end()
	return {
		code: 200,
		msg: "数据返回成功",
		data: list.data
	}
};
