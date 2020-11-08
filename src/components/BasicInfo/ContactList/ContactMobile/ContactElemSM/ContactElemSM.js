import React from "react";

const ContactElemSM = (props) => {
  return (
    <a
      //   className="small-contact"
      href={props.contactLink}
      target={props.contactLink ? "_blank" : ""}
      rel="noopener noreferrer"
    >
      <img
        style={{ padding: "2px" }}
        width="65px"
        src={props.imageSrc}
        alt=""
      />
      <div style={{ color: "black", textDecoration: "none", fontSize: 10 }}>
        {props.description}
      </div>
    </a>
  );
};

export default ContactElemSM;
