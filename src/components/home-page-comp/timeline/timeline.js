import React from "react";
import { Container } from "reactstrap";
import TimelineCard from "./timeline-card/timeline-card";

const Timeline = (props) => {
  const { timelineHeader, timelineData, dataType } = props;

  let tempGroupList = [];
  const renderTimelineList = [];
  if (timelineData) {
    for (const [index, eData] of timelineData.entries()) {
      tempGroupList.push(eData);
      if ((index + 1) % 2 === 0 || index + 1 === timelineData.length) {
        renderTimelineList.push(tempGroupList);
        tempGroupList = [];
      }
    }
  }

  return (
    <div style={{ backgroundColor: "#f6f6f6", overflow: "hidden" }}>
      <Container style={{ marginBottom: 25 }}>
        <h1
          style={{
            textAlign: "center",
            padding: "30px 0 10px 0",
            fontWeight: "bold",
          }}
        >
          {timelineHeader}
        </h1>
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          {renderTimelineList.map((elem, index) => (
            <TimelineCard key={`${elem.name}#${index}`} dataList={elem} dataType={dataType} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Timeline;
