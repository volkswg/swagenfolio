import React, { useState } from "react";
import { Col, Row } from "antd";
import ContactSection from "../../components/Landing/ContactSection/ContactSection";
import TimelineContainer from "../../components/Timeline/TimelineContainer";
import TimelineFilter from "../../components/Landing/TimelineFilter";
import IntroSection from "../../components/Landing/IntroSection";
import Background from "../../components/Landing/Background";

import style from "./Landing.module.css";

const TIMELINE_NAME_LIST = {
  ALL: 'ALL',
  EXPERIENCE: "EXPERIENCE",
  ACHIEVEMENT: "ACHIEVEMENT",
  PROJECT: "PROJECT",
  EDUCATION: 'EDUCATION'
};

const experienceData = [
  {
    imgSrc: "/image/workExp/sunday_logo.jpg",
    year: "2022 - Current",
    position: "Software Engineer",
    type: TIMELINE_NAME_LIST.EXPERIENCE,
    companyName: "SUNDAY TECHNOLOGIES COMPANY LIMITED",
  },
  {
    imgSrc: "/image/workExp/hgr_logo.jpg",
    year: "2022",
    position: "Full Stack Developer",
    type: TIMELINE_NAME_LIST.EXPERIENCE,
    companyName: "HG ROBOTICS COMPANY LIMITED",
  },
  {
    imgSrc: "/image/workExp/readawrite_logo.jpg",
    year: "2019",
    position: "Full Stack Developer",
    type: TIMELINE_NAME_LIST.EXPERIENCE,
    companyName: "MEB CORPORATION LTD.",
  },
  {
    imgSrc: "/image/workExp/PICO_logo.png",
    year: "2018",
    position: "Internship",
    type: TIMELINE_NAME_LIST.EXPERIENCE,
    companyName: "Pico (Thailand) Public Co., Ltd.",
  },
];

const achievementData = [
  {
    imgSrc: "/image/achievementList/hackathon_logo.jpg",
    year: "2018",
    position: "3rd Runner-Up",
    type: TIMELINE_NAME_LIST.ACHIEVEMENT,
    companyName: "Thailand Open Hackathron 2018",
  },
  {
    imgSrc: "/image/achievementList/ticta_logo.jpg",
    year: "2015",
    position: "1st Runner-Up",
    type: TIMELINE_NAME_LIST.ACHIEVEMENT,
    companyName: "Thailand ICT Award 2015",
  },
  {
    imgSrc: "/image/achievementList/NSC2015_cover.jpg",
    year: "2015",
    position: "1st Runner-Up",
    type: TIMELINE_NAME_LIST.ACHIEVEMENT,
    companyName: "National Software Contest 2015",
  },
  {
    imgSrc: "/image/achievementList/NSC2014_cover.jpg",
    year: "2014",
    position: "Honorable Mention Award",
    type: TIMELINE_NAME_LIST.ACHIEVEMENT,
    companyName: "National Software Contest 2014",
  },
  {
    imgSrc: "/image/achievementList/mos2014_logo.jpg",
    year: "2014",
    position: "Bronze Medal",
    type: TIMELINE_NAME_LIST.ACHIEVEMENT,
    companyName: "MOS Olympic (Excel 2010)",
  },
];

const projectData = [
  {
    imgSrc: "/image/projectExp/BommCrypto-logo.jpeg",
    year: "2022",
    position: "BombCrypto Bot",
    type: TIMELINE_NAME_LIST.PROJECT,
    companyName: "",
  },
  {
    imgSrc: "/image/projectExp/puppeteer_autofill.jpg",
    year: "2022",
    position: "Google Form Autofill",
    type: TIMELINE_NAME_LIST.PROJECT,
    companyName: "",
  },
  {
    imgSrc: "/image/projectExp/sitinnovate_logo.png",
    year: "2021",
    position: "SIT Innovate Website",
    type: TIMELINE_NAME_LIST.PROJECT,
    companyName: "SIT Innovate co.ltd.",
  },
  {
    imgSrc: "/image/projectExp/thaiaupair_logo.PNG",
    year: "2021",
    position: "Thai Aupair Website",
    type: TIMELINE_NAME_LIST.PROJECT,
    companyName: "Thaiaupair.com",
  },
  {
    imgSrc: "/image/projectExp/eterno64_logo.PNG",
    year: "2020",
    position: "The Eterno 64 Website",
    type: TIMELINE_NAME_LIST.PROJECT,
    companyName: "TANGCHAIYAWONG DEVELOMENT CO.,LTD",
  },
  {
    imgSrc: "/image/projectExp/his_sim.jpg",
    year: "2019",
    position: "HIS Simulation",
    type: TIMELINE_NAME_LIST.PROJECT,
    companyName: "Computer Engineering (KMUTT)",
  },
  {
    imgSrc: "/image/projectExp/HappyTownLogo.jpg",
    year: "2015",
    position: "Happy Town",
    type: TIMELINE_NAME_LIST.PROJECT,
    companyName: "The Prince Royal's College",
  },
  {
    imgSrc: "/image/projectExp/mmDash_logo.jpg",
    year: "2015",
    position: "Monmon dash",
    type: TIMELINE_NAME_LIST.PROJECT,
    companyName: "ต่อกล้าให้เติบใหญ่ (Newseed) #2",
  },
  {
    imgSrc: "/image/projectExp/Monmon_logo.jpg",
    year: "2014",
    position: "Monmon: hiding the hanky",
    type: TIMELINE_NAME_LIST.PROJECT,
    companyName: "The Prince Royal's College",
  },
];

const educationData = [
  {
    imgSrc: "/image/education/kmutt_logo.png",
    year: "2015",
    position: "Computer Engineer",
    type: TIMELINE_NAME_LIST.EDUCATION,
    companyName: "King Mongkut's University of Technology Thonburi",
  },
  {
    imgSrc: "/image/education/prc_logo.png",
    year: "2012",
    position: "Science - Math Student",
    type: TIMELINE_NAME_LIST.EDUCATION,
    companyName: "The Prince Royal's College",
  },
]

const sortedTimelineData = [
  ...experienceData,
  ...achievementData,
  ...projectData,
  ...educationData
].sort((a, b) => b.year - a.year);

const LandingPage = (props) => {
  const [selectedTimeline, setSelectedTimeline] = useState(
    TIMELINE_NAME_LIST.EXPERIENCE
  );
  const [timelineData, setTimelineData] = useState(
    sortedTimelineData.filter(e=>e.type === TIMELINE_NAME_LIST.EXPERIENCE)
  );

  const timelineFilterChangeHandler = (data) => {
    setSelectedTimeline(data);
    setTimelineData(sortedTimelineData.filter(e=>(e.type === data || data === TIMELINE_NAME_LIST.ALL)))
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
        filterData={Object.keys(TIMELINE_NAME_LIST)}
        onChange={timelineFilterChangeHandler}
      />
      <TimelineContainer
        title={selectedTimeline}
        data={timelineData}
      />
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
