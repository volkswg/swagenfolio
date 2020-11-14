import React, { Component } from "react";
import { Container } from "reactstrap";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <Container style={{ paddingTop: "70px" }}>
        <h1>404 Not found</h1>
      </Container>
    );
  }
}

export default NotFound;
