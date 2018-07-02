import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../constants/ActionTypes'

const initialState = {
  products: {},
}

const products = (state = initialState.products, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [action.source] : {
          productId: action.productId,
          size: action.size,
          source: action.source,
          quantity: ( 
            state[action.source] == undefined ? 0 : state[action.source].quantity
          ) + 1
        }
      }
    case REMOVE_FROM_CART:
      delete state[action.source];
      return { ...state}
    default:
      return state
  }
}

export const getCartProducts = state => state.products

const cart = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        products: products(state.products, action),
      }
  }
}

export default cart
