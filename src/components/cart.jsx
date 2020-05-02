import React, { Component } from 'react';
import { InventoryService } from '../service/inventory-service';
import { CartService } from '../service/cart-service';
import CartItem from './cart-item';
import PageTitle from './page-title';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import CartAmount from './cart-amount';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    CartService.registerCartListener(this);
  }
  render() {
    var products = CartService.getCartContents();
    var content = <Container>
      <Row xs={1} sm={1} md={1} lg={1} xl={1}>
        <Col>
          {Object.keys(products).map((item, i) => {
            return (<CartItem key={i} item={InventoryService.ITEMS[item]} />)
          })}
        </Col>
      </Row>
      <CartAmount />
      <div style={{ textAlign: "right", margin: "10px" }} >
        <Button style={{ marginRight: "10px" }} variant="danger" href="#/products"><FontAwesomeIcon icon={faAngleLeft} /> Continue Shopping</Button>
        <Button variant="success" href="#/checkout-info"><FontAwesomeIcon icon={faAngleRight} /> Checkout</Button>
      </div>
    </Container>

    if (CartService.getNumberOfProducts() < 1) {
      content = <Container className="text-center">How about adding some products in your cart?</Container>
    }

    return (
      <div>
        <PageTitle page_title="Your cart" />
        {content}
      </div>
    );
  }
}


