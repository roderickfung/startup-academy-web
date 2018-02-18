import React from 'react';

import './speaker.less';

export default class Speaker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgFloat: this.computeImageSide,
			imageHover: false
		}
	}

	setImageHoverTrue = () => {
		this.setState({imageHover: true});
	}

	setImageHoverFalse = () => {
		this.setState({imageHover: false});
	}

	computeImageSide = this.props.index % 2 ? 'speaker-container floatRight' : 'speaker-container floatLeft';

	computeParagraphs = this.props.paragraphs.map( (paragraph, index) => {
		return 	<p key={index} className="speaker-paragraph">{paragraph}</p>
	})

	render() {
		return(
			<div className={this.computeImageSide}>
				<div 
					className="speaker-image-container"
					onMouseEnter={this.setImageHoverTrue}
					onMouseLeave={this.setImageHoverFalse}>
					<img src={this.props.img} className={this.state.imageHover ? 'img-hover' : ''}>
					</img>
					<div className={this.state.imageHover ? 'social-handles' : 'hide-social'}>
						<a href={this.props.social.twitter}><i className="fab fa-twitter-square"></i></a>
						<a href={this.props.social.facebook}><i className="fab fa-facebook-square"></i></a>
						<a href={this.props.social.instagram}><i className="fab fa-instagram"></i></a>
					</div>
				</div>
				<div className="info-container">
					<h1 className="speaker-name">{this.props.name}</h1>
					<h3 className="speaker-subtext">{this.props.info}</h3>
					{this.computeParagraphs}
				</div>
			</div>
		)
	}
}