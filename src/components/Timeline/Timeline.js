import React from "react";
import { Container } from "reactstrap";
import TimelineCard from "./TimelineCard/TimelineCard";

const Timeline = (props) => {
  const { timelineHeader, timelineData } = props;

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
      <Container>
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
          {/* {timelineData &&
            timelineData.map((elem, index) => (
              <TimelineCard
                cardPos={index % 2 !== 0 ? "right" : ""}
                cardImg={elem.img}
                cardYear={elem.year}
                cardName={elem.name}
                otherInfo={elem.otherInfo}
              />
            ))} */}
          {renderTimelineList.map((elem, index) => (
            <TimelineCard
              key={`${elem.name}#${index}`}
              dataList={elem}
              // cardImg={elem.img}
              // cardYear={elem.year}
              // cardName={elem.name}
              // otherInfo={elem.otherInfo}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Timeline;
