import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { CredentialsService } from '../service/credentials-service.js';
import { Button, Modal } from 'react-bootstrap';
import Login from './login.jsx';

export default class UserButton extends Component {
  constructor(props) {
    super(props);
    this.modalShow = false;
  }

  logout() {
    console.log("logout function")
    CredentialsService.resetSession();
    this.forceUpdate();
  }

  setModalShow(show) {
    console.log("Modal show: " + show)
    this.modalShow = show;
    this.forceUpdate();
  }

  render() {
    var user = CredentialsService.getLoggedInUser();
    var userAction = <span>Hello guest! <Button variant="link" onClick={() => this.setModalShow(true)}><FontAwesomeIcon icon={faSignInAlt} color="black" /></Button></span>
    var userWelcome = ""

    if (user != null) {
      userWelcome = <span>Hi <a href="#/account">{user}</a>!</span>
      userAction = <Button variant="link" onClick={() => this.logout()}><FontAwesomeIcon icon={faSignOutAlt} color="black" /></Button>
    }

    const loginModal = (
      <Modal show={this.modalShow} onHide={() => this.setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title><small className="text-muted">Login</small></Modal.Title>
        </Modal.Header>
        <Login listener={this} />
      </Modal>);

    return (
      <span>{userWelcome}{userAction}{loginModal}</span>
    );
  }
}
