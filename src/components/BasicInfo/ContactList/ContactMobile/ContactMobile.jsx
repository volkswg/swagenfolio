import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ContactElemSM from "./ContactElemSM/ContactElemSM";

class ContactLine extends Component {
  state = {};
  render() {
    const contractSmallEach = <div></div>;
    return (
      <Container style={{ marginBottom: 50 }}>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ContactElemSM
            contactLink="https://www.facebook.com/Saranpat.Funkaew"
            imageSrc={require("../../../../img/contract/fb-logo.png")}
            description="Saranpat.Funkaew"
          />
          <ContactElemSM
            contactLink="https://github.com/volkswg"
            imageSrc={require("../../../../img/contract/gh-logo.png")}
            description="volkswg"
          />
          <ContactElemSM
            contactLink="https://www.linkedin.com/in/saranpat-funkaew-64a119154/"
            imageSrc={require("../../../../img/contract/linkedin-logo.png")}
            description="Saranpat.Funkaew"
          />
          <ContactElemSM
            contactLink=""
            imageSrc={require("../../../../img/contract/telC-logo.png")}
            description="081-6668881"
          />
        </div>
      </Container>
    );
  }
}

export default ContactLine;
