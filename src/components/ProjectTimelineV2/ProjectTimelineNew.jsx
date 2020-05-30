import React, { Component } from "react";
import { Container } from "reactstrap";
import TimelineBoxLR from "./TimelineBoxLR/TimelineBoxLR";

class ProjectTimelineNew extends Component {
    state = {};
    render() {
        return (
            <div style={{ backgroundColor: "#f6f6f6" }}>
                <Container>
                    <h1 style={{ textAlign: "center", marginBottom: 70 }}>Project</h1>
                    <div style={{ position: "relative" }}>
                        <TimelineBoxLR />
                        <TimelineBoxLR />
                        <TimelineBoxLR />
                        <TimelineBoxLR />
                    </div>
                </Container>
            </div>
        );
    }
}

export default ProjectTimelineNew;
