import React from "react";
import style from "./Layout.module.css";
const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <div className={style.LayoutContainer}>{children}</div>
    </>
  );
};

export default Layout;
