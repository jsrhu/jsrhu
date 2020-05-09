// ==== REACT LIBRARIES ====
import React from 'react';
import {
    Link,
    useRouteMatch,
} from "react-router-dom";
import {
    Jumbotron,
} from "react-bootstrap";

import {
    makeStyles,
    ThemeProvider,
    Typography,
    Container,
    Grid,
    Button,
    ButtonGroup,
    IconButton,
    Tooltip,
    Card as MaterialCard,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
} from "@material-ui/core";

import {
    Computer as SoftwareIcon,
    Memory as HardwareIcon,
    Public as NonTechIcon,

    ExpandMore as ExpandMoreIcon,
    MoreVert as MoreVertIcon,
} from "@material-ui/icons";
import {
    blue,
    green,
    orange,
} from '@material-ui/core/colors';

import {
    CATEGORIES,
    softwareTheme,
    hardwareTheme,
    nonTechTheme,
} from "./common";
import { isPropertySignature } from 'typescript';

// ==== CONTENT JSX ====
export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const initialCategory = urlParams.get("category");

        switch(initialCategory){
            case "software":
                this.state = {
                    isSoftware: true,
                    isHardware: false,
                    isNonTech: false,
                    cards: props.cards,
                };
                break;
            case "hardware":
                this.state = {
                    isSoftware: false,
                    isHardware: true,
                    isNonTech: false,
                    cards: props.cards,
                }
                break;
            case "non-tech":
                this.state = {
                    isSoftware: false,
                    isHardware: false,
                    isNonTech: true,
                    cards: props.cards,
                }
                break;
            default:
                this.state = {
                    isHardware: true,
                    isSoftware: true,
                    isNonTech: true,
                    cards: props.cards,
                };
        }

        this.toggleSoftware = this.toggleSoftware.bind(this);
        this.toggleHardware = this.toggleHardware.bind(this);
        this.toggleNonTech = this.toggleNonTech.bind(this);
        this.activeCategories = this.activeCategories.bind(this);
        this.Title = this.Title.bind(this);
        this.Control = this.Control.bind(this);
        this.Gallery = this.Gallery.bind(this);
    }

    toggleSoftware() {
        this.setState(state => ({
            isSoftware: !state.isSoftware,
        }));
    }

    toggleHardware() {
        this.setState(state => ({
            isHardware: !state.isHardware,
        }));
    }

    toggleNonTech() {
        this.setState(state => ({
            isNonTech: !state.isNonTech,
        }));
    }

    activeCategories() {
        const isSoftware = this.state.isSoftware;
        const isHardware = this.state.isHardware;
        const isNonTech = this.state.isNonTech;

        let categoriesToRender = [];
        if (isSoftware) {
            categoriesToRender.push("Software");
        }
        if (isHardware) {
            categoriesToRender.push("Hardware");
        }
        if (isNonTech) {
            categoriesToRender.push("NonTech");
        }

        return categoriesToRender;
    }

    Title() {
        return (
            <div id="portfolio-title">
                <Typography variant="h2">
                    Portfolio Gallery
                </Typography>
                <br />
                <Typography variant="subtitle1"
                >
                    This is an overview of all the projects I have made available on this site.
                    <br />
                    <br />
                    The cards contain high-level information about each project with links to each project's demo, source code, and write-up as applicable. The cards can be filtered using the category togglers below.
                </Typography>
            </div>
        );
    }

    Control() {
        return (
            <div id="portfolio-control"
            >
                <ButtonGroup aria-label="toggle-control" style={{alignItems: "center,"}}>
                    <ThemeProvider theme={softwareTheme}>
                    <Button onClick={this.toggleSoftware}
                            variant="contained"
                            color="secondary"
                    >
                        <SoftwareIcon />
                        Software: {this.state.isSoftware ? "ON" : "OFF"}
                    </Button>
                    </ThemeProvider>
                    <ThemeProvider theme={hardwareTheme}>
                    <Button onClick={this.toggleHardware}
                            variant="contained"
                            color="secondary"
                    >
                        <HardwareIcon />
                        Hardware: {this.state.isHardware ? "ON" : "OFF"}
                    </Button>
                    </ThemeProvider>
                    <ThemeProvider theme={nonTechTheme}>
                    <Button onClick={this.toggleNonTech}
                            variant="contained"
                            color="secondary"
                    >
                        <NonTechIcon />
                        Non-Technical: {this.state.isNonTech ? "ON" : "OFF"}
                    </Button>
                    </ThemeProvider>
                </ButtonGroup>
            </div>
        );
    }

    Cards(cards, categories) {
        let cardsToRender = [];
        for (let card in cards) { // LOOK INTO CHANGING TO <<map>> FUNCTION TO INCREASE PERFORMANCE
            if (categories.includes(cards[card].category)) {
                cardsToRender.push(<Grid key={cards[card].id}
                                            item
                                            xs={6}
                                    >
                                        <GalleryCard
                                        card={cards[card]}
                                        />
                                    </Grid>
                                );
            }
        }

        return cardsToRender;
    }

    Gallery(cardsToRender) {
        // CURRENTLY RENDERS ALL PROJECTS FROM <<CARDS>> CONSTANT INTO LIST FORM; MODIFY FUNCTION TO RETURN THE ROW & COL FORM
        return (
            <div id="portfolio-gallery">
                <Grid container
                        justify="center"
                        spacing={4}
                >
                    <Grid container
                            justify="center"
                    >
                        {this.Control()}
                    </Grid>
                    <br />
                    <br />
                    <Grid container
                            justify="center"
                            spacing={2}
                    >
                       {cardsToRender} 
                    </Grid>
                </Grid>
            </div>
        );
    }

    render() {
        // ADD URL PARAMETER QUERY HERE
        const categoriesToRender = this.activeCategories();

        const cardsToRender = this.Cards(this.state.cards, categoriesToRender);

        return (
            <main role="main">
                <Jumbotron>
                {this.Title()}
                </Jumbotron>

                <Container>
                {this.Gallery(cardsToRender)}
                </Container>
            </main>
        );
    }
}

class GalleryCard extends React.Component {
    constructor(props) {
        super(props);

        this.whatTheme = this.whatTheme.bind(this);

        this.state = {
            id: props.card.id,
            eventKey: props.card.id.toString(),
            title: props.card.title,
            body: props.card.body,
            source: props.card.source,
            projectStatus: props.card.projectStatus,
            category: props.card.category,
            theme: this.whatTheme(props.card.category)
        }
        //console.log(this.state.theme)

        this.Header = this.Header.bind(this);
        this.Body = this.Body.bind(this);
        this.Footer = this.Footer.bind(this);
    }

    whatTheme(category) {
        switch(category){
            case CATEGORIES[0]:
                return softwareTheme;
            case CATEGORIES[1]:
                return hardwareTheme;
            case CATEGORIES[2]:
                return nonTechTheme;
            default:
                // return default theme
                console.log("NO THEME FOUND");
                return;
        }
    }

    useStyles = makeStyles((theme) => ({
        software: {
            secondary: {
                main: blue,
            },
        },
        hardware: {
            secondary: {
                main: orange,
            }
        },
        nonTech: {
            secondary: {
                main: green,
            }
        }
    }));

    Header() {
        return (
            <CardHeader
                        title={this.state.title}
                        action={
                            <Button aria-label="project category"
                                        variant="contained"
                                        color="secondary"
                            >
                                {this.state.category}
                            </Button>
                        }
            />
        );
    }

    Body() {
        return (
            <CardContent>
                <Typography variant="body1"
                            color="textPrimary"
                            component="p"
                >
                    {this.state.body}
                </Typography>
            </CardContent>
        );
    }

    Footer(source) {
        if (source === "") {
            return (
                <CardActions>
                    <ButtonGroup variant="outlined"
                                    color="primary"
                                    fullWidth
                    >
                        <Button href={`/projects/${this.state.id}`}>
                            Details
                        </Button>
                        <Tooltip title="No Source Available"
                            leaveDelay={50}
                            placement="bottom"
                        >
                        <Button >
                            Source
                        </Button>
                        </Tooltip>
                    </ButtonGroup>
                </CardActions>
            );
        } else {
            return (
                <CardActions>
                    <ButtonGroup  variant="outlined"
                                    color="primary"
                                    fullWidth
                    >
                        <Button href={`/projects/${this.state.id}`}>
                            Details
                        </Button>
                        <Button href={this.state.source}>
                            Source
                        </Button>
                    </ButtonGroup>
                </CardActions>
            );
        }
    }

    render() {
        let source;
        if (this.state.source.length < 1) {
            source = "";
        } else {
            source = this.state.source;
        }
        return (
            <ThemeProvider theme={this.state.theme}>
                <MaterialCard
                            variant="outlined"
                >
                    {this.Header()}
                    {this.Body()}
                    {this.Footer(source)}
                </MaterialCard>
            </ThemeProvider>
        )
    }
}