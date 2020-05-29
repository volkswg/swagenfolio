import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";

import classes from "./CardElem.module.css";

class CardElem extends Component {
    state = { mouse_over: false };
    render() {
        return (
            <Card body className={classes.CardStyle}>
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
