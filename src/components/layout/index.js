import React from "react";
import NavBar from "./NavBar";
import style from "./Layout.module.css";
const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <NavBar />
      <div className={style.LayoutContainer}>{children}</div>
    </>
  );
};

export default Layout;
