import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartService } from '../service/cart-service.js';

export default class CartButton extends Component {
  constructor(props) {
    super(props);
    CartService.registerCartListener(this);
  }

  render() {
    var cartBadge = "";
    var noOfProducts = CartService.getNumberOfProducts();

    if (noOfProducts > 0) {
      cartBadge = <span className="fa-layers-counter shopping_cart_badge">{noOfProducts}</span>;
    }

    return (
      <a href="#/cart" className="shopping-cart-icon fa-layers fa-fw">
        <FontAwesomeIcon icon={faShoppingCart} />
        {cartBadge}
      </a>
    );
  }
}
