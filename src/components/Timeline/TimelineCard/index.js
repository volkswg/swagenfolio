import React from "react";
import style from "./TimelineCard.module.css";
import { Col, Row } from "antd";
const TimelineCard = (props) => {
  const { imgSrc, year, position, companyName } = props;
  return (
    <Row className={style.TimelineCardContainer}>
      <Col className={style.ImgCol} span={12}>
        <img src={imgSrc} alt="TimelineLogo"/>
      </Col>
      <Col className={style.DetailCol} span={12}>
        <span className={style.DotMarker} />
        <div className={style.YearLabel}>{year}</div>
        <h2 className={style.PositionLabel}>{position}</h2>
        <div className={style.CompanyLabel}>{companyName}</div>
      </Col>
    </Row>
  );
};

export default TimelineCard;
