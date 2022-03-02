import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

import classes from "./nav-bar.module.css";

const NavBar = () => {
  let [navColor, setNavColor] = useState("fadded");
  let [bandFontSize, setBrandFontSize] = useState(25);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const smallerNavBar = window.scrollY <= window.innerHeight - 50;
      setNavColor(smallerNavBar ? "fadded" : "light");
      setBrandFontSize(smallerNavBar ? 25 : 20);
    });
  }, []);

  return (
    <div>
      <Container>
        <Navbar
          light
          color={navColor}
          expand="md"
          className={[classes.NavStyle, "fixed-top"].join(" ")}
        >
          <NavbarBrand
            href="/"
            style={{
              fontSize: bandFontSize,
              transition: "all 0.2s ease",
            }}
          >
            Portfolio
          </NavbarBrand>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
