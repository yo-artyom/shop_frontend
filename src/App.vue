<template>
<div class="application">
	<div class="container">
		<c-header></c-header>
		<router-view></router-view>
		<c-footer></c-footer>
	</div>
</div>
</template>

<script>
import CHeader from './layouts/CHeader.vue'
import CFooter from './layouts/CFooter.vue'
import Category from './components/Category.vue'
export default {
  name: 'app',
	components: { Category, CHeader, CFooter }
}
</script>

<style lang="scss">
</style>
