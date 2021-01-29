import React from 'react'
import {CredentialsService} from '../service/credentials-service';
import {CartService} from '../service/cart-service';
import {WishlistService} from '../service/wishlist-service';
import {Card, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus, faHeart, faHeartBroken} from '@fortawesome/free-solid-svg-icons'
import {InventoryService} from '../service/inventory-service';
import 'holderjs';
import * as Holder from "holderjs";

export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: InventoryService.ITEMS[props.id],
            itemInWishlist: WishlistService.isProductInCart(props.id),
            isWishlist: props.isWishlist
        };

        this.state.product.id = props.id
    }


    addToCart() {
        if (CredentialsService.isProblemUser()) {
            if (this.state.product.id % 2 === 1) {
                return;
            }
        }

        CartService.addProduct(this.state.product.id);
    }

    addToWishlist() {
        WishlistService.addProduct(this.state.product.id)
        this.setState({itemInWishlist: true});
    }

    removeFromWishlist() {
        WishlistService.removeProduct(this.state.product.id)
        this.setState({itemInWishlist: false});
    }

    render() {
        Holder.addTheme("dark", {
            bg: "#969494",
            fg: "#ffffff", text: "Thumbnail"
        });

        let itemLink = `#/product/${this.state.product.id}`;

        const priceStyle = {
            fontWeight: "bold",
            fontSize: "16px"
        }

        var shortDesc = this.state.product.desc.substr(0, 50);

        var wishListButton = <Button variant="link" bottom="true" onClick={() => this.addToWishlist()}><FontAwesomeIcon
            icon={faHeart} size="2x" color="#1551d1e3"/></Button>
        if (this.state.itemInWishlist === true) {
            wishListButton =
                <Button variant="link" bottom="true" onClick={() => this.removeFromWishlist()}><FontAwesomeIcon
                    icon={faHeartBroken} size="2x" color="#1551d1e3"/></Button>
        }

        return (
            <Col>
                <Card style={{marginBottom: "20px"}}>
                    <Card.Img top="true" width="100%"
                              data-src={"holder.js/100px150?theme=dark&text=" + this.state.product.name + " product photo"}
                              alt={this.state.product.name}/>
                    <Card.Body className="text-center">
                        <Card.Link href={itemLink}>{this.state.product.name}</Card.Link>
                        <Card.Text>{shortDesc}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">
                        <Card.Text>$<span style={priceStyle}>{this.state.product.price}</span></Card.Text>
                        <Button variant="link" onClick={() => this.addToCart()}><FontAwesomeIcon icon={faCartPlus}
                                                                                                 size="2x"
                                                                                                 color="#3aa755e3"/></Button>
                        {wishListButton}
                        <Card.Text><small>in stock</small></Card.Text>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }
}