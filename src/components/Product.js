import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, image }) => (
  <div className="product-group">
    <div className="product-image"><img src={image} alt={title} /></div>
    <div className="product-info">
      <div className="product-details">
        <h4>{title}</h4>
        <span className="product-inventory">{inventory ? `${inventory} REMAINING` : null}</span>
        <button className="button-quantity button-decrement">&#8211;</button>
        <span className="cart-quantity">1</span>
        <button className="button-quantity button-increment">&#43;</button>
      </div>
      <div className="product-price">&#36;{price}</div>
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
