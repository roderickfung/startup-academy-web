import React from 'react';

import './agenda.less';
import {agendaData} from '../../data';

import Header from '../../components/header';
import Timeline from '../../components/timeline';

export default class Agenda extends React.Component {

	computeTimeline = agendaData.timelines.map( (timeline, index) => {
		return (
			<Timeline
				key={index}
				date={timeline.date}
				location={timeline.location}
				agenda={timeline.agenda}>
			</Timeline>
		)
	});

	render() {
		const Timelines = this.computeTimeline
		return(
			<div id="schedule-container">
				<Header
					backgroundImage={agendaData.header.backgroundImage}
					title={agendaData.header.title} 
					details={agendaData.header.details}>
				</Header>
				<section id="timelines-container">
					{Timelines}
				</section>
			</div>
		)
	}
}