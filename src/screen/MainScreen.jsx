import React, { Component } from "react";
import { Container } from "reactstrap";

import MainCover from "../screen_component/main_screen/MainCover";
import BasicInfo from "../screen_component/main_screen/BasicInfo";
import ProjectTimeline from "../screen_component/main_screen/project_timeline/ProjectTimeline";

class MainScreen extends Component {
  state = {};

  haddleHeightChange = () => {
    // console.log(window.innerHeight);
    this.setState({ screen_heigth: window.innerHeight });
  };

  componentDidMount = () => {
    this.setState({ screen_heigth: window.innerHeight });
    window.addEventListener("resize", this.haddleHeightChange.bind(this));
  };
  render() {
    return (
      <div>
        <MainCover cover_height={this.state.screen_heigth} />
        <BasicInfo />
        <ProjectTimeline />
      </div>
    );
  }
}

export default MainScreen;
