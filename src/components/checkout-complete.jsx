import React from 'react'
import PageTitle from './page-title.jsx';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { CartService } from './cart-service.js';


export default class CheckoutComplete extends React.Component {
  render() {
    CartService.resetCart();
    return (
      <div>
        <PageTitle page_title="Order complete" />
        <Container>

          <div className="text-center">Thank you for your order!</div>

          <div style={{ textAlign: "right", margin: "10px" }}  >
            <Button variant="success" href="#/products"><FontAwesomeIcon icon={faAngleRight} /> Continue shopping</Button>
          </div>
        </Container>
      </div >
    )
  }
}