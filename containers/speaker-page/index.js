import React from 'react';

import {speakersData} from '../../data';

import './speaker-page.css';
import Speaker from '../../components/speaker';

export default class SpeakerPage extends React.Component {

	computeSpeakers = speakersData.map( (speaker, index) => {
		return <Speaker 
			key={index}
			img={speaker.img}
			name={speaker.name}
			info={speaker.info}
			paragraphs={speaker.paragraphs}
			index={index}
		>
		</Speaker>
	});

	render() {
		return(
			<div className="container">
				{this.computeSpeakers}
			</div>
		)
	}
}