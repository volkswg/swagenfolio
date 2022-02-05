import React from "react";
// import { Container } from "reactstrap";

import MainCover from "../../components/MainCover/MainCover";
import BasicInfo from "../../components/BasicInfo/BasicInfo";
import Timeline from "../../components/Timeline/Timeline";

// json
import projectExp from "../../assets/json/projectExp.json";
import workExp from "../../assets/json/workExp.json";
import achievementList from "../../assets/json/achievementExp.json";

const MainScreen = () => {
  return (
    <div>
      <MainCover />
      <BasicInfo />
      <Timeline timelineHeader="EXPERIENCE" timelineData={workExp} />
      <Timeline timelineHeader="ACHIEVEMENT" timelineData={achievementList} />
      <Timeline timelineHeader="PROJECT" timelineData={projectExp} />
    </div>
  );
};

export default MainScreen;
