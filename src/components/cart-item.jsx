import React, { Component } from 'react';
import { Credentials } from './credentials.jsx';
import { ShoppingCart } from './shopping-cart.js';
import { Row, Button, Col, Image, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "holderjs";

export default class CartItem extends Component {

  constructor(props) {
    super(props);

    this.item = props.item;
    this.state = {
      itemVisible: true
    }

    if (props.item == null) {
      // Hide this if the item is invalid
      this.state.itemVisible = false;
    }
  }

  removeFromCart(itemId) {
    ShoppingCart.removeItem(itemId);
    console.log(ShoppingCart.getCartContents());
    this.setState({ itemVisible: false });
  }

  render() {

    if (this.state.itemVisible) {
      var linkId = this.item.id;
      if (Credentials.isProblemUser()) {
        linkId += 1;
      }
      var itemLink = `#product/${linkId}`;

      const priceStyle = {
        fontWeight: "bold",
        fontSize: "16px"
      }

      return (
        <Container>
          <Row style={{ marginBottom: "10px", borderBottom: "1px solid #f5f5f5" }}>
            <Col><a href={itemLink} id={`item_${this.item.id}_title_link`}>{this.item.name}</a></Col>
            <Col md="auto">${this.item.price}</Col>
            <Col md="auto">1</Col>
            <Col md="auto"><Button variant="link" onClick={() => this.removeFromCart(this.item.id)}><FontAwesomeIcon icon={faTrash} /></Button></Col>
          </Row>
        </Container>
        // <div className="cart_item">
        //   <div className="cart_quantity">1</div>
        //   <div className="cart_item_label">
        //     <a href={itemLink} id={`item_${this.item.id}_title_link`}>
        //       <div className="inventory_item_name">{this.item.name}</div>
        //     </a>
        //     <div className="inventory_item_desc">{this.item.desc}</div>
        //     <div className="item_pricebar">
        //       <div className="inventory_item_price">{this.item.price}</div>
        //       <button className="btn_secondary cart_button" onClick={() => this.removeFromCart(this.item.id)}>REMOVE</button>
        //     </div>
        //   </div>
        // </div>
      );
    } else {
      return (<div className="removed_cart_item" />);
    }
  }
}
