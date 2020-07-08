export default function $http(options){
	const {
		url,
		data
	}=options
	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name: url,
			data
		}).then(res => { //回调的方式，或者promise的方式
			if (res.result.code === 200) {
				reslove(res.result)
			}else{
				reject(res.result)
			}
		}).catch((err)=>{
			reject(err)
		})
	})
}