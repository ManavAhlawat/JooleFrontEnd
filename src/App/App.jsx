import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import { LoginPage } from '@/LoginPage';
import { RegisterForm } from '../RegisterForm/RegisterForm';
//import { NavBar } from '../navBar/navBar';
import { Button } from '@material-ui/core';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser } = this.state;
        return (
            <Router history={history}>
                <div>
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>
                    }
                    <div>
                    </div>
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    {/* <NavBar></NavBar> */}
                                    {/* <Button color="primary" to="/register">Sign up</Button> */}
                                    {/* <Link to='/register'>Sign up</Link> */}
                                    
                                    {/* <Link to="/register" component={RegisterForm}>Sign up</Link> */}
                                    
                                        <Route path="/login" component={LoginPage} />
                                        <Route path="/register" component={ RegisterForm } /> 
                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export { App }; 