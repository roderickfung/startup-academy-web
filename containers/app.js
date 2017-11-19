import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HomePage} from './home';
import {SpeakerPage} from './speaker-page';

export default class App extends Component {
    render () {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/speakers' component={SpeakerPage} />
                </Switch>
                <Footer />
            </div>
        )
    }
}