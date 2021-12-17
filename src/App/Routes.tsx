import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Authenticate from "../Auth/Authenticate";
import Project from "../Project";
import { PageError } from "../shared/components";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/project" />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/project" component={Project} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
