import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userPostFetch } from '../Actions/userActions.jsx';

class Signup extends Component {
    state = {
        username: "",
        password: "",
        avatar: "",
        bio: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userPostFetch(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-signin">
                <h2 className="h3 mb-3 font-weight-normal">Sign Up</h2>
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

                <label>Avatar</label>
                <input
                    className="form-control"
                    name='avatar'
                    placeholder='Avatar (URL)'
                    value={this.state.avatar}
                    onChange={this.handleChange}
                /><br />

                <label>Bio</label>
                <textarea
                    className="form-control"
                    name='bio'
                    placeholder='Bio'
                    value={this.state.bio}
                    onChange={this.handleChange}
                /><br />

                <input
                    className="btn btn-lg btn-primary btn-block"
                    type='submit' value="Submit"/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);