import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";

const NavBar = () => {
  const [isNavBarTop, setIsNavBarTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 10;
      setIsNavBarTop(isTop);
      // setBrandFontSize(isTransparentBar ? 25 : 20);
    });
  }, []);

  return (
    <>
      <div
        className={[
          style.NavBarContainer,
          isNavBarTop ? style.NavBarContainerTop : style.NavBarContainerSmall,
        ].join(" ")}
      >
        <div className={style.NavBrand}>PORTFOLIO</div>
        {/* <div className={style.NavMenu}>Home</div>
        <div className={style.NavMenu}>Experience</div>
        <div className={style.NavMenu}>Achievement</div>
        <div className={style.NavMenu}>Project</div> */}
      </div>
      <div className={style.NavBarReservedSpace} />
    </>
  );
};

export default NavBar;
