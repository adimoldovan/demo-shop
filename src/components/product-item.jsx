import React from 'react'
import { Credentials } from './credentials';
import { CartService } from './cart-service';
import { WishlistService } from './wishlist-service';
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
      itemInWishlist: WishlistService.isProductInCart(props.id)
    };
  }

  addToCart() {
    if (Credentials.isProblemUser()) {
      if (this.state.id % 2 === 1) {
        return;
      }
    }

    CartService.addProduct(this.state.id);
  }

  addToWishlist() {
    WishlistService.addProduct(this.state.id)
    this.setState({ itemInWishlist: true });
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
        <Card style={{ marginBottom: "20px" }} >
          <Card.Img top="true" width="100%" data-src="holder.js/100px150" alt={this.state.name} />
          <Card.Body className="text-center">
            <Card.Link href={itemLink}>{this.state.name}</Card.Link>
            <Card.Text>{shortDesc}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted text-center">
            <Card.Text>$<span style={priceStyle}>{this.state.price}</span></Card.Text>
            <Button variant="link" onClick={() => this.addToCart()}><FontAwesomeIcon icon={faCartPlus} size="2x" color="#3aa755e3" /></Button>
            <Button variant="link" bottom="true" onClick={() => this.addToWishlist()}><FontAwesomeIcon icon={faHeart} size="2x" color="#1551d1e3" /></Button>
            <Card.Text><small>in stock</small></Card.Text>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}