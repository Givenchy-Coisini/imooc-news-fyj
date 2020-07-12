//vuex 状态管理
//1.引入vue
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	//数据源
	state: { //vuex并不是持久化的保存，每次刷新页面会从这个空数组开始
		historyLists: uni.getStorageSync("_history") || []
	},
	mutations: {
		SET_HISTORY_LIST(state, history) { //第一参数是state  可以直接获取到我们的数据源  第二个参数是我们要传进来的history
			state.historyLists = history //数据源的historyList = 我们传进来的history
		},
		CLEAR_HISTORY_LIST(state) {
			state.historyLists = []
		}
	},
	actions: { //异步的  修改我们mutations中的方法  页面调用的是  actions中的方法
		set_history({
			commit,
			state
		}, history) { //commit 去调用mutations中的方法  history是从客户端中传过来的
			let list = state.historyLists
			list.unshift(history)
			uni.setStorageSync('_history', list)
			commit('SET_HISTORY_LIST', list)
		},
		clear_history_list({
			commit
		}) {
			uni.removeStorageSync('_history')
			commit('CLEAR_HISTORY_LIST')
		}
	}
})

export default store
