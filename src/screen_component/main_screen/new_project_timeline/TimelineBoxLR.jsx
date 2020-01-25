import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class TimelineBoxLR extends Component {
  state = {};
  render() {
    const styles = {
      timeline_line: {
        backgroundColor: "darkgrey",
        width: 3,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "50%"
      },
      timeline_box_left: {
        backgroundColor: "white",
        height: "100%",
        boxShadow: "rgba(215, 215, 215, 1) 0px 0px 13px 3px",
        padding: 20
      },
      timeline_box_right: {
        backgroundColor: "white",
        height: "100%",
        boxShadow: "rgba(215, 215, 215, 1) 0px 0px 13px 3px",
        padding: 20
      },
      timeline_box_container: {
        height: 200,
        paddingBottom: 20
      },
      arrow_left: {
        content: " ",
        height: 0,
        position: "absolute",
        top: 10,
        width: 0,
        zIndex: 1,
        right: 5,
        border: "medium solid white",
        borderWidth: "10px 0px 10px 10px",
        borderColor: "transparent transparent transparent white"
      },
      arrow_right: {
        content: " ",
        height: 0,
        position: "absolute",
        top: 45,
        width: 0,
        zIndex: 1,
        left: 6,
        border: "medium solid white",
        borderWidth: "10px 10px 10px 0",
        borderColor: "transparent white transparent transparent"
      }
    };
    return (
      <Row style={{ position: "relative" }}>
        <div style={styles.timeline_line} />
        <Col md={6} style={styles.timeline_box_container}>
          <div style={styles.timeline_box_left}>
            <div id="timeline_deco">
              <div style={styles.arrow_left} />
              <div
                style={{
                  content: " ",
                  position: "absolute",
                  width: 14,
                  height: 14,
                  backgroundColor: "darkgrey",
                  top: 13,
                  zIndex: 1,
                  right: -9,
                  borderRadius: "100%",
                  border: "3px solid rgb(246, 246, 246)"
                  // borderWidth: "10px 10px 10px 0",
                  // borderColor: "transparent white transparent transparent"
                }}
              />
            </div>
            testcontent
          </div>
        </Col>
        <Col md={6} style={styles.timeline_box_container}>
          <div style={styles.timeline_box_right}>
            <div id="timeline_deco">
              <div style={styles.arrow_right} />
              <div
                style={{
                  content: " ",
                  position: "absolute",
                  width: 14,
                  height: 14,
                  backgroundColor: "darkgrey",
                  top: 48,
                  zIndex: 1,
                  left: -5,
                  borderRadius: "100%",
                  border: "3px solid rgb(246, 246, 246)"
                  // borderWidth: "10px 10px 10px 0",
                  // borderColor: "transparent white transparent transparent"
                }}
              />
            </div>
            testcontent
          </div>
        </Col>
      </Row>
    );
  }
}

export default TimelineBoxLR;
