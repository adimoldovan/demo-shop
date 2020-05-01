import React, { Component } from 'react';
import { InventoryData } from '../data/inventory-data.js';
import { Credentials } from './credentials.jsx';
import { ShoppingCart } from './shopping-cart.js';
import PageTitle from './page-title.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

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
        <PageTitle page_title="Order summary" />
        <Container>
          <Row>
            <Col>
              <div>Payment Information:</div>
              <div>Cash on delivery</div>
              <div>Shipping Information:</div>
              <div>CHOO CHOO DELIVERY!</div>
            </Col>
            <Col>
              <div>Item total: ${orderTotal}</div>
              <div>Tax: ${orderTax}</div>
              <div>Total: ${(orderTotal + parseFloat(orderTax)).toFixed(2)}</div>
            </Col>
          </Row>
          <Row style={{ float: "right", margin: "10px" }} >
            <Button style={{ marginRight: "10px" }} variant="danger" href="#/cart"><FontAwesomeIcon icon={faAngleLeft} /> Cancel</Button>
            <Button variant="success" href="#/checkout-complete"><FontAwesomeIcon icon={faAngleRight} /> Complete your order</Button>
          </Row>
        </Container>
      </div>
    );
  }
}

