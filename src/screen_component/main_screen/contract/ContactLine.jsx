import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class ContactLine extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <a
              //   className="small-contact"
              href="https://www.facebook.com/Saranpat.Funkaew"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ padding: "2px" }}
                width="45px"
                src={require("../../../img/contract/fb-logo.png")}
                alt=""
              />
            </a>
            <a href="https://github.com/volkswg" target="_blank" rel="noopener noreferrer">
              <img
                style={{ padding: "2px" }}
                width="45px"
                src={require("../../../img/contract/gh-logo.png")}
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/saranpat-funkaew-64a119154/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ padding: "2px" }}
                width="45px"
                src={require("../../../img/contract/linkedin-logo.png")}
                alt=""
              />
            </a>
          </Col>
        </Row>
        <Row style={{ paddingTop: "10px" }}>
          <Col className="text-center">
            <a href="tel:+66816668881" style={{ textDecoration: "none", color: "#272727" }}>
              <img
                style={{ padding: "2px" }}
                width="25px"
                src={require("../../../img/contract/telC-logo.png")}
                alt=""
              />
              081-6668881
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactLine;
