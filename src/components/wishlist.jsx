import React, { Component } from 'react';
import ProductItem from './product-item'
import PageTitle from './page-title';
import { Row, Container } from 'react-bootstrap';
import { WishlistService } from '../service/wishlist-service';

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    WishlistService.registerCartListener(this);
  }

  render() {
    var products = WishlistService.getProducts();
    return (
      <div>
        <PageTitle page_title="Wishlist" />
        <Container>
          <Row className="justify-content-end">
          </Row>
          <Row xs={1} sm={2} md={2} lg={3} xl={4}>
            {Object.keys(products).map((p) => {
              return (<ProductItem key={p} id={p} isWishlist={true} />)
            })}
          </Row>
        </Container>
      </div>
    );
  }
}