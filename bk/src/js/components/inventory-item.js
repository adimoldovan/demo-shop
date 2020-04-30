// Needed for IE 11
import 'url-search-params-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { InventoryData } from '../data/inventory-data.js';
import { Credentials } from './credentials.js';
import { ShoppingCart } from './shopping-cart.js';

class InventoryItem extends Component {

  constructor(props) {
    super(props);

    // Get our queryparams now
    var queryParams = new URLSearchParams(window.location.search);
    var inventoryId = -1;
    if (queryParams.has('id')) {
      inventoryId = parseInt(queryParams.get('id'));
    }
    if ((inventoryId >= 0) && (InventoryData.ITEMS.length > inventoryId)) {
      this.item = InventoryData.ITEMS[inventoryId];
    } else {
      this.item = {
          name: 'PRODUCT NOT FOUND',
          desc: '',
          image_url: './img/product-not-found.jpg',
          price: ''

      };
    }
    this.item.id = inventoryId;

    this.state = {
      // Set our initial state now
      itemInCart: ShoppingCart.isItemInCart(inventoryId)
    };
  }

  goBack() {
    window.history.back();
  }

  addToCart(itemId) {

    if (Credentials.isProblemUser()) {
      // Bail out now, don't add to cart if the item ID is odd
      if (itemId % 2 == 1) {
        return;
      }
    }

    ShoppingCart.addItem(itemId);
    this.setState({itemInCart: true});
    console.log(ShoppingCart.getCartContents());
  }

  removeFromCart(itemId) {

    if (Credentials.isProblemUser()) {
      // Bail out now, don't remove from cart if the item ID is even
      if (itemId % 2 == 0) {
        return;
      }
    }

    ShoppingCart.removeItem(itemId);
    this.setState({itemInCart: false});
    console.log(ShoppingCart.getCartContents());
  }

  render () {

    var cartButton;

    if (this.state.itemInCart) {
      cartButton = <button className="btn_secondary btn_inventory" onClick={() => this.removeFromCart(this.item.id)}>REMOVE</button>;
    } else {
      cartButton = <button className="btn_primary btn_inventory" onClick={() => this.addToCart(this.item.id)}>ADD TO CART</button>;
    }

    return (
      <div className="inventory_details">
        <button className="inventory_details_back_button" onClick={this.goBack}>&lt;- Back</button>
        <div className="inventory_details_container">
          <img className="inventory_details_img" src={this.item.image_url}/>
          <div className="inventory_details_desc_container">
            <div className="inventory_details_name">{this.item.name}</div>
            <div className="inventory_details_desc">{this.item.desc}</div>
            <div className="inventory_details_price">${this.item.price}</div>
            { cartButton }
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryItem;

const domContainer = document.getElementById('inventory_item_container');
domContainer ? ReactDOM.render(<InventoryItem />, domContainer) : false;
