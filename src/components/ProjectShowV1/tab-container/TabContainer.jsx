import React, { Component } from "react";
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Container,
    CardTitle,
    CardText,
    Card,
} from "reactstrap";
import classnames from "classnames";
import SlideShow from "../SlideShow";

import "./tabContainer.css";

class TabContainer extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: "1",
        };
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }
    render() {
        return (
            <Container>
                {/* Year Tab */}
                <Nav
                    tabs
                    style={{
                        overflowX: "auto",
                        overflowY: "hidden",
                        display: "-webkit-box",
                    }}
                >
                    <NavItem>
                        <NavLink
                            href="#"
                            className={classnames({
                                active: this.state.activeTab === "1",
                            })}
                            onClick={() => {
                                this.toggle("1");
                            }}
                        >
                            2011
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                                this.toggle("2");
                            }}
                        >
                            2012
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.activeTab === "3",
                            })}
                            onClick={() => {
                                this.toggle("3");
                            }}
                        >
                            2013
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.activeTab === "4",
                            })}
                            onClick={() => {
                                this.toggle("4");
                            }}
                        >
                            2014
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.activeTab === "5",
                            })}
                            onClick={() => {
                                this.toggle("5");
                            }}
                        >
                            2015
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({
                                active: this.state.activeTab === "6",
                            })}
                            onClick={() => {
                                this.toggle("6");
                            }}
                        >
                            2017
                        </NavLink>
                    </NavItem>
                </Nav>
                {/* project content */}
                <TabContent
                    style={{ padding: "15px" }}
                    activeTab={this.state.activeTab}
                >
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 1 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 2 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 3 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 4 Contents</h4>
                                <div className="text-center">
                                    <SlideShow />
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="5">
                        <Row>
                            <Col sm="4">
                                <Card body className="text-center">
                                    <CardTitle>
                                        <img
                                            width="40%"
                                            src={require("../../img/contract/fb-logo.png")}
                                            alt=""
                                        />
                                    </CardTitle>
                                    <br />
                                    <CardTitle>
                                        <b style={{ fontSize: "25px" }}>
                                            Facebook
                                        </b>
                                    </CardTitle>
                                    <CardText>
                                        With supporting text below
                                    </CardText>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card body className="text-center">
                                    <CardTitle>
                                        <img
                                            width="40%"
                                            src={require("../../img/contract/gh-logo.png")}
                                            alt=""
                                        />
                                    </CardTitle>
                                    <br />
                                    <CardTitle>
                                        <b style={{ fontSize: "25px" }}>
                                            GitHub
                                        </b>
                                    </CardTitle>
                                    <CardText>
                                        With supporting text below
                                    </CardText>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card body className="text-center">
                                    <CardTitle>
                                        <img
                                            width="40%"
                                            src={require("../../img/contract/linkedin-logo.png")}
                                            alt=""
                                        />
                                    </CardTitle>
                                    <br />
                                    <CardTitle>
                                        <b style={{ fontSize: "25px" }}>
                                            Linkedin
                                        </b>
                                    </CardTitle>
                                    <CardText>
                                        With supporting text below
                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="6">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 6 Contents</h4>
                                <div className="text-center">
                                    <SlideShow />
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Container>
        );
    }
}

export default TabContainer;
