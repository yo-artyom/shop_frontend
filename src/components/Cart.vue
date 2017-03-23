<template>
<div class="cart">
	<div class="cart-outside">

		<div class="cart_icon">
		</div>
		
		<div class="cart_total">
		</div>

	</div>

	<div class="cart-inside">
	</div>

</div>
</template>

<script>
import { mapMutations,mapActions, mapGetters } from 'vuex'
export default {
	name: 'cart',
	created() {
		this.$store.dispatch('getCartId')
		this.$store.dispatch('getLineItems')
	},
	computed: mapGetters([
		'line_items',
	]),
	methods: mapActions([
		'addToCart',
		'removeFromCart'
	])
}
</script>

<style lang="scss">
</style>
