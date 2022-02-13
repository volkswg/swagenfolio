import React from "react";
import classes from "./author.module.css";
import vPic from "../../../assets/image/profilePic1.png";

const Author = (props) => {
  const { name, img } = props;
  return (
    <div className={classes.Author}>
      <div className={classes.AuthorPic}>
        <img
          src={img}
          style={{ width: "100%", height: "100%", objectFit: "cover", overflow: "hidden" }}
        />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default Author;
