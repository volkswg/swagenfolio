import React, { Component } from "react";
import { Container } from "reactstrap";

import classes from "./MainCover.module.css";

class MainCover extends Component {
    state = {};
    render() {
        return (
            <div>
                <section
                    className={classes.coverImg}
                    style={{
                        minHeight: this.props.cover_height + "px",
                        paddingTop: this.props.cover_height / 3 + "px",
                    }}
                >
                    <Container className="text-center">
                        <h1
                            style={{
                                letterSpacing: window.innerWidth / 50 + "px",
                                fontSize: window.innerWidth / 20 + "px",
                            }}
                        >
                            SARANPAT
                        </h1>
                    </Container>
                </section>
            </div>
        );
    }
}

export default MainCover;
