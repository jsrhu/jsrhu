// ==== LOCAL IMPORTS ====

// ==== REACT IMPORTS ====
import React from "react";
import {
    Navbar,
    Nav,
    NavDropdown
} from "react-bootstrap";

export class NavbarGlobal extends React.Component {
    render() {
        return (
            <Navbar id="navbar" collapseOnSelect variant="dark" bg="dark" expanded sticky="top">
                <Navbar.Brand href="/">
                    Joshua Hu
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/#showcase">
                                Showcase
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/portfolio">
                                Portfolio Gallery
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/portfolio#software">
                                Software
                            </NavDropdown.Item>
                            <NavDropdown.Item href="portfolio#hardware">
                                Hardware
                            </NavDropdown.Item>
                            <NavDropdown.Item hrefl="portfolio#nonTech">
                                Non-Technical
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/#summary">
                            About
                        </Nav.Link>
                        <Nav.Link href="/#resume">
                            Resume
                        </Nav.Link>
                        <Nav.Link href="/#contact">
                            Find Me Here
                        </Nav.Link>
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
