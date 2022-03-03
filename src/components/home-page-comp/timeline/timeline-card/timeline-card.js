import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./timeline-card.module.css";

const TimelineCard = (props) => {
  const { dataList, dataType } = props;
  return (
    <div className={classes.TimelineCardParent}>
      <div className={classes.CenterLine}></div>
      <div className={classes.TimelineDot}></div>
      <Link
        to={`${dataType}/${dataList[0].id}`}
        className={[classes.TimelineCard, classes.High].join(" ")}
      >
        <div className={[classes.Arrow, classes.Left].join(" ")}></div>
        <div className={classes.ImgSection}>
          <img src={dataList[0].img} style={{ width: "100%" }} alt={dataList[0].name} />
        </div>
        <div className={classes.TxtSection}>
          <div className={classes.YearLabel}>{dataList[0].year}</div>
          <div className={classes.NameLabel}>{dataList[0].name}</div>
          <div className={classes.OtherInfoLabel}>{dataList[0].otherInfo}</div>
        </div>
      </Link>
      {dataList.length > 1 && (
        <Fragment>
          <div className={[classes.TimelineDot, classes.Low].join(" ")}></div>
          <Link
            to={`${dataType}/${dataList[1].id}`}
            className={[classes.TimelineCard, classes.Low].join(" ")}
          >
            <div className={[classes.Arrow, classes.Right].join(" ")}></div>
            <div className={classes.ImgSection}>
              <img src={dataList[1].img} style={{ width: "100%" }} alt={dataList[1].name} />
            </div>
            <div className={classes.TxtSection}>
              <div className={classes.YearLabel}>{dataList[1].year}</div>
              <div className={classes.NameLabel}>{dataList[1].name}</div>
              <div className={classes.OtherInfoLabel}>{dataList[1].otherInfo}</div>
            </div>
          </Link>
        </Fragment>
      )}
    </div>
  );
};

export default TimelineCard;