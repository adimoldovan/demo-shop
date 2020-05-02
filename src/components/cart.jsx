import React, { Component } from 'react';
import { InventoryData } from '../data/inventory-data.js';
import { CartService } from './cart-service.js';
import CartItem from './cart-item.jsx';
import PageTitle from './page-title.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'


export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var products = CartService.getCartContents();
    var orderTotal = 0;

    for (var productId in products) {
      orderTotal = orderTotal + InventoryData.ITEMS[productId].price;
    }
    var orderTax = (orderTotal * 0.05).toFixed(2);

    return (
      <div>
        <PageTitle page_title="Your cart" />
        <Container>
          <Row xs={1} sm={1} md={1} lg={1} xl={1}>
            <Col>
              {Object.keys(products).map((item, i) => {
                return (<CartItem key={i} item={InventoryData.ITEMS[item]} />)
              })}
            </Col>
          </Row>
          <div style={{ textAlign: "right", margin: "10px" }} >

            <div>Items total: <span className="amount">${orderTotal}</span></div>
            <div>Taxes: <span className="amount">${orderTax}</span></div>
            <div className="amount-total">Total: <span className="amount">${(orderTotal + parseFloat(orderTax)).toFixed(2)}</span></div>

          </div>
          <div style={{ textAlign: "right", margin: "10px" }} >
            <Button style={{ marginRight: "10px" }} variant="danger" href="#/products"><FontAwesomeIcon icon={faAngleLeft} /> Continue Shopping</Button>
            <Button variant="success" href="#/checkout-info"><FontAwesomeIcon icon={faAngleRight} /> Checkout</Button>
          </div>
        </Container>
      </div>
    );
  }
}


