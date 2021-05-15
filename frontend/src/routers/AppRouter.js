
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { DashboardScreen } from '../components/dashboard/DashboardScreen';

import { HomeScreen } from '../components/home/HomeScreen';
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/home" component={ HomeScreen } />
                    <Route exact path="/" component={ DashboardScreen } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

