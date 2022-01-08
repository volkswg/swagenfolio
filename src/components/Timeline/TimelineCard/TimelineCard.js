import React from "react";
import classes from "./TimelineCard.module.css";

const TimelineCard = (props) => {
  const { cardPos, cardImg, cardYear, cardName, otherInfo } = props;

  return (
    <div
      className={[classes.TimelineCardParent, cardPos === "right" ? classes.Right : ""].join(" ")}
    >
      <div className={classes.CenterLine}></div>
      <div className={classes.TimelineDot}></div>
      <div className={classes.TimelineCard}>
        <div
          className={[classes.Arrow, cardPos === "right" ? classes.Right : classes.Left].join(" ")}
        ></div>
        <div className={classes.ImgSection}>
          <img src={cardImg} style={{ width: "100%" }} alt={cardName} />
        </div>
        <div className={classes.TxtSection}>
          <div>{cardYear}</div>
          <div>{cardName}</div>
          <div>{otherInfo}</div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
