import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

class AppFooter extends React.Component {
  render() {
    return (
      <Navbar sticky="bottom" >
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="#/contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    )
  }
}
export default AppFooter