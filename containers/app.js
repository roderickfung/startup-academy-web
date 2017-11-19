import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HomePage} from './home';
import {AboutPage} from './about';

export default class App extends Component {
    render () {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                </Switch>
                <Footer />
            </div>
        )
    }
}