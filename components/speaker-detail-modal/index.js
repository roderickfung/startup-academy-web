import React from 'react';

import './speaker-detail-modal-media@425.less';

import Logo from '../logo';
import Divider from '../divider';

export default class SpeakerDetailModal extends React.Component {

	computeParagraphs = this.props.paragraphs.map( (paragraph, index) => {
		return 	<p key={index} className="speaker-paragraph">{paragraph}</p>
	})

	render() {

		return(
			<div className="mobile-speaker-detail-modal-container">
				<div className="mobile-speaker-modal-banner">
					<div className="back-button" onClick={this.props.handleBackButton}>back</div>
					<div className="logo-container"><Logo size={50}></Logo></div>
				</div>
				<div className="mobile-speaker-modal-img-container">
					<img src={this.props.img}></img>
				</div>
				<div className="mobile-speaker-modal-info-container">
					<h1 className="mobile-speaker-modal-name">{this.props.name}</h1>
					<h3 className="mobile-speaker-modal-subtext">{this.props.info}</h3>
					<Divider width="20%" padding="1px"></Divider>
					{this.computeParagraphs}
				</div>
				<div className="mobile-speaker-modal-social-container">
					<a href={this.props.social.twitter} className="circle"><i className="fab fa-twitter-square"></i></a>
					<a href={this.props.social.facebook} className="circle"><i className="fab fa-facebook-square"></i></a>
					<a href={this.props.social.instagram} className="circle"><i className="fab fa-instagram"></i></a>
				</div>
			</div>
		)
	}
}