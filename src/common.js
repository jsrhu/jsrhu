// ==== LOCAL IMPORTS ====

// ==== REACT IMPORTS ====
import React from "react";
import {
    HashLink as Link,
    NavHashLink as NavLink
} from "react-router-hash-link";
import {
    Navbar,
    Nav,
    NavDropdown
} from "react-bootstrap";
import {
    makeStyles,
    Button,
    Divider,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Switch,
    MenuItem,
    Menu,
    MenuList,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import {
    List as ListIcon,
    Home as HomeIcon,
} from "@material-ui/icons";

import theme from "./theme";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1.5,
    },
}));

export function AppBarGlobal() {
    const classes = useStyles(theme);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    /*
                <MenuList>
                    <ListItem button>
                        <ListItemText primary="TEST" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="TEST2" />
                    </ListItem>
                </MenuList>
    */

    return (
        <AppBar position="sticky"
                color="primary"
        >
            <Toolbar>
                <Typography variant="h4"
                            className={classes.title}
                >
                    <Link to="/"
                            className="text-decoration-none"
                    >
                        <IconButton className={classes.title}
                                size="large"
                        >
                            <HomeIcon />
                            Joshua Hu
                        </IconButton>
                    </Link>
                </Typography>
                <IconButton aria-controls="portfolio-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                >
                    <ListIcon />
                    Portfolio
                </IconButton>
                <Menu id="portfolio-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to="/#showcase"
                                className="text-decoration-none"
                        >
                            <Button
                                fullWidth
                            >
                                Showcase
                            </Button>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/portfolio"
                                className="text-decoration-none"
                        >
                            <Button
                                fullWidth
                            >
                                Gallery
                            </Button>
                                </Link>
                    </MenuItem>
                    <Divider variant="fullWidth" />
                    <MenuItem onClick={handleClose}>
                        <Link 
                                className="text-decoration-none"
                        >
                            <Button
                                fullWidth
                                disabled
                            >
                                Software
                            </Button>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link
                            className="text-decoration-none"
                        >
                            <Button
                                fullWidth
                                disabled
                            >
                                Hardware
                            </Button>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link
                            className="text-decoration-none"
                        >
                            <Button
                                fullWidth
                                disabled
                            >
                                Non-Technical
                            </Button>
                        </Link>
                    </MenuItem>
                </Menu>


                <Link to="/#summary"
                        className="text-decoration-none"
                >
                    <IconButton>
                        Summary
                    </IconButton>
                </Link>

                <Link to="/#resume"
                        className="text-decoration-none"
                >
                    <IconButton>
                        Resume
                    </IconButton>
                </Link>
                
                <Link to="/#contact"
                        className="text-decoration-none"
                >
                    <IconButton>
                        Contact
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

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

                        <NavLink to="/#contact">
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
