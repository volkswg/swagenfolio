import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// import LandingPage from "./component/LandingPage";
import NavBar from "../components/NavBar/NavBar";

import HomePage from "./HomePage/HomePage";
import NotFound from "./404PageNotFound/NotFound";

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
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound} />
          </Switch>
          <div style={{ height: 50 }}></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
