import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home';
import SpeakerPage from './speaker-page'

class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/speakers' component={SpeakerPage} />
      </Switch>
    );
  }
}
    
export default App;
