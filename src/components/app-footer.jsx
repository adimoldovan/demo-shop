import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class AppFooter extends React.Component {
  render() {
    return (
      <Container>
        <Navbar className="justify-content-center" sticky="bottom" expand="sm" bg="light" variant="light" >
          <Nav >
            <Nav.Item>
              <Nav.Link href="#/">2020 Demo Shop</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="#/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
    )
  }
}
