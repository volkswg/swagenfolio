import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// import LandingPage from "./component/LandingPage";
import NavBar from "./screen_component/other/NavBar";

import MainScreen from "./screen/MainScreen";
import NotFound from "./screen/NotFound";

// import SlideShow from "./component/SlideShow";
// import TabContainer from "./component/tab-container/TabContainer";
// import ProjectTab from "./component/tab-container/ProjectTab";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar brand_size={[25, 20]} navitem_size={[20, 16]} />
          <Switch>
            <Route exact path="/" component={MainScreen} />
            <Route component={NotFound} />
          </Switch>
          <div style={{ height: 200 }}></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
