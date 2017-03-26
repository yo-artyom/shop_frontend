import axios from 'axios'
import Cookies from 'js-cookie'

const state = {
	id: -1,
	line_items: []
}

const getters = {
	totalPrice: state => {
		return state.line_items.reduce((prev, item) => { 
			return (prev + parseInt(item.product.price)) 
		}, 0)	
	},
	lineItems: state => state.line_items,
	cartId: state => state.id
}

const actions = {
	getCartId(context) {
		axios.post(`${API_URL}/carts`, { cart_id: Cookies.get('cart_id') })
			.then( (resp) =>  { 
				const cart_id = resp.data.cart_id 
				Cookies.set('cart_id', cart_id, { expires: 7 });
				context.commit('setId', cart_id)
			})
	},
	getLineItems(context) {
		axios.get(`${API_URL}/carts/${Cookies.get('cart_id')}/line_items`).then( (resp) => { 
							const line_items = resp.data;
							context.commit('setLineItems', line_items)
						})
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
	},

	totalCount(state) {
		state.line_items.reduce((prev, item) => {prev + item.price}, 0)	
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
