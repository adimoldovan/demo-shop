import React, { Component } from 'react';
import { Credentials } from './credentials.jsx';
import { ShoppingCart } from './shopping-cart.js';
import { Row, Button, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import "holderjs";

export default class CartItem extends Component {

  constructor(props) {
    super(props);
    ShoppingCart.registerCartListener(this);

    this.item = props.item;
    this.state = {
      itemVisible: true
    }
    this.totalPrice = this.item.price

    if (props.item == null) {
      // Hide this if the item is invalid
      this.state.itemVisible = false;
    }
  }

  removeFromCart() {
    ShoppingCart.removeProduct(this.item.id);
    this.setState({ itemVisible: false });
  }

  increaseQty() {
    ShoppingCart.increaseQty(this.item.id);
  }

  decreaseQty() {
    ShoppingCart.decreaseQty(this.item.id);
    if (ShoppingCart.getItemQuantity(this.item.id) < 1) {
      this.setState({ itemVisible: false });
    }
  }

  calculateProductPrice() {
    return (this.item.price * ShoppingCart.getItemQuantity(this.item.id)).toFixed(2);
  }


  render() {
    var itemQty = ShoppingCart.getItemQuantity(this.item.id);
    this.totalPrice = this.calculateProductPrice()

    if (this.state.itemVisible) {
      var linkId = this.item.id;
      if (Credentials.isProblemUser()) {
        linkId += 1;
      }
      var itemLink = `#product/${linkId}`;

      return (
        <Container>
          <Row style={{ marginBottom: "10px", borderBottom: "1px solid #f5f5f5" }}>
            <Col md="auto">
              <div style={{ width: "130px" }}>
                <Button variant="link" onClick={() => this.decreaseQty()}><FontAwesomeIcon icon={faMinusCircle} style={{ color: "grey" }} /></Button>
                {itemQty}
                <Button variant="link" onClick={() => this.increaseQty()}><FontAwesomeIcon icon={faPlusCircle} style={{ color: "grey" }} /></Button>
              </div>
            </Col>
            <Col md="auto" style={{ marginTop: "7px" }}>${this.item.price}</Col>
            <Col md="auto" style={{ marginTop: "7px" }}>${this.totalPrice}</Col>
            <Col style={{ marginTop: "7px" }}><a href={itemLink} id={`item_${this.item.id}_title_link`}>{this.item.name}</a></Col>
            <Col md="auto"><Button variant="link" onClick={() => this.removeFromCart()}><FontAwesomeIcon icon={faTrash} /></Button></Col>
          </Row>
        </Container>
      );
    } else {
      return (<div className="removed_cart_item" />);
    }
  }
}
