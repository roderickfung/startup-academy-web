import React from 'react';

import './timeline.less';

import Timestamp from '../timestamp';

export default class Timeline extends React.Component {

	computeAgenda = this.props.agenda.map( (event, index) => {
		return (
			<Timestamp key={index} time={event.timestamp} details={event.details}></Timestamp>
		);
	})
	render() {
		const agenda = this.computeAgenda;
		return(
			<div id="timeline">
				<h4>{this.props.date}</h4>
				<h4>{this.props.location}</h4>
				{agenda}
			</div>
		)
	}
}