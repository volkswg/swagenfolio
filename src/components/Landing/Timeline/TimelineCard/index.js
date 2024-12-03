import React, { useRef, useState } from "react";
import style from "./TimelineCard.module.css";
import { Col, Row } from "antd";
import Layout from "../../../Layout";
const TimelineCard = (props) => {
  const { imgSrc, year, position, companyName, type, descriptionComp } = props;
  console.log(descriptionComp);

  const [openExpandable, setOpenExpandable] = useState(false);
  const ref = useRef(null);

  const closeExpandableHandler = () => setOpenExpandable(false);

  const openExpandableHandler = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setOpenExpandable(true);
  };

  const timlineCardClickHandler = () => {
    if (openExpandable) {
      closeExpandableHandler();
    } else {
      openExpandableHandler();
    }
  };
  return (
    <>
      <Row
        className={style.TimelineCardContainer}
        // onClick={timlineCardClickHandler}
      >
        <Col className={style.ImgCol} span={10}>
          <img src={imgSrc} alt="TimelineLogo" />
        </Col>
        <Col className={style.DetailCol} span={14}>
          <span className={style.DotMarker} />
          <div className={style.YearLabel}>{year}</div>
          <div className={style.YearLabel}>{type}</div>
          <h2 className={style.PositionLabel}>{position}</h2>
          <div className={style.CompanyLabel}>{companyName}</div>
          <div className={style.Description}>{descriptionComp}</div>
        </Col>
      </Row>

      <div
        ref={ref}
        className={[
          style.ExpandableContainer,
          openExpandable ? style.Show : null,
        ].join(" ")}
      >
        <Layout></Layout>
      </div>
    </>
  );
};

export default TimelineCard;
