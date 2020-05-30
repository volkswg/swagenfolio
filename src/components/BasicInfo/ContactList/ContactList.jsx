import React, { Component } from "react";
import ContactDesk from "./ContactDesk/ContactDesk";
import ContactMobile from "./ContactMobile/ContactMobile";
class Contact extends Component {
  state = { contactType: false, screen_w: window.innerWidth };

  haddleWidthChange = () => {
    // console.log(window.innerHeight);
    this.setState({ screen_w: window.innerWidth });
  };

  componentDidMount = () => {
    this.setState({ screen_w: window.innerWidth });
    window.addEventListener("resize", this.haddleWidthChange.bind(this));
  };

  render() {
    return (
      <div>
        {this.state.screen_w >= 993 ? <ContactDesk /> : <ContactMobile />}
      </div>
    );
  }
}

export default Contact;
