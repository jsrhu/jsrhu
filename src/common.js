// ==== LOCAL IMPORTS ====

// ==== REACT IMPORTS ====
import React from "react";
import {
    HashLink as Link,
    NavHashLink as NavLink
} from "react-router-hash-link";

// ==== MATERIAL-UI IMPORTS ====
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
    createMuiTheme,
} from "@material-ui/core";
import {
    List as ListIcon,
    Home as HomeIcon,
} from "@material-ui/icons";

import theme from "./theme";
import { 
    blue,
    green,
    orange,
} from "@material-ui/core/colors";

export const CATEGORIES = [
    "Software",
    "Hardware",
    "NonTech"
];

export const softwareTheme = createMuiTheme({
    palette: {
        secondary: {
            main: blue[500],
        },
    },
});

export const hardwareTheme = createMuiTheme({
    palette: {
        secondary: {
            main: orange[500],
        },
    },
});

export const nonTechTheme = createMuiTheme({
    palette: {
        secondary: {
            main: green[500],
        },
    },
});

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
                        <Link to="/portfolio?category=software"
                                className="text-decoration-none"
                        >
                            <Button
                                fullWidth
                            >
                                Software
                            </Button>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/portfolio?category=hardware"
                            className="text-decoration-none"
                        >
                            <Button
                                fullWidth
                            >
                                Hardware
                            </Button>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to="/portfolio?category=non-tech"
                            className="text-decoration-none"
                        >
                            <Button
                                fullWidth
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

export class FooterGlobal extends React.Component {
    // use <sticky> for fixed at bottom or page; problem is ease of accesibility, user has to scroll all the way to the bottom
    // use <fixed> for fixed at bottom of window; have to add margin for every single page
    render() {
        return (
            <AppBar id="footer"
                    sticky="bottom"
            />
        );
    }
}