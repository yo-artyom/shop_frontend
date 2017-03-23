<template>
<header>
	<div class="row">
		<div class="col-sm-4">
			<h2>Some text</h2>
		</div>
		<div class="col-sm-4">
			<router-link to='/'>
				<h1> Shop </h1>
			</router-link>
		</div>
		<div class="col-sm-4">
			<cart></cart>
		</div>
	</div>
	<navigation></navigation>
</header>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Cart from '../components/Cart.vue'
export default {
	name: 'c-header',
	components: { Navigation, Cart }
}
</script>

<style>
</style>
