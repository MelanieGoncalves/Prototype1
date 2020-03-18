import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch, Route,
    NavLink as RRNavLink,
    Link
} from 'react-router-dom';
import { NavLink } from "reactstrap";
import About from "./About"
import Landing from "./Landing";
import Home from './Home';
import Register from './Register';
import Login from './Login'


class TopNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ height: "100%" }}>
                <Router>
                    <Navbar sticky="top" bg="dark" variant="dark">
                        <Navbar.Brand href="/">
                            <img alt="logo" src={require('../images/logo.png')} style={{
                                width: "30px",
                                height: "30px",
                                className: "d-inlines-block align-top"
                            }} />{'  '}
                        </Navbar.Brand>
                        <Nav >
                            <NavItem >
                                <NavLink tag={RRNavLink} exact to="/">PROTOTYPE.ONE</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink tag={RRNavLink} exact to="/about">ABOUT</NavLink>
                            </NavItem>
                        </Nav>

                    </Navbar>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>

                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <Landing />
                        </Route>
                    </Switch>
                </Router>

            </div>
        )
    }
}

export default TopNavBar;