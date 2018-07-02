import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = (productId, size, source) => ({
  type: types.ADD_TO_CART,
  productId,
  size,
  source
})

export const addToCart = (productId, size, source) => (dispatch, getState) => {
  if (getState().products.byId[productId].sizes[size].sources[source].stock > 0) {
    let sourceId = getState().products.byId[productId].sizes[size].sources[source].id;
    dispatch(addToCartUnsafe(productId, size, sourceId));
  }
}


export const removeFromCart = (productId, size, source, quantity) => ({
  type: types.REMOVE_FROM_CART,
  productId,
  size,
  source,
  quantity
})


export const setfilter = filter => ({
  type: types.SET_FILTER,
  filter
})

export const onChangeStock = (e) => (dispatch, getState) => {
  const state = getState();
  state.filter.stock = e.target.value;
  dispatch(setfilter(state.filter));
}

export const onChangeSource = (e) => (dispatch, getState) => {
  const state = getState();
  state.filter.source = e.target.value;
  dispatch(setfilter(state.filter));
}

export const onChangeSize = (e) => (dispatch, getState) => {
  let size = [];
  for (var i = 0; i < e.target.options.length; i++) {
    if (e.target.options[i].selected) {
      size.push(e.target.options[i].value);
    }
  }
  const state = getState();
  state.filter.size = size;
  dispatch(setfilter(state.filter));
}