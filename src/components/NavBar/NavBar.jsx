import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

import classes from "./NavBar.module.css";

const NavBar = ({ brand_size }) => {
  let [navColor, setNavColor] = useState("fadded");
  let [bandFontSize, setBrandFontSize] = useState(brand_size[0]);

  const handleScroll = () => {
    const smallerNavBar = window.scrollY <= window.innerHeight - 50;

    setNavColor(smallerNavBar ? "fadded" : "light");
    setBrandFontSize(smallerNavBar ? brand_size[0] : brand_size[1]);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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
