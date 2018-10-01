import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const CartItem = ({ product, onIncreaseQuantity, onDecreaseQuantity }) => (
  <div className="product-container">
    <Product
      image={product.image}
      title={product.title}
      price={product.price}
      quantity={product.quantity}
      inventory={product.inventory} />
      <div className="remove-link" onClick={onDecreaseQuantity}>
        {product.quantity > 0 ? 'Remove' : 'Use Remove'}
      </div>
      <div className="button-container">
        <button className="button-quantity button-decrement"
        onClick={onDecreaseQuantity}
        disabled={product.quantity > 0 ? '' : 'disabled'}>
        {product.quantity > 0 ? '–' : 'Use Remove'}
        </button>
        <span className="cart-quantity">{product.quantity}</span>
        <button className="button-quantity button-increment"
        onClick={onIncreaseQuantity}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? '+' : 'Sold Out'}
        </button>
      </div>
  </div>
)

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired
}

export default CartItem
