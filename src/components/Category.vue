<template>
	<div class="content">
		<breadcrumbs :breadcrumbs='category.breadcrumbs'></breadcrumbs>
		<div class='product_category'>
			<product-grid :products='category.products'> </product-grid>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import ProductGrid from './ProductGrid.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import routes from '../api/routes'
export default {
	name: 'category',
	data(){
		return {
			category: []
		}
	},
	created() {
		this.getCategory()
	},
	methods: {
		getCategory() {
			axios.get( routes.catalog.category(this.$route.params.slug) )
				.then( (resp) => this.category = resp.data )
		}
	},
	components: {ProductGrid, Breadcrumbs},
	watch: {
		'$route': 'getCategory' 
	}
}
</script>

<style lang="scss">
</style>
