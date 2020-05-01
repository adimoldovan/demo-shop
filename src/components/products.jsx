import React, { Component } from 'react';
import { InventoryData } from '../data/inventory-data';
import { Credentials } from './credentials';
import ProductItem from './product-item'

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
        <div className="header_secondary_container">

          <div id="searchbox_container"></div>
          <div id="inventory_filter_container">
            <div className="product_label">Products</div>
            <select onChange={this.sortByOption} className="product_sort_container">
              <option value="az" onClick={this.sortNameAZ}>Name (A to Z)</option>
              <option value="za" onClick={this.sortNameZA}>Name (Z to A)</option>
              <option value="lohi" onClick={this.sortPriceLoHi}>Price (low to high)</option>
              <option value="hilo" onClick={this.sortPriceHiLo}>Price (high to low)</option>
            </select>
          </div>
        </div>

        <div id="inventory_container" className="inventory_container">

          <div className="inventory_list">
            {this.state.inventoryList.map((item, i) => {
              return (<ProductItem key={item.id} id={item.id} image_url={item.image_url} name={item.name} desc={item.desc} price={item.price} />)
            })}
          </div>

        </div>
      </div>
    );
  }
}