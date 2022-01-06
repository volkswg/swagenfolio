import React, { Component } from "react";
// import { Container } from "reactstrap";

import MainCover from "../../components/MainCover/MainCover";
import BasicInfo from "../../components/BasicInfo/BasicInfo";
import ProjectTimeline from "../../components/ProjectTimeline/ProjectTimeline";

class MainScreen extends Component {
  state = {};

  render() {
    return (
      <div>
        <MainCover />
        <BasicInfo />
        <ProjectTimeline />
      </div>
    );
  }
}

export default MainScreen;
