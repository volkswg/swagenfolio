import React from "react";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  const { cardPos, projectImg } = props;

  return (
    <div
      className={[classes.ProjectCardParent, cardPos === "right" ? classes.Right : ""].join(" ")}
    >
      <div className={classes.CenterLine}></div>
      <div className={classes.TimelineDot}></div>
      <div className={classes.ProjectCard}>
        <div
          className={[classes.Arrow, cardPos === "right" ? classes.Right : classes.Left].join(" ")}
        ></div>
        <img src={projectImg} style={{ width: 300 }} />
      </div>
    </div>
  );
};

export default ProjectCard;
