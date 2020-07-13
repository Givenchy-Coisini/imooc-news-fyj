'use strict';
const db = uniCloud.database()
//聚合的操作符
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		user_id,
		article_id
	} = event
	let user = await db.collection('user').doc(user_id).get()
	user = user.data[0]
	let list = await db.collection('article')
		.aggregate()
		.addFields({ //给article表中添加字段
			//是否关注作者
			is_author_like: $.in(['$author.id', user.author_likes_ids]), //author.id  是否在第二个参数中的数组中
			//是否收藏文章
			is_like: $.in(['$_id', user.article_likes_ids]),
			//是否点赞
			is_thumbs_up: $.in(['$_id', user.thumbs_up_article_ids])
		})
		.match({ //筛选
			_id: article_id
		})
		.project({ //操作哪些字段返回，哪些字段不返回
			coments: 0
		}).end()
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据返回成功',
		data: list.data[0]
	}
};
