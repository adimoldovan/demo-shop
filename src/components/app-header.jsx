import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import cartIcon from './../img/cart-2.svg';

class AppHeader extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light" sticky="top">
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>Demo Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="/cart"><img
              src={cartIcon}
              width="20"
              height="20"
              className="d-inline-block align-top"
              alt="Cart"
            /></Nav.Link>
            <NavDropdown title="Me" id="collasible-nav-dropdown" drop="left">
              <NavDropdown.Item href={`${process.env.PUBLIC_URL}/account`}>My account</NavDropdown.Item>
              <NavDropdown.Item href={`${process.env.PUBLIC_URL}/wishlist`}>Wishlist</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default AppHeader