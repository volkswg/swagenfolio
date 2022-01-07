import React from "react";
import { Container } from "reactstrap";
import TimelineCard from "./TimelineCard/TimelineCard";

const Timeline = (props) => {
  const { timelineHeader, timelineData } = props;

  return (
    <div style={{ backgroundColor: "#f6f6f6", overflow: "hidden" }}>
      <Container>
        <h1
          style={{
            textAlign: "center",
            padding: "40px 0",
            fontWeight: "bold",
          }}
        >
          {timelineHeader}
        </h1>
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          {timelineData &&
            timelineData.map((elem, index) => (
              <TimelineCard
                cardPos={index % 2 !== 0 ? "right" : ""}
                cardImg={elem.img}
                cardYear={elem.year}
                cardName={elem.name}
                otherInfo={elem.otherInfo}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Timeline;
