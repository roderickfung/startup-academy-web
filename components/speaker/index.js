import React from 'react';

import './speaker.css';

export default class Speaker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgFloat: this.computeImageSide
		}
	}

	computeImageSide = this.props.index % 2 == 0 ? 'floatLeft' : 'floatRight';

	computeParagraphs = this.props.paragraphs.map( (paragraph, index) => {
		return 	<p key={index} className="speaker-paragraph">{paragraph}</p>
	})

	render() {
		return(
			<div className="speaker-container">
				<img className={this.state.imgFloat} src={this.props.img}></img>
				<div className="info-container">
					<h1 className="speaker-name">{this.props.name}</h1>
					<h3 className="speaker-subtext">{this.props.info}</h3>
					{this.computeParagraphs}
				</div>
			</div>
		)
	}
}