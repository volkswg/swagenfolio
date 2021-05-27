import React from "react";
import { Container } from "reactstrap";

import classes from "./MainCover.module.css";

const MainCover = () => {
  return (
    <section className={classes.coverImg}>
      <Container>
        <h1 className={classes.myName}>SARANPAT</h1>
      </Container>
    </section>
  );
};

export default MainCover;
