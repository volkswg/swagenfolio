import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import classes from "./TimelineBoxLR.module.css";

class TimelineBoxLR extends Component {
    state = {};
    render() {
        const styles = {};
        return (
            <Row style={{ position: "relative" }}>
                <div className={classes.timeline_line} />
                <Col md={6} className={classes.timeline_box_container}>
                    <div className={classes.timeline_box_left}>
                        <div id="timeline_deco">
                            <div className={classes.arrow_left} />
                            <div className={classes.dot_mark_left} />
                        </div>
                        testcontent
                    </div>
                </Col>
                <Col md={6} className={classes.timeline_box_container}>
                    <div className={classes.timeline_box_right}>
                        <div id="timeline_deco">
                            <div className={classes.arrow_right} />
                            <div className={classes.dot_mark_right} />
                        </div>
                        testcontent
                    </div>
                </Col>
            </Row>
        );
    }
}

export default TimelineBoxLR;
