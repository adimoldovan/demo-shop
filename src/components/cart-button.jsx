import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCart } from './shopping-cart.js';

export default class CartButton extends Component {
  constructor(props) {
    super(props);
    ShoppingCart.registerCartListener(this);
  }

  render() {

    var cartBadge = "";
    var cartContents = ShoppingCart.getCartContents();

    if (cartContents.length > 0) {
      cartBadge = <span className="fa-layers-counter shopping_cart_badge">{cartContents.length}</span>;
    }

    return (
      <a href="#/cart" className="shopping-cart-icon fa-layers fa-fw">
        <FontAwesomeIcon icon={faShoppingCart} />
        {cartBadge}
      </a>
    );
  }
}
