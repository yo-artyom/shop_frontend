<template>
	<div class="content">
		<breadcrumbs :breadcrumbs='product.breadcrumbs'></breadcrumbs>
		<div class="product">
			
			<div class="col-md-5 col-xs-12 col-sm-12 ">
				<img v-for='src in product.images' :src="image_url(src.main)">
			</div>
			
			<div class="col-md-4 col-sm-12 col-xs-12">
			
				<div class="product_desc">
					<h1 class="product-title" itemprop="name"> {{ product.name }}</h1>
					<div class="product_desc_manufacturer">
						Производитель: 
						<span v-if='product.manufacturer' v-text='product.manufacturer.name'></span>
					</div>
					<div class="product_article">
						Артикул: {{ product.article }}
					</div>
					<div class="product_composition">
						Состав: {{ product.composition }}
					</div>
				</div>

				<div class="product_options">
					<h2>Доступные варианты</h2>
					<line-item-form :id='product.id' :options='product.options'>
						<template slot='price'> {{ product.price }} </template>
					</line-item-form>
				</div>
			
			</div>
			
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Breadcrumbs from './Breadcrumbs.vue'
import LineItemForm from './product/LineItemForm.vue'
import routes from '../api/routes'
export default {
	name: 'product',
	data(){
		return {
			product: {}
		}
	},
	created() {
		this.getProduct()
	},
	methods: {
		getProduct() {
			axios.get(routes.catalog.product( this.$route.params.slug, this.$route.params.id ))
				.then( (resp) => this.product = resp.data )
				.catch( (error) => console.log(error) )
		}
	},
	components: { Breadcrumbs, LineItemForm },
	watch: {
		'$route': 'getProduct' 
	}
}
</script>

<style lang="scss">
</style>
