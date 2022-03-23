import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";
import DownloadIcon from "../../svg-icon/download-icon";

import classes from "./nav-bar.module.css";

const NavBar = () => {
  let [navColor, setNavColor] = useState("fadded");
  let [bandFontSize, setBrandFontSize] = useState(25);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTransparentBar = window.scrollY < 10;
      setNavColor(isTransparentBar ? "fadded" : "light");
      setBrandFontSize(isTransparentBar ? 25 : 20);
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
          <a
            className={classes.DownloadCVSection}
            href="/resume/SaranpatFunkaewCV.pdf"
            target={"_blank"}
          >
            <DownloadIcon className={classes.DownloadIcon} />
            <div className={classes.CVText}>Resume</div>
          </a>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
