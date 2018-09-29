import React from 'react'
import ProductsContainer from './ProductsContainer'
import Centered from '../modal/CartModal'

const App = () => (
  <div>
    <div className="header">
      <div className="cart-head"><h2>Acme Store</h2></div>
        <Centered />
    </div>
    <hr/>
    <ProductsContainer />
  </div>
)

export default App
