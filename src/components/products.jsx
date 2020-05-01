import React, { Component } from 'react';
import { InventoryData } from '../data/inventory-data';
import { Credentials } from './credentials';
import ProductItem from './product-item'
import PageTitle from './page-title';
import { Row, Container } from 'react-bootstrap';

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

    // NOTE: Sorting is broken on Chrome and Safari
    // https://stackoverflow.com/questions/9972280/onclick-on-option-tag-not-working-on-ie-and-chrome/10058960#10058960
    // TODO: Convert this in to a case for problem_user

    return (
      <div>
        <PageTitle page_title="Products" />
        <Container>
          <Row>
            <div className="sort-products-select">Sort products: <select onChange={this.sortByOption}>
              <option value="az" onClick={this.sortNameAZ}>By name (A to Z)</option>
              <option value="za" onClick={this.sortNameZA}>By name (Z to A)</option>
              <option value="lohi" onClick={this.sortPriceLoHi}>By price (low to high)</option>
              <option value="hilo" onClick={this.sortPriceHiLo}>By price (high to low)</option>
            </select></div>
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