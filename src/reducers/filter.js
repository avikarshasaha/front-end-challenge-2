import {
  SET_FILTER,
  RECEIVE_PRODUCTS
} from '../constants/ActionTypes'

const initialState = {
  size: [],
  price: [],
  stock: 'instock',
  source: 'all',
  querytext: '', 
}

const getFilterSizes = (state, action) => {
  let sizes = ["all"];
  action.products.map((product)=>{
    for(let size in product.sizes){
        if(sizes.indexOf(size) == -1){
            sizes.push(size);
        }
    }
  });
  return sizes;
}

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter

    case RECEIVE_PRODUCTS:
      return {
        ...state,
        size: getFilterSizes(state, action)
      }
    default:
      return state
  }
}

export default filter

