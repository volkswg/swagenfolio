import React from "react";
import style from "./Landing.module.css";
import { Col, Row } from "antd";
import DownloadIcon from "../../components/svg-icon/download-icon";
import ContactSection from "../../components/Landing/ContactSection/ContactSection";
import Timeline from "../../components/home-page-comp/timeline/timeline";
import workExp from "../../assets/json/workExp.json";
import projectExp from "../../assets/json/projectExp.json";
import achievementList from "../../assets/json/achievementExp.json";

const LandingPage = (props) => {
  return (
    <>
      <div className={style.landingPageBg} />
      <Row className={style.LandingPageContainer}>
        <Col md={12} className={style.ImageCol}>
          <img src="image/profilePicFull.JPG" alt="" />
        </Col>
        <Col md={12} className={style.InformationCol}>
          <div className={style.ContentContainer}>
            <span className={style.FadedText}>Full Stack Developer</span>
            <h1>SARANPAT FUNKAEW</h1>
            <span className={style.FadedText}>
              I graduated from King Mongkut's University of Technology Thonburi
              (KMUTT). Computer Engineering.
            </span>
            <div className={style.DownloadCVContainer}>
              <a href="/resume/SaranpatFunkaewCV.pdf" target={"_blank"}>
                <DownloadIcon className={style.DownloadIcon} />
                <div className={style.CVText}>Resume</div>
              </a>
            </div>
          </div>
          <ContactSection />
        </Col>
      </Row>
      <Timeline
        timelineHeader="EXPERIENCE"
        timelineData={workExp}
        dataType="work"
      />
      <Timeline
        timelineHeader="ACHIEVEMENT"
        timelineData={achievementList}
        dataType="achievement"
      />
      <Timeline
        timelineHeader="PROJECT"
        timelineData={projectExp}
        dataType="project"
      />
    </>
  );
};

export default LandingPage;
