
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { HomeScreen } from '../components/home/HomeScreen';
import { TaskScreen } from '../components/tasks/TaskScreen';
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/home" component={ HomeScreen } />
                    <Route exact path="/task" component={ TaskScreen } />

                    <Redirect to="/home" />
                </Switch>
            </div>
        </Router>
    )
}

