'use strict';
const db = uniCloud.database() //获取数据库的引用
const $=db.command.aggregate
exports.main = async (event, context) => {
	const {
		user_id,
		type
	} = event
	let matchObj={}
	if(type!=='all'){
		matchObj={
			current:true
		}
	}
	// let label = await db.collection('label').get()
	let userinfo = await db.collection('user').doc(user_id).get()
	userinfo = userinfo.data[0]
	//用户表中会有一个 label_ids=['label._id']  给我们返回一个数组
	let label = await db.collection('label').aggregate()  //只需要查询当前记录的id  是否存在ids中
		.addFields({//给每一个记录加了一个current字段
			current:$.in(['$_id',$.ifNull([userinfo.label_ids,[]])])
		})
		.match(matchObj)
		.end()
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: label.data
	}
};
