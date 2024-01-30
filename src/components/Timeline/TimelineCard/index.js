import React from "react";
import style from "./TimelineCard.module.css";
import { Col, Row } from "antd";
const TimelineCard = (props) => {
  const { imgSrc, year, position, companyName, type } = props;
  return (
    <Row className={style.TimelineCardContainer}>
      <Col className={style.ImgCol} span={10}>
        <img src={imgSrc} alt="TimelineLogo"/>
      </Col>
      <Col className={style.DetailCol} span={14}>
        <span className={style.DotMarker} />
        <div className={style.YearLabel}>{year}</div>
        <div className={style.YearLabel}>{type}</div>
        <h2 className={style.PositionLabel}>{position}</h2>
        <div className={style.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae viverra est. Vestibulum gravida urna et tincidunt vehicula. Aenean at venenatis magna. Pellentesque at purus a diam fringilla dictum.</div>
        <div className={style.CompanyLabel}>{companyName}</div>
      </Col>
    </Row>
  );
};

export default TimelineCard;
