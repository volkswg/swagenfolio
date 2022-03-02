import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "../components/layout/nav-bar/nav-bar";

import HomePage from "./home/home";
import NotFound from "./not-found/not-found";
import Project from "./project/project";

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
