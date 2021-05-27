import React from "react";
import { Container } from "reactstrap";

import classes from "./MainCover.module.css";

const MainCover = () => {
  return (
    <section className={classes.coverImg}>
      <Container className="text-center">
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            letterSpacing: "2vw",
            fontSize: "5rem",
          }}
        >
          SARANPAT
        </h1>
      </Container>
    </section>
  );
};

export default MainCover;
