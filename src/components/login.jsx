import React, { Component } from 'react';
import '../css/login.css';
import { Credentials } from './credentials.jsx';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        };

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

        if (Credentials.verifyCredentials(this.state.username, this.state.password)) {
            if (Credentials.isLockedOutUser()) {
                return this.setState({ error: 'The user has been locked out.' });
            }

            // If we're here, we have a username and password. Redirect!
            window.location.href = './products';
        } else {
            return this.setState({ error: 'Incorrect username or password!' });
        }

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
                    <form onSubmit={this.handleSubmit}>
                        {
                            this.state.error &&
                            <p class="error" data-test="error">{this.state.error}</p>
                        }
                        <input type="text" className="form_input" data-test="username" id="user-name" placeholder="Username"
                            value={this.state.username} onChange={this.handleUserChange} autoCorrect="off" autoCapitalize="none" />
                        <input type="password" className="form_input" data-test="password" id="password" placeholder="Password"
                            value={this.state.password} onChange={this.handlePassChange} autoCorrect="off" autoCapitalize="none" />
                        <input type="submit" className="btn_action" value="LOGIN" />
                    </form>
                </div></div>
        );
    }
}

export default Login;