// ==== REACT IMPORTS ====
import React from "react";
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import {
    Jumbotron
} from "react-bootstrap";

// ==== CONTENT JSX ====
export class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: props.project,
            id: props.project.id,
            source: props.project.title,
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
            <h2>
                {this.state.title}
            </h2>
        );
    }

    Summary() {
        if (this.state.summary.length < 1) {
            return (
            <div id="summary">
            <h3>
                Summary
            </h3>
            <p className="lead text-danger">
                This content has not been written yet.
            </p>
            </div>
            );
        }
        return (
            <div id="summary">
            <h3>
                Summary
            </h3>
            <p className="lead">
                {this.state.summary}
            </p>
            </div>
        );
    }

    Demo() {
        if (this.state.demo.length < 1) {
            return (
                <div id={`${this.state.title}-demo`}>
                <h3>
                    Demonstration: {this.state.title}
                </h3>
                <main id={`${this.state.title}-demo-main`}>
                </main>
                <p className="lead text-danger">
                    PROJECT DEMONSTRATION CURRENTLY UNDER DEVELOPMENT.
                </p>
                </div>
            );
        }
        // TODO: ADD DEMO SECTION BELOW
        return (
            <div id={`${this.state.title}-demo`}>
            <h3>
                Demonstration: {this.state.title}
            </h3>
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
            <p>{par}</p>
        );
        return (
            <div id={`${this.state.title}-purpose`}>
            <h3>
                Purpose
            </h3>
            {listPurpose}
            </div>
        );
    }

    TechStack() {
        let listStack = this.state.stack.map((tech) =>
            <li>{tech}</li>
        );
        if (listStack.length < 1) {
            listStack = (
                <li key={0} className="text-danger">This content has not been written yet.</li>
            );
            return;
        }
        return (
            <div id={`${this.state.title}-stack`}>
            <h3>
                Technology Stack
            </h3>
            <ul>
                {listStack}
            </ul>
            </div>
        );
    }

    Milestones() {
        let listMilestones = this.state.milestones.map((milestone) =>
            <li>{milestone}</li>
        );
        if (listMilestones.length < 1) {
            listMilestones =(
                <li key={0} className="text-danger">This content has not been written yet.</li>
            );
            return;
        }
        return (
            <div id={`${this.state.title}-milestones`}>
            <h3>
                Milestones
            </h3>
            <ol>
                {listMilestones}
            </ol>
            </div>
        );
    }

    Process() {
        let listProcess = this.state.process.map((step) =>
            <li>{step}</li>
        );
        if (listProcess.length < 1) {
            listProcess = (
                <li key={0} className="text-danger">This content has not been written yet.</li>
            );
            return;
        }
        return (
            <div id={`${this.state.title}-process`}>
            <h3>
                Process
            </h3>
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
            <h3>
                Design Documentation
            </h3>
            <p>
                DOCS GO HERE
            </p>
            </div>
        );
    }

    Outcomes() {
        if (this.state.outcomes.length < 1) {
            return;
        }
        return (
            <div id={`${this.state.title}-outcomes`}>
            <h3>
                Outcomes
            </h3>
            <p>
                {this.state.outcomes}
            </p>
            </div>
        );
    }

    render() {
        return (
            <div id={this.state.id} style={{ width: "auto", height: "auto" }}>
            <Jumbotron>
                {this.Title()}
                {this.Summary()}
                {this.Demo()}
                <hr />
                {this.TechStack()}
                {this.Purpose()}
                {this.Milestones()}
                {this.Process()}
                {this.DesignDocs()}
                {this.Outcomes()}
            </Jumbotron>
            </div>
        );
    }
}

export function RoutesProjects(props) {
    let match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}/${props.cards[0].id}`}>
                <Project
                    project={props.projects[0]}
                />
            </ Route>

            <Route path={`${match.path}/${props.cards[1].id}`}>
                <Project
                    project={props.projects[1]}
                />
            </ Route>

            <Route path={`${match.path}/${props.cards[2].id}`}>
                <Project
                    project={props.projects[2]}
                />
            </ Route>

            <Route path={`${match.path}/${props.cards[3].id}`}>
                <Project
                    project={props.projects[3]}
                />
            </ Route>

            <Route path={`${match.path}/${props.cards[4].id}`}>
                <Project
                    project={props.projects[4]}
                />
            </ Route>

            <Route path={`${match.path}/${props.cards[5].id}`}>
                <Project
                    project={props.projects[5]}
                />
            </ Route>
        </ Switch>
    );
}
