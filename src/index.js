// ==== LOCAL IMPORTS ====
import "./index.css";

// ==== CORE IMPORTS ====
import React from "react";
import ReactDOM from "react-dom";

// ==== REACT LIBRARIES ====
import { Helmet } from "react-helmet";
import {
    Document,
    Page,
    pdfjs
} from "react-pdf";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    Row,
    Col,
    Carousel,
    Jumbotron,
    Figure,
} from "react-bootstrap";
import {
    ThemeProvider,
    Typography,
    Button,
    Container,
    Tooltip,
    Divider
} from "@material-ui/core";
import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    AlternateEmail as EmailIcon,
} from "@material-ui/icons"
import theme from "./theme.js";

// ==== PROJECT IMPORTS ====
import {
    AppBarGlobal,
    FooterGlobal
} from "./common";
import {
    Portfolio
} from "./portfolio.js";
import {
    RoutesProjects
} from "./projects.js";

// ==== DATA IMPORTS ====
import resumeFile from "./data/resume/Hu_Joshua-20_04_07.pdf";
import project_data from "./data/json/cards.json";

// ==== IMAGE IMPORTS ====
import showcaseSoftware from "./assets/img/keyboard.jpg";
import showcaseHardware from "./assets/img/tools.jpg";
import showcaseNonTech from "./assets/img/forest.jpg";

// ==== CDN PDF.JS WORKER; CREATE LOCAL COPY AND UNDERSTAND THIS BETTER
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// ==== HELPER FUNCTIONS ====
const pathHome = "/";
const pathPortfolio = pathHome + "portfolio";
const pathProjects = pathHome + "projects";

const PARTDAY = ["NIGHT", "EARLYMORNING", "MORNING", "AFTERNOON", "EVENING"];

function timeDay() {
    const today = new Date();
    let nowHours = today.getHours();
    let now = "";

    if (0 < nowHours && nowHours < 3) {
        now = PARTDAY[0];
    } else if (3 <= nowHours && nowHours < 6) {
        now = PARTDAY[1];
    } else if (6 <= nowHours && nowHours < 12) {
        now = PARTDAY[2];
    } else if (12 <= nowHours && nowHours < 18) {
        now = PARTDAY[3];
    } else if (18 <= nowHours) {
        now = PARTDAY[4];
    }

    return now;
}

function timeGreeting() {
    const greeting = "Welcome To My Portfolio";
    let timeGreet = "";

    let now = timeDay();
    switch(now) {
        case PARTDAY[0]:
            timeGreet = "You're Up Late, ";
            break;
        case PARTDAY[1]:
            timeGreet = "You're Up Early, ";
            break;
        case PARTDAY[2]:
            timeGreet = "Good Morning And ";
            break;
        case PARTDAY[3]:
            timeGreet = "Good Afternoon And ";
            break;
        case PARTDAY[4]:
            timeGreet = "Good Evening And ";
            break;
        default:
            timeGreet = "Hello And ";
    }

    return timeGreet + greeting;
}

function timeIcon() {
    let icon = "";

    let now = timeDay();
    switch(now) {
        case PARTDAY[0]:
            icon = <i className="fas fa-star" />;
            break;
        case PARTDAY[1]:
            icon = <i className="fas fa-cloud-sun" />;
            break;
        case PARTDAY[2]:
            icon = <i className="fas fa-sun" />;
            break;
        case PARTDAY[3]:
            icon = <i className="fas fa-cloud-moon" />;
            break;
        case PARTDAY[4]:
            icon = <i className="fas fa-moon" />;
            break;
        default:
            icon = <i className="fas fa-rocket" />;
    }

    return icon
}

// ==== SHOWCASE COMPONENTS ====
const showcaseTitle = (
    <div id="showcase-title" className="text-center">
        <Typography variant="h3">
            Portfolio Highlights
        </Typography>
        <p className="lead">
            Highlights of my <Link to={pathPortfolio} className="text-decoration-none">project portfolio</Link>.
        </p>
    </div>
);

// TODO: REWRITE IMAGE WIDTH AND HEIGHTS FOR RENDERING WITH REACT
const showcaseContent = (
    <div id="showcase-highlights">
        <Carousel fade interval="5000">
            <Carousel.Item>
                <Figure id="carousel-software"
                        class="carousel-image"
                >
                    <Figure.Image
                        className="img-fluid"
                        src={showcaseSoftware}
                        alt="Software Project Portfolio"
                        rounded
                    />
                </Figure>
                <Carousel.Caption>
                    <Link to="/portfolio?category=software"
                            class="carousel-link"
                    >
                    <Typography variant="h2">
                        Software
                    </Typography>
                    <p>
                        Software Projects
                    </p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Figure id="carousel-hardware"
                        class="carousel-image"
                >
                    <Figure.Image
                        className="img-fluid"
                        src={showcaseHardware}
                        alt="Hardware Project Portfolio"
                        rounded
                    />
                </Figure>
                <Carousel.Caption>
                    <Link to="/portfolio?category=hardware"
                            class="carousel-link"
                    >
                    <Typography variant="h2">
                        Hardware
                    </Typography>
                    <p>
                        Hardware Projects
                    </p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Figure id="carousel-nontech"
                        class="carousel-image"
                >
                        <Figure.Image
                            className="img-fluid"
                            src={showcaseNonTech}
                            alt="Non-Technical Project Portfolio"
                            rounded
                        />
                </Figure>
                <Carousel.Caption>
                    <Link to="/portfolio?category=non-tech"
                            class="carousel-link"
                    >
                    <Typography variant="h2">
                        Non-Technical
                    </Typography>
                    <p>
                        Non-Technical Projects
                    </p>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

function Showcase() {
    return (
        <section id="showcase">
            {showcaseContent}
        </section>
    );
}

// ==== SUMMARY COMPONENTS ====
const greeting = (
    <Typography variant="h2"
                align="center"
    >
        {timeIcon()}
        <br />
        {timeGreeting()}
    </Typography>
);

const summaryTitle = (
    <div id="summary-title">
        <Typography variant="h3">
            Summary
        </Typography>
    </div>
);

const summaryContent = (
    <Typography variant="body1">
        This website is meant to be a <a href="#showcase" className="text-decoration-none">showcase of personal projects</a> as well as a living product that I can experiment and play with. The most recent copy of my <a href="#resume" className="text-decoration-none">resume</a> as well as my <a href="#contact" className="text-decoration-none">contact information</a> can also be found this site.
    </Typography>
);

function Summary(props) {
    return (
        <section id="summary">
            <Container>
            {greeting}
            <hr />
            {summaryTitle}
            {summaryContent}
            <br />
            </Container>
        </section>
    );
}

// ==== WORK IN PROGRESS ====
const progressTitle = (
    <div id="progress-title">
        <Typography variant="h3">
            Work In Progress
        </Typography>
    </div>
);

const progressList= (
    <div id="progress-list">
        <ul>
            <li>
                Additional Content
                <ul>
                    Provide more details on each project.
                </ul>
                <ul>
                    Provide media (images/videos) for applicable projects.
                </ul>
            </li>
            <li>
                Additional Functionality
                <ul>
                    <li>
                        Project gallery navigation bar.
                    </li>
                    <li>
                        Navbar project categories under "Portfolio" should apply automatic filtering based on choice.
                    </li>
                    <li>
                        Additional project gallery filtering options; i.e. project status.
                    </li>
                    <li>
                        Working interactive demonstrations for select Software Projects.
                    </li>
                    <li>
                        Video or image demonstrations for other categories of Projects.
                    </li>
                </ul>
            </li>
            <li>
                Refined Styling
                <ul>
                    <li>
                        Polishing overall look and theme of website.
                    </li>
                    <li>
                        Make website responsive and mobile friendly.
                    </li>
                    <li>
                        Resize carousel images so as to not take up as much screen space for better appearance.
                    </li>
                    <li>
                        Restyle the project gallery card layout.
                    </li>
                    <li>
                        Refine the project card design.
                    </li>
                    <li>
                        Add conditional styling based on project status.
                    </li>
                    <li>
                        Restyle individual project pages.
                    </li>
                </ul>
            </li>
            <li>
                Backend Refinement
                <ul>
                    <li>
                        Incorporate database to access and store project records.
                    </li>
                    <li>
                        Incorporate media server.
                    </li>
                    <li>
                        Programmatically generate individual project pages.
                    </li>
                </ul>
            </li>
        </ul>
    </div>
);

const progressComment = (
    <div id="progress-comment">
        <p className="lead">
            If you feel like there are additional features I should incorporate or have feedback in general let me know <a href="#contact" className="text-decoration-none">here</a>.
        </p>
    </div>
);

const progressContent = (
    <div>
        {progressList}
        {progressComment}
    </div>
);

function Progress(props) {
    return (
        <section id="progress">
            <Container>
                {progressTitle}
                {progressContent}
            </Container>
        </section>
    );
}

// ==== RESUME COMPONENTS ====
const resumeTitle = (
    <div id="resume-title">
        <Typography variant="h3">
            Resume
        </Typography>
        <p className="lead">
            My Most Up-To-Date <a href={resumeFile} target="_blank" rel="noopener noreferrer" title="Open In New Tab" className="text-decoration-none">Resume</a>
        </p>
    </div>
);

class Resume extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            numPages: 1,
            pageNumber: 1,
            file: resumeFile,
            windowWidth: window.innerWidth,
            scale: 1.00
        };
    }

    updateScale() {
        const newWidth = window.innerWidth;
        let scale;
        if (newWidth <= 600) {
            scale = 0.5
        } if (600 < newWidth && newWidth <= 768) {
            scale = 0.65
        } if (768 < newWidth && newWidth <= 992) {
            scale = 0.8
        } if (992 < newWidth && newWidth <= 1200) {
            scale = 1.0
        } else {
            scale = 1.5
        }
        console.log("scale:" + scale);
        console.log("page width:" + newWidth);

        this.setState({
            windowWidth: newWidth,
            scale: scale,
        })
    }

    componentDidMount() {
        this.updateScale();
        window.addEventListener("resize", this.updateScale.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateScale.bind(this));
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({numPages});
    }

    render() {
        const scale = this.state.scale;
        const width = this.state.windowWidth;
        
        return (
            <section
                id="resume"
                className="text-center"
            >
            <Jumbotron>
                {resumeTitle}
                {width};{scale}
                <div id="resume-holder"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                }}>
                <Document
                    file={this.state.file}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={console.error}
                    renderMode="svg"
                >
                    <Page pageNumber={this.state.pageNumber}
                            renderMode="svg"
                            scale={scale}
                    />
                </Document>
                </div>
            </Jumbotron>
            </section>
        );
    }
}

// ==== CONTACT COMPONENTS ====
const contactTitle = (
    <div id="contact-title">
        <Typography variant="h3">
            Get In Touch
        </Typography>
    </div>
);

const contactContent = (
    <div id="contact-content" style={{padding: "20px"}}>
        <Container>
            <Row>
                <Col>
                    <Tooltip title="Open New Tab"
                            leaveDelay={50}
                            placement="bottom"
                            arrow
                    >
                    <Button href="https://www.linkedin.com/in/jsrhu"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                            fullWidth
                    >
                        <LinkedInIcon />
                        LinkedIn
                    </Button>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title="Open New Tab"
                            leaveDelay={50}
                            placement="bottom"
                            arrow
                    >
                    <Button href="https://github.com/jsrhu"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                            fullWidth
                    >
                        <GitHubIcon />
                        GitHub
                    </Button>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title="Open New Tab"
                        leaveDelay={50}
                        placement="bottom"
                        arrow
                    >
                    <Button href="mailto:joshua.s.r.hu@gmail.com?subject=Getting In Touch"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                            fullWidth
                    >
                        <EmailIcon />
                        E-Mail
                    </Button>
                    </Tooltip>
                </Col>
            </Row>
        </Container>
    </div>
);

function Contact() {
    return (
        <section id="contact"
                align="center">
            {contactTitle}
            <Divider variant="middle" />
            {contactContent}
            <br />
        </section>
    );
} // TODO: ADD STYLING (PADDING/MARGIN) TO INCREASE SPACING AT END OF PAGE

// ==== HOME COMPONENTS ====
function Home() {
    return (
        <main role="main">
            <Showcase />
            <br />
            <Summary />
            <Progress />
            <br />
            <Resume />
            <Contact />
        </main>
    );
}

// ==== ROUTE COMPONENTS ====
function Routes() {
    return (
        <Router>
            <Switch>

                <Route path={pathPortfolio}>
                    <AppBarGlobal />
                    <Portfolio
                        cards={project_data.cards}
                    />
                    <FooterGlobal />
                </Route>

                <Route path={pathProjects}>
                    <AppBarGlobal />
                    <RoutesProjects
                        cards={project_data.cards}
                        projects={project_data.projects}
                    />
                    <FooterGlobal />
                </ Route>

                <Route path={pathHome}>
                    <AppBarGlobal />
                    <Home />
                    <FooterGlobal />
                </Route>

            </Switch>
        </Router>
    );
}
// implement a sub router

// ==== APP COMPONENTS ====
const AppTitle = "Joshua Hu";

function AppHead() {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{AppTitle}</title>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <script
                src="https://kit.fontawesome.com/b5a2d6fe7b.js"
                crossorigin="anonymous"
            />
        </Helmet>
    );
}

function AppBody() {
    return (
        <main id="main">
            <Routes />
        </main>
    );
}

function App() {
    return (
        <div id="app">
            <AppHead />
            <AppBody />
        </div>
    );
}

// ==== RENDER ====
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// https://bit.ly/CRA-PWA
// serviceWorker.unregister();
