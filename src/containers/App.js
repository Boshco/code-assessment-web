import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div>
    <div className="header">
      <div className="cart-head"><h2>Acme Store</h2></div>
      <div className="cart-status">
        <span className="cart-link">Your cart is empty</span>
      </div>
    </div>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
