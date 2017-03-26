<template>
<div class="product col-sm-3">
	<router-link :to="{ path: 'product/' + slug }" append>
		<img :src="image_url(image_path)" alt="name">
		<div class="product product_name" v-text='name'></div>
		<div class="product product_price" v-text='price'></div>
	</router-link>
</div>
</template>

<script>
export default {
	name: 'product_element',
	props: ['name', 'image_path', 'options', 'slug', 'price', 'old_price'],
	data(){
		return { }
	}
}
</script>

<style lang="scss">
 .product {
 	border: 1px solid black;
	height: 305px;
 }
</style>
