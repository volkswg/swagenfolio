import React from "react";

import classes from "./card-elem.module.css";

const CardElem = ({ url, logo_src, contract_type, contract_info }) => {
  return (
    <a
      className={classes.LinkStyle}
      href={url || "#"}
      target={url === null ? "" : "_blank"}
      rel="noopener noreferrer"
    >
      <div className={classes.CardStyle}>
        <div className={classes.CardImage}>
          <img src={logo_src} alt="" />
        </div>
        <div className={classes.CardContactType}>
          <b>{contract_type}</b>
        </div>
        <div className={classes.CardContact}>
          <p>{contract_info}</p>
        </div>
      </div>
    </a>
  );
};

export default CardElem;
