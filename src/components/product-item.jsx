import React from 'react'
import { Credentials } from './credentials';
import { ShoppingCart } from './shopping-cart';
import { Card, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import 'holderjs';

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      image_url: props.image_url,
      name: props.name,
      desc: props.desc,
      price: props.price,
      // Set our initial state now
      itemInCart: ShoppingCart.isItemInCart(props.id)
    };

    if (Credentials.isProblemUser()) {
      this.state.image_url = `${this.state.image_url}WithGarbageOnItToBreakTheUrl`
    }
  }

  addToCart(itemId) {

    if (Credentials.isProblemUser()) {
      // Bail out now, don't add to cart if the item ID is odd
      if (itemId % 2 === 1) {
        return;
      }
    }

    ShoppingCart.addItem(itemId);
    this.setState({ itemInCart: true });
    console.log(ShoppingCart.getCartContents());
  }

  addToWishlist(itemId) {

  }

  render() {

    var linkId = this.state.id;
    if (Credentials.isProblemUser()) {
      linkId += 1;
    }
    var itemLink = `#/product/${linkId}`;

    const priceStyle = {
      fontWeight: "bold",
      fontSize: "16px"
    }

    var shortDesc = this.state.desc.substr(0, 50);

    return (
      <Col>
        <Card style={{marginBottom: "20px"}} >
          <Card.Img top="true" width="100%" data-src="holder.js/100px150" alt={this.state.name} />
          <Card.Body className="text-center">
            <Card.Link href={itemLink}>{this.state.name}</Card.Link>
            <Card.Text>{shortDesc}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted text-center">
            <Card.Text>$<span style={priceStyle}>{this.state.price}</span></Card.Text>
            <Button variant="link" onClick={() => this.addToCart(this.state.id)}><FontAwesomeIcon icon={faCartPlus} size="2x" color="#3aa755e3"/></Button>
            <Button variant="link" bottom="true" onClick={() => this.addToWishlist(this.state.id)}><FontAwesomeIcon icon={faHeart} size="2x" color="#1551d1e3" /></Button>
            <Card.Text><small>in stock</small></Card.Text>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}