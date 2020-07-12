'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
 const{
	 user_id,
	 label=[]
 }=event
	await db.collection('user').doc(user_id).update({
		label_ids:label
	})
  //返回数据给客户端
  return {
	  code:200,
	  mag:'数据更新成功'
  }
};
