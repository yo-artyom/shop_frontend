<template>
<div class="cart">
	<div class="cart-outside" @mouseover="cartVisible = true">
			<span class="cart-outside__total-price">
				{{ this.totalPrice }}
			</span>
		<div class="cart-outside__icon">
		</div>
	</div>

	<div class="cart-inside" v-show='cartVisible' @mouseover="cartVisible = true" @mouseout="cartVisible = false">
		<div class="row cart-inside line-item" v-for='line_item in lineItems'>

			<div class="cart-inside line_item line_item__name">
				{{ line_item.product.name }}
			</div>
			
			<div class="cart-inside line_item line_item__price">
				{{ line_item.product.price }}
			</div>
			
			<div class="cart-inside line_item line_item__options">
				<div class="cart-inside line_item line_item__option" v-for='(values, option) in line_item.product.options'>
					{{option}} -- {{values.join(' ')}}
				</div>
			</div>

			<div class="cart-inside line_item line_item__remove" @click='removeFromCart(line_item)'>
				<span>X</span>	
			</div>

		</div>
	</div>

</div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
	name: 'cart',
	data() {
		return {
			cartVisible: false	
		}
	},
	created() {
		this.getCartId()
		this.getLineItems()
	},
	computed: {
		...mapGetters([
			'cartId',
			'lineItems',
			'totalPrice'
		])
	},
	methods: {
		...mapActions([
				'getCartId',
				'getLineItems',
				'addToCart',
				'removeFromCart'
			])
	}
}
</script>

<style lang="scss">
</style>
