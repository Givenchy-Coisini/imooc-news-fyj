import store from '../../store/index.js'
export default function $http(options) {
	const {
		url,
		data
	} = options
	const dataObj = {
		user_id: store.state.userinfo._id,
		...data
	}
	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name: url,
			data: dataObj
		}).then(res => { //回调的方式，或者promise的方式
			if (res.result.code === 200) {
				reslove(res.result)
			} else {
				reject(res.result)
			}
		}).catch((err) => {
			reject(err)
		})
	})
}
