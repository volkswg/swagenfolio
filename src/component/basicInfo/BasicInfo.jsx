import React, { Component } from "react";
import { Container } from "reactstrap";
import Contact from "../contract/Contact";

import "./BasicInfo.css";

class BasicInfo extends Component {
  state = {};
  calculate_age = dob1 => {
    var today = new Date();
    var birthDate = new Date(dob1); // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  };

  render() {
    let my_age = this.calculate_age("1996-12-18");
    // var month = new Date().get();
    return (
      <Container
        style={{
          paddingTop: "50px",
          paddingLeft: "50px",
          paddingRight: "50px",
          textAlign: "justify"
        }}
      >
        <h3 className="text-center">
          My Name Is{" "}
          <span className="name">
            <b>Saranpat Funkaew (Volk)</b>
          </span>
        </h3>
        <hr />
        <p
          className="text-center"
          style={{
            fontSize: "20px",
            textAlign: "justify"
          }}
        >
          I'm {my_age} years old, I graduated from King Mongkut's University of
          Technology Thonburi (KMUTT).
          <br />
          Computer Engineering.
        </p>
        <Contact />
        {/* <hr /> */}
      </Container>
    );
  }
}

export default BasicInfo;
