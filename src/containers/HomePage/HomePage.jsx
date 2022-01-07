import React, { Component } from "react";
// import { Container } from "reactstrap";

import MainCover from "../../components/MainCover/MainCover";
import BasicInfo from "../../components/BasicInfo/BasicInfo";
import Timeline from "../../components/Timeline/Timeline";

// import project image
import rawImg from "../../assets/image/project_img/readawrite_logo.jpg";
import sitinnovateImg from "../../assets/image/project_img/sitinnovate_logo.png";
import thaiaupairImg from "../../assets/image/project_img/thaiaupair_logo.jpg";
import eternoImg from "../../assets/image/project_img/eterno64_logo.jpg";
import hisImg from "../../assets/image/project_img/his_sim.jpg";

class MainScreen extends Component {
  state = {};

  render() {
    const projectExp = [
      {
        img: rawImg,
        year: "2019 - Present",
        name: "ReadAWrite Website",
        otherInfo: "MEB CORPORATION LTD.",
      },
      {
        img: sitinnovateImg,
        year: "2021",
        name: "Sit Inovate Website",
        otherInfo: "SIT Innovate co.ltd.",
      },
      {
        img: thaiaupairImg,
        year: "2021",
        name: "Thai Aupair Website",
        otherInfo: "Thaiaupair",
      },
      {
        img: eternoImg,
        year: "2020",
        name: "The Eterno 64 Website",
        otherInfo: "The Eterno 64 Townhome",
      },
      {
        img: hisImg,
        year: "2019",
        name: "HIS Simulation",
        otherInfo: "Computer Engineering (KMUTT)",
      },
    ];
    return (
      <div>
        <MainCover />
        <BasicInfo />
        <Timeline timelineHeader="PROJECT" timelineData={projectExp} />
        <Timeline timelineHeader="EXPERIENCE" />
      </div>
    );
  }
}

export default MainScreen;
