import { combineReducers } from 'redux'
import products, * as fromProducts from './products'
import cart, * as fromCart from './cart'
import filter, * as fromfilter from './filter'

export default combineReducers({
  products,
  cart,
  filter
})

const getProductBySource = (state, id, size, source) => 
	fromProducts.getProductBySource(state.products, id, size, source)

const getCartProductsTest = state => fromCart.getCartProducts(state.cart)

export const getCartProducts = state => {
	const cartProducts = getCartProductsTest(state);
	return (
	 	Object.keys(cartProducts).map(sourceId => {
	 		return ({...getProductBySource(
		 			state, 
		 			cartProducts[sourceId].productId,
		 			cartProducts[sourceId].size,
		 			cartProducts[sourceId].source
		 		),
	 			quantity: cartProducts[sourceId].quantity
	 		})
 		})
	)
}

export const getTotal = state => {
	const cartProducts = getCartProducts(state);
	return cartProducts
	 		.map(product => 
	 			(product.source.discounted_price * product.quantity)
	 		).reduce((total, subtotal) => 
      	total + subtotal,
      	0
    	).toFixed(2)
}

export const getFilterSizes = state => {
	let sizes;
	state.products.map((product)=>{
        for(let size in product.sizes){
            if(sizes.indexOf(size) == -1){
                sizes.push(size);
            }
        }
    });
	return sizes;
}


  