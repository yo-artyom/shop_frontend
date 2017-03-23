const state = {
	id: -1,
	line_items: []
}

const getters = {
	total_count: state => {
		return 1488
	},
	line_items: state => state.line_items
}

const actions = {
	getCartId(context) {
		const cart_id = 100;
		context.commit('setId', cart_id);
	},
	getLineItems(context) {
		const line_items =  window.mock_line_items
		context.commit('setLineItems', line_items)
	},
	addToCart(context, data){
		// axios.post('/line_items', data).then((resp) => {
		// const line_item = resp.data 
		// }
		const line_item = { id: 4,
			quantity: 2,
			product: {
				price: 150,
				name: 'item-2',
				options: {size: 'xs', color: 'red'},
				image: 'https://uspehkrasoty.ru/system/images/pictures/000/004/153/thumb/6874_2.jpg?1489616460'
			}
		}
		context.commit('addLineItem', line_item)
	},
	removeFromCart(context, data) {
		// axios.delete('/line_items', data)
		// 						.then((_resp) => {
		// 							const line_item = data.line_item
		// 						})
		const line_item = [{id: 2}]
		context.commit('removeLineItem', line_item)
	}
}

const mutations = {
	setId (state,id) {
		state.id = id
	},
	
	setLineItems(state, line_items) {
		state.line_items = line_items
	},
	
	addLineItem(state, line_item){
		const l = state.line_items.findIndex((li, _i, _a) => {
			return (li.id == line_item.id)
		})
		if (l == -1 ){
			state.line_items.push(line_item)
		}
		else {
			state.line_items[l].quantity = line_item.quantity;
		}
	},	

	removeLineItem(state, line_item){
		const l = state.line_items.findIndex((li, _i, _a) => {
			return (li.id == line_item.id)
		})
		state.line_items.splice(l, 1)
	}
}

export default {
	  state,
	  getters,
	  actions,
	  mutations
}


window.mock_line_items = [
	{ id: 1, 
	 quantity: 1,
	 product: {
		 price: 100,
		 name: 'item-1', 
		 options: {size: 'xs', color: 'red'},
		 image: 'https://uspehkrasoty.ru/system/images/pictures/000/004/153/thumb/6874_2.jpg?1489616460'
	 }
	 },
	{ id: 2,
		quantity: 1,
		product: {
			price: 150,
			name: 'item-2',
			options: {size: 'xs', color: 'red'},
			image: 'https://uspehkrasoty.ru/system/images/pictures/000/004/153/thumb/6874_2.jpg?1489616460'
		}
	}
]
