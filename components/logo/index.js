import React from 'react';

export default class Logo extends React.Component {
	constructor(props) {
		super(props);
		this.width = this.props.size;
		this.height = this.props.size;
	}

	render() {
		return(
			<svg fill="lightblue" width={this.width} height={this.height} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="34.599998474121094 28 134.70001220703125 151" role="img" preserveAspectRatio="xMidYMid meet" style={{"strokeWidth": "0px"}}>
				<g>
					<path d="M132.25 28L34.6 38.17v97.77L84.12 179v-16.41l85.18-7.92V56.81zm33.09 123.06L80.16 159v11.3l-41.6-36.17V41.74l92.51-9.64 34.26 26.65z"></path>
					<path d="M102.89 90.22v-.63A7.38 7.38 0 1 0 91.7 97c-4 5.45-3.74 5.14-7.73 10.59-2.41 3.29 2.7 7 5.1 3.73 4.91-6.72 5.6-7.68 10.51-14.4a7.13 7.13 0 0 0 3.3-6.67z"></path>
					<path d="M121.68 89.59A7.38 7.38 0 1 0 110.53 97c-4 5.45-3.74 5.14-7.73 10.59-2.41 3.29 2.7 7 5.1 3.73 4.91-6.72 5.6-7.68 10.51-14.4a7.13 7.13 0 0 0 3.3-6.67c-.01-.25.01-.45-.03-.66z"></path>
				</g>
			</svg>
		)
	}
}