import React, { Component } from "react";
import { Container } from "reactstrap";
import "./Cover.css";

class Cover extends Component {
  state = {};
  render() {
    // var bgImg = "https://picsum.photos/id/1045/1000/" + this.props.cover_height;
    // var bgImg = require("../img/CoverBG.jpg");
    return (
      <div>
        <section
          className="cover-img"
          style={{
            minHeight: this.props.cover_height + "px",
            paddingTop: this.props.cover_height / 3 + "px"
          }}
        >
          <Container className="text-center">
            <h1
              style={{
                letterSpacing: window.innerWidth / 50 + "px",
                fontSize: window.innerWidth / 20 + "px"
              }}
            >
              SARANPAT
            </h1>
          </Container>
        </section>
      </div>
    );
  }
}

export default Cover;
