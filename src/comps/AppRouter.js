
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppMusic from '../comps/music/AppMusic'
import AppNav from './AppNav';
import MainPixa from './pixa/MainPixa';
class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                <AppNav />
                    <Switch>
                        <Route exact path="/" component={AppMusic} />
                        <Route exact path="/pixa" component={MainPixa} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default AppRouter
