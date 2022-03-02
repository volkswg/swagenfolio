import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "../components/layout/nav-bar/nav-bar";

import HomePage from "./HomePage/HomePage";
import NotFound from "./404PageNotFoundPage/NotFound";
import Project from "./ProjectPage/Project";

// import SlideShow from "./component/SlideShow";
// import TabContainer from "./component/tab-container/TabContainer";
// import ProjectTab from "./component/tab-container/ProjectTab";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/project" component={Project} />
            <Route path="/work" component={Project} />
            <Route path="/achievement" component={Project} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
