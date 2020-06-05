// ==== LOCAL IMPORTS ====
import "./common.css";

// ==== REACT IMPORTS ====
import React from "react";
import {
    HashLink as Link,
} from "react-router-hash-link";

// ==== MATERIAL-UI IMPORTS ====
import {
    makeStyles,
    createMuiTheme,
    Button,
    Divider,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
    Hidden,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import {
    Home as HomeIcon,
    Menu as MenuIcon,
    ExpandMore as ExpandMoreIcon,
    ChevronRight as ChevronRightIcon,
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

const sections = [
    "Showcase",
    "Summary",
    "Resume",
    "Contact"
]
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

export function AppBarGlobal(props) {
    const classes = useStyles(theme);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuHome = (
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
    );

    const menuFull = (
        <div>
            <IconButton aria-controls="portfolio-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
            >
                <ExpandMoreIcon />
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
                        <Button fullWidth>
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
                        <Button fullWidth>
                            Hardware
                        </Button>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/portfolio?category=non-tech"
                        className="text-decoration-none"
                    >
                        <Button fullWidth>
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
        </div>
    );

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const menuDrawer = (
        <div>
            <IconButton
                        onClick={handleDrawerOpen}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                    anchor="right"
                    open={open}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key="Portfolio" onClick={handleDrawerClose}>
                        <Link to="/portfolio"
                                className="text-decoration-none"
                        >
                            <IconButton>
                            <ListItemText primary="Portfolio" />
                            </IconButton>
                        </Link>
                    </ListItem>
                    {sections.map((text, index) => (
                        <ListItem button key={text} onClick={handleDrawerClose}>
                            <Link to={`/#${text.toLowerCase()}`}
                                  className="text-decoration-none"
                            >
                            <IconButton>
                            <ListItemText primary={text} />
                            </IconButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );

    return (
        <AppBar position="sticky"
                color="primary"
        >
            <Toolbar>
                {menuHome}

                <Hidden xsDown>
                {menuFull}
                </Hidden>

                <Hidden smUp>
                {menuDrawer}
                </Hidden>
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