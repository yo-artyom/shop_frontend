import axios from 'axios'
import Cookies from 'js-cookie'
import routes from '../../api/routes'

const state = {
	id: -1,
	line_items: []
}

const getters = {
	totalPrice: state => {
		return state.line_items.reduce((prev, item) => { 
			return ( prev + parseInt(item.product.price) * parseInt(item.quantity) )
		}, 0)	
	},
	lineItems: state => state.line_items,
	cartId: state => state.id
}

const actions = {
	getCartId(context) {
		axios.post(routes.carts, { cart_id: Cookies.get('cart_id') })
			.then( (resp) =>  { 
				const cart_id = resp.data.cart_id 
				Cookies.set('cart_id', cart_id, { expires: 7 });
				context.commit('setId', cart_id)
			})
	},
	getLineItems(context) {
		axios.get(routes.line_items).then( (resp) => { 
							const line_items = resp.data;
							context.commit('setLineItems', line_items)
						})
	},
	addToCart(context, data){
		axios.post(routes.line_items, {
		 	product_id: data.product_id,
		 	option_ids: data.option_ids
		}).then((resp) => {
		  const line_item = resp.data 
			context.commit('addLineItem', line_item)
		}).catch( (err) => console.log(err) )
	},
	removeFromCart(context, data) {
		axios.delete(routes.line_item(data.id))
		.then((resp) => {
			const line_item = resp.data;
			context.commit('removeLineItem', line_item)
		})
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
		if ( l == -1 ){
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
