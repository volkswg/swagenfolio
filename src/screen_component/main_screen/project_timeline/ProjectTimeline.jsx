import React, { Component } from "react";
import { Container } from "reactstrap";
import TimelineBox from "./TimelineBox";
class ProjectTimeline extends Component {
  state = {};

  render() {
    const styles = {
      connecting_line: {
        content: "",
        position: "absolute",
        width: 6,
        backgroundColor: "grey",
        // borderRadius: "10%",
        top: 1,
        bottom: 0,
        // left: 70
        left: "50%"
      },
      year_mark: {
        position: "absolute",
        fontSize: 17,
        fontWeight: 700
      }
    };

    return (
      <Container>
        <h1 style={{ textAlign: "center" }}>Project</h1>
        <div
          className="timeline"
          style={{
            position: "relative",
            margin: "20px auto 0 auto"
          }}
        >
          <div style={styles.connecting_line}></div>
          <TimelineBox box_pos="left" timeline_color="#135589" />
          <TimelineBox box_pos="right" timeline_color="#2A93D5" />
          <TimelineBox box_pos="left" timeline_color="#3DDAD7" />
        </div>
      </Container>
    );
  }
}

export default ProjectTimeline;
