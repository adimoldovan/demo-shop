import React, { Component } from 'react';
import { CredentialsService } from '../service/credentials-service';
import PageTitle from './page-title';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
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

    if (CredentialsService.isProblemUser()) {
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
      return this.setState({ error: 'Address is required' });
    }

    // If we're here, we have our required info. Redirect!
    window.location.href = '#/checkout-summary';

    return '';
  }

  render() {

    return (
      <div>
        <PageTitle page_title="Your information" />
        <Form onSubmit={this.handleSubmit}>
          <Container>

            <Row className="justify-content-between">
              <Col>
                <div className="section-title">Address information</div>
                <div>
                  {
                    this.state.error &&
                    <p className="error" data-test="error"><FontAwesomeIcon icon={faExclamationCircle} /> {this.state.error}</p>
                  }
                  <Form.Control id="first-name" type="text" className="form_input" data-test="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} autoCorrect="off" autoCapitalize="none" />
                  <Form.Control id="last-name" type="text" className="form_input" data-test="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} autoCorrect="off" autoCapitalize="none" />
                  <Form.Control id="address" as="textarea" className="form_input" data-test="address" placeholder="Address" value={this.state.postalCode} onChange={this.handlePostalCodeChange} autoCorrect="off" autoCapitalize="none" />
                </div>
              </Col>
              <Col>
                <div className="section-title">Delivery information</div>
                <div>
                  <Form.Check type="radio" data-test="delivery-type" label={`Choo Choo delivery`} checked/>
                </div>
                <div className="section-title">Payment information</div>
                <div>
                  <Form.Check type="radio" data-test="payment-type" label={`Cash on delivery`} checked>
                  </Form.Check>
                  <Form.Check type="radio" data-test="payment-type" label={`Credit card`} disabled>
                  </Form.Check>
                  <Form.Check type="radio" data-test="payment-type" label={`PayPal`} disabled>
                  </Form.Check>
                </div>
              </Col>
            </Row>
            <div style={{ textAlign: "right", margin: "10px" }} >
              <Button style={{ marginRight: "10px" }} variant="danger" href="#/cart"><FontAwesomeIcon icon={faAngleLeft} /> Cancel</Button>
              <Button variant="success" type="submit"><FontAwesomeIcon icon={faAngleRight} /> Continue checkout</Button>
            </div>

          </Container>
        </Form>
      </div>
    );
  }
}
