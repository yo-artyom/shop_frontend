<template>
<form class="form-horizontal" role="form" id="new_line_item" @submit.prevent='submitForm' accept-charset="UTF-8" method="post">
	<div class="option" v-for='option in options'>
		<div class="option-name">
			{{ option.name}}
			<select name="line_item[option_ids][]" v-model.lazy='option.slug' required>
				<option v-for='value in option.values' :value="value.id"> {{ value.name }} </option>
			</select>
		</div>
	</div>
	<button class='btn'>Добавить в корзину</button>
</form>
</template>

<script>
import axios from 'axios'
export default {
	name: 'line-item-form',
	props: ['id', 'options'],
	data(){
		return {
		}
	},
	methods: {
		submitForm(){
			axios.post(API_URL + '/line_items', Object.assign({option_ids: this.optionIds()},{id: this.id}))
				.then((resp) => console.log(resp));
		},
		optionIds(){
			return this.options.map((opt) => opt.values[0].id)
		}
	}
}	
</script>

<style></style>
