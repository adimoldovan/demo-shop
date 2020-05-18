import React, { Component } from 'react';
import { CredentialsService } from '../service/credentials-service';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        };

        this.listener = props.listener;

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Please fill in the username!' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Please fill in the password!' });
        }

        if (CredentialsService.verifyCredentials(this.state.username, this.state.password)) {
            if (CredentialsService.isLockedOutUser(this.state.username)) {
                return this.setState({ error: 'The user has been locked out.' });
            }
            window.location.href = '#/products';
        } else {
            return this.setState({ error: 'Incorrect username or password!' });
        }

        this.listener.setModalShow(false);
        return '';
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        return (
            <div className="login_wrapper">
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        {
                            this.state.error &&
                            <p className="error" data-test="error"><FontAwesomeIcon icon={faExclamationCircle} /> {this.state.error}</p>
                        }
                        <Form.Control type="text" className="form_input" data-test="username" id="user-name" placeholder="Username"
                            value={this.state.username} onChange={this.handleUserChange} autoCorrect="off" autoCapitalize="none" />
                        <Form.Control type="password" className="form_input" data-test="password" id="password" placeholder="Password"
                            value={this.state.password} onChange={this.handlePassChange} autoCorrect="off" autoCapitalize="none" />
                        <Button variant="primary" type="submit"><FontAwesomeIcon icon={faSignInAlt} /> Login</Button>
                    </Form>
                </div></div>
        );
    }
}

export default Login;