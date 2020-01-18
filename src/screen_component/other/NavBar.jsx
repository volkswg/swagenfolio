import React from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.paddingBuf = window.innerWidth < 768 ? "15px" : "50px";

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navColor: "faded",
      paddingBuf: this.paddingBuf,
      bandfontsize: this.props.brand_size[0] + "px",
      navitemfontsize: this.props.navitem_size[0] + "px",
      screen_heigth: window.innerHeight
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  changePadOnResize = () => {
    let screen_w = window.innerWidth;
    if (screen_w >= 768) {
      this.setState({ paddingBuf: "50px" });
    } else {
      this.setState({ paddingBuf: "15px" });
    }
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.changePadOnResize.bind(this));
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = event => {
    if (window.scrollY <= this.state.screen_heigth - 50) {
      this.setState({
        navColor: "faded",
        bandfontsize: this.props.brand_size[0] + "px",
        navitemfontsize: this.props.navitem_size[0] + "px"
      });
    } else {
      this.setState({
        navColor: "light",
        bandfontsize: this.props.brand_size[1] + "px",
        navitemfontsize: this.props.navitem_size[1] + "px"
      });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Navbar
            light
            color={this.state.navColor}
            expand="md"
            style={{
              paddingLeft: this.state.paddingBuf,
              paddingRight: this.state.paddingBuf,
              transition: "all 0.2s ease"
            }}
            className="fixed-top"
          >
            <NavbarBrand
              href="/"
              style={{
                fontSize: this.state.bandfontsize,
                transition: "all 0.2s ease"
              }}
            >
              Portfolio
            </NavbarBrand>
            {/* <NavbarToggler onClick={this.toggle} /> */}
            {/* <Collapse
              isOpen={this.state.isOpen}
              style={{ paddingLeft: "0px" }}
              navbar
            > */}
            {/* <Nav navbar>
                <NavItem>
                  <NavLink href="/test/" style={cus_nav}>
                    <img
                      class="img-fluid"
                      width="20"
                      height="20"
                      src={require("../img/contract/fb-logo.png")}
                    />
                  </NavLink>
                </NavItem>
              </Nav> */}
            {/* <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    className="cus-nav"
                    href="/contract/"
                    style={cus_nav}
                  >
                    Contract
                  </NavLink>
                </NavItem>
              </Nav> */}
            {/* </Collapse> */}
          </Navbar>
        </Container>
      </div>
    );
  }
}
