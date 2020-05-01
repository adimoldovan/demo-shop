import React, { Component } from 'react';
import { Credentials } from './credentials.jsx';
import { ShoppingCart } from './shopping-cart.js';

export default class CartItem extends Component {

  constructor(props) {
    super(props);

    this.item = props.item;
    this.state = {
      itemVisible: true
    }

    if (props.item == null) {
      // Hide this if the item is invalid
      this.state.itemVisible = false;
    }
  }

  removeFromCart(itemId) {
    ShoppingCart.removeItem(itemId);
    console.log(ShoppingCart.getCartContents());
    this.setState({ itemVisible: false });
  }

  render() {

    if (this.state.itemVisible) {
      var linkId = this.item.id;
      if (Credentials.isProblemUser()) {
        linkId += 1;
      }
      var itemLink = `./inventory-item.html?id=${linkId}`;

      return (
        <div className="cart_item">
          <div className="cart_quantity">1</div>
          <div className="cart_item_label">
            <a href={itemLink} id={`item_${this.item.id}_title_link`}>
              <div className="inventory_item_name">{this.item.name}</div>
            </a>
            <div className="inventory_item_desc">{this.item.desc}</div>
            <div className="item_pricebar">
              <div className="inventory_item_price">{this.item.price}</div>
              <button className="btn_secondary cart_button" onClick={() => this.removeFromCart(this.item.id)}>REMOVE</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (<div className="removed_cart_item" />);
    }
  }
}
