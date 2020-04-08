import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

export default function Routes({ appProps }) {
    return (
      <Switch>
        <AuthenticatedRoute  path="/" exact component={Home} appProps={appProps} />
        <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
        <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />

        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
      </Switch>
    );
  }