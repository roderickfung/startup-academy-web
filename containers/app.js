import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './home';
import SpeakerPage from './speaker-page';
import AboutUs from './about-us';

class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/speakers' component={SpeakerPage} />
        <Route path='/about-us' component={AboutUs} />
      </Switch>
    );
  }
}
    
export default App;
