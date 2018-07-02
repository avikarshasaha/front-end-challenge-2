import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, removeFromCart }) => {
  return (
  <div className="cart">
    <Cart
      products={products}
      total={total}
      onRemoveFromCartClicked={(productId, size, source, quantity) => removeFromCart(productId, size, source, quantity)}
    />
  </div>
  )
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps, 
  { removeFromCart }
)(CartContainer)
