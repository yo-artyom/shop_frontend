<template>
<form class="form-horizontal" role="form" id="new_line_item" @submit.prevent='submitForm' accept-charset="UTF-8" method="post">
	<div class="option" v-for='option in options'>
		<div class="option-name">
			{{ option.name}}
			<select name="option_ids" v-model.lazy='option.slug' required>
				<option v-for='value in option.values' :value="value.id"> {{ value.name }} </option>
			</select>
		</div>
	</div>
	<slot name='price'></slot>
	<button class='btn'>Добавить в корзину</button>
</form>
</template>

<script>
import Cookies from 'js-cookie'
import { mapActions } from 'vuex'
export default {
	name: 'line-item-form',
	props: ['id', 'options'],
	data(){ 
		return {
			selectedOptions: [] 
		}
	},
	methods: {
		...mapActions(['addToCart']),
		submitForm(){
			const product_id = this.id
			const option_ids = this.optionIds()
			this.addToCart({ product_id, option_ids })
		},
		optionIds(){
			return this.options.map((opt) => opt.values[0].id)
		}
	},
	watch: {
		options: function(val) {
			this.selectedOptions = val.map((opt) => opt.values[0].id)	
		}
	}
}	
</script>

<style></style>
