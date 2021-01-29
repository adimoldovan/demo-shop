import React from 'react'
import {Navbar, Nav, Container, Button, Modal} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUndo, faQuestion} from '@fortawesome/free-solid-svg-icons'
import {WishlistService} from '../service/wishlist-service';
import {CartService} from '../service/cart-service';
import {CredentialsService} from '../service/credentials-service';
import appVersion from '../data/app-version.json'

export default class AppFooter extends React.Component {
    constructor(props) {
        super(props);
        this.modalShow = false;
    }

    resetAppState() {
        WishlistService.resetList();
        CartService.resetCart();
        CredentialsService.resetSession();
        window.location.reload(true);
    }

    setModalShow(show) {
        this.modalShow = show;
        this.forceUpdate();
    }

    render() {
        return (
            <Container>
                <hr/>
                <Navbar sticky="bottom" expand="sm" bg="light" variant="light">
                    <Navbar>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href={`${process.env.PUBLIC_URL}/`}>Demo Shop |
                                    build date {appVersion.buildDate}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Button onClick={() => this.setModalShow(true)} variant="link"
                                        bottom="true"><FontAwesomeIcon icon={faQuestion} color="#1551d1e3"/></Button>
                            </Nav.Item>
                            <Nav.Item>
                                <Button title="Reset the application state" variant="link" bottom="true"
                                        onClick={() => this.resetAppState()}><FontAwesomeIcon icon={faUndo}
                                                                                              color="#1551d1e3"/></Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={this.modalShow} onHide={() => this.setModalShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title><small className="text-muted">Help</small></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>Valid usernames</h3>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Username</th>
                                <th>Type</th>
                                <th>Password</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>dino</td>
                                <td>normal user</td>
                                <td>choochoo</td>
                            </tr>
                            <tr>
                                <td>beetle</td>
                                <td>user with bugs</td>
                                <td>choochoo</td>
                            </tr>
                            <tr>
                                <td>turtle</td>
                                <td>slow user</td>
                                <td>choochoo</td>
                            </tr>
                            <tr>
                                <td>locked</td>
                                <td>locked out user</td>
                                <td>choochoo</td>
                            </tr>
                            </tbody>
                        </table>
                    </Modal.Body>
                </Modal>
            </Container>
        )
    }
}
