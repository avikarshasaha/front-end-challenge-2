import React from 'react'
import PropTypes from 'prop-types'


const Cart  = ({ products, total, onRemoveFromCartClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product => {
      return (
        <div className="item-row">
          <div className="cart-item-title">
            {product.title} 
            <br />
            Size: {product.size} 
            <br />
            Seller: {product.source.host.split(' ').map(w => w[0].toUpperCase())}
          </div>
          <div className="cart-quantity-title">{product.quantity}</div>
          <div className="cart-total-title">INR { product.quantity * product.source.discounted_price }</div>
          <div className="remove-item" onClick={() => onRemoveFromCartClicked(product.id, product.size, product.source.id, product.quantity) }>x</div>
        </div>
      )
    })
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div className="contains-items">
      <h3>Your Cart Summary</h3>
      {hasProducts ? 
      <div>
        <div className="cart-overview">
          <div className="grand-total">
            <span>Grand Total (INR)</span>
            <span className="total-amount">{total}</span>
          </div>
        </div>
        <hr />
        <div className="cart-header">
          <div className="cart-item-title">Item</div>
          <div className="cart-quantity-title">Quantity</div>
          <div className="cart-total-title">Total (INR)</div>
        </div>
      </div> : '' }
      <div>{nodes}</div>
    </div>
  )
}

export default Cart
