import React from 'react';

import {speakersData} from '../../data';

import './speaker-page.css';
import Speaker from '../../components/speaker';
import MobileSpeaker from '../../components/mobile-speaker';
import Divider from '../../components/divider';
import Header from '../../components/header';

export default class SpeakerPage extends React.Component {

	computeSpeakers = speakersData.speakers.map( (speaker, index) => {
		let divider;
		if (index != speakersData.speakers.length -1) {
			divider = <Divider width="20%" key={`div-${index}`}></Divider>
		}
		if (window.outerWidth <= 425) {
			return (
				<MobileSpeaker
					key={index}
					img={speaker.img}
					name={speaker.name}
					info={speaker.info}
					paragraphs={speaker.paragraphs}
					index={index}
					social={speaker.social}>
				</MobileSpeaker>
			)
		} else {
			return [
				<Speaker 
					key={index}
					img={speaker.img}
					name={speaker.name}
					info={speaker.info}
					paragraphs={speaker.paragraphs}
					index={index}
					social={speaker.social}>
				</Speaker>, divider]
		}
	});

	render() {
		return(
			<div className="speaker-page-container">
				<Header backgroundImage={speakersData.header.backgroundImage} title={speakersData.header.title} details={speakersData.header.details}></Header>
				<div className="speakers-container">{this.computeSpeakers}</div>
			</div>
		)
	}
}