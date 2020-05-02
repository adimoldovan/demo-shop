import React from 'react'
import { InventoryData } from '../data/inventory-data';
import { Credentials } from './credentials';
import { CartService } from './cart-service';
import PageTitle from './page-title';
import 'holderjs';
import { Row, Container, Col, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'



export default class Product extends React.Component {
  constructor(props) {
    super(props);
    const { params } = this.props.match

    if ((params.id >= 0) && (InventoryData.ITEMS.length > params.id)) {
      this.item = InventoryData.ITEMS[params.id];
    } else {
      this.item = {
        name: 'PRODUCT NOT FOUND',
        desc: '-',
        price: '-'

      };
    }
    this.item.id = params.id;

    this.state = {
      // Set our initial state now
      itemInCart: CartService.isProductInCart(this.item.id)
    };
  }

  addToCart() {
    if (Credentials.isProblemUser()) {
      // Bail out now, don't add to cart if the item ID is odd
      if (this.item.id % 2 === 1) {
        return;
      }
    }

    CartService.addProduct(this.item.id);
  }

  addToWishlist() {

  }

  render() {
    const priceStyle = {
      fontWeight: "bold",
      fontSize: "24px"
    }

    return (
      <div>
        <PageTitle page_title={this.item.name} />
        <Container>
          <Row>
            <Col className="col col-lg-4">
              <Image src="holder.js/100px250" />
            </Col>
            <Col>
              <p>{this.item.desc}</p>
            </Col>
            <Col className="col col-lg-2 text-center">
              <p style={priceStyle}>{this.item.price} EUR</p>
              <Button variant="link" onClick={() => this.addToCart(this.item.id)}><FontAwesomeIcon icon={faCartPlus} size="3x" color="#3aa755e3" /></Button>
              <Button variant="link" bottom="true" onClick={() => this.addToWishlist(this.state.id)}><FontAwesomeIcon icon={faHeart} size="3x" color="#1551d1e3" /></Button>
              <p><small>in stock</small></p>
            </Col>
          </Row>
        </Container>



        {/* <button className="inventory_details_back_button" onClick={this.goBack}>&lt;- Back</button>
        <div className="inventory_details_container">
          <img className="inventory_details_img" src={this.item.image_url} alt={this.item.name} />
          <div className="inventory_details_desc_container">
            <div className="inventory_details_name">{this.item.name}</div>
            <div className="inventory_details_desc">{this.item.desc}</div>
            <div className="inventory_details_price">${this.item.price}</div>
            <button className="btn_primary btn_inventory" onClick={() => this.addToCart(this.item.id)}>ADD TO CART</button>
          </div>
        </div> */}
      </div>
    );
  }
}