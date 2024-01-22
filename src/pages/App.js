import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import NotFound from "./not-found/not-found";
import Project from "./project/project";
import LandingPage from "./Landing/Landing";
import Layout from "../components/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/project" component={Project} />
              <Route path="/work" component={Project} />
              <Route path="/achievement" component={Project} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
