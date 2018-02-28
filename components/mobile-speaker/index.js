import React from 'react';

import './mobile-speaker-media@425.less';

export default class MobileSpeaker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inDetailView: false
		}
	}
	render() {
		return(
			<div className="mobile-speaker-container">
				<div 
				className="mobile-speaker-image-container"
				onMouseEnter={this.setImageHoverTrue}
				onMouseLeave={this.setImageHoverFalse}>
					<img src={this.props.img}></img>
				</div>
				<div className="mobile-speaker-info-overlay cut">
					<h1 className="mobile-speaker-name">{this.props.name}</h1>
					<h3 className="mobile-speaker-subtext">{this.props.info}</h3>
					<div className="mobile-speaker-social-icons">
						<a href={this.props.social.twitter}><i className="fab fa-twitter-square"></i></a>
						<a href={this.props.social.facebook}><i className="fab fa-facebook-square"></i></a>
						<a href={this.props.social.instagram}><i className="fab fa-instagram"></i></a>
					</div>
				</div>
			</div>
		)
	}
}