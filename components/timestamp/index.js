import React from 'react';

import './timestamp.less';

export default class Timestamp extends React.Component {

	computeInfo = this.props.details.map( (info, index) => {
		if (info.underlined_text) {
			return(
				<p key={index} className="underlined">{info.underlined_text}</p>
			)
		} else {
			return(
				<p key={index} >{info.normal_text}</p>
			)
		}
	})
	render() {
		const info = this.computeInfo;
		return(
			<div id="timestamp-container">
				<div id="time">
					<p>{this.props.time}</p>
				</div>
				<div>
					{info}
				</div>
			</div>
		)
	}
}