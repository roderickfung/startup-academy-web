import {Component} from 'react';

export default class Speaker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgFloat: computeImageSide(),
		}
	}
	render() {
		const paragraphs = this.props.paragraphs.map( (paragraph) => {
			<p className="speaker-paragraph">{paragraph}</p>
		});
		const imgClasses = `${this.state.imgFloat}, speaker-img`;
		return(
			<div className="speaker-container">
				<img className="this.state.imgFloat" src={this.props.img}></img>
				<h1 className="speaker-name">{this.props.name}</h1>
				<h3 className="speaker-subtext">{this.props.info}</h3>
				{paragraphs}
			</div>
		)
	}
}

const computeImageSide = () => {
	this.props.index % 2 == 0 ? 'floatLeft' : 'floatRight';
}