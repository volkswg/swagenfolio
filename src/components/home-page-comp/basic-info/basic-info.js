import React from "react";
import { Container } from "reactstrap";
import ContactList from "./contact-list/contact-list";

import classes from "./basic-info.module.css";

const calculate_age = (dob1) => {
  var today = new Date();
  var birthDate = new Date(dob1); // create a date object directly from `dob1` argument
  var age_now = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age_now--;
  }
  return age_now;
};

const BasicInfo = () => {
  let my_age = calculate_age("1996-12-18");
  return (
    <Container className={classes.BasicInfoContianer}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <img
          src="image/profilePic.jpg"
          alt=""
          style={{ width: "25%", borderRadius: "100%", minWidth: 225 }}
        />
      </div>
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
          textAlign: "justify",
          marginBottom: 45,
        }}
      >
        I'm {my_age} years old, I graduated from King Mongkut's University of Technology Thonburi
        (KMUTT).
        <br />
        Computer Engineering.
      </p>
      <ContactList />
      {/* <hr /> */}
    </Container>
  );
};

export default BasicInfo;
