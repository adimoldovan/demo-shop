import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { WishlistService } from '../service/wishlist-service.js';

export default class WishlistButton extends Component {
  constructor(props) {
    super(props);
    WishlistService.registerCartListener(this);
  }

  render() {

    var cartBadge = "";
    var noOfProducts = WishlistService.getNumberOfProducts();

    if (noOfProducts > 0) {
      cartBadge = <span className="fa-layers-counter shopping_cart_badge">{noOfProducts}</span>;
    }

    return (
      <a href="#/wishlist" className="shopping-cart-icon fa-layers fa-fw">
        <FontAwesomeIcon icon={faHeart} />
        {cartBadge}
      </a>
    );
  }
}
