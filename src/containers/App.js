import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import FilterContainer from './FilterContainer'

const App = () => (
  <div className="wrap">
  	<FilterContainer />
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
