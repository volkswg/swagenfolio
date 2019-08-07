import React, { Component } from "react";
import ContactCard from "./ContactCard";
import ContactLine from "./ContactLine";
class Contact extends Component {
  state = { contactType: false, screen_w: window.innerWidth };
  render() {
    console.log(this.state.screen_w);
    let ret_obj;
    if (this.state.screen_w >= 768) {
      ret_obj = <ContactCard />;
    } else {
      ret_obj = <ContactLine />;
    }
    return (
      <div>
        {ret_obj}
        {/* <button
          onClick={() => {
            this.setState({ contactType: !this.state.contactType });
          }}
        >
          Change
        </button> */}
      </div>
    );
  }
}

export default Contact;
