import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartButton from './cart-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import WishlistButton from './wishlist-button';
import UserButton from './user-button';

export default class AppHeader extends React.Component {
  render() {
    return (
      <Container>
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" sticky="top" className="justify-content-between">
          <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}><FontAwesomeIcon icon={faShoppingBag} size="3x" className="brand-logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Navbar.Text>
                <CartButton />
                <WishlistButton />
                <UserButton />
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}
