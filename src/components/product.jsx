import React from 'react'
import {InventoryService} from '../service/inventory-service';
import {WishlistService} from '../service/wishlist-service';
import {CartService} from '../service/cart-service';
import PageTitle from './page-title';
import 'holderjs';
import {Row, Container, Col, Button, Image} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus, faHeart, faHeartBroken} from '@fortawesome/free-solid-svg-icons'
import * as Holder from "holderjs";


export default class Product extends React.Component {
    constructor(props) {
        super(props);
        const {params} = this.props.match

        if ((params.id >= 0) && (InventoryService.ITEMS.length > params.id)) {
            this.item = InventoryService.ITEMS[params.id];
        } else {
            this.item = {
                name: 'PRODUCT NOT FOUND',
                desc: '-',
                price: '-'

            };
        }
        this.item.id = params.id;

        this.state = {
            itemInWishlist: WishlistService.isProductInCart(this.item.id)
        };
    }

    componentDidMount() {
        Holder.run({
            images: ".product-image"
        })
    }

    addToCart() {
        CartService.addProduct(this.item.id);
    }

    addToWishlist() {
        WishlistService.addProduct(this.item.id)
        this.setState({itemInWishlist: true});
    }

    removeFromWishlist() {
        WishlistService.removeProduct(this.item.id)
        this.setState({itemInWishlist: false});
    }

    render() {
        const priceStyle = {
            fontWeight: "bold",
            fontSize: "24px"
        }

        let wishListButton = <Button variant="link" bottom="true" onClick={() => this.addToWishlist()}><FontAwesomeIcon
            icon={faHeart} size="3x" color="#1551d1e3"/></Button>;
        if (this.state.itemInWishlist === true) {
            wishListButton =
                <Button variant="link" bottom="true" onClick={() => this.removeFromWishlist()}><FontAwesomeIcon
                    icon={faHeartBroken} size="3x" color="#1551d1e3"/></Button>
        }

        return (
            <div>
                <PageTitle page_title={this.item.name}/>
                <Container>
                    <Row>
                        <Col className="col col-lg-4">
                            <Image className="product-image" data-src={"holder.js/100px150?random=yes&text=" + this.item.name + " product photo"}/>
                        </Col>
                        <Col>
                            <p>{this.item.desc}</p>
                        </Col>
                        <Col className="col col-lg-2 text-center">
                            <p style={priceStyle}>{this.item.price} EUR</p>
                            <Button variant="link" onClick={() => this.addToCart()}><FontAwesomeIcon icon={faCartPlus}
                                                                                                     size="3x"
                                                                                                     color="#3aa755e3"/></Button>
                            {wishListButton}
                            <p><small>in stock</small></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}