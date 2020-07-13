'use strict';
const db = uniCloud.database()
const $ =db.command.aggregate
exports.main = async (event, context) => {
 const {
	 user_id,
	 article_id
 }=event
 
 
 let list =await db.collection('article')
 .aggregate()
 .match({
	 _id:article_id
 })
 .unwind('$comments')//将文档进行拆分
 .project({
	 _id:0,
	 comments:1
 })
 .replaceRoot({
 	newRoot:'$comments'//将comments作为根节点
 })
 .end()
  //返回数据给客户端
  return {
	  code:200,
	  msg:'数据请求成功',
	  data:list.data
	  
  }
};
