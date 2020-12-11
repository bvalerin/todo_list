import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/signUp/SignUp";
import Home from "../components/home/Home";
const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={SignUp} exact />
        <Route path="/home" component={Home} exact />
      </Switch>
    </Router>
  );
};

export default Routing;
