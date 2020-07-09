'use strict';
const db = uniCloud.database()//获取数据库的引用
exports.main = async (event, context) => {
	let list = await db.collection('article').get()
  //返回数据给客户端
  return list
};
