import React, { useState } from "react";
import { Col, Row } from "antd";
import SmallContactSection from "../../components/Landing/SmallContactSection/SmallContactSection";
import TimelineContainer from "../../components/Landing/Timeline/TimelineContainer";
import TimelineFilter from "../../components/Landing/TimelineFilter";
import IntroSection from "../../components/Landing/IntroSection";
import Background from "../../components/Landing/Background";
import Layout from "../../components/Layout";

import style from "./Landing.module.css";
import {
  TIMELINE_TYPE,
  achievementData,
  educationData,
  experienceData,
  projectData,
} from "../../constants/timeline";
import ContactSection from "../../components/Landing/ContactSection";

const sortedTimelineData = [
  ...experienceData,
  ...achievementData,
  ...projectData,
  ...educationData,
].sort((a, b) => b.year - a.year);

const LandingPage = (props) => {
  const [selectedTimeline, setSelectedTimeline] = useState(
    TIMELINE_TYPE.EXPERIENCE
  );
  const [timelineData, setTimelineData] = useState(
    sortedTimelineData.filter((e) => e.type === TIMELINE_TYPE.EXPERIENCE)
  );

  const timelineFilterChangeHandler = (data) => {
    setSelectedTimeline(data);
    setTimelineData(
      sortedTimelineData.filter(
        (e) => e.type === data || data === TIMELINE_TYPE.ALL
      )
    );
  };

  return (
    <>
      <Background />
      <Layout>
        <Row className={style.LandingPageContainer}>
          <Col md={12} className={style.ImageCol}>
            <img src="image/profilePicFull.JPG" alt="" />
          </Col>
          <Col md={12} className={style.InformationCol}>
            <IntroSection />
            <SmallContactSection />
          </Col>
        </Row>
      </Layout>
      <TimelineFilter
        defaultData={TIMELINE_TYPE.EXPERIENCE}
        filterData={Object.keys(TIMELINE_TYPE)}
        onChange={timelineFilterChangeHandler}
      />
      <TimelineContainer title={selectedTimeline} data={timelineData} />
      <ContactSection />
    </>
  );
};

export default LandingPage;
