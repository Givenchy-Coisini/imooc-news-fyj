'use strict';
const db = uniCloud.database()//获取数据库的引用
exports.main = async (event, context) => {
	let list = await db.collection('article').field({//指定一个字段 content为false不返回  true表示只返回这个字段
		content:false
	}).get()
  //返回数据给客户端
  return {
	  code:200,
	  msg:"数据返回成功",
	  data:list.data
	  }
};
