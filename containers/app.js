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
            <div>
              <Navbar></Navbar>
              <TransitionGroup>
                <CSSTransition key={location.key} mountOnEnter={true} unmountOnExit={true} classNames={{appear: 'invisible', enter: 'animated bounceInUp', exit: 'animated bounceOutDown', onExited:'transitioned'}} timeout={{enter:700, exit:500}}>
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
