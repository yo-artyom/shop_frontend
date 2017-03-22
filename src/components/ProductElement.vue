<template>
<div class="product col-sm-3">
	<img :src="image_url()" alt="name">
	<div class="product_name" v-text='name'></div>
</div>
</template>

<script>
export default {
	name: 'product_element',
	props: ['name', 'image_path', 'options'],
	data(){
		return { }
	},
	methods: {
		image_url() {
			return API_URL + this.image_path;
		}
	}
}
</script>

<style lang="scss">
 .product {
 	border: 1px solid black;
	height: 305px;
 }
</style>
