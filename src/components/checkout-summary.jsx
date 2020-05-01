import React, { Component } from 'react';
import { InventoryData } from '../data/inventory-data.js';
import { Credentials } from './credentials.jsx';
import { ShoppingCart } from './shopping-cart.js';
import CheckoutSummaryItem from './checkout-summary-item.jsx';

export default class CheckoutSummary extends Component {
  constructor(props) {
    super(props);
  }

  clearCart() {
    // No cart clear on order complete for the problem user
    if (!Credentials.isProblemUser()) {
      // Wipe out our shopping cart
      ShoppingCart.resetCart();
    }
  }

  render() {

    var contents = ShoppingCart.getCartContents();
    var orderTotal = 0;

    for (var curItem in contents) {
      orderTotal = orderTotal + InventoryData.ITEMS[contents[curItem]].price;
      if (Credentials.isProblemUser()) {
        // double up for the problem user
        orderTotal = orderTotal + InventoryData.ITEMS[contents[curItem]].price;
      }
    }

    var orderTax = (orderTotal * 0.08).toFixed(2);

    return (
      <div>
        <div className="cart_list">
          <div className="cart_quantity_label">QTY</div>
          <div className="cart_desc_label">DESCRIPTION</div>
          {contents.map((item, i) => {
            return (<CheckoutSummaryItem key={i} item={InventoryData.ITEMS[item]} />)
          })}
        </div>
        <div className="summary_info">
          <div className="summary_info_label">Payment Information:</div>
          <div className="summary_value_label">SauceCard #31337</div>
          <div className="summary_info_label">Shipping Information:</div>
          <div className="summary_value_label">FREE PONY EXPRESS DELIVERY!</div>
          <div className="summary_subtotal_label">Item total: ${orderTotal}</div>
          <div className="summary_tax_label">Tax: ${orderTax}</div>
          <div className="summary_total_label">Total: ${(orderTotal + parseFloat(orderTax)).toFixed(2)}</div>
          <div className="cart_footer">
            <a className="cart_cancel_link btn_secondary" href="#/products">CANCEL</a>
            <a className="btn_action cart_button" href="#/checkout-complete" onClick={this.clearCart}>FINISH</a>
          </div>
        </div>
      </div>
    );
  }
}

