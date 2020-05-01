import React, { Component } from 'react';
import { InventoryData } from '../data/inventory-data.js';
import { ShoppingCart } from './shopping-cart.js';
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

    var contents = ShoppingCart.getCartContents();

    return (
      <div>
        <PageTitle page_title="Your cart" />
        <Container>
          <Row xs={1} sm={1} md={1} lg={1} xl={1}>
            <Col>
              {contents.map((item, i) => {
                return (<CartItem key={i} item={InventoryData.ITEMS[item]} />)
              })}
            </Col>
          </Row>
          <Row style={{float:"right", margin:"10px"}} >
            <Button style={{marginRight:"10px"}} variant="danger" href="#/products"><FontAwesomeIcon icon={faAngleLeft} /> Continue Shopping</Button>
            <Button variant="success" href="#/checkout-info"><FontAwesomeIcon icon={faAngleRight} /> Checkout</Button>
          </Row>
        </Container>
      </div>
    );
  }
}


