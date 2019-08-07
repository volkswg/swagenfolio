import React, { Component } from "react";
import { Card, Row, Col, CardTitle, CardText, Collapse } from "reactstrap";

class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    let card_style = { boxShadow: "5px 5px 5px #d4d4d4" };
    let autoScaleNum = 12 / 4;
    return (
      <div>
        <Collapse isOpen={this.state.collapse}>
          <Row>
            <Col lg={autoScaleNum}>
              <a
                href="https://www.facebook.com/Saranpat.Funkaew"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "None",
                  color: "#272727"
                }}
              >
                <Card body className="text-center" style={card_style}>
                  <CardTitle>
                    <img
                      width="40%"
                      src={require("../../img/contract/fb-logo.png")}
                      alt=""
                    />
                  </CardTitle>
                  <br />
                  <CardTitle>
                    <b style={{ fontSize: "25px" }}>Facebook</b>
                  </CardTitle>
                  <CardText>Saranpat.Funkaew</CardText>
                </Card>
              </a>
            </Col>
            <Col lg={autoScaleNum}>
              <a
                href="https://github.com/volkswg"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "None", color: "#272727" }}
              >
                <Card body className="text-center" style={card_style}>
                  <CardTitle>
                    <img
                      width="40%"
                      src={require("../../img/contract/gh-logo.png")}
                      alt=""
                    />
                  </CardTitle>
                  <br />
                  <CardTitle>
                    <b style={{ fontSize: "25px" }}>GitHub</b>
                  </CardTitle>
                  <CardText>volkswg</CardText>
                </Card>
              </a>
            </Col>
            <Col lg={autoScaleNum}>
              <a
                href="https://www.linkedin.com/in/saranpat-funkaew-64a119154/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "None", color: "#272727" }}
              >
                <Card body className="text-center" style={card_style}>
                  <CardTitle>
                    <img
                      width="40%"
                      src={require("../../img/contract/linkedin-logo.png")}
                      alt=""
                    />
                  </CardTitle>
                  <br />
                  <CardTitle>
                    <b style={{ fontSize: "25px" }}>Linkedin</b>
                  </CardTitle>
                  <CardText>Saranpat Funkaew</CardText>
                </Card>
              </a>
            </Col>
            <Col lg={autoScaleNum}>
              <Card body className="text-center" style={card_style}>
                <CardTitle>
                  <img
                    width="40%"
                    src={require("../../img/contract/telC-logo.png")}
                    alt=""
                  />
                </CardTitle>
                <br />
                <CardTitle>
                  <b style={{ fontSize: "25px" }}>Tel.</b>
                </CardTitle>
                <CardText>081-6668881</CardText>
              </Card>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

export default ContactCard;
