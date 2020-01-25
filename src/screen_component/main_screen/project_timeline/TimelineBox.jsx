import React, { Component } from "react";

class TimelineBox extends Component {
  state = { image_loaded: false };
  render() {
    const timeline_color =
      this.props.timeline_color === null ? "skyblue" : this.props.timeline_color;
    const styles = {
      container_left: {
        position: "relative",
        width: "50%",
        left: 0,
        // padding: "10px 20px 10px 10px",
        borderTop: "6px solid " + timeline_color,
        borderRight: "6px solid " + timeline_color
      },
      container_right: {
        position: "relative",
        width: "50%",
        left: "50%",
        // padding: "10px 10px 10px 20px",
        borderTop: "6px solid " + timeline_color,
        borderLeft: "6px solid " + timeline_color
      },
      timeline_dot_left: {
        content: "",
        position: "absolute",
        width: 25,
        height: 25,
        backgroundColor: timeline_color,
        borderRadius: "50%",
        zIndex: 1,
        left: 0,
        top: -16
      },
      timeline_dot_right: {
        content: "",
        position: "absolute",
        width: 25,
        height: 25,
        backgroundColor: timeline_color,
        borderRadius: "50%",
        zIndex: 1,
        right: 0,
        top: -16
      },
      content: {
        position: "relative",
        margenRight: 20,
        padding: "30px 15px",
        wordBreak: "break-word",
        borderRadius: 10,
        textAlign: "center"
      },
      left_deco_top: {
        width: 20,
        height: 20,
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: timeline_color,
        borderBottomLeftRadius: "100%"
      },
      right_deco_top: {
        width: 20,
        height: 20,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: timeline_color,
        borderBottomRightRadius: "100%"
      },
      left_deco_bot: {
        width: 20,
        height: 20,
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: timeline_color,
        borderTopLeftRadius: "100%"
      },
      right_deco_bot: {
        width: 20,
        height: 20,
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: timeline_color,
        borderTopRightRadius: "100%"
      },
      year_left: {
        position: "absolute",
        top: -60,
        left: 19,
        letterSpacing: 10,
        fontSize: "2.2em"
      },
      year_right: {
        position: "absolute",
        top: -60,
        right: 19,
        letterSpacing: 10,
        fontSize: "2.2em"
      }
    };

    return (
      <div>
        <div style={this.props.box_pos === "left" ? styles.container_left : styles.container_right}>
          <div
            style={
              this.props.box_pos === "left" ? styles.timeline_dot_left : styles.timeline_dot_right
            }
          />

          <div
            style={this.props.box_pos === "left" ? styles.left_deco_top : styles.right_deco_top}
          />
          <div
            style={this.props.box_pos === "left" ? styles.left_deco_bot : styles.right_deco_bot}
          />
          <div style={styles.content}>
            <h1 style={this.props.box_pos === "left" ? styles.year_left : styles.year_right}>
              {this.props.year}
            </h1>
            <h3>{this.props.topic}</h3>
            {/* {!this.state.image_loaded ? (
              <img
                id="loading"
                src={require("../../../img/project_img/readawrite_logo.jpg")}
                style={{ borderRadius: 5 }}
                alt=""
              />
            ) : null} */}
            <img
              id="loading"
              src={this.props.image_src}
              style={{ borderRadius: 5, width: "80%" }}
              alt=""
            />
            <br />
            <br />
            {this.props.description}
            <br />
            {this.props.tools}
          </div>
        </div>
      </div>
    );
  }
}

export default TimelineBox;
