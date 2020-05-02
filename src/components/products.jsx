import React, { Component } from 'react';
import { InventoryData } from '../data/inventory-data';
import { Credentials } from './credentials';
import ProductItem from './product-item'
import PageTitle from './page-title';
import { Row, Container, Form, FormControl, Button, Col } from 'react-bootstrap';

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventoryList: InventoryData.ITEMS_NAME_AZ
    };

    this.sortByOption = this.sortByOption.bind(this);
    this.sortNameAZ = this.sortNameAZ.bind(this);
    this.sortNameZA = this.sortNameZA.bind(this);
    this.sortPriceLoHi = this.sortPriceLoHi.bind(this);
    this.sortPriceHiLo = this.sortPriceHiLo.bind(this);
  }

  sortByOption(event) {

    console.log(event);

    if (Credentials.isProblemUser()) {
      // Bail out now if we're problem user so that we have a behaviour which is broken in Chrome only for sort.
      // select option onclick is not supported in Chrome but works in IE and FF
      return;
    }

    switch (event.target.value) {
      case "az":

        this.setState({
          inventoryList: InventoryData.ITEMS_NAME_AZ
        });
        break;

      case "za":

        this.setState({
          inventoryList: InventoryData.ITEMS_NAME_ZA
        });
        break;

      case "hilo":

        this.setState({
          inventoryList: InventoryData.ITEMS_PRICE_HILO
        });
        break;

      case "lohi":

        this.setState({
          inventoryList: InventoryData.ITEMS_PRICE_LOHI
        });
        break;
    }
  }

  sortNameAZ() {
    if (!Credentials.isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    this.setState({
      inventoryList: InventoryData.ITEMS_NAME_AZ
    });
  }

  sortNameZA() {
    if (!Credentials.isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    this.setState({
      inventoryList: InventoryData.ITEMS_NAME_ZA
    });
  }

  sortPriceLoHi() {
    if (!Credentials.isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    this.setState({
      inventoryList: InventoryData.ITEMS_PRICE_LOHI
    });
  }

  sortPriceHiLo() {
    if (!Credentials.isProblemUser()) {
      // Bail out now if we're not problem user - the select onchange will handle the sort
      return;
    }

    this.setState({
      inventoryList: InventoryData.ITEMS_PRICE_HILO
    });
  }

  render() {
    return (
      <div>
        <PageTitle page_title="Products" />
        <Container>
          <Row className="justify-content-end">
            <Form inline>
            <Col md="auto">
                <Form.Control size="sm" type="text" placeholder="Search" className="mr-auto" />
                <Button size="sm" variant="light" style={{marginLeft: "5px"}}>Search</Button>
              </Col>

              <Col md="auto">
                <Form.Control className="sort-products-select" size="sm" as="select" onChange={this.sortByOption}>
                  <option value="az" onClick={this.sortNameAZ}>Sort by name (A to Z)</option>
                  <option value="za" onClick={this.sortNameZA}>Sort by name (Z to A)</option>
                  <option value="lohi" onClick={this.sortPriceLoHi}>Sort by price (low to high)</option>
                  <option value="hilo" onClick={this.sortPriceHiLo}>Sort by price (high to low)</option>
                </Form.Control>
              </Col>
            </Form>
          </Row>
          <Row xs={1} sm={2} md={2} lg={3} xl={4}>
            {this.state.inventoryList.map((item, i) => {
              return (<ProductItem key={item.id} id={item.id} image_url={item.image_url} name={item.name} desc={item.desc} price={item.price} />)
            })}
          </Row>
        </Container>
      </div>
    );
  }
}