import React, { Component } from "react";

import { Container } from "reactstrap";

// import LandingPage from "./component/LandingPage";
import NavBar from "./component/NavBar";
import BasicInfo from "./component/basicInfo/BasicInfo";
import SlideShow from "./component/SlideShow";
import Cover from "./component/Cover";
import TabContainer from "./component/tab-container/TabContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "faded", screen_heigth: window.innerHeight };
  }

  haddleHeightChange = () => {
    // console.log(window.innerHeight);
    let diff_val = Math.abs(this.state.screen_heigth - window.innerHeight);
    this.setState({ test: window.innerHeight });
    console.log(diff_val);
    if (diff_val > 100) {
      this.setState({ screen_heigth: window.innerHeight });
    }
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.haddleHeightChange.bind(this));
  };
  render() {
    let cover_height = this.state.screen_heigth;
    // console.log(cover_height);

    return (
      <div className="App">
        <NavBar
          cover_height={cover_height}
          brand_size={[25, 20]}
          navitem_size={[20, 16]}
        />

        <Cover cover_height={cover_height} />
        <BasicInfo />
        <Container style={{ paddingTop: "50px" }}>
          <h1>Project</h1>
          <p>Comming Soon</p>
        </Container>

        {/* <TabContainer /> */}
        <br />
        <br />
      </div>
    );
  }
}

export default App;
