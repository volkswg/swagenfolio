import React from "react";
import style from "./SmallContactSection.module.css";

const SmallContactSection = () => {
  return (
    <div className={style.ContactSectionContainer}>
      <a
        href="https://www.facebook.com/Saranpat.Funkaew"
        target="_blank"
        rel="noreferrer"
        className={style.ContactItem}
      >
        <img src={"image/contact/fb-logo.svg"} alt="" />
      </a>
      <a
        href="https://github.com/volkswg"
        target="_blank"
        rel="noreferrer"
        className={style.ContactItem}
      >
        <img src={"image/contact/gh-logo.svg"} alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/saranpat-funkaew/"
        target="_blank"
        rel="noreferrer"
        className={style.ContactItem}
      >
        <img src={"image/contact/linkedin-logo.svg"} alt="" />
      </a>
      <a
        href="mailto: volkswg@gmail.com"
        target="_blank"
        rel="noreferrer"
        className={style.ContactItem}
      >
        <img src={"image/contact/email-logo.svg"} alt="" />
      </a>
      <a href="tel:+66816668881" rel="noreferrer" className={style.ContactItem}>
        <img src={"image/contact/phone-logo.svg"} alt="" />
      </a>
    </div>
  );
};

export default SmallContactSection;
