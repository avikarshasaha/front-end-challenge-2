import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'

const ProductsContainer = ({ products, addToCart }) => {
  return (
    <div className="item-catalog">
      {products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={(productId, size, source) => addToCart(productId, size, source)} />
      )}
    </div>
  )
}


const mapStateToProps = state => ({
  products: getVisibleProducts(state.products, state.filter)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
