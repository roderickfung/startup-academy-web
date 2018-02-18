import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './app.css';

import Home from './home';
import SpeakerPage from './speaker-page';
import AboutUs from './about-us';
import Navbar from './navbar';
import Agenda from './agenda';

class App extends React.Component {
  render () {
    return (
        <Route
          render={({ location }) => (
            <div className="">
              <Navbar></Navbar>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames={{enter: 'animated bounceInUp fixedin', exit: 'animated bounceOutDown fixedout'}} timeout={{enter:800, exit:500}}>
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route path='/home' component={Home} />
                  <Route path='/speakers' component={SpeakerPage} />
                  <Route path='/agenda' component={Agenda} />
                  <Route path='/about_us' component={AboutUs} />
                </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
           )}
        />
    );
  }
}
    
export default App;
