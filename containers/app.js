import React, {Component} from 'react';
import SpeakerPage from './speaker-page';

export default class App extends Component {
    render () {
        return(
            <div>
            <p>This is my new react app</p>
                <SpeakerPage></SpeakerPage>
            </div>
        )
    }
}