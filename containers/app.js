import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './home';
import SpeakerPage from './speaker-page';
import AboutUs from './about-us';
import Navbar from './navbar';

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/speakers' component={SpeakerPage} />
          <Route path='/about_us' component={AboutUs} />
        </Switch>
      </div>
    );
  }
}
    
export default App;
