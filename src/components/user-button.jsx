import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { CredentialsService } from '../service/credentials-service.js';
import { Button } from 'react-bootstrap';

export default class UserButton extends Component {
  logout() {
    console.log("logout function")
    CredentialsService.resetSession();
    this.forceUpdate();
  }

  render() {
    console.log("Rendering user details")
    var user = CredentialsService.getLoggedInUser();
    var userAction = <span>Hello guest! <a href="#/login">{<FontAwesomeIcon icon={faSignInAlt} />}</a></span>
    var userWelcome = ""

    if (user != null) {
      userWelcome = <span>Hi <a href="#/account">{user}</a>!</span>
      userAction = <Button variant="link" onClick={() => this.logout()}><FontAwesomeIcon icon={faSignOutAlt} color="black"/></Button>
    }

    return (<span>{userWelcome}{userAction}</span>);
  }
}
