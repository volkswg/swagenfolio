import React, { Component } from "react";
import { Container } from "reactstrap";
import ContactElemSM from "./ContactElemSM/ContactElemSM";

class ContactLine extends Component {
  state = {};
  render() {
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
            imageSrc={require("../../../../assets/image/contact/fb-logo.png")}
            description="Saranpat.Funkaew"
          />
          <ContactElemSM
            contactLink="https://github.com/volkswg"
            imageSrc={require("../../../../assets/image/contact/gh-logo.png")}
            description="volkswg"
          />
          <ContactElemSM
            contactLink="https://www.linkedin.com/in/saranpat-funkaew-64a119154/"
            imageSrc={require("../../../../assets/image/contact/linkedin-logo.png")}
            description="Saranpat.Funkaew"
          />
          <ContactElemSM
            contactLink=""
            imageSrc={require("../../../../assets/image/contact/telC-logo.png")}
            description="081-6668881"
          />
        </div>
      </Container>
    );
  }
}

export default ContactLine;
