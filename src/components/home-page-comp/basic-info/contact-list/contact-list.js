import React from "react";
import CardElem from "./card-elem/card-elem";

const ContactList = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <CardElem
        url={"https://www.facebook.com/Saranpat.Funkaew"}
        logo_src="image/contact/fb-logo.png"
        contract_type="Facebook"
        contract_info="Saranpat.Funkaew"
      />
      <CardElem
        url={"https://github.com/volkswg"}
        logo_src="image/contact/gh-logo.png"
        contract_type="GitHub"
        contract_info="volkswg"
      />
      <CardElem
        url={"https://www.linkedin.com/in/saranpat-funkaew-64a119154/"}
        logo_src="image/contact/linkedin-logo.png"
        contract_type="Linkedin"
        contract_info="Saranpat Funkaew"
      />
      <CardElem
        url={null}
        logo_src="image/contact/telC-logo.png"
        contract_type="Tel."
        contract_info="081-6668881"
      />
    </div>
  );
};

export default ContactList;
