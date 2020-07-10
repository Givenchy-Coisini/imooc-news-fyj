'use strict';
const db = uniCloud.database() //获取数据库的引用
exports.main = async (event, context) => {
	//接受分类通过分类去筛选数据
	const {
		name,page=1,pageSize=10
	} = event //解构赋值
	let matchObj = {}
	if (name !== '全部') {
		matchObj = {
			classify: name
		}
	}
	//聚合方式   更精细化的去进行处理数据，求和。分组，指定返回哪些操作
	const list = await db.collection('article').aggregate().match( //agg获取聚合操作的实例
			matchObj //match根据条件过滤文档
		)
		.project({ //把指定的字段传递给下一个流水线
			content: false //不去传递
		})
		//要跳过多少数据
		.skip(pageSize*(page-1))
		.limit(pageSize)
		.end()

	// let list = await db.collection('article').field({//指定一个字段 content为false不返回  true表示只返回这个字段
	// 	content:false
	// }).get()
	//返回数据给客户端
	return {
		code: 200,
		msg: "数据返回成功",
		data: list.data
	}
};
