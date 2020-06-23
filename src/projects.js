import "./projects.css"

// ==== REACT IMPORTS ====
import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    useParams,
} from "react-router-dom";

import {
    Typography,
    Grid,
    Divider,
    Button,
} from "@material-ui/core";

// TODO: Write better keys for programatically generated components i.e. <li> and <Routes>

// ==== CONTENT JSX ====
export class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.project.title,
            id: props.project.id,
            source: props.project.source,
            summary: props.project.summary,
            demo: props.project.demo,
            purpose: props.project.purpose,
            stack: props.project.stack,
            milestones: props.project.milestones,
            process: props.project.process,
            docs: props.project.docs,
            outcomes: props.project.outcomes,
        }

        this.Title = this.Title.bind(this);
        this.QuickInfo = this.QuickInfo.bind(this);
        this.Summary = this.Summary.bind(this);
        this.Demo = this.Demo.bind(this);
        this.Purpose = this.Purpose.bind(this);
        this.TechStack = this.TechStack.bind(this);
        this.Milestones = this.Milestones.bind(this);
        this.Process = this.Process.bind(this);
        this.DesignDocs = this.DesignDocs.bind(this);
        this.Outcomes = this.Outcomes.bind(this);
    }

    Title() {
        return (
            <Typography variant="h2">
                {this.state.title}
            </Typography>
        );
    }

    QuickInfo() {
        return (
            <Grid container>
                <Grid item>
                    <Button>
                        Source
                    </Button>
                    <Button>
                        Status
                    </Button>
                    <Button>
                        Stack
                    </Button>
                </Grid>
            </Grid>
        )
    }

    Summary() {
        if (this.state.summary.length < 1) {
            return (
            <div id="summary">
            <Typography variant="h3">
                Summary
            </Typography>
            <Typography variant="body1">
                This content has not been written yet.
            </Typography>
            </div>
            );
        }
        return (
            <div id="summary">
            <Typography variant="h3">
                Summary
            </Typography>
            <Typography variant="body1">
                {this.state.summary}
            </Typography>
            </div>
        );
    }

    Demo() {
        if (this.state.demo.length < 1) {
            return (
                <div id={`${this.state.title}-demo`}>
                <Typography variant="h3">
                    Demonstration: {this.state.title}
                </Typography>
                <main id={`${this.state.title}-demo-main`}>
                </main>
                <Typography variant="body1">
                    PROJECT DEMONSTRATION CURRENTLY UNDER DEVELOPMENT.
                </Typography>
                </div>
            );
        }
        // TODO: ADD DEMO SECTION BELOW
        return (
            <div id={`${this.state.title}-demo`}>
            <Typography variant="h3">
                Demonstration: {this.state.title}
            </Typography>
            <p>
                DEMO GOES HERE
            </p>
            <main id={`${this.state.title}-demo-main`}>
            </main>
            </div>
        );
    }
    // TODO: PROPERLY IMPLEMENT THE EMBEDDED EDEN DEMO
    // - currently this is rerendering the entirety of the portfolio website inside the <<ResponsiveEmbed>>; why?
    // -- also rerendering full website inside <<iframe>>; is this due some incompatability?

    Purpose() {
        if (this.state.purpose.length < 1) {
            return;
        }
        let listPurpose = this.state.purpose.map((par) =>
            <Typography variant="body1" key={par}>
                {par}
            </Typography>
        );
        return (
            <div id={`${this.state.title}-purpose`}>
            <Typography variant="h3">
                Purpose
            </Typography>
            {listPurpose}
            </div>
        );
    }

    TechStack() {
        // Modify with Material components?
        let listStack = this.state.stack.map((tech) =>
            <li key={tech}>
                {tech}
            </li>
        );
        if (listStack.length < 1) {
            listStack = (
                <li key={0} className="text-danger">This content has not been written yet.</li>
            );
            return;
        }
        return (
            <div id={`${this.state.title}-stack`}>
            <Typography variant="h3">
                Technology Stack
            </Typography>
            <ul>
                {listStack}
            </ul>
            </div>
        );
    }

    Milestones() {
        let listMilestones = this.state.milestones.map((milestone) =>
            <li key={milestone}>
                {milestone}
            </li>
        );
        if (listMilestones.length < 1) {
            listMilestones =(
                <li key={0} className="text-danger">This content has not been written yet.</li>
            );
            return;
        }
        return (
            <div id={`${this.state.title}-milestones`}>
            <Typography variant="h3">
                Milestones
            </Typography>
            <ol>
                {listMilestones}
            </ol>
            </div>
        );
    }

    Process() {
        let listProcess = this.state.process.map((step) =>
            <li key={step}>
                {step}
            </li>
        );
        if (listProcess.length < 1) {
            listProcess = (
                <li key={0} className="text-danger">This content has not been written yet.</li>
            );
            return;
        }
        return (
            <div id={`${this.state.title}-process`}>
            <Typography variant="h3">
                Process
            </Typography>
            <ol>
                {listProcess}
            </ol>
            </div>
        );
    }

    DesignDocs() {
        if (this.state.docs.length < 1) {
            return;
        }
        // TODO: Load pdfs here
        return (
            <div id={`${this.state.title}-docs`}>
            <Typography variant="h3">
                Design Documentation
            </Typography>
            <Typography variant="body1">
                DOCS GO HERE
            </Typography>
            </div>
        );
    }

    Outcomes() {
        if (this.state.outcomes.length < 1) {
            return;
        }
        return (
            <div id={`${this.state.title}-outcomes`}>
            <Typography variant="h3">
                Outcomes
            </Typography>
            <Typography variant="body1">
                {this.state.outcomes}
            </Typography>
            </div>
        );
    }

    render() {
        /* PRECEDES SUMMARY
        <Grid item>
            {this.QuickInfo()}
        </Grid>

        FOLLOWS SUMMARY
        <Grid item>
            {this.Demo()}
        </Grid>
        */
        return (
            <Grid id={`project-${this.state.id}`}
                    container
                    direction="column"
                    spacing={4}
            >
                <Grid item>
                    {this.Title()}
                </Grid>


                <Grid item>
                    {this.Summary()}
                </Grid>

                <br />
                <Divider />
                <br />

                <Grid item>
                    {this.TechStack()}
                </Grid>

                <Grid item>
                    {this.Purpose()}
                </Grid>

                <Grid item>
                    {this.Milestones()}
                </Grid>

                <Grid item>
                    {this.Process()}
                </Grid>

                <Grid item>
                    {this.DesignDocs()}
                </Grid>

                <Grid item>
                    {this.Outcomes()}
                </Grid>
            </Grid>
        );
    }
}

export function RoutesProjects(props) {
    let match = useRouteMatch();

    const routes = props.projects.map((project) => {
        return (
        <Route path={`${match.path}/${project.id}`}
                key={project.id}
                render={(props) =>
                        <Project {...props}
                            project={project}
                        />
                }
        />
        )
    });

    return (
        <div className="project-page">
            <Switch>
            {routes}
            </Switch>
        </div>
    )
}