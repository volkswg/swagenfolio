import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

import classes from "./CardElem.module.css";

const CardElem = ({ url, logo_src, contract_type, contract_info }) => {
  return (
    <a
      className={classes.LinkStyle}
      href={url || "#"}
      target={url === null ? "" : "_blank"}
      rel="noopener noreferrer"
    >
      <Card body className={classes.CardStyle}>
        <CardTitle>
          <img src={logo_src} style={{ width: "40%" }} alt="" />
        </CardTitle>
        <CardTitle>
          <b style={{ fontSize: 25 }}>{contract_type}</b>
        </CardTitle>
        <CardText>{contract_info}</CardText>
      </Card>
    </a>
  );
};

export default CardElem;
