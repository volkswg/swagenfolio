import React, { useState } from "react";
import style from "./Landing.module.css";
import { Col, Row } from "antd";
import DownloadIcon from "../../components/svg-icon/download-icon";
import ContactSection from "../../components/Landing/ContactSection/ContactSection";
import TimelineContainer from "../../components/Timeline/TimelineContainer";
import TimelineFilter from "../../components/Landing/TimelineFilter";
import IntroSection from "../../components/Landing/IntroSection";
import Background from "../../components/Landing/Background";

const experienceData = [
  {
    imgSrc: "/image/workExp/sunday_logo.jpg",
    year: "2022 - Current",
    position: "Software Engineer",
    companyName: "SUNDAY TECHNOLOGIES COMPANY LIMITED",
  },
  {
    imgSrc: "/image/workExp/hgr_logo.jpg",
    year: "2022",
    position: "Full Stack Developer",
    companyName: "HG ROBOTICS COMPANY LIMITED",
  },
  {
    imgSrc: "/image/workExp/readawrite_logo.jpg",
    year: "2019",
    position: "Full Stack Developer",
    companyName: "MEB CORPORATION LTD.",
  },
  {
    imgSrc: "/image/workExp/PICO_logo.png",
    year: "2018",
    position: "Internship",
    companyName: "Pico (Thailand) Public Co., Ltd.",
  },
];

const achievementData = [
  {
    imgSrc: "/image/achievementList/hackathon_logo.jpg",
    year: "2018",
    position: "3rd Runner-Up",
    companyName: "Thailand Open Hackathron 2018",
  },
  {
    imgSrc: "/image/achievementList/ticta_logo.jpg",
    year: "2015",
    position: "1st Runner-Up",
    companyName: "Thailand ICT Award 2015",
  },
  {
    imgSrc: "/image/achievementList/NSC2015_cover.jpg",
    year: "2015",
    position: "1st Runner-Up",
    companyName: "National Software Contest 2015",
  },
  {
    imgSrc: "/image/achievementList/NSC2014_cover.jpg",
    year: "2014",
    position: "Honorable Mention Award",
    companyName: "National Software Contest 2014",
  },
  {
    imgSrc: "/image/achievementList/mos2014_logo.jpg",
    year: "2014",
    position: "Bronze Medal",
    companyName: "MOS Olympic (Excel 2010)",
  },
];

const projectData = [
  {
    imgSrc: "/image/projectExp/BommCrypto-logo.jpeg",
    year: "2022",
    position: "BombCrypto Bot",
    companyName: "",
  },
  {
    imgSrc: "/image/projectExp/puppeteer_autofill.jpg",
    year: "2022",
    position: "Google Form Autofill",
    companyName: "",
  },
  {
    imgSrc: "/image/projectExp/sitinnovate_logo.png",
    year: "2021",
    position: "SIT Innovate Website",
    companyName: "SIT Innovate co.ltd.",
  },
  {
    imgSrc: "/image/projectExp/thaiaupair_logo.PNG",
    year: "2021",
    position: "Thai Aupair Website",
    companyName: "Thaiaupair.com",
  },
  {
    imgSrc: "/image/projectExp/eterno64_logo.PNG",
    year: "2020",
    position: "The Eterno 64 Website",
    companyName: "TANGCHAIYAWONG DEVELOMENT CO.,LTD",
  },
  {
    imgSrc: "/image/projectExp/his_sim.jpg",
    year: "2019",
    position: "HIS Simulation",
    companyName: "Computer Engineering (KMUTT)",
  },
  {
    imgSrc: "/image/projectExp/HappyTownLogo.jpg",
    year: "2015",
    position: "Happy Town",
    companyName: "The Prince Royal's College",
  },
  {
    imgSrc: "/image/projectExp/mmDash_logo.jpg",
    year: "2015",
    position: "Monmon dash",
    companyName: "The Prince Royal's College",
  },
  {
    imgSrc: "/image/projectExp/Monmon_logo.jpg",
    year: "2014",
    position: "Monmon: hiding the hanky",
    companyName: "The Prince Royal's College",
  },
];

const TIMELINE_NAME_LIST = {
  EXPERIENCE: "EXPERIENCE",
  ACHIEVEMENT: "ACHIEVEMENT",
  PROJECT: "PROJECT",
};

const LandingPage = (props) => {
  const [selectedTimeline, setSelectedTimeline] = useState(
    TIMELINE_NAME_LIST.EXPERIENCE
  );

  const timelineFilterChangeHandler = (data) => {
    setSelectedTimeline(data);
  };
  return (
    <>
      <Background />
      <Row className={style.LandingPageContainer}>
        <Col md={12} className={style.ImageCol}>
          <img src="image/profilePicFull.JPG" alt="" />
        </Col>
        <Col md={12} className={style.InformationCol}>
          <IntroSection />
          <ContactSection />
        </Col>
      </Row>
      <TimelineFilter
        defaultData={TIMELINE_NAME_LIST.EXPERIENCE}
        filterData={[
          TIMELINE_NAME_LIST.EXPERIENCE,
          TIMELINE_NAME_LIST.ACHIEVEMENT,
          TIMELINE_NAME_LIST.PROJECT,
        ]}
        onChange={timelineFilterChangeHandler}
      />
      {selectedTimeline === TIMELINE_NAME_LIST.EXPERIENCE && (
        <TimelineContainer
          title={TIMELINE_NAME_LIST.EXPERIENCE}
          data={experienceData}
        />
      )}
      {selectedTimeline === TIMELINE_NAME_LIST.ACHIEVEMENT && (
        <TimelineContainer
          title={TIMELINE_NAME_LIST.ACHIEVEMENT}
          data={achievementData}
        />
      )}
      {selectedTimeline === TIMELINE_NAME_LIST.PROJECT && (
        <TimelineContainer
          title={TIMELINE_NAME_LIST.PROJECT}
          data={projectData}
        />
      )}
      {/*
      <TimelineOld
        timelineHeader="PROJECT"
        timelineData={projectExp}
        dataType="project"
      /> */}
    </>
  );
};

export default LandingPage;
