import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";

class CardElem extends Component {
  state = { mouse_over: false };
  render() {
    const transfrom_scale = "1.02";
    const transition_speed = "150ms";
    const styles = {
      card_style: { boxShadow: "5px 5px 5px #d4d4d4" },
      card_style_mouseOver: {
        boxShadow: "5px 5px 5px #d4d4d4",
        border: "1px solid #a0a0a0",
        transform: `scale(${transfrom_scale})`,
        msTransform: `scale(${transfrom_scale})`,
        WebkitTransform: `scale(${transfrom_scale})`,
        transition: transition_speed,
        msTransition: transition_speed,
        WebkitTransition: transition_speed
      }
    };

    return (
      <Card
        body
        className="text-center"
        style={this.state.mouse_over ? styles.card_style_mouseOver : styles.card_style}
        onMouseOver={() => {
          this.setState({ mouse_over: true });
        }}
        onMouseLeave={() => {
          this.setState({ mouse_over: false });
        }}
      >
        <CardTitle>
          <img width="40%" src={this.props.logo_src} alt="" />
        </CardTitle>
        <br />
        <CardTitle>
          <b style={{ fontSize: "25px" }}>{this.props.contract_type}</b>
        </CardTitle>
        <CardText>{this.props.contract_info}</CardText>
      </Card>
    );
  }
}

export default CardElem;
