import React from "react";
import CardElem from "./CardElem/CardElem";

const ContactList = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <CardElem
          url={"https://www.facebook.com/Saranpat.Funkaew"}
          logo_src={require("../../../assets/image/contact/fb-logo.png")}
          contract_type="Facebook"
          contract_info="Saranpat.Funkaew"
        />
      </div>
      <div>
        <CardElem
          url={"https://github.com/volkswg"}
          logo_src={require("../../../assets/image/contact/gh-logo.png")}
          contract_type="GitHub"
          contract_info="volkswg"
        />
      </div>
      <div>
        <CardElem
          url={"https://www.linkedin.com/in/saranpat-funkaew-64a119154/"}
          logo_src={require("../../../assets/image/contact/linkedin-logo.png")}
          contract_type="Linkedin"
          contract_info="Saranpat Funkaew"
        />
      </div>
      <div>
        <CardElem
          url={null}
          logo_src={require("../../../assets/image/contact/telC-logo.png")}
          contract_type="Tel."
          contract_info="081-6668881"
        />
      </div>
    </div>
  );
};

export default ContactList;
