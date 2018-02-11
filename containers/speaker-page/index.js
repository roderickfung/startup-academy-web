import React from 'react';

import {speakersData} from '../../data';

import './speaker-page.css';
import Speaker from '../../components/speaker';
import Divider from '../../components/divider';
import Header from '../../components/header';

export default class SpeakerPage extends React.Component {

	computeSpeakers = speakersData.speakers.map( (speaker, index) => {
		return [<Speaker 
			key={index}
			img={speaker.img}
			name={speaker.name}
			info={speaker.info}
			paragraphs={speaker.paragraphs}
			index={index}
		>
		</Speaker>, <Divider key={`div-${index}`}></Divider>]
	});

	render() {
		return(
			<div className="speaker-page-container">
				<Header backgroundImage={speakersData.header.backgroundImage} title={speakersData.header.title} details={speakersData.header.details}></Header>
				{this.computeSpeakers}
			</div>
		)
	}
}