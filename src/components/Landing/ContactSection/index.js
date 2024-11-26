import React from "react";
import style from "./ContactSection.module.css";
import { Col, Row } from "antd";
const ContactSection = () => {
  return (
    <div className={style.ContactSectionContainer}>
      <h2>CONTACT</h2>

<div className={style.ContactContentContainer}>

      <Row className={style.ContactItem}>
        <Col>
          <img src={"image/contact/fb-logo.svg"} alt="" />
        </Col>
        <Col>
          <a
            href="https://www.facebook.com/Saranpat.Funkaew"
            target="_blank"
            rel="noreferrer"
          >
            Saranpat.Funkaew
          </a>
        </Col>
      </Row>
      <Row className={style.ContactItem}>
        <Col>
          <img src={"image/contact/gh-logo.svg"} alt="" />
        </Col>
        <Col>
          <a href="https://github.com/volkswg" target="_blank" rel="noreferrer">
            volkswg
          </a>
        </Col>
      </Row>
      <Row className={style.ContactItem}>
        <Col>
          <img src={"image/contact/linkedin-logo.svg"} alt="" />
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/saranpat-funkaew/"
            target="_blank"
            rel="noreferrer"
          >
            saranpat-funkaew
          </a>
        </Col>
      </Row>
      <Row className={style.ContactItem}>
        <Col>
          <img src={"image/contact/email-logo.svg"} alt="" />
        </Col>
        <Col>
          <a href="mailto: volkswg@gmail.com" target="_blank" rel="noreferrer">
            volkswg@gmail.com
          </a>
        </Col>
      </Row>
      <Row className={style.ContactItem}>
        <Col>
          <img src={"image/contact/phone-logo.svg"} alt="" />
        </Col>
        <Col>
          {" "}
          <a href="tel:+66816668881" rel="noreferrer">
            081-6668881
          </a>
        </Col>
      </Row>
</div>

    </div>
  );
};

export default ContactSection;
