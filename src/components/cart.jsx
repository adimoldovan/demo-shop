import React, { Component } from 'react';
import { InventoryData } from '../data/inventory-data.js';
import { ShoppingCart } from './shopping-cart.js';
import CartItem from './cart-item.jsx';


export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var contents = ShoppingCart.getCartContents();

    return (
      <div>
        <div className="cart_list">
          <div className="cart_quantity_label">QTY</div>
          <div className="cart_desc_label">DESCRIPTION</div>
          {contents.map((item, i) => {
            return (<CartItem key={i} item={InventoryData.ITEMS[item]} />)
          })}
        </div>
        <div className="cart_footer">
          <a className="btn_secondary" href="#/products">Continue Shopping</a>
          <a className="btn_action checkout_button" href="#/checkout-info">CHECKOUT</a>
        </div>
      </div>
    );
  }
}


