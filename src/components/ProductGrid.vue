<template>
	<div>
		<div class="product-grid" v-for='p in products'>
			<product-element :name='p.name' :image_path='p.image_path' 
											:options='p.options' :slug='p.slug' :price='p.price'
											:old_price='p.old_price'>		
			</product-element>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import ProductElement from './ProductElement.vue';
export default {
	name: 'product_grid',
	props: ['products'],
	data(){
		return {
		}
	},
	components: {ProductElement}
}
</script>

<style lang="scss">
</style>
