import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from '../constants/ActionTypes'

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.sizes[action.size].sources.map(source => {
        if(source.id == action.source){
          source.stock = source.stock-1;
        } else {
          source
        }
      })
      return { ...state }
    case REMOVE_FROM_CART:
      state.sizes[action.size].sources.map(source => {
        if(source.id == action.source){
          source.stock = source.stock+action.quantity;
        } else {
          source
        }
      })
      return { ...state }

    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const sizes = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      let sizes = [];
      action.products.map((product)=>{
        for(let size in product.sizes){
            if(sizes.indexOf(size) == -1){
                sizes.push(size);
            }
        }
      });
      return sizes;
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds,
  sizes
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getProductBySource = (state, id, size, source) => {
  const sourceData = state.byId[id].sizes[size].sources.reduce((obj, source) => {
    obj[source.id] = source
    return obj
  }, {})

  return ({
    id: id,
    title: state.byId[id].title,
    image: state.byId[id].image,
    size: size,
    source: sourceData[source]
  })
}

export const getVisibleProducts = (state, filter) => {
  let visibleProducts = state.visibleIds.map(id => getProduct(state, id));

  if(filter != undefined){
    if(filter.stock){
      visibleProducts = visibleProducts.filter(products => products.instock == (filter.stock == 'instock') : false)
    }

    if(filter.source != 'all') {
      visibleProducts = visibleProducts.filter(product => {
        if(Object.keys(product.sizes).length > 0) { 
          return Object.keys(product.sizes).find(size => {
            return product.sizes[size].sources.find(source => {
              if(source.source_type == filter.source){
                return true;
              } else {
                return false;
              }
            })
          })
        }
      })
    }

    if(filter.size.indexOf('all') == -1) {
      visibleProducts = visibleProducts.filter(product => {
        return Object.keys(product.sizes).find(size => 
          (filter.size.indexOf(size) !== -1)
        )
      })
    }


  }

  return visibleProducts
  
}
