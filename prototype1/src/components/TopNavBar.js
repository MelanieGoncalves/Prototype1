import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink as RRNavLink } from 'react-router-dom';
import About from "./About"
import Landing from "./Landing";


class TopNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ height: "100%" }}>
                <Router>
                    <Navbar sticky="top" bg="dark" variant="dark">
                        <Navbar.Brand href="/home">
                            <img alt="logo" src={require('../images/logo.png')} style={{
                                width: "30px",
                                height: "30px",
                                className: "d-inline-block align-top"
                            }} />{'  '}
                        </Navbar.Brand>
                        <Nav >
                            <NavItem >
                                <NavLink href="#home">PROTOTYPE.ONE</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="#about" tag={RRNavLink}>ABOUT</NavLink>
                            </NavItem>
                        </Nav>

                    </Navbar>
                    <Switch>
                        <Route path="/">
                            <Landing />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </Router>

            </div>
        )
    }
}

export default TopNavBar;