import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from "../components/auth/Login";
import Home from "../components/home/Home";
const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home} exact />
                <Route path="/" component={Login} exact />
            </Switch>
        </Router>
    );
}

export default Routing;