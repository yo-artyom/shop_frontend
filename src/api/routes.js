import Cookies from 'js-cookie'

export const API_URL = 'http://localhost:1488';

const url = (path) => { return API_URL + path }

export default {
	navigation: url('/navigation'), 
	carts: url('/carts'), 
	line_items: url(`/carts/${Cookies.get('cart_id')}/line_items`),
	line_item: (id) => { return url(`/carts/${Cookies.get('cart_id')}/line_items/${id}`) },

	category: (slug) => { return url(`/category/${slug}`) },

	catalog: {
		category: (slug) => { return url(`/catalog/${slug}`) },
		product: (category, slug) => { return url(`/catalog/${category}/product/${slug}`) }
	} 
}	

