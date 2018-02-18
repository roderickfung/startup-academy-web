import React from 'react';

import './footer.less';
import Logo from '../logo';
import Divider from '../divider';
import EmailSubscriptionForm from '../email-subscription-form';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.logoSize = 50
	}
	render() {
		return(
			<div id="footer-container">
				<div id="company-description" className="footer-component">
					<Logo size={this.logoSize}></Logo>
					<p>loremipsum stuff hwerherlejrl;eksjresla eal;rj sael;rjesl;r esal;jreslarsae;lrjeas re</p>
				</div>
				<div id="contact-component" className="footer-component">
					<h4 className="heading">Contact</h4>
					<Divider left="5px" color="grey" width="inherit" padding="1.5px"></Divider>
					<p>lorem sadkljfsd;jf ds fsdlfdsfjsd fdsj f dsf ds jfsd as df sda fsdgsdagsd g sdag sd gsd gdasgg </p>
				</div>
				<div id="social-component" className="footer-component">
					<h4 className="heading">Social</h4>
					<Divider left="5px" color="grey" width="inherit" padding="1.5px"></Divider>
					<a href="#"><i className="fab fa-twitter-square"></i></a>
					<a href="#"><i className="fab fa-facebook-square"></i></a>
					<a href="#"><i className="fab fa-instagram"></i></a>
					<a href="#"><i className="fab fa-linkedin"></i></a>
				</div>
				<div id="email-subscribe-component" className="footer-component">
					<EmailSubscriptionForm></EmailSubscriptionForm>
				</div>
			</div>
		)
	}
};''