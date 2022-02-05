import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Container style={{ paddingTop: "70px", textAlign: "center" }}>
      <div style={{ fontSize: "10rem", fontWeight: "bold", color: "#3a3a3a" }}>404</div>
      <div style={{ fontSize: "2rem" }}>Page Not Found</div>
      <Link className={classes.BackLink} to={"/"}>
        &lt; Back to Home Page
      </Link>
    </Container>
  );
};

export default NotFound;
