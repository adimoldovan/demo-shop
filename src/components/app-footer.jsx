import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { WishlistService } from '../service/wishlist-service';
import { CartService } from '../service/cart-service';
import { CredentialsService } from '../service/credentials-service';

export default class AppFooter extends React.Component {
  resetAppState() {
    WishlistService.resetList();
    CartService.resetCart();
    CredentialsService.resetSession();
    
  }

  render() {
    return (
      <Container>
        <hr />
        <Navbar sticky="bottom" expand="sm" bg="light" variant="light" >
          <Navbar>
            <Nav>
              <Nav.Item>
                <Nav.Link href="#/">2020 Demo Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/help">Help</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Item>
                <Button variant="link" bottom="true" onClick={() => this.resetAppState()}><FontAwesomeIcon icon={faUndo} color="#1551d1e3" /></Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}
