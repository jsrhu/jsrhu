// ==== LOCAL IMPORTS ====

// ==== REACT IMPORTS ====
import React from "react";
import {
    Link,
    NavLink
} from "react-router-dom";
import {
    Navbar,
    Nav,
    NavDropdown
} from "react-bootstrap";

export class NavbarGlobal extends React.Component {
    render() {
        return (
            <Navbar id="navbar" collapseOnSelect variant="dark" bg="dark" expanded sticky="top">
                <Navbar.Brand>
                    <NavLink to="/" className="text-decoration-none">Joshua Hu</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                            <NavLink to ="/#showcase">
                                Showcase
                            </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                            <NavLink to="/portfolio">
                                Portfolio Gallery
                            </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item>
                            <NavLink to="/portfolio#software">
                                Software
                            </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                            <NavLink to="/portfolio#hardware">
                                Hardware
                            </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                            <NavLink to="/portfolio#nonTech">
                                Non-Technical
                            </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavLink to="/#summary">
                            About
                        </NavLink>

                        <NavLink to="/#resume">
                            Resume
                        </NavLink>

                        <NavLink to="#contact">
                            Find Me Here
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export class FooterGlobal extends React.Component {
    // use <sticky> for fixed at bottom or page; problem is ease of accesibility, user has to scroll all the way to the bottom
    // use <fixed> for fixed at bottom of window; have to add margin for every single page
    render() {
        return (
            <Navbar id="footer" className="justify-content-between" variant="light" bg="light" sticky="bottom">
            </Navbar>
        );
    }
}
