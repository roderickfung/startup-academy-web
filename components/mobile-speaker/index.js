import React from 'react';

import './mobile-speaker-media@425.less';

import SpeakerDetailModal from '../speaker-detail-modal';

export default class MobileSpeaker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inDetailView: false
		}
	}

	handleBackButtonClick = () => {
		this.setState(
			{inDetailView: false}
		)
	}
	handleSpeakerClick = () => {

		this.setState(
			{inDetailView: true}
		)
		console.log(this.state)
	}
	getSpeakerModal = () => {
		console.log(this.state)
		if (this.state.inDetailView) {
			return (
				<SpeakerDetailModal 
					handleBackButton={this.handleBackButtonClick}
					key={this.props.index}
					index={this.props.index}
					img={this.props.img}
					name={this.props.name}
					info={this.props.info}
					paragraphs={this.props.paragraphs}
					social={this.props.social}>
				</SpeakerDetailModal>
			);
		} else {
			return null
		}
	}
	render() {
		let speakerModal = this.getSpeakerModal();
		console.log(speakerModal);
		return([
			<div className="mobile-speaker-container" onClick={this.handleSpeakerClick}>
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
			</div>,
			speakerModal
		])
	}
}