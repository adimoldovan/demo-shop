import React, { Component } from 'react';
import { InventoryService } from '../service/inventory-service';
import { CredentialsService } from '../service/credentials-service';
import { CartService } from '../service/cart-service';
import PageTitle from './page-title';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import CartAmount from './cart-amount';


export default class CheckoutSummary extends Component {
  render() {
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
              <CartAmount/>
            </Col>
          </Row>

          <div style={{ textAlign: "right", margin: "10px" }}  >
            <Button style={{ marginRight: "10px" }} variant="danger" href="#/cart"><FontAwesomeIcon icon={faAngleLeft} /> Cancel</Button>
            <Button variant="success" href="#/checkout-complete"><FontAwesomeIcon icon={faAngleRight} /> Complete your order</Button>
          </div>
        </Container>
      </div >
    );
  }
}

