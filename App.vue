<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
	/* 引入 uView Ultra 基础样式 */
	@import "@/uni_modules/uview-ultra/theme.scss";
	@import "@/uni_modules/uview-ultra/index.scss";
</style>