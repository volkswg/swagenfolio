import React from "react";
import TimelineCard from "../TimelineCard";
import style from "./TimelineContainer.module.css";
const TimelineContainer = (props) => {
  const { title, data } = props;

  return (
    <div key={title} className={style.TimelineContainer}>
      <h2>{title}</h2>
      {data.map((eTimelineCardData) => (
        <TimelineCard
          key={eTimelineCardData.position + eTimelineCardData.companyName}
          {...eTimelineCardData}
        />
      ))}
    </div>
  );
};

export default TimelineContainer;
