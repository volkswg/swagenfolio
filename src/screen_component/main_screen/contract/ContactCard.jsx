import React, { Component } from "react";
import { Row, Col, Collapse } from "reactstrap";

import CardElem from "./CardElem/CardElem";

class ContactCard extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true };
    }

    toggle() {
        this.setState((state) => ({ collapse: !state.collapse }));
    }

    render() {
        const styles = {
            link_stlye: { textDecoration: "None", color: "#272727" },
        };
        let autoScaleNum = 12 / 4;
        return (
            <div>
                <Collapse isOpen={this.state.collapse}>
                    <Row>
                        <Col lg={autoScaleNum}>
                            <a
                                href="https://www.facebook.com/Saranpat.Funkaew"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.link_stlye}
                            >
                                <CardElem
                                    logo_src={require("../../../img/contract/fb-logo.png")}
                                    contract_type="Facebook"
                                    contract_info="Saranpat.Funkaew"
                                />
                            </a>
                        </Col>
                        <Col lg={autoScaleNum}>
                            <a
                                href="https://github.com/volkswg"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.link_stlye}
                            >
                                <CardElem
                                    logo_src={require("../../../img/contract/gh-logo.png")}
                                    contract_type="GitHub"
                                    contract_info="volkswg"
                                />
                            </a>
                        </Col>
                        <Col lg={autoScaleNum}>
                            <a
                                href="https://www.linkedin.com/in/saranpat-funkaew-64a119154/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.link_stlye}
                            >
                                <CardElem
                                    logo_src={require("../../../img/contract/linkedin-logo.png")}
                                    contract_type="Linkedin"
                                    contract_info="Saranpat Funkaew"
                                />
                            </a>
                        </Col>
                        <Col lg={autoScaleNum}>
                            <CardElem
                                logo_src={require("../../../img/contract/telC-logo.png")}
                                contract_type="Tel."
                                contract_info="081-6668881"
                            />
                        </Col>
                    </Row>
                </Collapse>
            </div>
        );
    }
}

export default ContactCard;
