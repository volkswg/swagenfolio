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
        <h1 style={{ textAlign: "center", marginBottom: 70 }}>Project</h1>
        <div
          className="timeline"
          style={{
            position: "relative",
            margin: "20px auto 0 auto"
          }}
        >
          {/* <div style={styles.connecting_line}></div> */}
          <TimelineBox
            box_pos="left"
            timeline_color="#135589"
            year="Present"
            topic="ReadAWrite"
            image_src={require("../../../img/project_img/readawrite_logo.jpg")}
            description="Web Developer Team at ReadAWrite by Meb Croporation"
            tools="(PHP, SQL, HTML, Javascript)"
          />
          <TimelineBox
            box_pos="right"
            timeline_color="#2A93D5"
            year="2019"
            topic="Hospital Data Integration Framework"
            image_src={require("../../../img/project_img/his_sim.jpg")}
            description="Research the best way to do data integration between many hospital systems and create Web App to prove of concept, Senior Project at KMUTT "
            tools="(React.JS, SQL, Node.JS)"
          />
          <TimelineBox
            box_pos="left"
            timeline_color="#3DDAD7"
            year="2017"
            topic="test2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget rhoncus enim,
            maximus laoreet mauris. Sed porta ultricies eros."
          />
        </div>
      </Container>
    );
  }
}

export default ProjectTimeline;
