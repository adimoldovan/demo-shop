import React, { Component } from 'react';
import { Credentials } from './credentials.jsx';
import PageTitle from './page-title.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

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
      <div>
        <PageTitle page_title="Your information" />
        <Container>
          <form onSubmit={this.handleSubmit}>
            <Row xs={1} sm={1} md={1} lg={1} xl={1}>
              <Col>

                <div className="checkout_form">
                  {
                    this.state.error &&
                    <p className="error" data-test="error"><FontAwesomeIcon icon={faExclamationCircle} /> {this.state.error}</p>
                  }
                  <input id="first-name" type="text" className="form_input" data-test="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} autoCorrect="off" autoCapitalize="none" />
                  <input id="last-name" type="text" className="form_input" data-test="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} autoCorrect="off" autoCapitalize="none" />
                  <input id="postal-code" type="text" className="form_input" data-test="postalCode" placeholder="Zip/Postal Code" value={this.state.postalCode} onChange={this.handlePostalCodeChange} autoCorrect="off" autoCapitalize="none" />
                </div>
              </Col>
            </Row>
            <Row style={{ float: "right", margin: "10px" }} >
              <Button style={{ marginRight: "10px" }} variant="danger" href="#/cart"><FontAwesomeIcon icon={faAngleLeft} /> Cancel</Button>
              <Button variant="success" type="submit"><FontAwesomeIcon icon={faAngleRight} /> Continue checkout</Button>
            </Row>
          </form>
        </Container>
      </div>
    );
  }
}
