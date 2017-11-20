import React from 'react';

import './speaker.css';

export default class Speaker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgFloat: this.computeImageSide
		}
	}

	computeImageSide = this.props.index % 2 == 0 ? 'speaker-container floatLeft' : 'speaker-container floatRight';

	computeParagraphs = this.props.paragraphs.map( (paragraph, index) => {
		return 	<p key={index} className="speaker-paragraph">{paragraph}</p>
	})

	render() {
		return(
			<div className={this.computeImageSide}>
				<img src={this.props.img}></img>
				<div className="info-container">
					<h1 className="speaker-name">{this.props.name}</h1>
					<h3 className="speaker-subtext">{this.props.info}</h3>
					{this.computeParagraphs}
				</div>
			</div>
		)
	}
}