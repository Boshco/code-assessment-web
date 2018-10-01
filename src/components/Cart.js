import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0

  const nodes = hasProducts ? (
    products.map(product =>
      <CartItem
        product={product}
        key={product.id}
        onIncreaseQuantity={() => console.log("increment quantity")}
        onDecreaseQuantity={() => console.log("decrement quantity")}
      />
    )
  ) : (
    <div className="cart-msg">
      <div className="cart-msg-img"></div>
      <p>Please add some products to your cart.</p>
    </div>
  )

  return (
    <div className="cart-container">
      <h3 className="cart-container-head">Your Cart</h3>
      <hr/>
      <div>{nodes}</div>
      <div className="checkout-total">
        <p>Total: &#36;{total}</p>
        <button onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
