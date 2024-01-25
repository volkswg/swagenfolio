import React from "react";
import style from "./Background.module.css";

const Background = () => {
  return (
    <div className={style.BackgroundContainer}>
      <div className={style.stars}></div>
      <div className={style.stars2}></div>
      <div className={style.stars3}></div>
    </div>
  );
};

export default Background;
