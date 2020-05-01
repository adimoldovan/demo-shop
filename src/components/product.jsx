import React from 'react'
import { InventoryData } from '../data/inventory-data';
import { Credentials } from './credentials';
import { ShoppingCart } from './shopping-cart';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    const { params } = this.props.match

    var inventoryId = -1;
    inventoryId = params.id

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
      if (itemId % 2 === 1) {
        return;
      }
    }

    ShoppingCart.addItem(itemId);
    this.setState({ itemInCart: true });
    console.log(ShoppingCart.getCartContents());
  }

  removeFromCart(itemId) {

    if (Credentials.isProblemUser()) {
      // Bail out now, don't remove from cart if the item ID is even
      if (itemId % 2 === 0) {
        return;
      }
    }

    ShoppingCart.removeItem(itemId);
    this.setState({ itemInCart: false });
    console.log(ShoppingCart.getCartContents());
  }

  render() {
    return (
      <div className="inventory_details">
        <button className="inventory_details_back_button" onClick={this.goBack}>&lt;- Back</button>
        <div className="inventory_details_container">
          <img className="inventory_details_img" src={this.item.image_url} alt={this.item.name} />
          <div className="inventory_details_desc_container">
            <div className="inventory_details_name">{this.item.name}</div>
            <div className="inventory_details_desc">{this.item.desc}</div>
            <div className="inventory_details_price">${this.item.price}</div>
            <button className="btn_primary btn_inventory" onClick={() => this.addToCart(this.item.id)}>ADD TO CART</button>
          </div>
        </div>
      </div>
    );
  }
}