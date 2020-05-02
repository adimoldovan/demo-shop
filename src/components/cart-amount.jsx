import React, { Component } from 'react';
import { CartService } from '../service/cart-service.js';
import { InventoryService } from '../service/inventory-service';

export default class CartAmount extends Component {
  constructor(props) {
    super(props);
    CartService.registerCartListener(this);
  }

  render() {
    console.log("Render cart amount")
    var products = CartService.getCartContents();
    var orderTotal = 0;

    for (var productId in products) {
      orderTotal = (orderTotal + InventoryService.ITEMS[productId].price * products[productId]).toFixed(2);
    }
    var orderTax = (orderTotal * 0.19).toFixed(2);

    return (
      <div style={{ textAlign: "right", margin: "10px" }} className="d-flex justify-content-between">
        <div></div>
        <div>
          <table className="text-right">
            <tbody>
              <tr>
                <td>Items total:</td>
                <td className="amount">${orderTotal}</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td className="amount">${orderTax}</td>
              </tr>
              <tr className="amount-total">
                <td>Total:</td>
                <td className="amount">${orderTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
