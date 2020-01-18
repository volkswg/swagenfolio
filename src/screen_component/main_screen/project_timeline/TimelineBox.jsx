import React, { Component } from "react";

class TimelineBox extends Component {
  state = {};
  render() {
    const timeline_color =
      this.props.timeline_color === null ? "skyblue" : this.props.timeline_color;
    const styles = {
      container_left: {
        position: "relative",
        width: "50%",
        left: 7,
        padding: "10px 20px 10px 10px",
        borderTop: "6px solid " + timeline_color,
        borderRight: "6px solid " + timeline_color
      },
      container_right: {
        position: "relative",
        width: "50%",
        left: "50%",
        padding: "10px 10px 10px 20px",
        borderTop: "6px solid " + timeline_color,
        borderLeft: "6px solid " + timeline_color
      },
      timeline_mark_left: {
        content: "",
        position: "absolute",
        width: 25,
        height: 25,
        backgroundColor: timeline_color,
        // border: "4px solid grey",
        borderRadius: "50%",
        zIndex: 1,
        left: 0,
        top: -16
      },
      timeline_mark_right: {
        content: "",
        position: "absolute",
        width: 25,
        height: 25,
        backgroundColor: timeline_color,
        // border: "4px solid grey",
        borderRadius: "50%",
        zIndex: 1,
        right: 0,
        top: -16
      },
      content: {
        position: "relative",
        margenRight: 20,
        padding: 10,
        wordBreak: "break-word",
        // border: "2px solid red",
        borderRadius: 10,
        textAlign: "center"
      },
      left_dot: {
        width: 20,
        height: 20,
        position: "absolute",
        top: 0,
        right: 0,
        // zIndex: 1,
        // left: -11,
        backgroundColor: timeline_color,
        borderBottomLeftRadius: "100%"
        // border: "medium solid white",
        // borderWidth: "10px 10px 10px 0",
        // borderColor: "transparent red transparent transparent"
      },
      right_dot: {
        width: 20,
        height: 20,
        position: "absolute",
        top: 0,
        left: 0,
        // zIndex: 1,
        // left: -11,
        backgroundColor: timeline_color,
        borderBottomRightRadius: "100%"
        // border: "medium solid white",
        // borderWidth: "10px 10px 10px 0",
        // borderColor: "transparent red transparent transparent"
      }
    };

    return (
      <div>
        <div style={this.props.box_pos === "left" ? styles.container_left : styles.container_right}>
          {/* <div style={styles.year_mark}>2000</div> */}
          <div
            style={
              this.props.box_pos === "left" ? styles.timeline_mark_left : styles.timeline_mark_right
            }
          />
          <div style={this.props.box_pos === "left" ? styles.left_dot : styles.right_dot} />
          <div style={styles.content}>
            <h1
              style={{
                position: "absolute",
                top: -60,
                margin: "auto",
                letterSpacing: 10
                // fontSize: "100%"
              }}
            >
              2019
            </h1>
            <h5>Topic</h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget rhoncus enim,
            maximus laoreet mauris. Sed porta ultricies eros.
          </div>
        </div>
      </div>
    );
  }
}

export default TimelineBox;
