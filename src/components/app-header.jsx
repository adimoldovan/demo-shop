import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartButton from './cart-button';

class AppHeader extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light" sticky="top" className="header_container">
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>Demo Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Navbar.Text>
              <CartButton />
            </Navbar.Text>
            <NavDropdown title="Me" id="collasible-nav-dropdown" drop="left">
              <NavDropdown.Item href="#/account">My account</NavDropdown.Item>
              <NavDropdown.Item href="#/wishlist">Wishlist</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default AppHeader