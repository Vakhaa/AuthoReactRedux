import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginFetch } from '../Actions/userActions';

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userLoginFetch(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-signin">
                <h2 className="h3 mb-3 font-weight-normal">Login</h2>

                <label>Username</label>
                <input
                    className="form-control"
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleChange}
                /><br />

                <label>Password</label>
                <input
                    className="form-control"
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                /><br />

                <input
                    className="btn btn-lg btn-primary btn-block"
                    type='submit' value="Submit" />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);