<template>
<form class="form-horizontal" role="form" id="new_line_item" @submit.prevent='submitForm' accept-charset="UTF-8" method="post">
	<div class="option" v-for='option in options'>
		<div class="option-name">
			{{ option.slug}}
			<select v-model='selectedOptions[option.slug]' required>
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
			selectedOptions: {},
			test: 1
		}
	},
	methods: {
		...mapActions(['addToCart']),
		submitForm() {
			const product_id = this.id
			const option_ids = this.selectedOptionIds()
			this.addToCart({ product_id, option_ids })
		},
		selectedOptionIds() {
			return Object.keys(this.selectedOptions)
				.map(val => this.selectedOptions[val])
		}
	},
	watch: {
		options: function(val) {
			let default_options = {}
			val.map((opt) => { default_options[opt.slug] = opt.values[0].id })
			this.selectedOptions = default_options
		}
	}
}	
</script>

<style lang='scss'></style>
