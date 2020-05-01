import React from 'react'
import { Credentials } from './credentials';
import { ShoppingCart } from './shopping-cart';

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      image_url: props.image_url,
      name: props.name,
      desc: props.desc,
      price: props.price,
      // Set our initial state now
      itemInCart: ShoppingCart.isItemInCart(props.id)
    };

    if (Credentials.isProblemUser()) {
      this.state.image_url = `${this.state.image_url}WithGarbageOnItToBreakTheUrl`
    }
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

    var linkId = this.state.id;
    if (Credentials.isProblemUser()) {
      linkId += 1;
    }
    var itemLink = `#/product/${linkId}`;
    var img_url = `./../img/products/${this.state.image_url}`;
    return (
      <div className="inventory_item">
        <div className="inventory_item_img">
          <a href={itemLink} id={`item_${this.state.id}_img_link`}>
            <img className="inventory_item_img" src={img_url} alt={this.state.name} />
          </a>
        </div>
        <div className="inventory_item_label">
          <a href={itemLink} id={`item_${this.state.id}_title_link`}>
            <div className="inventory_item_name">{this.state.name}</div>
          </a>
          <div className="inventory_item_desc">{this.state.desc}</div>
        </div>
        <div className="pricebar">
          <div className="inventory_item_price">${this.state.price}</div>
          <button className="btn_primary btn_inventory" onClick={() => this.addToCart(this.state.id)}>ADD TO CART</button>
        </div>
      </div>
    );
  }
}