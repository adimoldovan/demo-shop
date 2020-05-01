import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartButton from './cart-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faList, faUserEdit, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

export default class AppHeader extends React.Component {
  render() {
    return (
      <Container>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light" sticky="top">
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}><FontAwesomeIcon icon={faShoppingBag} size="3x" className="brand-logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Navbar.Text>
              <CartButton />
            </Navbar.Text>
            <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="collasible-nav-dropdown" drop="left">
              <NavDropdown.Item href="#/account">{<FontAwesomeIcon icon={faUserEdit} />} My account</NavDropdown.Item>
              <NavDropdown.Item href="#/wishlist">{<FontAwesomeIcon icon={faList} />} Wishlist</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/logout">{<FontAwesomeIcon icon={faSignOutAlt} />} Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
    )
  }
}
