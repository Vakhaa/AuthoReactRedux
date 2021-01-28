import React, { Component } from 'react';
/*import { Switch, Route, BrowserRouter } from 'react-router-dom';*/
import { connect } from 'react-redux';
import { getProfileFetch, logoutUser, logoutSuccess} from './Actions/userActions';
import Signup from './Components/SignUp';
import Login from './Components/Login';

import './style/singin.css'
import './style/style.css'

class App extends Component {
    componentDidMount = () => {
        this.props.getProfileFetch()
    }

    handleClick = event => {
        event.preventDefault()
        // Удаление token из localStorage
        localStorage.removeItem("token")
        // удаление из Redux хранилица
        this.props.logoutUser()
        this.props.logoutSuccess()

    }

    render() {
        /*<BrowserRouter>
            <Switch>
                <Route exact path="/" component={Signup} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>*/
        const { isFailed, message } = this.props.failed
        return (
            <div className="container text-center">
                <div className="row text-center">
                    <div className="col">
                        {isFailed
                            ? <p>{message}<br /></p>
                            : console.log(message)
                        }
                    </div>
                    <div className="w-100"></div>
                </div>
                <div className="row">
                    <Signup className="col" />
                    <Login className="col"/>
                </div>
                <div className="w-100"></div>
                <div className="row">
                    <div className="col">
                        {this.props.currentUser.username
                            ? <button
                                className="btn btn-primary "
                                onClick={this.handleClick}>Log Out</button>
                            : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    failed: state.failed,
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser()),
    logoutSuccess: () => dispatch(logoutSuccess())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);