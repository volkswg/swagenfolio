import React, { Component } from "react";
// import { Container } from "reactstrap";

import MainCover from "../../components/MainCover/MainCover";
import BasicInfo from "../../components/BasicInfo/BasicInfo";
import Timeline from "../../components/Timeline/Timeline";

// import project image
import rawImg from "../../assets/image/project_img/readawrite_logo.jpg";
import sitinnovateImg from "../../assets/image/project_img/sitinnovate_logo.png";
import thaiaupairImg from "../../assets/image/project_img/thaiaupair_logo.PNG";
import eternoImg from "../../assets/image/project_img/eterno64_logo.PNG";
import hisImg from "../../assets/image/project_img/his_sim.jpg";
import happyTownLogo from "../../assets/image/project_img/HappyTownLogo.jpg";

//import work exp image
import picoLogo from "../../assets/image/project_img/PICO_logo.png";
import torklaLogo from "../../assets/image/project_img/Torkla_02.jpg";

// import achievement image
import hackathonLogo from "../../assets/image/project_img/hackathon_logo.jpg";
import tictaLogo from "../../assets/image/project_img/ticta_logo.jpg";
import nscLogo from "../../assets/image/project_img/nsc_logo.png";
import mosLogo from "../../assets/image/project_img/mos2014_logo.jpg";
import mmDashLogo from "../../assets/image/project_img/mmDash_logo.jpg";
import mmHLogo from "../../assets/image/project_img/Monmon_logo.jpg";

class MainScreen extends Component {
  state = {};

  render() {
    const projectExp = [
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
      {
        img: happyTownLogo,
        year: "2015",
        name: "Happy Town",
        otherInfo: "The Prince Royal's College",
      },
      {
        img: mmDashLogo,
        year: "2015",
        name: "Monmon dash",
        otherInfo: "The Prince Royal's College",
      },
      {
        img: mmHLogo,
        year: "2015",
        name: "Monmon: hiding the hanky",
        otherInfo: "The Prince Royal's College",
      },
    ];

    const workExp = [
      {
        img: rawImg,
        year: "2019 - Present",
        name: "ReadAWrite Website",
        otherInfo: "MEB CORPORATION LTD.",
      },
      {
        img: picoLogo,
        year: "2018",
        name: "Internship",
        otherInfo: "Pico (Thailand) Public Co., Ltd.",
      },
      {
        img: torklaLogo,
        year: "2014",
        name: "ต่อกล้าให้เติบใหญ่ (Newseed) #2",
        otherInfo: "มูลนิธิสยามกัมมาจล (SCB Foundation)",
      },
    ];

    const achievementList = [
      {
        img: hackathonLogo,
        year: "2018",
        name: "3rd Runner-Up",
        otherInfo: "Thailand Open Hackathron 2018",
      },
      {
        img: tictaLogo,
        year: "2015",
        name: "1st Runner-Up",
        otherInfo: "Thailand ICT Award 2015",
      },
      {
        img: nscLogo,
        year: "2015",
        name: "1st Runner-Up",
        otherInfo: "National Software Contest 2015",
      },
      {
        img: nscLogo,
        year: "2014",
        name: "Honorable Mention Award",
        otherInfo: "National Software Contest 2014",
      },
      {
        img: mosLogo,
        year: "2014",
        name: "Bronze Medal",
        otherInfo: "MOS Olympic (Excel 2010)",
      },
    ];
    return (
      <div>
        <MainCover />
        <BasicInfo />
        <Timeline timelineHeader="EXPERIENCE" timelineData={workExp} />
        <Timeline timelineHeader="ACHIEVEMENT" timelineData={achievementList} />
        <Timeline timelineHeader="PROJECT" timelineData={projectExp} />
      </div>
    );
  }
}

export default MainScreen;
