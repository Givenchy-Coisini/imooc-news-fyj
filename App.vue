<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//请求接口，异步
			this.$api.get_user({
				user_id: '5f04415c3057830001878b3c'
			}).then(res => {
				const {
					data
				} = res
				
				this.$store.dispatch('set_userinfo',data)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'components/feng-parse/parse.css';
</style>
