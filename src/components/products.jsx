import React, {Component} from 'react';
import {InventoryService} from '../service/inventory-service';
import {CredentialsService} from '../service/credentials-service';
import ProductItem from './product-item'
import PageTitle from './page-title';
import {Row, Container, Form, Button, Col} from 'react-bootstrap';

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventoryList: InventoryService.ITEMS_NAME_AZ,
            searchTerm: ""
        };

        this.sortByOption = this.sortByOption.bind(this);
        this.sortNameAZ = this.sortNameAZ.bind(this);
        this.sortNameZA = this.sortNameZA.bind(this);
        this.sortPriceLoHi = this.sortPriceLoHi.bind(this);
        this.sortPriceHiLo = this.sortPriceHiLo.bind(this);
    }

    sortByOption(event) {
        if (CredentialsService.isProblemUser()) {
            // Bail out now if we're problem user so that we have a behaviour which is broken in Chrome only for sort.
            // select option onclick is not supported in Chrome but works in IE and FF
            return;
        }

        switch (event.target.value) {
            case "az":
                this.setState({
                    inventoryList: InventoryService.ITEMS_NAME_AZ
                });
                break;

            case "za":
                this.setState({
                    inventoryList: InventoryService.ITEMS_NAME_ZA
                });
                break;

            case "hilo":
                this.setState({
                    inventoryList: InventoryService.ITEMS_PRICE_HILO
                });
                break;

            case "lohi":
                this.setState({
                    inventoryList: InventoryService.ITEMS_PRICE_LOHI
                });
                break;

            default:
                this.setState({
                    inventoryList: InventoryService.ITEMS_NAME_AZ
                });
                break;
        }
    }

    sortNameAZ() {
        if (!CredentialsService.isProblemUser()) {
            // Bail out now if we're not problem user - the select onchange will handle the sort
            return;
        }

        this.setState({
            inventoryList: InventoryService.ITEMS_NAME_AZ
        });
    }

    sortNameZA() {
        if (!CredentialsService.isProblemUser()) {
            // Bail out now if we're not problem user - the select onchange will handle the sort
            return;
        }

        this.setState({
            inventoryList: InventoryService.ITEMS_NAME_ZA
        });
    }

    sortPriceLoHi() {
        if (!CredentialsService.isProblemUser()) {
            // Bail out now if we're not problem user - the select onchange will handle the sort
            return;
        }

        this.setState({
            inventoryList: InventoryService.ITEMS_PRICE_LOHI
        });
    }

    sortPriceHiLo() {
        if (!CredentialsService.isProblemUser()) {
            // Bail out now if we're not problem user - the select onchange will handle the sort
            return;
        }

        this.setState({
            inventoryList: InventoryService.ITEMS_PRICE_HILO
        });
    }

    updateSearchTerm(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }

    search() {
        let term = this.state.searchTerm;
        console.log(`Searching by ${this.state.searchTerm}`);
        this.setState({
            inventoryList: InventoryService.ITEMS.filter(function (item) {
                return item.name.toLowerCase().includes(term.toLowerCase())
            })
        });
    }

    render() {
        return (
            <div>
                <PageTitle page_title="Products"/>
                <Container>
                    <Row className="justify-content-end">
                        <Form inline>
                            <Col md="auto">
                                <Form.Control size="sm" type="text" placeholder="Search" id="input-search"
                                              className="mr-auto" value={this.state.searchTerm}
                                              onChange={e => this.updateSearchTerm(e)}/>
                                <Button size="sm" variant="light" style={{marginLeft: "5px"}}
                                        onClick={() => this.search()}>Search</Button>
                            </Col>
                            <Col md="auto">
                                <Form.Control className="sort-products-select" size="sm" as="select"
                                              onChange={this.sortByOption}>
                                    <option value="az" onClick={this.sortNameAZ}>Sort by name (A to Z)</option>
                                    <option value="za" onClick={this.sortNameZA}>Sort by name (Z to A)</option>
                                    <option value="lohi" onClick={this.sortPriceLoHi}>Sort by price (low to high)
                                    </option>
                                    <option value="hilo" onClick={this.sortPriceHiLo}>Sort by price (high to low)
                                    </option>
                                </Form.Control>
                            </Col>
                        </Form>
                    </Row>
                    <Row xs={1} sm={2} md={2} lg={3} xl={4}>
                        {this.state.inventoryList.map((item) => {
                            return (<ProductItem key={item.id} id={item.id} isWishlist={false}/>)
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}