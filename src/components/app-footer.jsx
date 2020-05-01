import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class AppFooter extends React.Component {
  render() {
    return (
      <Container>
      <Navbar sticky="bottom" >
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>2020 Demo Shop</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="#/contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      </Container>
    )
  }
}
