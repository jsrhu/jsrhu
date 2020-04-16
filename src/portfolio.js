// ==== REACT LIBRARIES ====
import React from 'react';
import {
    Link
} from "react-router-dom";
import {
    Container,
    Jumbotron,
    Button,
    ButtonGroup,
    ButtonToolbar,
    Card,
    Accordion,
    OverlayTrigger,
    Tooltip
} from "react-bootstrap";

// ==== CONTENT JSX ====
export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHardware: true,
            isSoftware: true,
            isNonTech: true,
            cards: props.cards,
        };
        this.masterClick = this.masterClick.bind(this);
        this.toggleSoftware = this.toggleSoftware.bind(this);
        this.toggleHardware = this.toggleHardware.bind(this);
        this.toggleNonTech = this.toggleNonTech.bind(this);
        this.activeCategories = this.activeCategories.bind(this);
        this.Title = this.Title.bind(this);
        this.Control = this.Control.bind(this);
        this.Gallery = this.Gallery.bind(this);
    }

    masterClick() { // TODO: ADAPT TO EACH BUTTON
        this.setState(state => ({
            isHardware: !state.isHardware,
            isSoftware: !state.isSoftware,
            isNonTech: !state.isNonTech,
        }));
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
                <h1>
                    Portfolio Gallery
                </h1>
                <br />
                <p className="lead">
                    This is an overview of all the projects I have made available on this site.
                    <br />
                    <br />
                    The cards contain high-level information about each project with links to each project's demo, source code, and write-up as applicable. The cards can be filtered using the category togglers below.
                </p>
            </div>
        );
    }

    Control() {
        return (
            <div id="portfolio-control"
                className="d-flex flex-column text-center"
            >
                <ButtonToolbar className="justify-content-center">
                <ButtonGroup aria-label="toggle-control">
                    <Button onClick={this.toggleSoftware}>
                        Software: {this.state.isSoftware ? "ON" : "OFF"}
                    </Button>
                    <Button onClick={this.toggleHardware}>
                        Hardware: {this.state.isHardware ? "ON" : "OFF"}
                    </Button>
                    <Button onClick={this.toggleNonTech}>
                        Non-Technical: {this.state.isNonTech ? "ON" : "OFF"}
                    </Button>
                </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }

    Cards(cards, categories) {
        let cardsToRender = [];
        for (let card in cards) { // LOOK INTO CHANGING TO <<map>> FUNCTION TO INCREASE PERFORMANCE
            if (categories.includes(cards[card].category)) {
                cardsToRender.push(<PortfolioCard
                                        card={cards[card]}
                                        key={cards[card].id}
                                    />);
            }
        }

        return cardsToRender;
    }

    Gallery(cardsToRender) {
        // CURRENTLY RENDERS ALL PROJECTS FROM <<CARDS>> CONSTANT INTO LIST FORM; MODIFY FUNCTION TO RETURN THE ROW & COL FORM
        return (
            <div id="portfolio-gallery">
                <Container fluid>
                <Jumbotron>
                    <Accordion defaultActiveKey="0">
                        {cardsToRender}
                    </Accordion>
                </Jumbotron>
                </Container>
            </div>
        );
    }

    render() {
        const categoriesToRender = this.activeCategories();

        const cardsToRender = this.Cards(this.state.cards, categoriesToRender);

        return (
            <main role="main">
                <Jumbotron>
                {this.Title()}
                <hr />
                {this.Control()}
                </Jumbotron>
                {this.Gallery(cardsToRender)}
            </main>
        );
    }
}

class PortfolioCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.card.id,
            eventKey: props.card.id.toString(),
            title: props.card.title,
            body: props.card.body,
            source: props.card.source,
            projectStatus: props.card.projectStatus,
            category: props.card.category,
        }
        this.Header = this.Header.bind(this);
        this.Body = this.Body.bind(this);
        this.Footer = this.Footer.bind(this);
    }

    Header() {
        return (
            <Accordion.Toggle
                as={Card.Header}
                eventKey={this.state.eventKey}
            >
                <h4>
                    {this.state.title}
                </h4>
            </Accordion.Toggle>
        );
    }

    Body() {
        return (
            <Accordion.Collapse
                eventKey={this.state.eventKey}
            >
                <Card.Body>
                    <Card.Text>
                        {this.state.body}
                    </Card.Text>
                </Card.Body>
            </Accordion.Collapse>
        );
    }

    Footer() {
        // if this.state.source === ""
        // render a tooltip
        let button;
        if (this.state.source === "") {
            button = <NoSource />;
        } else {
            button = <Source />;
        }
        return (
            <Card.Footer>
                <ButtonToolbar
                    className="justify-content-between"
                    aria-label="card button groups">
                <ButtonGroup
                    id={"buttons-source-" + this.state.title}
                    className="mr-2"
                    aria-label="Project source"
                    size="sm"
                >
                    <Link to={`/projects/${this.state.id}`}>
                        <Button>
                            Details
                        </Button>
                    </Link>
                    <a href={this.state.source}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            {button}
                    </a>
                </ButtonGroup>
                <ButtonGroup
                    id={`buttons-status-${this.state.title}`}
                    className="mr-2"
                    aria-label="Project docs"
                    size="sm"
                >
                    <Button variant="outline-primary">
                        {this.state.projectStatus}
                    </Button>
                    <Button variant="outline-secondary">
                        {this.state.category}
                    </Button>
                </ButtonGroup>
                </ButtonToolbar>
            </Card.Footer>
        );
    }

    render() {
        return (
            <Card>
                {this.Header()}
                {this.Body()}
                {this.Footer()}
            </Card>
        );
    }
}

function renderToolTip(props) {
        return (
            <Tooltip id="source-notavailable" {...props}>
                Source Not Available
            </Tooltip>
        );
    }

function NoSource() {
        return (
            <OverlayTrigger
                placement="top"
                delay={{show: 100, hide: 150}}
                overlay={renderToolTip}
            >
                <Button>
                    Source
                </Button>
            </ OverlayTrigger>
        );
    }

function Source() {
        return (
            <Button>
                Source
            </Button>
        );
    }
