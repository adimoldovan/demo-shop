import React, { Component } from 'react';
import { Credentials } from './credentials.jsx';

export default class CheckoutInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      postalCode: ''
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePostalCodeChange = this.handlePostalCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleFirstNameChange(evt) {
    this.setState({
      firstName: evt.target.value,
    });
  };

  handleLastNameChange(evt) {

    var newState = {
      lastName: evt.target.value,
    };

    if (Credentials.isProblemUser()) {
      // Overwrite the firstname also
      newState.firstName = evt.target.value;
    }

    this.setState(newState);
  };

  handlePostalCodeChange(evt) {
    this.setState({
      postalCode: evt.target.value,
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.firstName) {
      return this.setState({ error: 'First Name is required' });
    }

    if (!this.state.lastName) {
      return this.setState({ error: 'Last Name is required' });
    }

    if (!this.state.postalCode) {
      return this.setState({ error: 'Postal Code is required' });
    }

    // If we're here, we have our required info. Redirect!
    window.location.href = '#/checkout-summary';

    return '';
  }

  render() {

    return (
      <div className="checkout_info_wrapper">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error">Error: {this.state.error}</h3>
          }
          <div className="checkout_info">
            <input id="first-name" type="text" className="form_input" data-test="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} autoCorrect="off" autoCapitalize="none" />
            <input id="last-name" type="text" className="form_input" data-test="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} autoCorrect="off" autoCapitalize="none" />
            <input id="postal-code" type="text" className="form_input" data-test="postalCode" placeholder="Zip/Postal Code" value={this.state.postalCode} onChange={this.handlePostalCodeChange} autoCorrect="off" autoCapitalize="none" />
          </div>
          <div className="checkout_buttons">
            <a className="cart_cancel_link btn_secondary" href="#/cart">CANCEL</a>
            <input className="btn_primary cart_button" type="submit" value="CONTINUE" />
          </div>
        </form>
      </div>
    );
  }
}
